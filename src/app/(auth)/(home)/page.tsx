import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Chat } from "@/app/(auth)/(home)/chat";
import { EmptyCard } from "@/components/rich/emptyCard";
import { container } from "@/lib/di/container";
import { routes } from "@/lib/route";
import type { ReviewStatus } from "@prisma/client";
import type { ReviewListElement } from "@/lib/review/service";
import { Avatar } from "@/lib/avatar";
import { botttsNeutral, glass } from "@dicebear/collection";

export default async function HomePage() {
  const reviews = await container.resolve("reviewService").listReviews();

  if (reviews.length === 0) return <NoReviews />;

  return (
    <Accordion type="multiple" className="space-y-4">
      {reviews.map((review) => (
        <AccordionItem asChild key={review.id} value={review.id}>
          <Card className="px-8 py-2">
            <AccordionTrigger className="hover:no-underline">
              <ReviewHeader {...review} />
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

function ReviewHeader({
  reviewer,
  project,
  pullName,
  pullNumber,
  status,
  at,
  pullUrl,
}: ReviewListElement) {
  return (
    <div className="flex grow items-center justify-between">
      <div className="flex gap-4">
        <Avatar
          style={glass}
          options={{ seed: project.name, size: 68, radius: 10 }}
        />
        <div className="flex flex-col justify-evenly">
          <Link href={pullUrl} target="_blank">
            <CardTitle className="text-xl hover:underline">
              {pullName}{" "}
              <span className="font-light text-muted-foreground">
                #{pullNumber}
              </span>
              <StatusBadge status={status} />
            </CardTitle>
          </Link>
          <CardDescription>{project.fullName}</CardDescription>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col justify-evenly text-right">
          <CardTitle className="text-xl">{reviewer.name}</CardTitle>
          <CardDescription>{formatDate(at)} ago</CardDescription>
        </div>
        <Avatar
          style={botttsNeutral}
          options={{ seed: reviewer.name, size: 68, radius: 10 }}
        />
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: ReviewStatus }) {
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

const formatDate = (date: Date) => {
  return formatDistanceToNow(date);
};
