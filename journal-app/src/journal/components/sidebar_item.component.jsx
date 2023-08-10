import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal/slices/journal.slice'

export const SidebarItem = ({ id, title = '', body, date, imgUrls = [] }) => {
  const newTitle = useMemo(() => {
    return title.length > 17
      ? title.substring(0, 17) + '...'
      : title
  }, [title])
  const dispatch = useDispatch()

  /* activar nota al seleccionarla */
  const onSelectedItem = () => {
    dispatch(setActiveNote({id, title, body, date, imgUrls}))
  }

  return (
    <ListItem key={id} disablePadding>
      <ListItemButton onClick={onSelectedItem}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
