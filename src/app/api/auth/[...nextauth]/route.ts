import { PrismaClient } from "@prisma/client"
import NextAuth from "next-auth"
import { authOption } from "../authOption"


const prisma = new PrismaClient()



const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
