import { useGetTodosQuery } from './store/apis/todos.api'

const TodoApp = () => {
  const { data: todos, isLoading } = useGetTodosQuery()
  console.log(todos.length)

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>estado: {isLoading ? 'cargando' : 'cargado'}</h4>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
      <button onClick={() => {}}>next</button>
    </>
  )
}

export default TodoApp
