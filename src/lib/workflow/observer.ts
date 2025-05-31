import { LoggingObserver } from "@/lib/workflow/loggingObserver";

export interface WorkflowEvent {
  type:
    | "step_started"
    | "step_completed"
    | "step_error"
    | "workflow_started"
    | "workflow_completed"
    | "workflow_error";
  stepName?: string;
  timestamp: Date;
  context?: any;
  error?: Error;
  workflowId: string;
}

export interface WorkflowObserver {
  onEvent(event: WorkflowEvent): void | Promise<void>;
}

export const observers = {
  logger: new LoggingObserver(),
} as const;

export class Observers {
  private observers: WorkflowObserver[] = [];

  constructor(private readonly workflowId: string) {}

  add(observer: WorkflowObserver) {
    this.observers.push(observer);
  }

  async notify(
    eventType: WorkflowEvent["type"],
    context: any,
    stepName?: string,
    error?: any,
  ) {
    await Promise.all(
      this.observers.map((observer) =>
        observer.onEvent({
          type: eventType,
          timestamp: new Date(),
          context,
          workflowId: this.workflowId,
          stepName: stepName,
          error: error,
        }),
      ),
    );
  }

  stepError(stepName: string) {
    return async (e: any) => {
      await this.notify("step_error", undefined, stepName, e);
      throw e;
    };
  }
}
