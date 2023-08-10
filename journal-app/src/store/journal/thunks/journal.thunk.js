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
  updateNote 
} from '../slices/journal.slice'
import { loadNotes } from '../../../helpers/load_notes.helper'
import { fileUpload } from '../../../helpers/file_upload.helper'

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
    }

    /* hacer referiencia al documento (la colección donde se va a insertar) para guardar en firebase */
    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`))
    await setDoc(newDoc, newNote)
    
    // dispatch de nueva nota
    dispatch(addNewEmptyNote(newNote))
    // dispatch para activar la nota
    dispatch(setActiveNote(newNote))
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
