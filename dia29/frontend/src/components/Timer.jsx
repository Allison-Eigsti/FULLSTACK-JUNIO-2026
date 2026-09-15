import { useRef, useState } from 'react'

function Timer() {
    const [ seconds, setSeconds ] = useState(0)
    const intervalRef = useRef(null)

    const iniciar = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setSeconds((s) => s + 1)
            }, 1000)
        }
    }

    const detener = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = null
    }


    return(
        <>
            <div>
                <p>Time: {seconds}</p>
                <button onClick={iniciar}>Start</button>
                <button onClick={detener}>Stop</button>
            </div>
        </>
    )
}

export default Timer