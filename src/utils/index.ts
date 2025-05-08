import * as HttpStatusCodes from "~/utils/http-status/codes";
import * as HttpStatusPhrases from "~/utils/http-status/phrases";
import { z } from "@hono/zod-openapi";

export type ZodSchema =
  | z.ZodUnion<any>
  | z.AnyZodObject
  | z.ZodArray<z.AnyZodObject>;

function jsonContentRequired<T extends ZodSchema>(schema: T, description: string) {
  return {
    ...jsonContent(schema, description),
    required: true,
  };
}

function jsonContent<T extends ZodSchema>(schema: T, description: string) {
  return {
    content: {
      "application/json": {
        schema,
      },
    },
    description,
  };
}

function createMessageObjectSchema(exampleMessage: string = "Hello World") {
  return z
    .object({
      message: z.string(),
    })
    .openapi({
      example: {
        message: exampleMessage,
      },
    });
}

function createErrorSchema<T extends ZodSchema>(schema: T) {
  const { error } = schema.safeParse(
    schema._def.typeName === z.ZodFirstPartyTypeKind.ZodArray ? [] : {},
  );
  return z.object({
    success: z.boolean().openapi({
      example: false,
    }),
    error: z
      .object({
        issues: z.array(
          z.object({
            code: z.string(),
            path: z.array(z.union([z.string(), z.number()])),
            message: z.string().optional(),
          }),
        ),
        name: z.string(),
      })
      .openapi({
        example: error,
      }),
  });
}

const IdParamsSchema = z.object({
  id: z.coerce.number().openapi({
    param: {
      name: "id",
      in: "path",
      required: true,
    },
    required: ["id"],
    example: 42,
  }),
});

export const ZOD_ERROR_MESSAGES = {
  REQUIRED: "Required",
  EXPECTED_NUMBER: "Expected number, received nan",
  NO_UPDATES: "No updates provided",
};

export const ZOD_ERROR_CODES = {
  INVALID_UPDATES: "invalid_updates",
};

const notFoundSchema = createMessageObjectSchema(HttpStatusPhrases.NOT_FOUND);

export {
  createErrorSchema,
  createMessageObjectSchema,
  HttpStatusCodes,
  HttpStatusPhrases,
  IdParamsSchema,
  jsonContent,
  jsonContentRequired,
  notFoundSchema,
};
