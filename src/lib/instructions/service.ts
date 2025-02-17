import { db, type Db } from "@/lib/db";
import { instructions } from "@/lib/db/schema";

export class InstructionService {
  private readonly db: Db;

  constructor(opts: { db: Db }) {
    this.db = opts.db;
  }

  async getDefaultInstructions() {
    return (
      (await this.db.query.instructions.findFirst()) ??
      db
        .insert(instructions)
        .values({
          title: "Default instructions",
          content: "",
        })
        .returning()
        .then((e) => e[0])
    );
  }
}
