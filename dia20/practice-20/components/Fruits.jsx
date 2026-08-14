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
    <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5 p-8 flex flex-col gap-4">
        <h2 className="font-sans text-base font-bold md:text-lg lg:text-xl">Fruits</h2>
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