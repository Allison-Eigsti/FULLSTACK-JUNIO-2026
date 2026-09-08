import { useState, useEffect } from 'react'


function Menu({ menuItems }) {
    return(
        <>
        <div className="w-full bg-white shadow">
            <ul className=" flex items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {menuItems.map((item, index) => (
                    <li key={index} className='text-gray-600 hover:text-blue-600'>{item.name}</li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Menu