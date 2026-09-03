import { useState, useEffect } from 'react'
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import List from './components/List'
import TextField from './components/TextField'
import Api from './components/Api'
import Timer from './components/Timer'
import Counter2 from './components/Counter2'
import Alert from './components/Alert'
import Click from './components/Click'

function App() {
  const [color, setColor] = useState('#f7f5bc')
  const [start, setStart] = useState(true)
  const [key, setKey] = useState(false)

  useEffect(() => {
    let interval = null

    if (start) {
      interval = setInterval(() => {
        setColor(generateRandomHexCode())
      }, 3000)
    }

    return () => clearInterval(interval)
  }, [start])

  function generateRandomHexCode() {
    let hexCode = '#'

    while (hexCode.length < 7) {
      hexCode += Math.round(Math.random() * 15).toString(16)
    }

    return hexCode
  }

return (
  <>
    <main style={{ background: color }}>
      <Counter />
      <Toggle />
      <List />
      <TextField />
      <Api />
      <Timer />
      <Counter2 />
      <button onClick={() => setKey(!key)}>
        Change
      </button>
      { key && (<Alert />)}
      <Click />
    </main>
  </>
)
}

export default App
