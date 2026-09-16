import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

function Language() {
    const { language, setLanguage } = useContext(LanguageContext)

    return(
        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}>
            Cambiar a {language === 'ES' ? 'EN' : 'ES'}
        </button>
    )
}

export default Language