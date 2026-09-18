import { useState, useRef } from 'react'

function Counter() {
    const [ counter, setCounter ] = useState(0)
    const renders = useRef(1)

    renders.current += 1

    return(
        <>
            <p>Counter: {counter}</p>
            <p>Renders: {renders.current}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </>
    )
}

export default Counter