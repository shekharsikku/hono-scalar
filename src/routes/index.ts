// import type { Context } from "hono";
import {
  OpenAPIHono,
  // createRoute, z
} from "@hono/zod-openapi";
import env from "~/configs/env";

import users from "./users";

const routes = new OpenAPIHono({ strict: env.STRICT_MODE });

routes.route("/user", users);

// responses: {
//   [200]: jsonContent(
//     createMessageObjectSchema("Tasks API"),
//     "Tasks API Index"
//   ),
// },

// routes.openapi(
//   createRoute({
//     path: "/hello",
//     method: "get",
//     tags: ["Hono", "Zod", "Scalar", "OpenAPI"],
//     responses: {
//       200: {
//         description: "Returns a welcome message!",
//         content: {
//           "application/json": {
//             schema: z
//               .object({
//                 message: z.string(),
//               })
//               .openapi({
//                 example: {
//                   message: "Hello, World!",
//                 },
//               }),
//           },
//         },
//       },
//     },
//   }),
//   (ctx: Context) => {
//     return ctx.json({ message: "Hello, from Hono, Zod & OpenAPI!" }, 200);
//   }
// );

// import {
//   HttpStatusCodes,
//   jsonContent,
//   createMessageObjectSchema,
// } from "@/utils";
// import { db } from "@/database";
// import { tasks } from "@/database/schema";

// import * as taskHandlers from "@/controllers/tasks";
// import * as tasksRoutes from "@/routes/tasks";
// import userRoutes from "./users";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// routes.use("*", async (ctx, next) => {
//   await delay(1000);
//   await next();
// });

// routes.route("/", userRoutes);

// routes.post("/add", async (ctx) => {
//   const { title, description } = await ctx.req.json();

//   const response = await db
//     .insert(tasks)
//     .values({
//       title: title || "First Task!",
//       description: description || "Description of First Task!",
//     });

//   return ctx.json({ response }, 201);
// });

// routes.get("/get", async (ctx) => {
//   const response = await db.query.tasks.findMany();
//   return ctx.json({ response: response.entries() }, 200);
// });

// routes.openapi(tasksRoutes.list, taskHandlers.list);
// routes.openapi(tasksRoutes.create, taskHandlers.create);
// routes.openapi(tasksRoutes.getOne, taskHandlers.getOne);
// routes.openapi(tasksRoutes.patch, taskHandlers.patch);
// routes.openapi(tasksRoutes.remove, taskHandlers.remove);

export default routes;
