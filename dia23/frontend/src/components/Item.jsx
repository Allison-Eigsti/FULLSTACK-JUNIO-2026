import { useState } from 'react'


function Item({ data }) {
    const [ active, setActive ] = useState(false)

    return(
        <li
            onClick={() => setActive(!active)}
            className={`${active ? "text-blue-700" : "text-red-500"} cursor-pointer`}>
                {active ? "Clicked" : `${data.text}`}
        </li>
    )
}

export default Item

