import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: false, 
  messageSaved: '', 
  notes: [], 
  active: null, 
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
    }, 
    setActiveNote: (state, action) => {
      state.active = action.payload
    }, 
    setNotes: (state, action) => {}, 
    setSaving: (state) => {}, 
    updateNote: (state, action) => {}, 
    deleteNoteById: (state, action) => {}, 
    savingNote: (state) => {
      state.isSaving = true
    }, 
  }
});

export const { 
  addNewEmptyNote, 
  setActiveNote, 
  setNotes, 
  setSaving, 
  updateNote, 
  deleteNoteById, 
  savingNote, 
} = journalSlice.actions
