import { useState } from 'react'
import Profile from './components/Profile'
import Product from './components/Product'
import Saludo from './components/Saludo'
import Boton from './components/Boton'

  const person = { name: 'Allie', age: '40'}
  const product ={ name: 'TV', price: 40 }
  const texto = 'Click Me'
  
  function callback() {
    console.log('Button clicked')
  }


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile name={person.name} age={person.age}/>
      <Product name={product.name} price={product.price}/>
      <Saludo nombre={person.name}/>
      <Boton onClick={callback} texto={texto}/>
    </>
  )
}

export default App
