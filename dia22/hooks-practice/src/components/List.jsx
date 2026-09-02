import { useState } from 'react'

function List() {
    const [ items, setItems ] = useState([])

    function handleItems(event) {
        event.preventDefault();
        const newItem = event.target.text.value
        setItems(prevItems => [...prevItems, newItem])

        event.target.text.value = ""
    }


    return (
        <>
            <div className='bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium'>
                <form className='flex flex-col items-center' onSubmit={handleItems}>
                    <input type="text" name="text" placeholder='Enter new Item' className='mb-2 p-2 border rounded' />

                    <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                    >Add an Item</button>
                
                </form>

                <h1>Items:</h1>
                <ul className='bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium'>
                    <li>First Item</li>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default List