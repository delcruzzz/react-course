import { useState } from 'react';
import { Input } from './components/input.component';

const App = () => {
  /* para mantener el estado de la aplicación */
  const [categories, setCategories] = useState(['one punch', 'dragon ball'])

  /*
    se inicializa como un arreglo ya que van a ser varias categorias 
    para almacenar
  */

  const onAddCategory = () => {
    setCategories([...categories, 'valorant'])
  }
  
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <Input />

      {/* listado de gif */}
      <button onClick={onAddCategory}>agregar</button>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
      {/* sub gif item */}
    </>
  )
}

export default App
