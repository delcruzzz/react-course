import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { firebaseDB } from '../../../firebase/config.firebase'
import { addNewEmptyNote, savingNote, setActiveNote, setNotes } from '../slices/journal.slice'
import { loadNotes } from '../../../helpers/load_notes.helper'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    console.log('startNewNote')
    
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
    dispatch(savingNote())
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const notesSaved = await loadNotes(uid)
    dispatch(setNotes(notesSaved))
    console.log(notesSaved)
  }
}
