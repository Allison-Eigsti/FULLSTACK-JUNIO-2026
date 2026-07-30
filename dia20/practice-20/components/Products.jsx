function Products({ products }) {
    return(
        <>
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>Name: {product.name} Price: {product.price}</li>
                ))}
            </ul>

            <h2>Products that cost more than $700:</h2>
            <ul>
                {products.filter((product) => product.price > 700).map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </>
    ) 
}

export default Products