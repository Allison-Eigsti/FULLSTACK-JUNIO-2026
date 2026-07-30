import Fruits from "../components/Fruits"
import Products from '../components/Products'
import Users from '../components/Users'
import Tasks from '../components/Tasks'

const fruits = [ 'manzana', 'banana', 'cereza', 'melocotón', 'fresa' ]

const products = [
    { id: 1, name: "Laptop", price: 1200 }, 
    { id: 2, name: "Celular", price: 800 }, 
    { id: 3, name: "Tablet", price: 500 }
    ]

const users =  [{ id: 1, name: "Ana", age: 25 }, { id: 2, name: "Luis", age: 17 }, { id: 3, name: "Carlos", age: 22 }, { id: 4, name: "Marta", age: 15 }]

const tasks =  [{ id: 1, text: "Exercise" }, { id: 2, text: "Read a book" }, { id: 3, text: "Learn React" }]

function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Exercises</h1>

      <section>
        <Fruits fruitList={fruits} />
      </section>
      <section>
        <Products products={products} />
      </section>

      <section>
        <Users users={users} />
      </section>

      <section>
        <Tasks tasksDefault={tasks} />
      </section>
    </>
  );
}

export default Home