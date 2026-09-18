import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function User() {
    const { user, setUser } = useContext(UserContext)

    return(
        <>
            <p>Hello my name is, {user}</p>
        </>
    )
}

export default User