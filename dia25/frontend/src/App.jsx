import Slider from './components/Slider'
import Carousel from './components/Carousel'
import Menu from './components/Menu'

const menuItems = [
  { name: "Inicio", path: "/"},
  { name: "Servicios", path: "/servicios", submenu: [{ name: "Web", path: "/web" }, 
                                                      { name: "Web2", path: "/web2" }]},
  { name: "Sobre nosotros", path: "/sobre"},
  { name: "Contacto", path: "/contacto"}
]

const images = [
  "https://plus.unsplash.com/premium_photo-1777558756044-aa5e0b090647?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1786304371409-3cc8e09b336f?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1669725687301-816ea846bd16?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1788766921132-3c7fca105d21?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1690440799957-38f180ab63c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

function App() {



  return (
    <>
    <Menu menuItems={menuItems} />

    <div className='flex flex-col gap-24'>
      <Slider images={images} />

      <Carousel images={images} />
      </div>
    </>
  )
}

export default App
