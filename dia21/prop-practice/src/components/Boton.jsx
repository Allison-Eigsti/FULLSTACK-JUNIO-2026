function Boton({ onClick, texto }) {
    return(
        <button onClick={onClick} className="text-black bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">{texto}</button>
    )
}

export default Boton