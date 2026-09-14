import { useState } from 'react'

interface Props {
    nombre: string
}

const Saludo = ({ nombre }: Props) => {
    const [ nombreInput, setNombreInput ] = useState<string>(nombre)

    function handleNombre(e: React.ChangeEvent<HTMLInputElement>) {
        setNombreInput(e.target.value)
    }

    return (
        <div>
            <input type="text" 
            value={nombreInput}
            onChange={handleNombre}
            placeholder='Escribe tu nombre'/>
            <p>Hola, {nombreInput}</p>
        </div>
    )
}

export default Saludo