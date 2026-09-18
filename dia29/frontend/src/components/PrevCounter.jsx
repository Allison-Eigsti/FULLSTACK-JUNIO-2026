import { use } from 'react'
import { useState, useEffect, useRef } from 'react'

function PrevCounter() {
    const [ counter, setCounter ] = useState(0)
    const prevCounter = useRef(0)


    useEffect(() => {
        prevCounter.current = counter
    }, [counter])

    return(
        <>
            <p>Current count: {counter}</p>
            <p>Previous count: {prevCounter.current}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </>
    )
}

export default PrevCounter