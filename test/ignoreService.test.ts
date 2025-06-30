import { describe, expect, it } from "bun:test";
import type { GitProject } from "@/generated/prisma/client";
import { MergeRequestIgnoreService } from "@/lib/mergeRequest/ignoreService";

const defaultProject: GitProject = {
  name: "a",
  id: "b",
  originId: "1",
  url: "1",
  fullName: "1",
  providerType: "GITLAB",
  createdAt: new Date(),
  ignoreDraft: false,
  ignoreList: null,
  ignorePattern: null,
  connectorId: "1",
  instructionFile: null,
  customInstructionFile: false,
};

const defaultParams = {
  title: "Some MR",
  email: "bob@yapir.io",
  username: "bob",
  isDraft: true,
};

describe("MergeRequestIgnoreService possibilities", () => {
  const ignoreService = new MergeRequestIgnoreService();

  it("should not ignore by default", () => {
    const ignored = ignoreService.isIgnored(defaultProject, defaultParams);
    expect(ignored).toBeFalse();
  });

  it("should not ignore empty email", () => {
    const ignored = ignoreService.isIgnored(defaultProject, {
      ...defaultParams,
      email: "",
    });
    expect(ignored).toBeFalse();
  });

  it("should not ignore redacted email", () => {
    const ignored = ignoreService.isIgnored(defaultProject, {
      ...defaultParams,
      email: "[REDACTED]",
    });
    expect(ignored).toBeFalse();
  });

  it("should ignore if the MR is draft and project.ignoreDraft is true", () => {
    const project = { ...defaultProject, ignoreDraft: true };
    const result = ignoreService.isIgnored(
      { ...project, ignoreDraft: true },
      { ...defaultParams, isDraft: true },
    );
    expect(result).toBe(true);
  });

  it("should ignore if MR title matches ignorePattern", () => {
    const project = { ...defaultProject, ignorePattern: "WIP" };
    const ignored = ignoreService.isIgnored(
      { ...project, ignorePattern: defaultParams.title },
      defaultParams,
    );
    expect(ignored).toBeTrue();
  });

  it("should ignore if username is in ignoreList", () => {
    const ignored = ignoreService.isIgnored(
      {
        ...defaultProject,
        ignoreList: defaultParams.username.toUpperCase() + ",john",
      },
      defaultParams,
    );
    expect(ignored).toBeTrue();
  });

  it("should ignore if email is in ignoreList", () => {
    const ignored = ignoreService.isIgnored(
      {
        ...defaultProject,
        ignoreList: defaultParams.email.toUpperCase() + ",john",
      },
      defaultParams,
    );
    expect(ignored).toBeTrue();
  });

  it("should handle empty ignoreList safely", () => {
    const ignored = ignoreService.isIgnored(
      { ...defaultProject, ignoreList: "" },
      defaultParams,
    );
    expect(ignored).toBeFalse();
  });

  it("should handle empty ignorePattern safely", () => {
    const ignored = ignoreService.isIgnored(
      { ...defaultProject, ignorePattern: "" },
      defaultParams,
    );
    expect(ignored).toBeFalse();
  });
});
