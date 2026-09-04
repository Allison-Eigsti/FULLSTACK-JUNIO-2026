import Item from "./Item"
import Item2 from './Item2'

function List({ items }) {
    return(
        <>
            <ul>
                {items.map((item) => (
                    <Item key={item.id} data={item}/>
                ))}
            </ul>

            <ul>
                {items.map((item) => (
                    <Item2 key={item.id} data={item}/>
                ))}
            </ul>
        </>
    )
}

export default List