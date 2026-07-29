import ArticuloCard from "../components/ArticuloCard"
import ListaFrutas from "../components/ListaFrutas"
import ListaTareas from "../components/ListaTareas"
import ArticulosDestacados from "../components/ArticulosDestacados"
import NumerosPares from "../components/NumerosPares"

const frutas = [
    'banana',
    'apple',
    'strawberry'
]

const tareas = [
    { name: 'Do HW', completed: false},
    { name: 'Do laundry', completed: true},
    { name: 'Wash dishes', completed: false}
]

const articulos = [
    { id: 1, title: 'Title 1', content: 'Content content content', featured: true},
    { id: 2, title: 'Title 2', content: 'Content content content', featured: false},
    { id: 3, title: 'Title 3', content: 'Content content content', featured: true},
    { id: 4, title: 'Title 4', content: 'Content content content', featured: false},
    { id: 5, title: 'Title 5', content: 'Content content content', featured: true},
]



function Home() {
    return(
        <>
            <section>
                <ListaFrutas frutas={frutas} />
            </section>

            <section>
                <ListaTareas tareas={tareas}/>
            </section>

            <section>
                <ArticulosDestacados articulos={articulos}/>
            </section>

            <section>
                <NumerosPares />
            </section>
        </>
    )
}

export default Home