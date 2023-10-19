import { NextRequest, NextResponse } from "next/server";
import schema from '../schema';
import prisma from "../../../../../prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  // // Fech data from a db 
  // // if not found ,return 404
  // if (params.id > 10) {
  //   return NextResponse.json({
  //     error: 'user not found'
  //   }, {
  //      status: 404,
  //   })
  // }
  // return NextResponse.json({
  //   id: 1,
  //   name: 'shikinami auska'
  // })
  const user = await prisma.user.findUnique({
    where: {
      id: params.id
    }
  })
  if (!user) { 
    return NextResponse.json({
      error: 'user not found'
    }, {
        status: 404,
    })
  }
  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params}: { params: { id: string } }) {
  const body = await request.json();
  const validation = schema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 404 })
  }
  if (!body.name) return NextResponse.json({ error: 'Name is required' }, { status: 400 });

  const users = await prisma.user.findUnique({
    where: {
      id: params.id
    }
  })
  if (!users) return NextResponse.json({ error: 'User not found' }, { status: 400 });

  const updatedUser = await prisma.user.update({
    where: { id: users.id },
    data: {
      name: body.name,
      email: body.email
    }
  })
  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  })
  if (!user) return NextResponse.json({ error: 'user not exist' }, { status: 404 })
  await prisma.user.delete({
    where: {
      id: params.id
    }
  })
  return NextResponse.json({ message: 'ok'}, { status: 200 });
}