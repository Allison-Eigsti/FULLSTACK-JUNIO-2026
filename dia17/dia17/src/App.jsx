import { useState } from 'react'
import { evaluate } from 'mathjs'


function App() {
  const [screen, setScreen] = useState('')

  function pressButton(n) {
    setScreen(screen + n)
  }

  function setResult() {
    let r = evaluate(screen)
    setScreen(r)
  }

  function clrAll() {
    setScreen('')
  }

  function delOne() {
    setScreen(screen.slice(0, -2))
  }

  return (
    <>
    <main className="flex flex-col items-center w-full min-h-screen justify-center gap-12 bg-blue">
      <h1 className='text-2xl font-extrabold'>Calculator</h1>
      <section className="flex flex-col w-96 h-124 p-6 gap-4 rounded-3xl items-center bg-black">  
        <div className=" flex items-end justify-end result w-full h-12 bg-gray-100 rounded-2xl p-2">
          <h2 className='text-2xl font-bold'>{screen}</h2>
        </div>
        <div className='flex items-stretch gap-4'>
          <button onClick={() => clrAll('AC')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>AC</button>
          <button onClick={() => delOne('DEL')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>DEL</button>
          <button onClick={() => pressButton(' (')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>(</button>
          <button onClick={() => pressButton(') ')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>)</button> 
        </div>

        <div className='flex items-stretch gap-4'>
          <button onClick={() => pressButton('7')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>7</button>
          <button onClick={() => pressButton('8')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>8</button>
          <button onClick={() => pressButton('9')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>9</button>
          <button onClick={() => pressButton(' / ')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>/</button> 
        </div>

        <div className='flex items-stretch gap-4'>
          <button onClick={() => pressButton('4')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>4</button>
          <button onClick={() => pressButton('5')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>5</button>
          <button onClick={() => pressButton('6')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>6</button>
          <button onClick={() => pressButton(' - ')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>-</button> 
        </div>

        <div className='flex items-stretch gap-4'>
          <button onClick={() => pressButton('1')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>1</button>
          <button onClick={() => pressButton('2')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>2</button>
          <button onClick={() => pressButton('3')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>3</button>
          <button onClick={() => pressButton(' * ')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>*</button> 
        </div>

        <div className='flex items-stretch gap-4'>
          <button onClick={() => pressButton('0')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>0</button>
          <button onClick={() => pressButton('.')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>.</button>
          <button onClick={() => pressButton(' + ')} className='w-16 h-16 bg-orange-500 font-bold text-2xl rounded-xl hover:bg-orange-600'>+</button>
          <button onClick={() => setResult()} className='w-16 h-16 bg-gray-300 font-bold text-2xl rounded-xl hover:bg-gray-400'>=</button> 
        </div>
      </section>
      </main>
    </>
  )
}

export default App
