import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: false, 
  messageSaved: '', 
  notes: [], 
  active: null, 
  users: [], 
  isLoading: false, 
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
    setNotes: (state, action) => {
      state.notes = [...action.payload]
    }, 
    setSaving: (state) => {
      state.isSaving = true
      state.messageSaved = ''
    }, 
    updateNote: (state, action) => {
      state.isSaving = false
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload
        }

        return note
      })
      state.messageSaved = `${action.payload.title}, actualizada correctamente`
    }, 
    setPhotosToActiveNote: (state, action) => {
      state.active.imgUrls = [...state.active.imgUrls, ...action.payload]
      state.isSaving = false
    }, 
    clearNotes: (state) => {
      state.isSaving = false
      state.messageSaved = ''
      state.notes = []
      state.active = null
    }, 
    deleteNoteById: (state, action) => {
      state.active = null
      state.notes = state.notes.filter((note) => note.id !== action.payload)
    }, 
    savingNote: (state) => {
      state.isSaving = true
    }, 
    setUsers: (state, action) => {
      state.users = [...action.payload]
    }, 
    startLoading: (state, action) => {
      state.isLoading = action.payload
    }, 
    setUsersSelectedToActivateNote: (state, action) => {
      state.active.usersSelected = [...state.active.usersSelected, ...action.payload]
    }, 
  }
})

export const { 
  addNewEmptyNote, 
  setActiveNote, 
  setNotes, 
  setSaving, 
  updateNote, 
  deleteNoteById, 
  savingNote, 
  setPhotosToActiveNote, 
  clearNotes, 
  setUsers, 
  startLoading, 
  setUsersSelectedToActivateNote, 
} = journalSlice.actions
