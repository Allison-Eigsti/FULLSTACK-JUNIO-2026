import { createContext, useState } from 'react'

export const AuthContext = createContext(false)

export const AuthProvider = ({ children }) => {
    const [ authorized, setAuthorized ] = useState(false)
    return(
        <AuthContext.Provider value={{ authorized, setAuthorized }}>
            { children }
        </AuthContext.Provider>
    )
}