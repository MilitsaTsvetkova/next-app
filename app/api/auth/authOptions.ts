import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import CredentialsProvider from 'next-auth/providers/credentials'
import TwitterProvider from "next-auth/providers/twitter";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: 'email', type: 'email', placeholder: 'Email' },
          password: {
            label: 'password',
            type: 'password',
            placeholder: 'Password',
          },
        },
        async authorize(credentials, req) {
          if (!credentials?.email || !credentials?.password) return null
  
          const user = await prisma.user.findUnique({
            where: { email: credentials?.email },
          })
          if (!user) return null
          const passwordsMatch = await bcrypt.compare(
            credentials.password,
            user.hashedPassword!
          )
          return passwordsMatch ? user : null
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID!,
        clientSecret: process.env.TWITTER_CLIENT_SECRET!,
        version: "2.0"
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!
      })
    ],
    session: {
      strategy: 'jwt',
    },
  }