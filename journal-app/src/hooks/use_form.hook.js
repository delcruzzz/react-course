import { useEffect, useMemo, useState } from 'react'

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm)
  const [formValidation, setFormValidation] = useState({})

  useEffect(() => {
    createValidators()
  }, [formState])

  const onInputChange = ({target}) => {
    const { name, value } = target
    setFormState({
      ...formState, 
      [name]: value, 
    })
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }

  const createValidators = () => {
    const formCheckedValues = {}
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage = 'errores de validación'] = formValidations[formField]
      formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage
    }
    setFormValidation(formCheckedValues)
  }

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false
    }
    return true    
  }, [formValidation])

  return {
    ...formState, 
    formState, 
    onInputChange, 
    onResetForm, 
    ...formValidation, 
    isFormValid, 
  }
}
