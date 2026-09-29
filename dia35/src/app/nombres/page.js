"use client";

import { useEffect, useState } from "react";
import NameForm from "./NameForm";

export default function NombresPage() {
  const [nombres, setNombres] = useState([]);
  const [loading, setLoading] = useState(true);

  async function obtenerNombres() {
    const response = await fetch("/api/nombres");

    const data = await response.json();

    setNombres(data);
    setLoading(false);
  }

  useEffect(() => {
    obtenerNombres();
  }, []);

  async function eliminarNombre(id) {
    const response = await fetch(`/api/nombres/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error("Error al eliminar");
      return;
    }

    obtenerNombres();
  }

  async function actualizarNombre(id, nombreActual) {
    const nuevoNombre = prompt(
      "Nuevo nombre:",
      nombreActual
    );

    if (!nuevoNombre || !nuevoNombre.trim()) {
      return;
    }

    const response = await fetch(`/api/nombres/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nuevoNombre,
      }),
    });

    if (!response.ok) {
      console.error("Error al actualizar");
      return;
    }

    obtenerNombres();
  }

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <main>
      <h1>Lista de nombres</h1>

      <NameForm onNameAdded={obtenerNombres} />

      <hr />

      <ul>
        {nombres.map((item) => (
          <li key={item.id}>
            {item.nombre}

            <button
              onClick={() =>
                actualizarNombre(item.id, item.nombre)
              }
            >
              Editar
            </button>

            <button
              onClick={() => eliminarNombre(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
// 'use client'

// import { useEffect, useState } from 'react'
// import NameForm from './NameForm'

// export default function NombresPage() {
//     const [nombres, setNombres] = useState([])
//     async function obtenerNombres() {
//         const response = await fetch('api/nombres')

//         const data = await response.json()

//         setNombres(data)
//     }

//     useEffect(() => {
//         obtenerNombres()
//     }, [])

//     return(
//         <>
//         <main>
//             <h1>Nombres</h1>

//             <NameForm onNameAdded={obtenerNombres} />

//             <h2>Lista de Nombres</h2>

//             <ul>
//                 {nombres.map((nombre, index) => (
//                     <li key={index}>{nombre}</li>
//                 ))}
//             </ul>

//         </main>
//         </>
//     )
// }


//     // async function enviarNombres() {
//     //     const response = await fetch('api/nombres', {
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify(['Ana', 'Carlos', 'Maria'])
//     //     })

//     //     const data = await response.json()

//     //     console.log(data)
//     // }