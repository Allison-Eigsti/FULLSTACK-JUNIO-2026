import ArticuloCard from "./ArticuloCard";
import { obtenerAprobados } from "../utils/filtros.js"


function AlumnosAprobdos({ alumnos }) {
    const aprobados = obtenerAprobados(alumnos)

    return(
        <>
            <ArticuloCard title='Estudiantes Aprobados' content={
            <ul>
                {aprobados.map((alumno) => (
                            <li>{alumno.name}</li>
                        ))}
            </ul>
            }/>
        </>
    )
}

export default AlumnosAprobdos
