import { useState } from 'react'


function Tasks({ tasksDefault }) {
    const [ tasks, setTasks ] = useState( tasksDefault || []);

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id ))
    }

  return (
    <>
      <h2>To Do:</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tasks