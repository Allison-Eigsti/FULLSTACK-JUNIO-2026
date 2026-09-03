import { useState, useEffect } from 'react'


function Alert() {
    const [ key, setKey ] = useState('key')

    function keyPres(e) {
        console.log(12312312)
        setKey(e.key)
    }

    useEffect(() => {
        document.addEventListener("keydown", keyPres)

        return () => document.removeEventListener("keydown", keyPres);
    }, [])


    return(
        <>
            <div>{key}</div>
        </>
    )
}

export default Alert