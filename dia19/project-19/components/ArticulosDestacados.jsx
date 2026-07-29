import ArticuloCard from "./ArticuloCard"
import { useState } from 'react'
import { useEffect } from 'react'


function ArticulosDestacados({ articulos }) {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
    setCounter(articulos.filter((articulo) => articulo.featured).length);
    }, [articulos]);

    return(
        <>
            <ul className="flex gap-4">
                {articulos.filter((articulo) => articulo.featured).map((articulo) => (
                    <li key={articulo.id}><ArticuloCard title={articulo.title} content={articulo.content}/></li>
                ))}
            </ul>

            <p>Featured articles: {counter}</p>
        </>
    )
}

export default ArticulosDestacados


