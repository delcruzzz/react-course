import { 
  Checkbox, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText 
} from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../store/journal/thunks/journal.thunk'
import PersonIcon from '@mui/icons-material/Person'
import { setUsersSelectedToActivateNote } from '../../store/journal/slices/journal.slice'

export const ListUsers = () => {
  const dispatch = useDispatch()
  const { active, users } = useSelector((state) => state.journal)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const handleToggle = (id) => () => {
    const currentIndex = active.usersSelected.indexOf(id)
    const newUsersChecked = [...active.usersSelected]

    if (currentIndex === -1) {
      newUsersChecked.push(id)
    } else {
      newUsersChecked.splice(currentIndex, 1)
    }

    dispatch(setUsersSelectedToActivateNote(newUsersChecked))
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {users.map((user) => {
        const labelId = `checkbox-list-label-${user.id}`

        return (
          <ListItem
            key={user.id}
            secondaryAction={
              <IconButton edge='end' aria-label='comments'>
                <PersonIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(user.id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge='start'
                  /* onChange={onInputChange} */
                  checked={active.usersSelected.indexOf(user.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${user.name}`} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}
