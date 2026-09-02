import { useState } from "react"

function Toggle() {
    const [toggle, setToggle] = useState(false)

    function handleToggle() {
        setToggle(!toggle)
    }

    return (
        <>
            <button className={`px-4 py-2 text-white rounded ${toggle
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-red-600 hover:bg-red-700"
                }`} onClick={() => handleToggle()}>{toggle ? "On" : "Off"}</button>
        </>
    )
}
export default Toggle