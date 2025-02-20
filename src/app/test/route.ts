import { container } from "@/lib/di/container";

export async function GET() {
  const projects = await container.cradle.reviewerService.getProjectReviewers(
    "0b2c15b9-3f9c-467e-85a3-d39941212b47",
  );
  return Response.json(projects);
}
