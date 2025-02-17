export const ReviewStatus = ["REVIEWED", "PENDING", "ERROR"] as const;
export type ReviewStatus = (typeof ReviewStatus)[number];
