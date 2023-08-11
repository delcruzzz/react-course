const App = () => {
  return (
    <>
      <Title />
      <TodoList>
      </TodoList>
    </>
  )
}

/* componente del titulo */
const Title = () => {
  return (
    <header>
      <h1>Has completado 3 de 5 TODOs</h1>
    </header>
  )
}

const TodoList = ({children}) => {
  return (
    <ul>
      {children}
    </ul>
  )
}



export default App
