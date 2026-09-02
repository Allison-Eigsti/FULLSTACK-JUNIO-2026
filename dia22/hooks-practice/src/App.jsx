import { useState } from 'react'
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import List from './components/List'
import TextField from './components/TextField'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <Toggle />
      <List />
      <TextField/>
      <Api />
    </>
  )
}

export default App
