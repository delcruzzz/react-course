import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components/image-gallery.component'

export const NoteView = () => {
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
          28 de agosto del 2023
        </Typography>
      </Grid>
      <Grid item>
        <Button sx={{ p: 2 }}>
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
        />
        <TextField 
          type='text' 
          variant='filled' 
          fullWidth 
          multiline 
          placeholder='¿qué sucedió hoy?' 
          minRows={5}  
        />
      </Grid>

      {/* images gallery */}
      <ImageGallery />
    </Grid>
  )
}
