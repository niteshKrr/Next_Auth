import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.CLINT_ID || "",
      clientSecret: process.env.CLINT_SECRETEKEY || "",
    }),
    // GoogleProvider({
    //     clientId: process.env.GOOGLE_ID,
    //     clientSecret: process.env.GOOGLE_SECRET
    //   }),
  ],
})