import {
  FILTER_NOTES,
  TAG_DRAWER_TOGGLE,
  SET_SELECTED_NOTE,
} from '../action-types';

export const filterNotes = notes => ({
  type: FILTER_NOTES,
  notes,
});

export const setSelectedNote = note => ({
  type: SET_SELECTED_NOTE,
  note,
});

export const toggleTagDrawer = show => ({
  type: TAG_DRAWER_TOGGLE,
  show,
});
