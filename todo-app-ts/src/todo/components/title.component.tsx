import { useTodos } from "../hooks/use_todos.hook"

export const Title = () => {
  const { pendingTodos } = useTodos()

  return (
    <h1>Todos: {pendingTodos.length}</h1>
  )
}