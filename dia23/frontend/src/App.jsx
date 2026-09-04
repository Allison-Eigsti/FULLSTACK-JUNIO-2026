import Button1 from './components/Button1'
import Div from './components/Div'
import List from './components/List'
import { useState, useEffect } from 'react'

const items = [
  { id: 1, text: "Item 1" },
  { id: 2, text: "Item 2" }, ,
  { id: 3, text: "Item 3" },
]

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  }
)
  const [animate, setAnimate] = useState(() => {
    return JSON.parse(localStorage.getItem("animate")) || false;
  })


 useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("animate", JSON.stringify(animate));
  }, [animate]);


  return (
    <>
      <div className={`${darkMode ? "bg-slate-900" : "bg-blue-300"}  w-full h-screen flex justify-center items-center gap-8 `}>
        <button
          className={`px-4 py-2 ${darkMode ? "bg-indigo-300 hover:bg-indigo-400 text-black" : "bg-indigo-700 text-white hover:bg-indigo-800"}
          ${animate ? "animate-pulse" : ""}
          rounded`}
          onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Light Mode" : "Dark Mode"}</button>

        <button
          className={`px-4 py-2 ${darkMode ? "bg-indigo-300 hover:bg-indigo-400 text-black" : "bg-indigo-700 text-white hover:bg-indigo-800"}
          ${animate ? "animate-pulse" : ""}
          rounded`}
          onClick={() => {
            setAnimate(!animate);
          }}>{animate ? "Stop" : "Animate"}</button>
      </div>

    </>
  )
}

export default App
