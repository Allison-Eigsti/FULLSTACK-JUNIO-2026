import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState(null);


  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputName = e.target[0].value;
    setName(inputName);
    setActive(true);
  };

  useEffect(() => {
    if (!name) return;

    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true)
    setError(null);

    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`,
          { signal }
        );

        if (!response.ok) {
          throw new Error("Could not fetch data from the server.");
        }

        const data = await response.json();
        setPokemon(data)

        console.log(data)
        console.log(data.id)


      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
          console.error(error);
        }
      } finally {
        setLoading(false)
      }
    };

    fetchPokemon();

    return () => {
      controller.abort();
    };
  }, [name]);

  return (
    <>
      <section className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

          <div className="text-center mb-8">
            <p className="text-sm font-medium text-blue-500 uppercase tracking-widest mb-2">
              Fetch and Display Pokemon Information
            </p>

          </div>

          {loading && (
            <div className="mb-6 rounded-lg border border-red-200 bg-gray-50 px-4 py-3 text-center text-sm text-red-600">
              <p className="text-2xl font-semibold text-slate-800">Loading...</p>
            </div>
          )}

          {pokemon && (
          <div className="text-center mb-8">

            <div className="bg-slate-50 rounded-xl py-6 px-4 flex flex-col">
              <p className="text-2xl font-semibold text-blue-500 mb-3">
                {name}
              </p>

              <img src={`${pokemon.sprites.front_default}`}></img>

              <p className="text-md text-black-500 mt-2 mb-4">Weight: {pokemon.weight}</p>
              <p className="text-md text-black-500 mt-2 mb-4">Height: {pokemon.height}</p>
              <p className="text-md text-black-500 mt-2 mb-4">Type: {pokemon.types[0].type.name}</p>
            </div>
          </div>
          )}

          {error && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <label
              htmlFor="pokemon"
              className="block text-sm font-medium text-slate-700"
            >
              Search for a Pokemon
            </label>

            <input
              id="pokemon"
              type="text"
              placeholder="Enter Pokemon name..."
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 px-4 py-3 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            >
              Search Pokemon
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
