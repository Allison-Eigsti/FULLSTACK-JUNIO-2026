export async function fetchRepo() {
  const response = await fetch("http://localhost:3000/api");

  if (!response.ok) {
    throw new Error("Failed to fetch /api");
  }

  return response.json();
}