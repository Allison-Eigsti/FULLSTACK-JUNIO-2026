import { useState } from 'react'
import type { JSX } from 'react'

function Contador(): JSX.Element {
    const [ cuenta, setCuenta ] = useState<number>(0)

    function incrementar() : void {
        setCuenta((cuentaActual) => cuentaActual + 1)
    }

    return (
        <div>
            <button onClick={incrementar}>+</button>
            <p>{cuenta}</p>
        </div>
    )
}

export default Contador