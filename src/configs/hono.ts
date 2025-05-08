// import type { Schema, Context } from "hono";
// import { OpenAPIHono, type Hook } from "@hono/zod-openapi";
// import { cors } from "hono/cors";
// import { bodyLimit } from "hono/body-limit";
// import { requestId } from "hono/request-id";
// import { poweredBy } from "hono/powered-by";
// import { prettyJSON } from "hono/pretty-json";
// import { secureHeaders } from "hono/secure-headers";
// import { HttpStatusCodes } from "@/utils";
// import type { AppBindings, AppOpenAPI } from "@/configs/types";
// import favicon from "@/middlewares/favicon";
// import logger from "@/middlewares/logger";
// import env from "@/configs/env";

// const defaultHook: Hook<any, any, any, any> = (result, ctx) => {
//   if (!result.success) {
//     return ctx.json(
//       {
//         success: result.success,
//         error: result.error,
//       },
//       HttpStatusCodes.UNPROCESSABLE_ENTITY,
//     );
//   }
// };

// export function initRouter() {
//   return new OpenAPIHono<AppBindings>({
//     strict: false,
//     defaultHook,
//   });
// }

// export function initApp() {
//   const app = initRouter();

//   app.use(
//     cors({
//       origin: env.CORS_ORIGIN,
//       credentials: true,
//       maxAge: 3600,
//     }),
//   );

//   app.use(
//     bodyLimit({
//       maxSize: env.BODY_LIMIT * 1024 * 1024,
//       onError: (ctx: Context) => {
//         return ctx.json(
//           { message: "Request payload is too large!" },
//           HttpStatusCodes.REQUEST_TOO_LONG,
//         );
//       },
//     }),
//   );

//   /** Custom Middleware */
//   app.use(favicon("🔥"));
//   app.use(logger());

//   app.use(requestId());
//   app.use(poweredBy());
//   app.use(prettyJSON());
//   app.use(secureHeaders());

//   app.onError((err: Error, ctx: Context) => {
//     const message = err.message || "Oops! Something went wrong!";
//     console.error(`Error: ${message}`);
//     return ctx.json({ message }, HttpStatusCodes.INTERNAL_SERVER_ERROR);
//   });

//   app.notFound((ctx: Context) => {
//     const message = `Requested url '${ctx.req.path}' not found on the server!`;
//     return ctx.json({ message }, HttpStatusCodes.NOT_FOUND);
//   });

//   return app;
// }

// export function initTestApp<S extends Schema>(router: AppOpenAPI<S>) {
//   return initApp().route("/", router);
// }
