function Tarea({ texto, completada }) {
    return(
        <div>
            <p className={`${completada ? "text-green-500" : "text-red-500"}`}>{texto}</p>
        </div>
    )
}

export default Tarea