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
    jwt: true,

    maxAge: 29 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  theme: "dark",

  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn(user, account, meta) {
      if (account.provider === "github") {
        let res = await axios.post("http://localhost:4000/users/github", {
          accessToken: account.accessToken,
        });

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
      let res = await axios.get(
        `http://localhost:4000/users/${token.user.id}`,
        {
          headers: {
            authorization: `Bearer ${token.access_token}`,
          },
          withCredentials: true,
        }
      );

      res = res.data.result;

      session.tokens = {
        access_token: res.access_token,
      };

      session.user = res.user;

      return session;
    },
  },
});
