import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const clientSecretGit = process.env.CLIENT_SECRET;
const clientIdGit = process.env.CLIENT_ID;


export const authOption = {
  providers: [
    GithubProvider({
      clientId: "7bc2bde909ec6eb45d",
      clientSecret: "1d0cc5f577460d22abadcab0d2867a689c5eb",
    }),
  ],
};

export default NextAuth(authOption);
