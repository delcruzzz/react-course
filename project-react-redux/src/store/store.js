import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter/counter.slice'
import { pokemonSlice } from './slices/pokemon/pokemon.slice';
import { todosApi } from './apis/todos.api';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, 
    pokemons: pokemonSlice.reducer, 
    [todosApi.reducerPath]: todosApi.reducer, 
  }, 
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(todosApi.middleware)
})
