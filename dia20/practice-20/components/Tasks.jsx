import { useState } from 'react'


function Tasks({ tasksDefault }) {
    const [ tasks, setTasks ] = useState( tasksDefault || []);

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id ))
    }

  return (
    <>
    <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5 p-8 flex flex-col gap-4">
      <h2 className="font-sans text-base font-bold md:text-lg lg:text-xl">To Do:</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}

export default Tasks