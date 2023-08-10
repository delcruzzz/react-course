import { Title } from './components/title.component'
import { TodoList } from './components/todo_list.component'
import { TodoProvider } from './context/todo.provider'

export const Todo = () => {
  return (
    <TodoProvider>
      <Title />
      <TodoList />
    </TodoProvider>
  )
}
