import { Observers, type WorkflowObserver } from "@/lib/workflow/observer";

export type WorkflowStep<TInput extends Object = {}, TOutput = void> = (
  input: TInput,
) => Promise<TOutput>;

type NamedStep<TInput extends Object = {}, TOutput = void> = {
  name: string;
  step: WorkflowStep<TInput, TOutput>;
};

export class Workflow<Input extends Object, Context extends Object = Input> {
  private steps: NamedStep<any, any>[] = [];
  private readonly observers: Observers;

  static new<T extends Object>(workflowId: string): Workflow<T> {
    return new Workflow(workflowId);
  }

  constructor(private readonly workflowId: string) {
    this.observers = new Observers(workflowId);
  }

  async execute(initialContext: Input): Promise<Context> {
    let context = initialContext;

    await this.observers.notify("workflow_started", context);

    try {
      for (const { step, name } of this.steps) {
        await this.observers.notify("step_started", context, name);
        const output = await step(context).catch(
          this.observers.stepError(name),
        );
        if (output) {
          context = { ...context, ...output };
        }
        await this.observers.notify("step_completed", context, name);
      }

      await this.observers.notify("workflow_completed", context);

      return context as unknown as Context;
    } catch (e) {
      await this.observers.notify("workflow_error", context, undefined, e);
      throw e;
    }
  }

  addObserver(observer: WorkflowObserver): this {
    this.observers.add(observer);
    return this;
  }

  addStep<StepOutput>(
    name: string,
    step: WorkflowStep<Context, StepOutput>,
  ): Workflow<Input, Context & NullishSafe<StepOutput>> {
    this.steps.push({ name, step });

    return this as any;
  }

  parallel<T extends object>(
    name: string,
    mapFn: (context: Context) => T[],
  ): ParallelBuilder<Input, Context, T> {
    return new ParallelBuilder<Input, Context, T>(
      this,
      mapFn,
      name,
      this.observers,
    );
  }
}

export class ParallelBuilder<
  Input extends object,
  Context extends object,
  T extends object,
> {
  private steps: NamedStep<any, any>[] = [];

  constructor(
    private workflow: Workflow<Input, Context>,
    private mapFn: (context: Context) => T[],
    private name: string,
    private observers: Observers,
  ) {}

  addStep<StepOutput>(
    name: string,
    step: WorkflowStep<T, StepOutput>,
  ): ParallelBuilder<Input, Context, T & NullishSafe<StepOutput>> {
    this.steps.push({ name, step });
    return this as any;
  }

  join<JoinOutput extends object>(
    joinFn: (results: T[]) => JoinOutput,
  ): Workflow<Input, Context & NullishSafe<JoinOutput>> {
    const parallelStep: WorkflowStep<Context, JoinOutput> = async (context) => {
      const items = this.mapFn(context);

      const results = await Promise.all(
        items.map(async (item, index) => {
          let result: any = item;

          for (const { step, name } of this.steps) {
            const stepName = `${this.name}[${index}].${name}`;
            await this.observers.notify("step_started", result, stepName);

            const output = await step(result).catch(
              this.observers.stepError(stepName),
            );
            if (output) {
              result = { ...result, ...output };
            }
            await this.observers.notify("step_completed", result, stepName);
          }

          return result;
        }),
      );
      return joinFn(results);
    };

    return this.workflow.addStep(this.name, parallelStep);
  }
}

type NullishSafe<T> = T extends null | undefined | void ? {} : T;
