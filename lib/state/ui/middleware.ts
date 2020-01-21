import { AnyAction } from 'redux';
import { filterNotes as filterAction, setSelectedNote } from './actions';
import filterNotes from '../../utils/filter-notes';

let searchTimeout: NodeJS.Timeout;

export default store => {
  const updateNotes = () => {
    store.dispatch(filterAction(filterNotes(store.getState().appState)));
    const state = store.getState();
    if (
      state.ui.filteredNotes.length &&
      (!state.ui.note ||
        !state.ui.filteredNotes.some(note => note.id === state.ui.note.id))
    ) {
      store.dispatch(setSelectedNote(state.ui.filteredNotes[0]));
    }
  };

  return next => (action: AnyAction) => {
    const result = next(action);

    switch (action.type) {
      // on clicks re-filter "immediately"
      case 'App.authChanged':
      case 'App.deleteNoteForever':
      case 'App.notesLoaded':
      case 'App.restoreNote':
      case 'App.selectTag':
      case 'App.selectTrash':
      case 'App.showAllNotes':
      case 'App.tagsLoaded':
      case 'App.trashNote':
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(updateNotes, 50);
        break;

      // on updating the search field we should delay the update
      // so we don't waste our CPU time and lose responsiveness
      case 'App.noteUpdatedRemotely':
      case 'App.search':
        clearTimeout(searchTimeout);
        if ('App.search' === action.type && !action.filter) {
          // if we just cleared out the search bar then immediately update
          updateNotes();
        } else {
          searchTimeout = setTimeout(updateNotes, 500);
        }
        break;
    }
    switch (action.type) {
      case 'App.closeNote':
      case 'App.showAllNotes':
      case 'App.selectTrash':
      case 'App.selectTag':
        store.dispatch(setSelectedNote(null));
        break;
      case 'App.notesLoaded':
        if (store.getState().ui.note) {
          store.dispatch(
            setSelectedNote(
              action.notes.length
                ? action.notes.find(
                    note => note.id === store.getState().ui.note.id
                  )
                : store.getState().ui.note
            )
          );
        } else {
          store.dispatch(
            setSelectedNote(action.notes.length ? action.notes[0] : null)
          );
        }
        break;
      case 'App.selectNote':
        store.dispatch(
          setSelectedNote({
            ...action.note,
            hasRemoteUpdate: action.hasRemoteUpdate,
          })
        );
        break;
      case 'App.noteUpdatedRemotely':
        setSelectedNote({
          ...action.note,
          hasRemoteUpdate: action.hasRemoteUpdate,
        });
        break;
      case 'FILTER_NOTES':
    }
    return result;
  };
};
