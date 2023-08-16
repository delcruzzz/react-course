import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle 
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setAlertOpen } from '../../store/journal/slices/journal.slice'
import { startDeletingNote } from '../../store/journal/thunks/journal.thunk'

export const AlertDeleteNote = () => {
  const dispatch = useDispatch()
  const { isAlertOpen } = useSelector((state) => state.journal)

  const handleCloseAlertDelete = () => {
    dispatch(setAlertOpen(false))
  }

  const onDelete = () => {
    dispatch(startDeletingNote())
    dispatch(setAlertOpen(false))
  }

  return (
    <Dialog
      open={isAlertOpen}
      onClose={handleCloseAlertDelete}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        {'¿seguro de eliminar esta nota?'}
      </DialogTitle>
      <DialogContent>
        si la eliminas no la podras volver a recuperar, ¿estás seguro de eliminar esta nota?
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseAlertDelete}>no borrar</Button>
        <Button onClick={onDelete} autoFocus>
          seguro
        </Button>
      </DialogActions>
    </Dialog>
  )
}
