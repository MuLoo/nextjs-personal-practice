import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import prisma from "../../../../prisma/client";
import credentialProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import GoogleProvider from 'next-auth/providers/google'



export const authOption: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    credentialProvider({
      name: 'Credentials',
      credentials: {
        email:  { label: 'Email', type: 'email', placeholder: 'Email'},
        password:  { label: 'Password', type: 'password', placeholder: 'password'},
      },
      async authorize(credentials, req)  {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await prisma.user.findUnique({ where: { email: credentials.email } })
        if (!user) return null;
        const match = await bcrypt.compare(credentials.password, user.hashedPassword!)
        return match ? user : null
      }
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!

    })
  ],
  // 当使用 adapter 时，next-auth 会将 session 策略改为 database。需要指明为 jwt
  session: {
    strategy: 'jwt'
  }
}