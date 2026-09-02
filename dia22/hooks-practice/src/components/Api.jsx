import { useState } from 'react'

function Api() {
    const [ images, setImages ] = useState([])

    async function handleImages() {
        try {
            let response = await fetch("https://picsum.photos/200/300")

            if (!response) {
                throw new Error("Failed to fetch image")
            }

            setImages(prevImages => [...prevImages, response.url])

        }
        catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <h1>Images</h1>

            <ul>
                {images.map((image, index) => (
                    <li key={index}>
                        <img src={image} alt="Random image"/>
                    </li>
                ))}
            </ul>
            
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" onClick={handleImages}>Generate Image</button>
        </>
    )
}

export default Api