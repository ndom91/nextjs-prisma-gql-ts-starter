import NextAuth from 'next-auth'
import prisma from '../../../lib/prisma'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({
    prisma,
    modelMapping: {
      User: 'user',
      Account: 'account',
      Session: 'session',
      VerificationRequest: 'verificationRequest',
    },
  }),
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.JWT_SECRET,
  jwt: {
    encryption: true,
    secret: process.env.JWT_SECRET,
  },

  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
})
