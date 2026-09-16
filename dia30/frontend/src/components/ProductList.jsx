import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function ProductList() {
    const { allProducts, addItem, deleteItem } = useContext(CartContext)

    return (
        <>
            <h2>Product List</h2>

            <ul>
                {allProducts.map((product) => (
                    <li key={product.id}>
                        {product.name} {product.price}

                        <button
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                            onClick={() => addItem(product)}
                        >
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ProductList
