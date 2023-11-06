import { NextRequest, NextResponse } from "next/server";

//prevent caching by adding request object
export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "John",
      email: "john.doe@op.com",
    },
    {
      id: 1,
      name: "Dave",
      email: "dave.doe@op.com",
    },
  ]);
}
