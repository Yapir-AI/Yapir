import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { ReviewEntity } from "@/lib/db/schema";
import { cn } from "@/lib/utils";
import { Chat } from "@/app/(auth)/(home)/chat";
import { EmptyCard } from "@/components/rich/emptyCard";
import type { Route } from "next";
import { container } from "@/lib/di/container";
import { routes } from "@/lib/route";

export default async function HomePage() {
  const reviews = await container.resolve("reviewService").listReviews();

  const formatDate = (date: Date) => {
    return formatDistanceToNow(date);
  };

  if (reviews.length === 0) return <NoReviews />;

  return (
    <Accordion type="multiple" className="space-y-4">
      {reviews.map((review) => (
        <AccordionItem asChild key={review.id} value={review.id}>
          <Card className="px-8 py-2">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex grow items-center justify-between">
                <div>
                  <CardTitle className="text-xl">
                    {review.pull_name}{" "}
                    <span className="font-light text-muted-foreground">
                      #{review.pull_number}
                    </span>
                    <StatusBadge status={review.status} />
                  </CardTitle>
                  <CardDescription>{review.repo_name}</CardDescription>
                  <CardDescription>{formatDate(review.at)} ago</CardDescription>
                </div>
                <div>
                  <Button asChild variant="link">
                    <Link href={review.pull_url as Route}>
                      Go to PR <ExternalLink />
                    </Link>
                  </Button>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <Chat {...review} />
            </AccordionContent>
          </Card>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function StatusBadge({ status }: Pick<ReviewEntity, "status">) {
  return (
    <div
      className={cn(
        "ml-5 inline-block size-3 rounded-full bg-red-50",
        status === "REVIEWED" && "bg-green-400",
        status === "PENDING" && "animate-pulse bg-yellow-400",
        status === "ERROR" && "bg-red-500",
      )}
    />
  );
}

function NoReviews() {
  return (
    <EmptyCard>
      <CardTitle>No review yet</CardTitle>
      <CardDescription className="text-center">
        <p>Looks like Yapir has not reviewed anything yet.</p>
        <p>
          Have you{" "}
          <Link className="underline hover:no-underline" href={routes.git}>
            connected a Git source?
          </Link>
        </p>
      </CardDescription>
    </EmptyCard>
  );
}
