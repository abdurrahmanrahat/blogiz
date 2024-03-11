import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "Hello from Api Route" });
};

export const POST = async (request: Request) => {
  return NextResponse.json({ message: "Hello from Api Route" });
};

export const DELETE = async () => {
  return NextResponse.json({ message: "Hello from Api Route" });
};

export const PUT = async () => {
  return NextResponse.json({ message: "Hello from Api Route" });
};

export const PATCH = async () => {
  return NextResponse.json({ message: "Hello from Api Route" });
};
