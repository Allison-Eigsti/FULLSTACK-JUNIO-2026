import { useState } from 'react'

function Employees({ employees }) {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [salario, setSalario] = useState('')
    const [filteredResults, setFilterResults] = useState([])

    function filterArray() {
        setFilterResults(
        employees.filter((employee) => {
            const matchesNombre =
                employee.nombre.toLowerCase().includes(nombre.toLowerCase())

            const matchesApellido =
                employee.apellido.toLowerCase().includes(apellido.toLowerCase())

            const matchesSalario =
                salario === '' || employee.salario > Number(salario)

            return matchesNombre && matchesApellido && matchesSalario
        })
    )
    }

    return(
        <>
        <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5 p-8 flex flex-col gap-4">
        <h2 className="font-sans text-base font-bold md:text-lg lg:text-xl">Employees</h2>

        <input type="text"
              placeholder="Nombre..."
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}>
        </input>

        <input type="text"
              placeholder="Apellido..."
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}>
        </input>

        <input type="text"
              placeholder="Salario mayor que..."
              value={salario}
              onChange={(e) => setSalario(e.target.value)}>
        </input>

        <button onClick={() => filterArray()}>Search</button>

        <ul>
            {filteredResults.map((employee) => (
                <li key={employee.id}>{employee.nombre}</li>
            ))}
        </ul>
        </div>
        </>
    )
}

export default Employees