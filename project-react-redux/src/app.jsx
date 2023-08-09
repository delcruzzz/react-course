import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter/counter.slice'

const App = () => {
  /* el useSelector es para cuando necesitamos traer información del state o store */
  const { value } = useSelector((state) => state.counter)
  /* el useDispatch es para cuando necesitamos despachar acciones */
  const dispatch = useDispatch()

  return (
    <div>
      <button type='button' onClick={() => dispatch(increment())}>
        +1
      </button>
      <span>{value}</span>
      <button type='button' onClick={() => dispatch(decrement())}>
        -1
      </button>
      <button type='button' onClick={() => dispatch(incrementByAmount(2))}>
        incrment by 2
      </button>
    </div>
  )
}

export default App
