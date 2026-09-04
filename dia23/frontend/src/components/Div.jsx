import { useState } from 'react'

function Div() {
    const [ hover, setHover ] = useState(false)
    const [ click, setClick ] = useState(false)

    return(
        <>
            <div className={`text-white bg-brand box-border p-8 ${ hover ? "bg-blue-700" : "bg-blue-500"}
            ${ click ? "border-black border-8" : ""} `} 
            onClick={() => setClick(!click)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
                >Hover and Click</div>
        </>
    )
}

export default Div