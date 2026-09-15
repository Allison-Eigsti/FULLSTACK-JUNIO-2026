import UsuarioCard from './UsuarioCard'

interface Usuario {
    nombre: string,
    edad: number,
    activo: boolean
}

interface ListaUsuarioProps {
    usuarios: Usuario[]
}

const ListaUsuarios: React.FC<ListaUsuarioProps> = ({ usuarios }) => {

    return (
        <>
            <p>Lista de Usuarios</p>

            <ul>
                {usuarios.map((usuario, index) => (
                    <li key={index}>
                        <UsuarioCard
                            nombre={usuario.nombre}
                            edad={usuario.edad}
                            activo={usuario.activo}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListaUsuarios