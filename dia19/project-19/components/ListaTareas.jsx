function listaTareas({tareas}) {
    return(
        <>
        <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5 p-8 flex flex-col gap-4">
            <h2 className="font-sans text-base font-bold md:text-lg lg:text-xl">Tareas:</h2>

            <ul className="flex gap-24">
                {tareas.length === 0 && <h3>There are no tasks.</h3>}

                {tareas.map((tarea) => (
                    <li className="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5 p-8 flex flex-col gap-4">{tarea.name}
                    <br></br>
                        {tarea.completed ? <span className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">'Completed'</span> : <span className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">'Pending'</span>}
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default listaTareas