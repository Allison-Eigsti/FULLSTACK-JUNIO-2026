
import type { JSX } from 'react'
import Saludo from './components/Saludar'
import Contador from './components/Contador'
import Formulario from './components/Formulario'
import Suma from './components/Suma'
import ListaTareas from './components/Tareas'
import UsuarioCard from './components/UsuarioCard'
import ListaUsuarios from './components/ListaUsuarios'

import useToggle from './hooks/Toggle'


const tareas = [
    {
        id: 1,
        texto: 'Aprende TypeScript',
        completada: false
    },
    {
        id: 2,
        texto: 'Aprende React',
        completada: true
    },
    {
        id: 3,
        texto: 'Haz la tarea',
        completada: false
    }
]

const user =
    {
        nombre: 'Allie',
        edad: 28,
        activo: true
    }

const usuarios = [
    {
        nombre: 'Allie',
        edad: 28,
        activo: true
    },
    {
        nombre: 'Meggie',
        edad: 28,
        activo: false

    },
    {
        nombre: 'Sara',
        edad: 28,
        activo: true

    }
]


function App(): JSX.Element {
  const [isOn, toggle] = useToggle()


  return (
    <>
     <Saludo nombre='User'/>
     <Contador/>
     <Formulario nombre='Allie'/>
     <Suma x={2} y={3}/>
     <ListaTareas tareas={tareas}/>
     <UsuarioCard nombre={user.nombre} edad={user.edad} activo={user.activo}/>


      <div>
        <p>{isOn ? 'Activado' : 'Desactivado'}</p>
        <button onClick={toggle}>Toggle</button>
      </div>

      <ListaUsuarios usuarios={usuarios}/>
    </>
  )
}

export default App
