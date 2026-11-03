import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'PEC.UP Student Login',
      credentials: {
        email: { label: 'Email', type: 'text' },
      },
      async authorize(credentials) {
        return {
          id: '23A91A1225',
          name: 'Kamichetty Veera Pradeepthi',
          email: credentials?.email || 'deepthikamichetty336@gmail.com',
          image: null,
        };
      },
    }),
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_ID !== 'dummy_google_client_id'
      ? [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
              params: {
                prompt: 'select_account',
              },
            },
          }),
        ]
      : []),
  ],
  secret: process.env.NEXTAUTH_SECRET || 'pecup_secret_demo_key_9876543210',
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = (token.email as string) || 'deepthikamichetty336@gmail.com';
        session.user.name = (token.name as string) || 'Kamichetty Veera Pradeepthi';
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
