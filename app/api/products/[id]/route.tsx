import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const updatedProduct = await prisma.product.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(updatedProduct);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  const deletedProduct = await prisma.product.delete({
    where: { id: parseInt(params.id) },
  });
  return NextResponse.json({});
}
