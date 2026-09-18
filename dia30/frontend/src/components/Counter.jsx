import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

function Counter() {
    const { counter, setCounter } = useContext(CounterContext)

    function add(){
        setCounter(counter + 1)
    }

    function subtract(){
        setCounter(counter - 1)
    }

    return(
        <>
            <p>{counter}</p>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" onClick={add}>Add</button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" onClick={subtract}>Subtract</button>
        </>
    )
}

export default Counter