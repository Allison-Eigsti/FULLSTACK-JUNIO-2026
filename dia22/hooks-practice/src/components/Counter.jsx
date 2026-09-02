import { useState } from "react"

function Counter(){
    const [ count, setCount ] = useState(0)

    function handleCounter() {
        setCount(count + Math.floor(Math.random() * 10))
    }

    return(
        <>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" onClick={() => handleCounter()}>Increase by random number</button>
        <p className="text-indigo-600">{count}</p>
        </>
    )
}

export default Counter