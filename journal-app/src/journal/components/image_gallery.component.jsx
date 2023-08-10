import { ImageList, ImageListItem } from '@mui/material'
import { useSelector } from 'react-redux'

export const ImageGallery = ({images}) => {
  return (
    <ImageList sx={{ width: '100%', height: 400 }} cols={4} rowHeight={200}>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img 
            src={`${image}`} 
            srcSet={`${image}`} 
            alt='alt de la nota' 
            loading='lazy' 
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
