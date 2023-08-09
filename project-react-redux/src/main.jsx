import React from 'react'
import ReactDOM from 'react-dom/client'
/* import App from './app.jsx' */
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store';
/* import TodoApp from './todo_app'; */
import PokemonApp from './pokemon_app';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <PokemonApp />
      {/* <TodoApp /> */}
    </Provider>
  </React.StrictMode>,
)
