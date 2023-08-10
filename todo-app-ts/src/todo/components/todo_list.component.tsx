import { Todo } from '../interfaces/interfaces'
import { TodoItem } from './todo_item.component'
import { useTodos } from '../hooks/use_todos.hook'

export const TodoList = () => {
  const { todos } = useTodos()

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  )
}
