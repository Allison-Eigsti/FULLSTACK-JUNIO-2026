interface Tarea {
    id: number,
    texto: string,
    completada: boolean
}

interface ListaTareasProps {
    tareas: Tarea[]
}

const ListaTareas : React.FC<ListaTareasProps> = ({ tareas }) => {

    return(
        <>
            <p>Lista de tareas</p>
            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea.id}>{tarea.texto} 
                    Completada? {tarea.completada ? 'si' : 'no'}</li>
                ))}
            </ul>
        </>
    )
} 

export default ListaTareas