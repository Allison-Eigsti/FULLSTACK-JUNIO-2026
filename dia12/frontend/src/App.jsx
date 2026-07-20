import { useEffect, useState } from 'react'

function App() {
  const [ tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/tasks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_token_here'
      }
    })
    .then(response => response.json())
    .then(data => setTasks(data))
    .catch(error => console.error('Error fetching tasks:', error)) 
  }, []);

  function handleAddTask(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const description = event.target[1].value;

    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_token_here'       
      },
      body: JSON.stringify({ name, description })
    })
    .then(response => response.json())
    .then(newTask => setTasks(prevTasks => [...prevTasks, newTask]))
    .catch(error => console.error('Error adding tasks:', error))
  }


function handleDeleteTask(taskId) {
  fetch(`http://localhost:3000/tasks/${taskId}`), {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_token_here'      
    }
  }
  .then(()=> setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId)))
  .catch(error => console.error('Error deleting task:', error))
}

function handleChangeStatus(taskId, newStatus) {
  fetch(`http://localhost:3000/tasks/${taskId}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_token_here'        
    },
    body: JSON.stringify({ status: newStatus })
  })
  .then(response => response.json())
  .then(updatedTask => {
    setTasks(prevTasks => prevTasks.map(task => task._id === taskId ? updatedTask : task))
  })
  .catch(error => console.error('Error updating task status:', error))
}

  return (
    <>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
