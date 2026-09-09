import { useState, useEffect } from 'react'
const API_KEY = import.meta.env.VITE_API_KEY;


function App() {
  const [ city, setCity ] = useState('')
  const [ main, setMain ] = useState('')
  const [ temp, setTemp ] = useState(null)
  const [ active, setActive ] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()

    const inputCity = e.target[0].value
    setCity(inputCity)
    setActive(true)
  }


  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`)
        const data = await response.json()

        let cityLon = parseInt(data[0].lon)
        let cityLat = parseInt(data[0].lat)
        console.log(cityLat, cityLon)
    
        if (!isNaN(cityLon) && !isNaN(cityLat)) {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&units=metric&appid=${API_KEY}`)
            const forecastData = await response.json()

            setMain(forecastData.weather[0].main)
            setTemp(forecastData.main.temp)

            console.log(`Temp: ${forecastData.main.temp}`)
            console.log(forecastData.weather[0].main)
            console.log(forecastData)}

      } catch (error) {
        console.error(error)
      }
    }

    fetchCity()
  }, [city])

  return (
    <>
    <section className="flex flex-col items-center justify-center bg-gray-100">

    <h1>Current Conditions:</h1>

    <div className={`${active ? "visible" : "hidden"}`}>
      <h2>Weather in {city}:</h2>
      <p>{main}</p>
      <p>Temperature: {temp} degrees Celcius</p>
    </div>

   <form onSubmit={handleSubmit} className='flex flex-col items-center'>
    <input type="text" 
            placeholder='Enter city here...' className='mb-2 p-2 border rounded'/>
    <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded'>Search Weather</button>
   </form>

   </section>
    </>
  )
}

export default App
