import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/thunks/pokemon/pokemon.thunk'

const PokemonApp = () => {
  const dispatch = useDispatch()
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons)

  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />

      <span>{isLoading ? 'cargando...' : 'cargado'}</span>

      <ul>
        {pokemons.map((pok) => (
          <li key={pok.name}>{pok.name}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(getPokemons(page))}>
          next
      </button>
    </>
  )
}

export default PokemonApp
