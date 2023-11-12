import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

//prevent caching by adding request object
export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({
    id: 1,
    name: "John",
    email: "john.doe@op.com",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ ...body, id: 1 });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({});
}
