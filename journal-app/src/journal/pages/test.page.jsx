import { Grid, Typography } from '@mui/material'
import { JournalLayout } from '../layout/journal.layout'
import { TableUsers } from '../components/table_users.component'
import { CardTodos } from '../components/cards_todos.component'

export const TestPage = () => {
  return (
    <JournalLayout>
      <Typography 
        variant='h4' 
        noWrap 
        component='div'
        sx={{ py: 2 }}
      >Users</Typography>
      <TableUsers />
      <Typography 
        variant='h4' 
        noWrap 
        component='div'
        sx={{ py: 2 }}
      >Todos</Typography>
      <Grid container>
        <CardTodos />
      </Grid>
    </JournalLayout>
  )
}
