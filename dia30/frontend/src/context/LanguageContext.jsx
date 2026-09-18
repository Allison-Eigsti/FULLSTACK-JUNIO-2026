import { createContext, useState } from 'react'

export const LanguageContext = createContext('ES')

export const LanguageProvider = ({ children }) => {
    const [ language, setLanguage ] = useState('ES')
    return(
        <LanguageContext.Provider value={{ language, setLanguage }}>
            { children }
        </LanguageContext.Provider>
    )
}