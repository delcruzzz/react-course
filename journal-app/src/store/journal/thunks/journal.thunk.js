import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { firebaseDB } from '../../../firebase/config.firebase'
import { 
  addNewEmptyNote, 
  deleteNoteById, 
  savingNote, 
  setActiveNote, 
  setNotes, 
  setPhotosToActiveNote, 
  setSaving, 
  setTodos, 
  setUsers, 
  startLoading, 
  updateNote 
} from '../slices/journal.slice'
import { loadNotes } from '../../../helpers/load_notes.helper'
import { fileUpload } from '../../../helpers/file_upload.helper'
import axios from 'axios'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNote())
    // uid
    const { uid } = getState().auth
    
    // estructura de una nueva nota
    const newNote = {
      title: '', 
      body: '', 
      date: new Date().getTime(), 
      usersSelected: [], 
      state: 0, 
    }

    /* 
      hacer referiencia al documento (la colección donde se va a insertar) 
      para guardar en firebase 
    */
    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`))
    await setDoc(newDoc, newNote)
    
    newNote.id = newDoc.id

    // dispatch de nueva nota
    dispatch(addNewEmptyNote(newNote))
    // dispatch para activar la nota
    dispatch(setActiveNote(newNote))
    console.log(newNote.state)
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const notesSaved = await loadNotes(uid)
    dispatch(setNotes(notesSaved))
  }
}

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving())
    const { uid } = getState().auth
    const { active } = getState().journal

    const noteToFireStore = {...active}
    delete noteToFireStore.id
    
    /* actualizar nota */
    const docRef = doc(firebaseDB, `${uid}/journal/notes/${active.id}`)
    await setDoc(docRef, noteToFireStore, {merge: true})
    dispatch(updateNote(active))
    console.log(active)
  }
}

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving())
    const fileUploadPromises = []
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file))
    }

    const photosUrls = await Promise.all(fileUploadPromises)
    dispatch(setPhotosToActiveNote(photosUrls))
  }
}

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const { active } = getState().journal

    const docRef = doc(firebaseDB, `${uid}/journal/notes/${active.id}`)
    await deleteDoc(docRef)

    dispatch(deleteNoteById(active.id))
  }
}

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(startLoading(true))
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      const users = response.data
      dispatch(setUsers(users))
      return response
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(startLoading(false))
    }
  }
}

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch(startLoading(true))
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      const todos = response.data
      dispatch(setTodos(todos))
      return response
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(startLoading(false))
    }
  }
}
