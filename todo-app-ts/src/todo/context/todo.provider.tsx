import { useReducer } from 'react';
import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from './todo.context';
import { todoReducer } from './todo.reducer';

/* el estado inicial de la información */
const INITIAL_STATE: TodoState = {
  todoCount: 2, 
  todos: [
    {
      id: '1', 
      description: 'recolectar piedras', 
      completed: false,
    }, 
    {
      id: '2', 
      description: 'cocinar', 
      completed: false,
    }, 
    {
      id: '3', 
      description: 'limpiar la casa', 
      completed: false,
    }, 
  ], 
  completed: 0, 
  pending: 2, 
}

type props = {
  children: JSX.Element | JSX.Element[], 
}

/* este es el componente que propaga la información */
export const TodoProvider = ({children}: props) => {

  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

  const toggleTodo = (id: string) => {
    dispatch({type: 'toggleTodo', payload: {id}})
  }

  return (
    <TodoContext.Provider value={{
      todoState, 
      toggleTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}
