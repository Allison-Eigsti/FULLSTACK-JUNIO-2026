import { useState } from 'react'
import Home from '../pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="flex flex-col items-center p-24 bg-gray-200 gap-8">
          <Home />
      </main>
    </>
  )
}

export default App
