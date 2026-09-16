import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Theme() {
    const { theme, setTheme } = useContext(ThemeContext)

    return(
        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Cambiar a {theme === 'light' ? 'dark' : 'light'}
        </button>
    )
}

export default Theme