import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/journal.layout'
import { NoteView } from '../views/note.view'
import { NothingSelectedView } from '../views/nothing_selected.view'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks/journal.thunk'

export const JournalPage = () => {
  const dispatch = useDispatch()
  const { isSaving, active } = useSelector((state) => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>
      {
        (!!active)
          /* si alguna nota se activa, se muestra el componente de la nota activa */
          ? <NoteView />
          /* cuando no hay nota activa se muestra el componente de las notas */
          : <NothingSelectedView />
      }

      <IconButton 
        disabled={isSaving}
        onClick={onClickNewNote}
        size='large' 
        sx={{ 
          color: 'white', 
          backgroundColor: 'error.main', 
          ':hover': {backgroundColor: 'error.main', opacity: 0.9}, 
          position: 'fixed', 
          right: 50, 
          bottom: 50, 
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
