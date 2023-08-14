import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useForm } from '../../hooks/use_form.hook'
import { useSelector } from 'react-redux'
import { stateValidate } from '../../constants'

export const SelectState = () => {
  const { active } = useSelector((state) => state.journal)
  const { state, onInputChange } = useForm(active)

  return (
    <FormControl fullWidth>
      <InputLabel>state</InputLabel>
      <Select
        name='state'
        label='state'
        value={state < 3 ? state : 0}
        onChange={onInputChange}
      >
        {!!stateValidate.states && stateValidate.states.map((state, i) => (
          <MenuItem key={i} value={state.id}>
            {state.description}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
