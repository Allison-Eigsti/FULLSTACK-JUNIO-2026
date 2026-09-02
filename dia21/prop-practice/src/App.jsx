import { useState } from 'react'
import Profile from './components/Profile'
import Product from './components/Product'
import Saludo from './components/Saludo'
import Boton from './components/Boton'
import Tarea from './components/Tarea'
import Avatar from './components/Avatar'
import Tarjeta from './components/Tarjeta'
import Contenedor from './components/Contenedor'
import Alerta from './components/Alerta'

  const person = { name: 'Allie', age: '40'}
  const product ={ name: 'TV', price: 40 }
  const texto = 'Click Me'

  
  function callback() {
    console.log('Button clicked')
  }

  const tarea = 'Hacer tarea 22'
  const completada = true

  const url = "https://images.unsplash.com/photo-1773332585749-5146862ba746?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



function App() {

  return (
    <>
      <Profile name={person.name} age={person.age}/>
      <Product name={product.name} price={product.price}/>
      <Saludo nombre={person.name}/>
      <Boton onClick={callback} texto={texto}/>
      <Tarea texto={tarea} completada={completada}/>
      <Avatar url={url} />
      <Tarjeta>I am the children content being passed through</Tarjeta>
      <Contenedor>I am the children being passed into the section</Contenedor>
      <Alerta>Warning message!</Alerta>
    </>
  )
}

export default App
