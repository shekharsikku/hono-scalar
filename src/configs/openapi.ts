// import { apiReference } from "@scalar/hono-api-reference";
// import type { OpenAPIHono } from "@hono/zod-openapi";
// import packageJson from "~/package.json";

// function openapi(app: OpenAPIHono) {
//   app.doc("/docs", {
//     openapi: "3.1.0",
//     info: {
//       title: "Tasks Api",
//       version: packageJson.version,
//     },
//   });

//   app.get(
//     "/reference",
//     apiReference({
//       theme: "default",
//       layout: "modern",
//       defaultHttpClient: {
//         targetKey: "js",
//         clientKey: "fetch",
//       },
//       url: "/docs",
//       // spec: { url: "/docs" },
//     }),
//   );
// }

// export default openapi;
