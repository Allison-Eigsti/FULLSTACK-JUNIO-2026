interface Usuario {
    nombre: string,
    edad: number
}

interface ListaUsuarioProps {
    usuarios: Usuario[]
}

const ListaUsuarios : React.FC<ListaUsuarioProps> = ({ usuarios }) => {

    return(
        <>
            <p>Lista de Usuarios</p>
            <ul>
                {usuarios.map((usuario, index) => (
                    <li key={index}>{usuario.nombre} 
                    Edad: {usuario.edad}</li>
                ))}
            </ul>
        </>
    )
} 

export default ListaUsuarios