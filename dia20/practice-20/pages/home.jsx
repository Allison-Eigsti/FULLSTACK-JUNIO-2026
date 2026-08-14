import Fruits from "../components/Fruits"
import Products from '../components/Products'
import Users from '../components/Users'
import Tasks from '../components/Tasks'
import Employees from '../components/Employees'

const fruits = [ 'manzana', 'banana', 'cereza', 'melocotón', 'fresa' ]

const products = [
      { id: 1, nombre: "Laptop", categoria: "Electrónica", precio: 1200 }, 
      { id: 2, nombre: "Camiseta", categoria: "Ropa", precio: 50 }, 
      { id: 3, nombre: "Celular", categoria: "Electrónica", precio: 800  }, 
      { id: 4, nombre: "Zapatos", categoria: "Ropa", precio: 80 }, 
      { id: 5, nombre: "Audífonos", categoria: "Electrónica", precio: 300 }
    ]

const users =  [
    { id: 1, name: "Ana", age: 25 }, 
    { id: 2, name: "Luis", age: 17 }, 
    { id: 3, name: "Carlos", age: 22 }, 
    { id: 4, name: "Marta", age: 15 }
]

const tasks =  [{ id: 1, text: "Exercise" }, { id: 2, text: "Read a book" }, { id: 3, text: "Learn React" }]

const employees = [ 
  { id: 1, nombre: "Ana", apellido: "Mesa", salario: 2500 }, 
  { id: 2, nombre: "Luis", apellido: "Garcia", salario: 1800 }, 
  { id: 3, nombre: "Carlos", apellido: "Perez", salario: 3200 }, 
  { id: 4, nombre: "Marta", apellido: "Gutierrez", salario: 2800 }, 
  { id: 5, nombre: "Pedro", apellido: "Almedaba", salario: 1500 }
]

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

      <section>
        <Employees employees={employees} />
      </section>
    </>
  );
}

export default Home