interface UserProps {
    nombre: string,
    edad: number,
    activo: boolean
}

const UsuarioCard: React.FC<UserProps> = ({ nombre, edad, activo }) => {

    return (
        <div className={activo ? "text-green-500" : "text-red-500"}>
            <h2>Info del usuario</h2>

            <p>Nombre: {nombre}</p>
            <p>Edad: {edad}</p>
        </div>
    )
}

export default UsuarioCard