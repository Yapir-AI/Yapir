import { OTLPHttpJsonTraceExporter, registerOTel } from "@vercel/otel";
import { PrismaInstrumentation } from "@prisma/instrumentation";
import { diag, DiagConsoleLogger, DiagLogLevel } from "@opentelemetry/api";
import packageJson from "../package.json";

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

export function register() {
  const signozUrl = process.env.SIGNORE_URL;
  const signozToken = process.env.SIGNOZ_INGESTION_KEY;

  if (!signozToken || !signozToken) return;

  registerOTel({
    serviceName: "Yapir",
    attributes: {
      "service.version": packageJson.version,
    },
    instrumentations: [new PrismaInstrumentation()],
    traceExporter: new OTLPHttpJsonTraceExporter({
      url: signozUrl,
      headers: {
        "signoz-access-token": signozToken,
      },
    }),
  });
}
