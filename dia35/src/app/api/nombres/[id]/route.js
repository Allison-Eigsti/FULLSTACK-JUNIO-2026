import {
  updateName,
  deleteName,
} from "@/models/nombres";

export async function PUT(req, { params }) {
  const { id } = await params;

  const body = await req.json();

  const updatedName = updateName(
    Number(id),
    body.nombre
  );

  if (!updatedName) {
    return Response.json(
      { error: "Nombre no encontrado" },
      { status: 404 }
    );
  }

  return Response.json(updatedName);
}

export async function DELETE(req, { params }) {
  const { id } = await params;

  const deletedName = deleteName(Number(id));

  if (!deletedName) {
    return Response.json(
      { error: "Nombre no encontrado" },
      { status: 404 }
    );
  }

  return Response.json(deletedName);
}
