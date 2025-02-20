import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Required for security
};

// ✅ Correct way to use NextAuth in App Router
const handler = NextAuth(authOptions);

// ✅ Correct export for App Router
export { handler as GET, handler as POST };
