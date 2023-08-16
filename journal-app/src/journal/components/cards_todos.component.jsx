import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchTodos } from '../../store/journal/thunks/journal.thunk'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

export const CardTodos = () => {
  const dispatch = useDispatch()
  const { todos } = useSelector((state) => state.journal)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <Box
      sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: .6 }}
    >
      {todos.map((todo) => (
        <Card key={todo.id} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {todo.title}
            </Typography>
            {
              todo.completed 
                ? (<CheckOutlinedIcon sx={{ color: 'green' }} />) 
                : (<ErrorOutlineOutlinedIcon sx={{ color: 'red' }} />) 
            }
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      )
    )}
    </Box>
  )
}
