import { useContext } from 'react'

import { UserProvider } from './context/UserContext'
import { CounterProvider } from './context/CounterContext'
import { ThemeProvider, ThemeContext } from './context/ThemeContext'
import { LanguageContext, LanguageProvider } from './context/LanguageContext'
import { AuthProvider } from './context/AuthContext'

import User from './components/User'
import Counter from './components/Counter'
import Theme from './components/Theme'
import Language from './components/Language'
import LoggedIn from './components/LoggedIn'

function Main() {
  const { theme } = useContext(ThemeContext)

  return (
    <main className={theme === 'light' ? 'h-screen bg-white text-black flex' : 'h-screen bg-gray-900 text-white'}>
      <AuthProvider>
        <LanguageProvider>
          <CounterProvider>
            <UserProvider>
              <div className='h-10 flex gap-8'>
                <User />
                <Counter />
                  <Theme />
                  <Language />
                  <LoggedIn />
                </div>
            </UserProvider>
          </CounterProvider>
        </LanguageProvider>
      </AuthProvider>
    </main>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  )
}


export default App
