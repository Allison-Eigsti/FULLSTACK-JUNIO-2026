import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {
    const { items, deleteItem } = useContext(CartContext)

    return (
        <>
            <h2>Cart</h2>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name}

                        <button
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                            onClick={() => deleteItem(item.id)}
                        >
                            Delete From Cart
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Cart
