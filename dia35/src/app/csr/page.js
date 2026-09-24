"use client"

// An example of client side rendering - everything is loaded on the client side, client side makes the fetch request and recieves it

import { useEffect, useState } from "react"

export default function Page() {
    const [ msg, setMsg ] = useState("cargando...")

    useEffect(() => {
        fetch("/api")
            .then(res => res.json())
            .then(data => setMsg(data.message + " - " + data.timestamp))
            .catch(err => setMsg("Error al cargar datos"))
    }, [])

    return(
        <div>
            <h1>Datos del servidor</h1>
            <pre>{msg}</pre>
        </div>
    )
}

// this one loads the html first and then makes the fetch request and inputs the data dynamically, the h1 loads a split second before the message popuates















// for dinas project
// export default async function ProjectPage({ params }) {
//   const project = await getProject(params.slug)

//   return (
//     <article>
//       <h1>{project.title}</h1>

//       <p>{project.description}</p>

//       {project.images.map(image => (
//         <Image
//           key={image.id}
//           src={image.url}
//           alt={image.alt}
//           width={image.width}
//           height={image.height}
//         />
//       ))}
//     </article>
//   )
// }
