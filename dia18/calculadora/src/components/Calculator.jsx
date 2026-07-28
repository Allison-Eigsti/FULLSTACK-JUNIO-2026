import { useState } from 'react'
import { evaluate } from 'mathjs'
import Button from './Button'


function Calculator() {
  const [screen, setScreen] = useState('')
  const [screenHistory, setScreenHistory] = useState('')

  function pressButton(n) {
    setScreen(screen + n)
  }

  function setResult() {
    let r = evaluate(screen)
    setScreen(r)
    setScreenHistory(r)
  }

  function clrAll() {
    setScreen('')
  }

  function delOne() {
    setScreen(screen.slice(0, -2))
  }


  return (
    <>
      <section className='flex'>

        <div className="flex flex-col items-center w-full p-16 justify-center gap-12 bg-blue">
          <section className="flex flex-col w-96 h-124 p-6 gap-4 rounded-3xl items-center bg-black">
            <h2 className='text-2xl text-white font-bold'>History</h2>
            <div className="flex-1 flex items-end justify-end w-full bg-gray-100 rounded-2xl p-2">
              <h2 className='text-2xl font-bold'>{screenHistory}</h2>
            </div>
          </section>
        </div>

        <div className="flex flex-col items-center w-full p-16 justify-center gap-12 bg-blue">
          <section className="flex flex-col w-96 h-124 p-6 gap-4 rounded-3xl items-center bg-black">
            <div className=" flex items-end justify-end result w-full h-12 bg-gray-100 rounded-2xl p-2">
              <h2 className='text-2xl font-bold'>{screen}</h2>
            </div>
            <div className='flex items-stretch gap-4'>
              <Button label='AC' onClick={() => clrAll('AC')} />
              <Button label='DEL' onClick={() => delOne('DEL')} />
              <Button label='(' onClick={() => pressButton(' (')} />
              <Button label=')' onClick={() => pressButton(') ')} />
            </div>

            <div className='flex items-stretch gap-4'>
              <Button label='7' onClick={() => pressButton('7')} />
              <Button label='8' onClick={() => pressButton('8')} />
              <Button label='9' onClick={() => pressButton('9')} />
              <Button label='/' onClick={() => pressButton(' / ')} />
            </div>

            <div className='flex items-stretch gap-4'>
              <Button label='4' onClick={() => pressButton('4')} />
              <Button label='5' onClick={() => pressButton('5')} />
              <Button label='6' onClick={() => pressButton('6')} />
              <Button label='-' onClick={() => pressButton(' - ')} />
            </div>

            <div className='flex items-stretch gap-4'>
              <Button label='1' onClick={() => pressButton('1')} />
              <Button label='2' onClick={() => pressButton('2')} />
              <Button label='3' onClick={() => pressButton('3')} />
              <Button label='*' onClick={() => pressButton(' * ')} />
            </div>

            <div className='flex items-stretch gap-4'>
              <Button label='0' onClick={() => pressButton('0')} />
              <Button label='.' onClick={() => pressButton('.')} />
              <Button label='+' onClick={() => pressButton(' + ')} />
              <Button label='=' onClick={() => setResult()} />
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Calculator
