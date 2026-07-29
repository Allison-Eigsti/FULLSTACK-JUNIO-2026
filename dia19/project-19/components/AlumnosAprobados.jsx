import { useLayoutEffect } from "react";
import ArticuloCard from "./ArticuloCard";

const alumnos = [
    { name: 'Allie', grade: '4'},
    { name: 'Sara', grade: '6'},
    { name: 'Megan', grade: '7'},
]

function AlumnosAprobdos({ alumnos }) {
    return(
        <>
            <ArticuloCard title='Estudiantes Aprobados' content={
                alumnos.filter((alumno) => alumno.grade >= 5).map((alumno) => {
                    <p>{alumno}</p>
                })
            }/>
        </>
    )
}

export default AlumnosAprobados