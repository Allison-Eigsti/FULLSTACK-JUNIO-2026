import { useState } from "react"

function App() {
  const [ darkMode, setDarkMode ] = useState(false)
  const [ lgFontMode, setLgFontMode ] = useState(false)

  const containerStyle = {
    backgroundColor: darkMode ? "black" : "white",
    textAlign: "center",
    color: darkMode ? "white": "black",
    margin: "none",
    padding: "none",
    transition: 'width 0.5s ease-in-out, background-color 0.5s ease'
  }

  const baseStyle = {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: darkMode ? "white" : "gray",
    color: darkMode ? "black": "white",
    margin: "10px",
    fontSize: lgFontMode ? "18px" : "16px",
    transition: 'width 0.5s ease-in-out, background-color 0.5s ease',
    transition: 'width 0.5s ease-in-out, font-size 0.5s ease'
  }

  const darkModeButton = {
    border: darkMode ? "2px blue solid" : "2px black solid"
  }


  return (
    <>
    <body style={containerStyle}>
      <h1>Application</h1>

      <button style={{...baseStyle, ...darkModeButton}} onClick={() => setDarkMode(!darkMode)}>Dark Theme</button>

      <button style={baseStyle} onClick={() => setLgFontMode(true)}>Increase Font Size</button>
      <button style={baseStyle} onClick={() => setLgFontMode(false)}>Decrease Font Size</button>

    </body>
    </>
  )
}

export default App
