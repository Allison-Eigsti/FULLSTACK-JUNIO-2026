import { registerUser } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const result = await registerUser({
      name: body.name,
      password: body.password,
    });

    return NextResponse.json(
      {
        message: result.message,
        ...(result.user && { user: result.user }),
      },
      {
        status: result.status,
      }
    );
  } catch (error) {
    console.error("Register route error:", error);

    return Response.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
