// Next auth
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

// Miscellaneous
import { prisma } from "./prisma";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  // This is a temporary fix for prisma client.
  // @see https://github.com/prisma/prisma/issues/16117
  adapter: PrismaAdapter(prisma as any),
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.researcher.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !(await compare(credentials.password, user.password!))) {
          return null;
        }

        return {
          id: user.id + "",
          email: user.email,
          firstname: user.firstname,
          randomKey: "Hey cool",
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      // console.log(session, "wjwkwkwkwkwkwkwkwk");

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          email: token.email,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          email: u.email,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
