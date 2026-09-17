import ArticlePreview from '../components/ArticlePreview'


function NewsList() {
    const articles = [
        {
            id: 1,
            title: "Introducción a React",
            content: "React es una biblioteca de JavaScript para construir interfaces de usuario mediante componentes reutilizables."
        },
        {
            id: 2,
            title: "Aprendiendo React Router",
            content: "React Router permite crear navegación y diferentes rutas dentro de una aplicación React."
        },
        {
            id: 3,
            title: "¿Qué son los componentes?",
            content: "Los componentes son piezas reutilizables de una interfaz que permiten dividir una aplicación en partes más pequeñas y fáciles de mantener."
        }
    ];

    return (
        <>
            <p>News List:</p>
            <ul>{articles.map(article => (
                <li><ArticlePreview article={article} /></li>
            ))}</ul>
        </>
    )
}

export default NewsList