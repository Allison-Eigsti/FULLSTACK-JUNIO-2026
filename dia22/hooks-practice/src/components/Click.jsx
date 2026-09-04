import { useState } from 'react'

function Click() {
    const [ hidden, setHidden ] = useState(true)

    return(
        <>
            <div className = {`${hidden ? "hidden" : "block"}`}>Clicked!</div>
            <button onClick={() => setHidden(!hidden)}>{hidden ? "Click for alert" : "Click to hide alert"}</button>
        </>
    )
}

export default Click