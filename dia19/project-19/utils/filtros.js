export function obtenerAprobados(alumnos) {
    return alumnos.filter((alumno) => alumno.grade >= 5)
}