import ArticuloCard from "./ArticuloCard";

function NumerosPares() {

     const numeros = Array.from({ length: 10 }, (_, index) => (index + 1) * 2);
     const title = 'Numeros Pares'

    return(
        <>
            <ArticuloCard title={title} content={
            <ul>
                {numeros.map((numero) => (
                    <li>{numero}</li>
                ))}
            </ul>
            }/>
        </>
    )
}

export default NumerosPares