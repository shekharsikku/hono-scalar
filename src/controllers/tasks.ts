import type { AppRouteHandler } from "@/configs/types";
import { eq } from "drizzle-orm";
import db from "@/configs/db";
import { tasks } from "@/configs/db/schema";
<<<<<<< HEAD
import { HttpStatusCodes, HttpStatusPhrases } from "@/utils";
import { ZOD_ERROR_CODES, ZOD_ERROR_MESSAGES } from "@/utils";
=======
import { HttpStatusCodes, HttpStatusPhrases, ZOD_ERROR_CODES, ZOD_ERROR_MESSAGES } from "@/utils";

>>>>>>> temp
import type {
  CreateRoute,
  GetOneRoute,
  ListRoute,
  PatchRoute,
  RemoveRoute,
} from "@/routes/tasks";

export const list: AppRouteHandler<ListRoute> = async (c) => {
  const tasks = await db.query.tasks.findMany();
  return c.json(tasks);
};

export const create: AppRouteHandler<CreateRoute> = async (c) => {
  const task = c.req.valid("json");
  const [inserted] = await db.insert(tasks).values(task).returning();
  return c.json(inserted, HttpStatusCodes.OK);
};

export const getOne: AppRouteHandler<GetOneRoute> = async (c) => {
  const { id } = c.req.valid("param");
  const task = await db.query.tasks.findFirst({
    where(fields: any, operators: any) {
      return operators.eq(fields.id, id);
    },
  });

  if (!task) {
    return c.json(
      {
        message: HttpStatusPhrases.NOT_FOUND,
      },
<<<<<<< HEAD
      HttpStatusCodes.NOT_FOUND
=======
      HttpStatusCodes.NOT_FOUND,
>>>>>>> temp
    );
  }

  return c.json(task, HttpStatusCodes.OK);
};

export const patch: AppRouteHandler<PatchRoute> = async (c) => {
  const { id } = c.req.valid("param");
  const updates = c.req.valid("json");

  if (Object.keys(updates).length === 0) {
    return c.json(
      {
        success: false,
        error: {
          issues: [
            {
              code: ZOD_ERROR_CODES.INVALID_UPDATES,
              path: [],
              message: ZOD_ERROR_MESSAGES.NO_UPDATES,
            },
          ],
          name: "ZodError",
        },
      },
<<<<<<< HEAD
      HttpStatusCodes.UNPROCESSABLE_ENTITY
=======
      HttpStatusCodes.UNPROCESSABLE_ENTITY,
>>>>>>> temp
    );
  }

  const [task] = await db
    .update(tasks)
    .set(updates)
    .where(eq(tasks.id, id))
    .returning();

  if (!task) {
    return c.json(
      {
        message: HttpStatusPhrases.NOT_FOUND,
      },
<<<<<<< HEAD
      HttpStatusCodes.NOT_FOUND
=======
      HttpStatusCodes.NOT_FOUND,
>>>>>>> temp
    );
  }

  return c.json(task, HttpStatusCodes.OK);
};

export const remove: AppRouteHandler<RemoveRoute> = async (c) => {
  const { id } = c.req.valid("param");
  const result = await db.delete(tasks).where(eq(tasks.id, id));

  if (result.rowsAffected === 0) {
    return c.json(
      {
        message: HttpStatusPhrases.NOT_FOUND,
      },
<<<<<<< HEAD
      HttpStatusCodes.NOT_FOUND
=======
      HttpStatusCodes.NOT_FOUND,
>>>>>>> temp
    );
  }

  return c.body(null, HttpStatusCodes.NO_CONTENT);
};
