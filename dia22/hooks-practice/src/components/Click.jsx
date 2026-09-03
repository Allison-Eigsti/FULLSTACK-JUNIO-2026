import { useState } from 'react'

function Click() {
    const [ hidden, setHidden ] = useState(true)

    return(
        <>
            <div style = {hidden ? "display:none" : "display:block"}>Clicked!</div>
            <button onClick={setHidden(!hidden)}>Click for alert</button>
        </>
    )
}

export default Click