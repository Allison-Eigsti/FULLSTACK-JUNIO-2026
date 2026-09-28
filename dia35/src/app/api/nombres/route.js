import {
  getAllNames,
  createName,
} from "@/models/nombres";

export async function GET() {
  const nombres = getAllNames();

  return Response.json(nombres);
}

export async function POST(req) {
  const body = await req.json();

  if (!body.nombre) {
    return Response.json(
      { error: "El nombre es obligatorio" },
      { status: 400 }
    );
  }

  const newName = createName(body.nombre);

  return Response.json(newName, { status: 201 });
}




// let nombres = ['Ana', 'Carlos', 'Maria']


// export async function GET() {
//     return Response.json(nombres)
// }


// export async function POST(request){
//     const body = await request.json()

//     nombres.push(body.nombre)

//     console.log('Nombres recibidos', nombres)

//     return Response.json({ recibido: true, nombre: body.nombre })
// }

