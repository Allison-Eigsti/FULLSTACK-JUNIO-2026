import { useState } from 'react'


function Item({ data }) {
    const [ active, setActive ] = useState(false)

    return(
        <li
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className={`${active ? "bg-blue-700 text-white" : ""} cursor-pointer`}>
                {data.text}
        </li>
    )
}

export default Item

