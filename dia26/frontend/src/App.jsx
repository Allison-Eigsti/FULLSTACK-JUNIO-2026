import { useState, useEffect } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [city, setCity] = useState(null);
  const [main, setMain] = useState(null);
  const [temp, setTemp] = useState(null);
  const [active, setActive] = useState(false);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputCity = e.target[0].value;
    setCity(inputCity);
    setActive(true);
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true)

    const fetchCity = async () => {
      setError(null);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`,
          { signal },
        );

        if (!response.ok) {
          throw new Error("Could not fetch data from the server.");
        }

        const data = await response.json();
        setLoading(false)

        if (data.length === 0) {
          throw new Error("City not found.");
        }

        let cityLon = data[0].lon;
        let cityLat = data[0].lat;

        if (!isNaN(cityLon) && !isNaN(cityLat)) {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&units=metric&appid=${API_KEY}`,
            { signal },
          );

          if (!response.ok) {
            throw new Error("Could not fetch weather data.");
          }

          const forecastData = await response.json();

          setMain(forecastData.weather[0].main);
          setTemp(forecastData.main.temp);
        }
      } catch (error) {
        setLoading(false)
        
        if (error.name !== "AbortError") {
          setError(error.message);
          console.error(error);
        }
      }
    };

    fetchCity();

    const interval = setInterval(() => {
      fetchCity();
    }, 300000);

    return () => {
      controller.abort();
      clearInterval(interval);
    };
  }, [city]);

  return (
    <>
      <section className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-blue-500 uppercase tracking-widest mb-2">
              Weather App
            </p>

            <h1 className="text-3xl font-semibold text-slate-800">
              Current Conditions
            </h1>
          </div>

          {loading && (
            <div className="mb-6 rounded-lg border border-red-200 bg-gray-50 px-4 py-3 text-center text-sm text-red-600">
              <p className="text-2xl font-semibold text-slate-800">Loading...</p>
            </div>
          )}


          <div className={`${active ? "block" : "hidden"} text-center mb-8`}>
            <h2 className="text-xl font-medium text-slate-600 mb-4">
              Weather in <span className="text-slate-900">{city}</span>
            </h2>

            <div className="bg-slate-50 rounded-xl py-6 px-4">
              <p className="text-2xl font-semibold text-blue-500 mb-3">
                {main}
              </p>

              <p className="text-5xl font-light text-slate-800">{temp}°</p>

              <p className="text-sm text-slate-500 mt-2 mb-4">Celsius</p>

              <button
                onClick={() => fetchCity()}
                className="w-1/2 rounded-lg bg-blue-500 px-4 py-3 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
              >
                Refresh
              </button>
            </div>
          </div>

          {error && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-slate-700"
            >
              Search for a city
            </label>

            <input
              id="city"
              type="text"
              placeholder="Enter city name..."
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 px-4 py-3 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            >
              Search Weather
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
