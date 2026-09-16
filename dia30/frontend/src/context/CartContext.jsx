import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
    const [ items, setItems ] = useState([])

    function addItem(item) {
        setItems(prevItems => [...prevItems, item])
    }

    function deleteItem(id) {
         setItems(prevItems =>
            prevItems.filter(item => item.id !== id)
        )
    }

    return(
        <CartContext.Provider value={{ items, addItem, deleteItem }}>
            { children }
        </CartContext.Provider>
    )
}