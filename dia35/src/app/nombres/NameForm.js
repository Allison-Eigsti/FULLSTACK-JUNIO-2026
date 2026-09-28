"use client";

import { useState } from "react";

export default function NameForm({ onNameAdded }) {
  const [nombre, setNombre] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!nombre.trim()) {
      return;
    }

    const response = await fetch("/api/nombres", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
      }),
    });

    if (!response.ok) {
      console.error("Error al crear el nombre");
      return;
    }

    setNombre("");

    onNameAdded();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
        placeholder="Nuevo nombre"
      />

      <button type="submit">
        Añadir
      </button>
    </form>
  );
}



// 'use client'

// import { useState } from 'react'

// export default function NameForm({ onNameAdded }) {
//     const [ nombre, setNombre ] = useState('')

//     async function handleSubmit(event) {
//         event.preventDefault()

//         if (!nombre.trim()) return

//         const response = await fetch('api/nombres', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 nombre: nombre,
//             }),
//         })

//         const data = await response.json()

//         console.log(data)

//         setNombre('')

//         onNameAdded()
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <input
//                 type='text'
//                 value={nombre}
//                 onChange={(event) => setNombre(event.target.value)}
//                 placeholder= 'Enter a name'>
//             </input>

//             <button type='submit'> Add Name</button>
//         </form>
//     )
// }