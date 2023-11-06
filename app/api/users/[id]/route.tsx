import { NextRequest, NextResponse } from "next/server";

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
