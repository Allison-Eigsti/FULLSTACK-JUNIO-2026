"use client"

import { useEffect, useState } from "react"

export default function Page() {
    const [ num, setNum ] = useState("cargando...")

    useEffect(() => {
        fetch("/api/numero")
            .then(res => res.json())
            .then(data => setNum(data.number))
            .catch(err => setNum("Error al cargar datos"))
    }, [])

    return(
        <div>
            <h1>Random number</h1>
            <pre>{num}</pre>
        </div>
    )
}