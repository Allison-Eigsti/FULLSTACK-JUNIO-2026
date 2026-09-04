import { useState } from 'react'

function Hover() {
    const [ hover, setHover ] = useState(false)

    return(
        <>
        <div className={`w-md h-80 ${hover ? "bg-blue-500": "bg-blue-300"}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}></div>
        </>
    )
}

export default Hover