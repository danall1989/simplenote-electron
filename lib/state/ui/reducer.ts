import { difference, union } from 'lodash';
import { combineReducers } from 'redux';
import {
  FILTER_NOTES,
  SET_SELECTED_NOTE,
  TAG_DRAWER_TOGGLE,
} from '../action-types';

import * as T from '../../types';

const defaultVisiblePanes = ['editor', 'noteList'];
const emptyList: unknown[] = [];

const filteredNotes = (
  state = emptyList as T.NoteEntity[],
  { type, notes }: { type: string; notes: T.NoteEntity[] }
) => (FILTER_NOTES === type ? notes : state);

const visiblePanes = (state = defaultVisiblePanes, { type, show }) => {
  if (TAG_DRAWER_TOGGLE === type) {
    return show
      ? union(state, ['tagDrawer'])
      : difference(state, ['tagDrawer']);
  }

  return state;
};

const defaultNote: T.NoteEntity | null = null;
const setSelectedNote = (state = defaultNote, action) => {
  switch (action.type) {
    case 'App.notesLoaded': {
      if (!state) {
        return action.notes[0] || null;
      }

      const note = action.notes.find(({ id }) => id === state.id);
      return note || state;
    }
    case 'App.noteUpdatedRemotely':
    case 'App.selectNote': {
      return {
        ...action.note,
        hasRemoteUpdate: action.hasRemoteUpdate,
      };
    }
    case 'App.closeNote':
    case 'App.showAllNotes':
    case 'App.selectTrash':
    case 'App.selectTag':
      return null;
    case SET_SELECTED_NOTE:
      return action.note;
    default:
      return state;
  }
};

export default combineReducers({
  filteredNotes,
  note: setSelectedNote,
  visiblePanes,
});
