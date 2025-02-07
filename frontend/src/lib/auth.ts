import { jwt } from "@/lib/utils";
import type { NextAuthOptions, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import fetchClient from "./fetchClient";
import { queryfi } from "./queryfi";

const loginUrl = queryfi("/api/login").build();
const userUrl = queryfi("/api/user").build();
const logoutUrl = queryfi("/api/logout").build();
const refreshUrl = queryfi("/api/refresh").build();

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: parseInt(process.env.NEXTAUTH_JWT_AGE!) || 1209600,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        try {
          const { data } = await fetchClient({
            method: "POST",
            url: loginUrl,
            body: credentials,
            easyFetch: true,
          });

          const authData: {
            user: User;
            access_token: string;
          } = data?.content;

          if (!authData?.access_token) {
            throw data;
          }

          return {
            ...authData.user,
            accessToken: authData?.access_token,
          };
        } catch (error) {
          console.log(error, "the error");
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        if (session.type === "MANUAL") {
          const { data } = await fetchClient({
            url: userUrl,
            token: token.accessToken,
          });

          return { ...token, ...data.content };
        }

        return { ...token, ...session };
      }

      if (user) {
        return { ...token, ...user };
      }

      const { exp: accessTokenExpires } = jwt.decode(token.accessToken);

      if (!accessTokenExpires) {
        return token;
      }

      const currentUnixTimestamp = Math.floor(Date.now() / 1000);
      const accessTokenHasExpired = currentUnixTimestamp > accessTokenExpires;

      if (accessTokenHasExpired) {
        return await refreshAccessToken(token);
      }

      return token;
    },
    async signIn({ user }) {
      if (user) {
        return true; // Successful login
      } else {
        return false; // Prevent redirection
      }
    },
    async session({ session, token }) {
      if (token.error) {
        throw new Error("Refresh token has expired");
      }

      session.accessToken = token.accessToken;
      session.user.name = token.name || "";
      session.user.email = token.email || "";
      session.user.email_verified_at = token.email_verified_at;
      session.user.id = token.id;

      return session;
    },
  },
  events: {
    async signOut({ token }) {
      await fetchClient({
        method: "POST",
        url: logoutUrl,
        token: token.accessToken,
      });
    },
  },
};

async function refreshAccessToken(token: JWT) {
  try {
    const { data } = await fetchClient({
      method: "POST",
      url: refreshUrl,
      token: token.accessToken,
    });

    if (!data.status) throw data;

    const refreshedAccessToken: { access_token: string } = data;

    const { exp } = jwt.decode(refreshedAccessToken.access_token);

    return {
      ...token,
      accessToken: refreshedAccessToken.access_token,
      exp,
    };
  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}
