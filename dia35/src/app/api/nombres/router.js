// /pages/api/nombres/router.js

export async function POST(req, { params }) {
    const { name } = params
    const body = await req.json()
    return Response.json( )
}
