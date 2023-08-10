import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components/image_gallery.component'
import { useForm } from './../../hooks/use_form.hook'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo, useRef } from 'react'
import { startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal/thunks/journal.thunk'
import { setActiveNote } from '../../store/journal/slices/journal.slice'
import Swal from 'sweetalert2'

export const NoteView = () => {
  const dispatch = useDispatch()
  const { active, messageSaved, isSaving } = useSelector((state) => state.journal)
  const { title, body, date, onInputChange, formState } = useForm(active)

  const fileInputRef = useRef()

  const dateString = useMemo(() => {
    const newDate = new Date(date)
    return newDate.toUTCString()
  }, [date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success')
    }
  }, [messageSaved])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }

  const onFileInputChange = ({target}) => {
    if (target.files === 0) return

    dispatch(startUploadingFiles(target.files))
  }

  const onDelete = () => {
    dispatch(startDeletingNote())
  }
  
  return (
    <Grid 
      container 
      direction='row' 
      justifyContent='space-between' 
      alignItems='center' 
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input 
          type='file' 
          multiple 
          ref={fileInputRef} 
          onChange={onFileInputChange} 
          style={{ display: 'none' }} 
        />
        <IconButton 
          color='primary' 
          disabled={isSaving} 
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>
        <Button disabled={isSaving} onClick={onSaveNote} sx={{ p: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField 
          type='text' 
          variant='filled' 
          fullWidth 
          placeholder='ingrese un título' 
          label='título' 
          sx={{ border: 'none', mb: 1 }} 
          name='title' 
          value={title} 
          onChange={onInputChange} 
        />
        <TextField 
          type='text' 
          variant='filled' 
          fullWidth 
          multiline 
          placeholder='¿qué sucedió hoy?' 
          minRows={5} 
          name='body'
          value={body} 
          onChange={onInputChange} 
        />
      </Grid>

      <Grid container justifyContent='end'>
        <Button
          sx={{ mt: 2 }}
          color='error'
          onClick={onDelete}
        >
          <DeleteOutline />
        </Button>
      </Grid>

      {/* images gallery */}
      <ImageGallery images={active.imgUrls} />
    </Grid>
  )
}
