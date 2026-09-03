import { useState, useEffect } from 'react'

function Timer() {
    const [ time, setTime ] = useState(0)
    const [ start, setStart ] = useState(false)

    useEffect(() => {
        let interval = null

        if(start) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [start])


    return(
        <>
            <div className='bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium'>{time} miliseconds</div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" onClick={() => setStart(!start)}>{ start ? "Stop" : "Start"}</button>
        </>
    )
}

export default Timer