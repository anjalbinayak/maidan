import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
const handler = NextAuth({
  callbacks: {
    session({ session, token, user }) {
      return session // The return type will match the one returned in `useSession()`
    },
  },
  providers:[
    GithubProvider({
        clientId: String(process.env.GITHUB_ID),
        clientSecret: String(process.env.GITHUB_SECRET)
    })
  ]
});

export {handler as GET, handler as POST}