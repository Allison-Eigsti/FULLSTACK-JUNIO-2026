import { useState, useEffect } from 'react'

function Counter2() {
    const [ count, setCount ] = useState(0)
    const [ start, setStart ] = useState(false)

    useEffect(() => {
        let interval = null
        
        if(start) {
            interval = setInterval(() => {
                setCount(prevCount => prevCount + (Math.floor(Math.random() * 100)))
            }, 1000)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [ start ])

    return(
        <>
        <h2>Every second, a random number is added to the count</h2>
            <div>Count: {count}</div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" onClick={() => setStart(!start)}>{ start ? "Stop" : "Start"}</button>
        </>
    )
}

export default Counter2