import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";

export default NextAuth({
  // Configure one or more authentication providers
  debug: true,
  secret: process.env.JWT_SECRET,
  pages: {
    error: "/",
    newUser: "/dashboard", // New users will be directed here on first sign in (leave
  },

  session: {
    maxAge: 29 * 24 * 60 * 60, // 29 days
    updateAge: 5 * 60 * 60,
  },
  theme: "dark",

  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn(user, account, meta) {
      if (account.provider === "github") {
        let res = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/users/github`,
          {
            accessToken: account.accessToken,
          }
        );

        res = res.data.result;

        user.access_token = res.access_token;
        user.id = res.user._id;
        user.provider = res.user.provider;
        user.avatar = res.user.avatar;
        user.email = res.user.email;
        user.name = res.user.name;
        user.username = res.user.username;

        return true;
      }
      if (account.provider === "google") {
        let res = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/users/google`,
          {
            accessToken: account.accessToken,
          }
        );

        res = res.data.result;

        user.access_token = res.access_token;
        user.id = res.user._id;
        user.provider = res.user.provider;
        user.avatar = res.user.avatar;
        user.email = res.user.email;
        user.name = res.user.name;
        user.username = res.user.username;

        return true;
      }
      return false;
    },
    async jwt(token, user) {
      if (user) {
        token = {
          access_token: user.access_token,
          user: {
            id: user.id,
            avatar: user.avatar,
            name: user.name,
            username: user.username,
            email: user.email,
            provider: user.provider,
          },
        };
      }

      return token;
    },
    async session(session, token) {
      try {
        let res = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/users/${token.user.id}`,
          {
            headers: {
              authorization: `Bearer ${token.access_token}`,
            },
          }
        );

        res = res.data.result;

        session.tokens = {
          access_token: res.access_token,
        };

        session.user = res.user;

        return session;
      } catch (error) {
        console.log("error: ", error);
        return false;
      }
    },
  },
});
