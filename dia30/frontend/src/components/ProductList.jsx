import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function ProductList() {
    const { items, addItem, deleteItem } = useContext(CartContext)


    return(
        <>
            <h2>Product List</h2>
            
            <ul>{items.map((item) => (
                <li key={item.id}>{item.name}
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" onClick={addItem}>Add to Cart</button>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" onClick={deleteItem}>Delete From Cart</button>
                </li>
            ))}</ul>
        </>
    )
}

export default ProductList