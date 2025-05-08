import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import {
  users,
  registerUserSchema,
  selectUsersSchema,
} from "~/database/schema";
import { db } from "~/database";
import env from "~/configs/env";
import { eq } from "drizzle-orm";

const routes = new OpenAPIHono({ strict: env.STRICT_MODE });

const tags = ["Users"];

routes.openapi(
  createRoute({
    path: "/register",
    method: "post",
    tags,
    request: {
      body: {
        content: {
          "application/json": {
            schema: registerUserSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "To register new user!",
        content: {
          "application/json": {
            schema: selectUsersSchema,
          },
        },
      },
    },
  }),
  async (ctx): Promise<any> => {
    const { name, email, password } = await ctx.req.valid("json");

    const response = await db.insert(users).values({
      name,
      email,
      password,
    });

    return ctx.json(
      { message: "User registered successfully!", response },
      201
    );
  }
);

routes.openapi(
  createRoute({
    path: "/details",
    method: "post",
    tags,
    request: {
      body: {
        content: {
          "application/json": {
            schema: z.object({
              email: z.string().email(),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        description: "To get user details!",
        content: {
          "application/json": {
            schema: selectUsersSchema,
          },
        },
      },
    },
  }),
  async (ctx): Promise<any> => {
    const { email } = await ctx.req.valid("json");

    const details = await db.select().from(users).where(eq(users.email, email));

    if (!details.length) {
      return ctx.json(
        { message: "User with this email is not registered!" },
        404
      );
    }

    return ctx.json(
      { message: "User details fetched successfully!", details: details[0] },
      200
    );
  }
);

// export type RegisterRoute = typeof registerUser;

/*
import type { Context } from "hono";


import { users } from "~/database/schema";
import { db } from "~/database";

import { insertUserSchema } from "~/utils/schema";


const routes = new OpenAPIHono({ strict: env.STRICT_MODE }).basePath("/user");

const insertUser = async (ctx: Context) => {
  try {
    const jsonData = await ctx.req.json();

    const parsedData = insertUserSchema.safeParse(jsonData);

    if (parsedData.error) {
      return ctx.json({ error: parsedData.error.issues }, 400);
    }

    const { name, email, password } = parsedData.data;

    const response = await db.insert(users).values({
      name,
      email,
      password,
    });

    return ctx.json({ message: "User inserted successfully!", response }, 201);
  } catch (error: any) {
    return ctx.json(
      { message: error.message || "Error while inserting user!" },
      400
    );
  }
};

const getUsers = async (ctx: Context) => {
  try {
    const allUsers = await db.select().from(users);

    return ctx.json(
      { message: "User fetched successfully!", data: allUsers },
      200
    );
  } catch (error: any) {
    return ctx.json(
      { message: error.message || "Error while getting user!" },
      400
    );
  }
};

routes.post("/", insertUser);
routes.get("/", getUsers);

*/
export default routes;
