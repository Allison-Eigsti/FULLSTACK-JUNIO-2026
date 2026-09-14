interface UserProps {
    nombre: string,
    edad: number,
    activo: boolean
}


const UsuarioCard : React.FC<UserProps> = (user) => {

    return(
        <>
            <div className={user.activo ? "text-green-500" : "text-red-500"}>
                <h2>Info del usuario</h2>

                <p>Nombre : {user.nombre}
                Edad: {user.edad} 
                </p>
            </div>
        </>
    )
} 

export default UsuarioCard