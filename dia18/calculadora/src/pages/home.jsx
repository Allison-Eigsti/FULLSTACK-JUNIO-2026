import Header from '../components/header'
import Main from '../components/Main'
import Calculator from '../components/Calculator'
import Footer from '../components/Footer'

const navLinks = [
  { id: 1 , label: "Home", href: "/"},
  { id: 2 , label: "About", href: "/about" },
  { id: 3,  label: "Contact", href: "/contact" },
]

const footerLinks = [
  { id: 1, label: "Home", href: "/"},
  { id: 2, label: "Home", href: "/about" },
  { id: 3,  label: "Home", href: "/contact" },
  { id: 4, label: "About", href: "/"},
  { id: 5, label: "About", href: "/about" },
  { id: 6,  label: "About", href: "/contact" },
  { id: 7, label: "Contact", href: "/"},
  { id: 8, label: "Contact", href: "/about" },
  { id: 9,  label: "Contact", href: "/contact" }
]

function Home() {
    return (
        <>
            <Header title="My Website" navLinks={navLinks} />
            <Main title='Calculator' content={<Calculator />} />
            <Footer footerLinks={footerLinks}/>
        </>
    )
}

export default Home