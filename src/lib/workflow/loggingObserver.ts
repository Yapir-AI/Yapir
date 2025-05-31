import type { WorkflowEvent, WorkflowObserver } from "@/lib/workflow/observer";

export class LoggingObserver implements WorkflowObserver {
  async onEvent(event: WorkflowEvent): Promise<void> {
    console.log(
      `[${event.type}] ${event.stepName || "Workflow"} at ${event.timestamp.toISOString()}`,
    );

    if (event.error) {
      console.error(`Error in ${event.stepName || "Workflow"}:`, event.error);
    }
  }
}
