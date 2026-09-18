import { useEffect, useRef } from 'react'

function Scroll() {
    const divRef = useRef(null)
    const intervalRef = useRef(null)


    useEffect(() => {
        intervalRef.current = setInterval(() => {
            divRef.current.textContent += "LOREM LOREM LOREM LOREM"
            divRef.current.scrollTop = divRef.current.scrollHeight
        }, 500)

        return () => clearInterval(intervalRef.current)
    }, [])

    function abort() {
        clearInterval(intervalRef.current)
    }



    return(
        <>
            <div>
                <div ref={divRef}
                style={{ height: "100px", overflow: "auto", border: "1px solid black"}}>
                    <p>Long Content</p>
                </div>
                <button onClick={abort}>Stop</button>
            </div>
        </>
    )
}

export default Scroll