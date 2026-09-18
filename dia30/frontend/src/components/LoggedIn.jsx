import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function LoggedIn() {
    const { authorized, setAuthorized } = useContext(AuthContext)

    return(
        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" onClick={() => setAuthorized(authorized === false ? true : false)}>
            Cambiar a {authorized === false ? 'Log In' : 'Log Out'}
        </button>
    )
}

export default LoggedIn