import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 0, 
  pokemons: [], 
  isLoading: false, 
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    /* para cuando estén cargando los pokemones */
    setLoading: (state) => {
      state.isLoading = true
    }, 
    /* para cuando ya los pokemones hayan cargado */
    setPokemons: (state, action) => {
      state.isLoading = false
      state.page = action.payload.page 
      state.pokemons = action.payload.pokemons
    }
  }
});

export const { setLoading, setPokemons } = pokemonSlice.actions
