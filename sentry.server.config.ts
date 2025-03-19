// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { sentryDefaultOptions } from "./sentry.config";

Sentry.init({
  ...sentryDefaultOptions,
  integrations: [Sentry.prismaIntegration(), Sentry.vercelAIIntegration()],
});
