export async function GET() {
    return Response.json({
        message: "Hola desde la API",
        timestamp: new Date().toLocaleDateString()
    })
}