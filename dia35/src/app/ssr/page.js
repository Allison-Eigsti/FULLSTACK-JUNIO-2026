import { fetchRepo } from "@/hooks/fetchRepo";

export default async function Page() {
  const data = await fetchRepo();

  return (
    <main>
      <h1>My SSR Page</h1>
      <p>{data.message}</p>
    <p>{data.timestamp}</p>
    </main>
  );
}

// this one fetches the data from the server before the browser loads so that the html is sent the browser with the data already input, loads all at once