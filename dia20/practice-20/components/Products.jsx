import { useState } from 'react'

function Products({ products }) {
    const [filteredProducts, setProducts] = useState(products)

    function filterProducts(category) {
        setProducts(products.filter((product) => product.categoria === category))
    }

    return(
        <>
        <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5 p-8 flex flex-col gap-4">
            <h2 className="font-sans text-base font-bold md:text-lg lg:text-xl">All Products</h2>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>Name: {product.nombre} Price: {product.precio}</li>
                ))}
            </ul>

            <h2 className="font-sans text-base font-bold md:text-lg lg:text-xl">Products that cost more than $700:</h2>
            <ul>
                {products.filter((product) => product.precio > 700).map((product) => (
                    <li key={product.id}>{product.nombre}</li>
                ))}
            </ul>

            <h2 className="font-sans text-base font-bold md:text-lg lg:text-xl">Filter Products By Category:</h2>

            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors" onClick={() => filterProducts('Electrónica')}>Electrónica</button>

            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors" onClick={() => filterProducts('Ropa')}>Ropa</button>

            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>{product.nombre}</li>
                ))}
            </ul>
        </div>
        </>
    ) 
}

export default Products