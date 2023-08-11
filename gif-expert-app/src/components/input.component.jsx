import { useState } from 'react'

export const Input = () => {
  const [gifInput, setGifInput] = useState('')

  const getValueInput = (e) => {
    e.preventDefault()
    const value = e.target.value
  }

  return (
    <>
      <input name='category' placeholder='enter new category' onChange={} />
    </>
  )
}
