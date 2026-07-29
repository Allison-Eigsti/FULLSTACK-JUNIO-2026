function ListaFrutas({ frutas }) {
    return (
        <>

            <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5 p-8 flex flex-col gap-4">
                <h2 className="font-sans text-base font-bold md:text-lg lg:text-xl">Lista Frutas</h2>
                <ul className="flex flex-col gap-2">
                    {frutas.map((fruta) => (
                        <li className="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5 p-8">{fruta}</li>
                    ))}
                </ul>

                <p>Total fruits: {frutas.length}</p>
            </div>
        </>
    )
}

export default ListaFrutas