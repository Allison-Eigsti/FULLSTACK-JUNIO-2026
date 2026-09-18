import { useRef } from 'react'

function Focus() {
    const inputRef = useRef(null)

    function handleclick() {
        inputRef.current.focus()
        inputRef.current.value = "Texto Anadido con useRef"
    }

    return(
        <>
        <input ref={inputRef} type="text" placeholder="Enter email here..."/>
        <button onClick={handleclick}>Focus</button>
        </>
    )
}

export default Focus