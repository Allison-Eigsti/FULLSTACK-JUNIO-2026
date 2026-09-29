let nombres = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Carlos" },
  { id: 3, nombre: "María" },
];

// Logic of CRUD functions
export function getAllNames() {
  return nombres;
}

export function createName(nombre) {
  const newId =
    nombres.length > 0
      ? Math.max(...nombres.map((item) => item.id)) + 1
      : 1;

  const newName = {
    id: newId,
    nombre,
  };

  nombres.push(newName);

  return newName;
}

export function updateName(id, nombre) {
  const name = nombres.find((item) => item.id === id);

  if (!name) {
    return null;
  }

  name.nombre = nombre;

  return name;
}

export function deleteName(id) {
  const index = nombres.findIndex((item) => item.id === id);

  if (index === -1) {
    return null;
  }

  const deletedName = nombres[index];

  nombres.splice(index, 1);

  return deletedName;
}
