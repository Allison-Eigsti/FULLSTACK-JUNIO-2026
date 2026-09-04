import { useState } from 'react'

function Button1() {
    const [ active, setActive ] = useState(false)

    return(
        <>
            <button className={`text-white bg-brand box-border border border-transparent p-8 ${ active ? "bg-blue-700" : "bg-blue-500"}`} onClick={() => setActive(!active)}>{ active ? "Click me Again" : "Click Me"}</button>
        </>
    )
}

export default Button1