import { Typography } from '@mui/material'
import { JournalLayout } from '../layout/journal.layout'
import { TableUsers } from '../components/table_users.component'

export const TestPage = () => {
  return (
    <JournalLayout>
      <Typography>hello</Typography>
      <TableUsers />
    </JournalLayout>
  )
}
