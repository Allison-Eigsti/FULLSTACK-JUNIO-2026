import { useState } from 'react'


function Fruits({ fruitList }) {
  const [ fruits, setFruits ] = useState(fruitList)
  const [ newFruit, setNewFruit ] = useState('')

  const addFruit = () => {
    if (newFruit.trim() === "") return;

    setFruits((prevFruits) => [...prevFruits, newFruit]);
    setNewFruit("");
  }
  
  return (
    <>
    <div>
        <h2>Fruits</h2>
        <ul>
            {fruits.map((fruit) => (
                <li>{fruit}</li>
            ))}
        </ul>

        <input type="text"
              placeholder="Add a fruit..."
              value={newFruit}
              onChange={(e) => setNewFruit(e.target.value)}>
        </input>

        <button onClick={addFruit}>Add Fruit</button>
    </div>
    </>
  )
}

export default Fruits