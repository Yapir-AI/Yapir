import type { Options } from "@sentry/core";
import packageJson from "./package.json";

export const sentryDefaultOptions: Options = {
  dsn: "https://6303a6a3c5b05e01dbb4258b60cd7672@o4509005298532352.ingest.de.sentry.io/4509005301612624",

  release: "yapir@" + packageJson.version,

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
};
