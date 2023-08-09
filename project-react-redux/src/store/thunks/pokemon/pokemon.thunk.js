/* thunks pokemones */
import { pokemonApi } from '../../../api/pokemon.api'
import { setLoading, setPokemons } from '../../slices/pokemon/pokemon.slice'

export const getPokemons = (page = 0) => {
  /* el getState, es por si llegasemos a necesitar algo del estado */
  return async (dispatch) => {
    dispatch(setLoading())

    // TODO: realizar la llamada HTTP
    //const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`)
    //const data = await res.json()

    const { data } = await pokemonApi(`/pokemon?limit=10&offset=${page}`)
    
    dispatch(setPokemons({pokemons: data.results, page: page + 1}))
  }
}
