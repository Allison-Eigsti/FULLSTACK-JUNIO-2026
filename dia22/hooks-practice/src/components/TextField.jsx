import { useState } from 'react'

function TextField() {
    const [ text, setText ] = useState("")



    return (
        <>
            <div className="text-indigo-600">{text}</div>
            <textarea name="input" 
            placeholder="Enter text here"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </>
    )
}
export default TextField