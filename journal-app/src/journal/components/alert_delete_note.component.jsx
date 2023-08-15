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
        {'¿Seguro de eliminar esta nota?'}
      </DialogTitle>
      <DialogContent>
        Si la eliminas no la podras volver a recuperar
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseAlertDelete}>No</Button>
        <Button onClick={onDelete} autoFocus>
          Seguro
        </Button>
      </DialogActions>
    </Dialog>
  )
}
