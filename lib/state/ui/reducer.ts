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

const note = (state = null, action) => {
  switch (action.type) {
    case 'App.notesLoaded': {
      return state
        ? action.notes.find(({ id }) => id === state.id) || state
        : action.notes[0] || null;
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
    case FILTER_NOTES:
      // keep note if still in new filtered list otherwise try to choose first note in list
      return state && action.notes.some(({ id }) => id === state.id)
        ? state
        : action.notes[0] || null;
    default:
      return state;
  }
};

export default combineReducers({
  filteredNotes,
  note,
  visiblePanes,
});
