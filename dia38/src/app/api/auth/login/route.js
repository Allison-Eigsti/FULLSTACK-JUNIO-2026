import { NextResponse } from "next/server";
import { loginUser } from "@/lib/auth";

export async function POST(request) {
  try {
    const body = await request.json();

    const result = await loginUser({
      name: body.name,
      password: body.password,
    });

    if (!result.success) {
      return NextResponse.json(
        {
          message: result.message,
        },
        {
          status: result.status,
        }
      );
    }

    const response = NextResponse.json(
      {
        message: result.message,
        user: result.user,
      },
      {
        status: result.status,
      }
    );

    // Store JWT in an HTTP-only cookie
    response.cookies.set("token", result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login route error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
