import { Todo } from '../interfaces/interfaces'
import { useTodos } from '../hooks/use_todos.hook'

export interface props {
  todo: Todo
}

export const TodoItem = ({todo}: props) => {
  const { toggleTodo } = useTodos()

  return (
    <li 
      style={{
        cursor: 'pointer', 
        textDecoration: todo.completed ? 'line-through' : ''
      }}
      onDoubleClick={() => toggleTodo(todo.id)}
    >
      {todo.description}
    </li>
  )
}
