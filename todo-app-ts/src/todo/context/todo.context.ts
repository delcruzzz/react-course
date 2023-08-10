import { createContext } from 'react'
import { TodoState } from '../interfaces/interfaces'

export type TodoContextProps = {
  todoState: TodoState, 
  toggleTodo: (id: string) => void, 
}

/* este es el que va a compartir toda la información para los componentes */
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps)
