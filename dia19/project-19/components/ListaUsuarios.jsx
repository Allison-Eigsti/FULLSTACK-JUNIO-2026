import ArticuloCard from "./ArticuloCard.jsx"

function ListaUsuarios({ usuarios }) {
    return(
            <ArticuloCard title='Usuarios' content={
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.name}</li>
                ))}
            </ul>
            }/>
    )
}

export default ListaUsuarios