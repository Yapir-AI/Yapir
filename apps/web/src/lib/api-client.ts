import { hc } from "hono/client";
import type { AppType } from "@yapir/api";

export const apiClient = hc<AppType>("/");
