import type { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { storeUserLogin, validateUser } from "../../lib/user";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username: ",
          type: "text",
          placeholder: "your-name",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        try {
          const user = await validateUser(
            credentials.username,
            credentials.password
          );

          if (user && user.username) {
            await storeUserLogin(user.username);

            return {
              id:
                user._id?.toString() ||
                user.id?.toString() ||
                credentials.username,
              name: user.username,
              email: user.email || null,
            };
          }
          return null;
        } catch (error) {
          console.error("login error", error);
          return null;
        }
      },
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};
