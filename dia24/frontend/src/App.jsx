import { useState, useEffect } from "react";

function App() {
  const [ isActive, setIsActive ] = useState(false)
  const [ hover, setHover ] = useState(false)

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "blue",
    },
    title: {
      color: "red",
      fontSize: "24px",
    },
    button: {
      backgroundColor: isActive ? "green": "red",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
      border: hover ? "5px solid black" : "none"
    },
  };

  const baseStyle = {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }

  const primaryStyle = {
    backgroundColor: "blue",
    color: "white"
  }

  const secondaryStyle = {
    backgroundColor: "gray",
    color: "black"
  }

  function useWindowWidth() {
    const [ width, setWidth ] = useState(window.innerWidth)

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    return width
  }

  const width = useWindowWidth()

  const isMobile = width < 600

  const responsiveSyle = {
    color: isMobile ? "blue" : "red"
  }

  return (
    <>
      <h1 style={{ color: "blue", fontSize: "24px" }}>HEADING</h1>
      <button
        style={{ color: "white", backgroundColor: "green", padding: "8px" }}
      >
        Button Green Background
      </button>

      <div style={styles.container}>
        <h1 style={styles.title}>Objeto de estilos</h1>
        <button style={styles.button}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setIsActive(!isActive)}>{isActive ? "Inactivate" : "Activate"} Me</button>
      </div>

      <h1>Combination of multiple styles with spread operator</h1>
      <button style={{ ...baseStyle, ...primaryStyle}}>Primary Button</button>
      <button style={{ ...baseStyle, ...secondaryStyle}}>Secondary Button</button>


      <h1 style={responsiveSyle}>Responsive text - resize window to change text color</h1>
    </>
  );
}

export default App;
