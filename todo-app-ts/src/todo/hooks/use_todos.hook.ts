import { useContext } from 'react'
import { TodoContext } from '../context/todo.context'

export const useTodos = () => {
  const { todoState, toggleTodo } = useContext(TodoContext)

  return {
    todos: todoState.todos, 
    toggleTodo, 
    pendingTodos: todoState.todos.filter((todo) => !todo.completed)
  }
}
