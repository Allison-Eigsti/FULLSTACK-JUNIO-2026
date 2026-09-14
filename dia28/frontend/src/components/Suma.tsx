import { useState, useEffect } from 'react'

interface SumaProps {
    x: number,
    y: number
}

const Suma : React.FC<SumaProps> = (props) => {
    const [ suma, setSuma ] = useState<number>(0)

    const handleSuma = (x: number, y: number): void => {
        setSuma(x + y)
    }

    useEffect(() => {
        handleSuma(props.x, props.y)
    }, [props.x, props.y])

    return(
        <>
            <p>La suma de los props es {suma}</p>
        </>
    )
} 

export default Suma