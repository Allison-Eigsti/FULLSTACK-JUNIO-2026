import { useState } from "react"


function Tarea({ texto, completada }) {
    const [ isCompleted, setIsCompleted ] = useState(false)
    return(
        <div>
            <p className={`${isCompleted ? text-green-500 : text-red-500}`}>{texto}</p>
        </div>
    )
}

export default Profile