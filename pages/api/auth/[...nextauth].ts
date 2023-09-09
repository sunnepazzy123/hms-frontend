import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";
import { JWT } from "next-auth/jwt";


export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials: any) {
        try {
          const res = await fetch(process.env.BACKEND_DOMAIN + "/auth/login", {
            method: "POST",
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
            headers: { "Content-Type": "application/json" },
          });

          if (!res.ok) {
            throw new Error("Unauthorized user");
          }

          const user = await res.json();
          return user;
        } catch (err: any) {
          throw new Error("Unauthorized user", err);
        }
      },
      credentials: {
        username: {
          label: "Username",
          type: "text"
        },
        password: {
          label: "Password",
          type: "text"
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      let verifiedToken = token;
      //@ts-ignore
      if (user && user.token) {
        try {
      //@ts-ignore
          const decodedToken = jwt.verify(user.token, process.env.JWT_SECRET);
      //@ts-ignore
          verifiedToken = { ...token, ...decodedToken, token: user.token! } as JWT;
         
          return verifiedToken;

        } catch (err: any) {
          throw new Error("Unauthorized user", err);
        }
      }

      return token
    },

    async session({session, token, user}) {
      session['user'] = {...session['user'], ...token}
      // // eslint-disable-next-line react-hooks/rules-of-hooks

      return session;
    },

    
  },
};

export default NextAuth(authOptions);
