import { useState } from 'react'

interface Props {
    nombre: string
}

const Formulario = ({ nombre }: Props) => {
    const [ nombreInput, setNombreInput ] = useState<string>(nombre)

    function handleNombre(e: React.ChangeEvent<HTMLInputElement>) {
        setNombreInput(e.target.value)
    }

    return (
        <form>
            <input type="text" 
            value={nombreInput}
            onChange={handleNombre}
            placeholder='Escribe tu nombre'/>
            <p>Mi nombre es {nombreInput}</p>
        </form>
    )
}

export default Formulario