import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { z } from "zod";
import bcrypt from 'bcrypt'

// 只有接口，界面后续补充

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5)
})

export async function POST(req: NextRequest) {
  const body = await req.json();
  const valation = schema.safeParse(body);
  if (!valation.success) return NextResponse.json(valation.error.errors, { status: 400 });
  const exist = await prisma.user.findUnique({
    where: { email: body.email }
  })
  if (exist) return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
  const user = await prisma.user.create({
    data: {
      name: body.name || '',
      email: body.email,
      hashedPassword: await bcrypt.hash(body.password, 10)
    }
  })
  return NextResponse.json(user, { status: 200 });
}