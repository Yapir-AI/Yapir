import { HTTPException } from "hono/http-exception";
import type { ContentfulStatusCode } from "hono/utils/http-status";
import { ErrorCode, ErrorCodes } from "@/lib/errors/error.code";

export type ProblemDetail = {
  title: ErrorCode;
  status: number;
  detail: string;
};

function httpError(errorCode: ErrorCode, status: ContentfulStatusCode) {
  const problemDetail: ProblemDetail = {
    title: errorCode,
    status,
    detail: ErrorCodes[errorCode],
  };

  return new HTTPException(status, {
    res: Response.json(problemDetail, { status }),
  });
}

export const forbidden = (errorCode: ErrorCode) => httpError(errorCode, 403);
export const badRequest = (errorCode: ErrorCode) => httpError(errorCode, 400);
export const notFound = (errorCode: ErrorCode) => httpError(errorCode, 404);
export const unauthorized = (errorCode: ErrorCode) => httpError(errorCode, 401);
