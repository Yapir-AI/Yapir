import { type } from "arktype";

const envSchema = type({
  GITHUB_APP_ID: type("string").pipe(Number).to("number.integer"),
  GITHUB_APP_SLUG: "string > 0",
  GITHUB_APP_PRIVATE_KEY: "string > 0",
  GITHUB_APP_OAUTH_CLIENT_ID: "string > 0",
  GITHUB_APP_OAUTH_CLIENT_SECRET: "string > 0",
}).pipe((source) => ({
  githubApp: {
    appId: source.GITHUB_APP_ID,
    appSlug: source.GITHUB_APP_SLUG,
    privateKey: source.GITHUB_APP_PRIVATE_KEY,
    oauthClientId: source.GITHUB_APP_OAUTH_CLIENT_ID,
    oauthClientSecret: source.GITHUB_APP_OAUTH_CLIENT_SECRET,
  },
}));

export const env = envSchema.assert(process.env);

export type AppEnv = typeof env;
