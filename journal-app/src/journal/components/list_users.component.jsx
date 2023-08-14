import { 
  Checkbox, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText 
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../store/journal/thunks/journal.thunk'
import CommentIcon from '@mui/icons-material/Comment'

export const ListUsers = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.journal)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const [checked, setChecked] = useState([0])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {users.map((user, i) => {
        const labelId = `checkbox-list-label-${user}`;

        return (
          <ListItem
            key={i}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(user.id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(user.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${user.name}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  )
}
