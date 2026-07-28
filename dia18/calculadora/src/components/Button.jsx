function Button({label, onClick}) {
    return(
        <>
        <button onClick={onClick} className='
            w-16 
            h-16 
            bg-orange-500 
            font-bold 
            text-2xl 
            rounded-xl 
            shadow-md
            transition-all
            duration-300
            ease-in-out
            hover:bg-orange-600 
            hover:scale-105
            hover:shadow-xl
            active:scale-95'>{label}</button>
        </>
    )
}

export default Button