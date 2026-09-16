import { createContext, useState } from 'react'

export const UserContext = createContext('User') 

export const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState('User')

    return(
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}
