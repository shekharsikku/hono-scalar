<<<<<<< HEAD
import * as HttpStatusCodes from "@/utils/http-status/codes";
import * as HttpStatusPhrases from "@/utils/http-status/phrases";
=======
import * as HttpStatusCodes from "~/utils/http-status/codes";
import * as HttpStatusPhrases from "~/utils/http-status/phrases";
>>>>>>> temp
import { z } from "@hono/zod-openapi";

export type ZodSchema =
  | z.ZodUnion<any>
  | z.AnyZodObject
  | z.ZodArray<z.AnyZodObject>;

<<<<<<< HEAD
const jsonContentRequired = <T extends ZodSchema>(
  schema: T,
  description: string
) => {
=======
function jsonContentRequired<T extends ZodSchema>(schema: T, description: string) {
>>>>>>> temp
  return {
    ...jsonContent(schema, description),
    required: true,
  };
<<<<<<< HEAD
};

const jsonContent = <T extends ZodSchema>(schema: T, description: string) => {
=======
}

function jsonContent<T extends ZodSchema>(schema: T, description: string) {
>>>>>>> temp
  return {
    content: {
      "application/json": {
        schema,
      },
    },
    description,
  };
<<<<<<< HEAD
};

const createMessageObjectSchema = (exampleMessage: string = "Hello World") => {
=======
}

function createMessageObjectSchema(exampleMessage: string = "Hello World") {
>>>>>>> temp
  return z
    .object({
      message: z.string(),
    })
    .openapi({
      example: {
        message: exampleMessage,
      },
    });
<<<<<<< HEAD
};

const createErrorSchema = <T extends ZodSchema>(schema: T) => {
  const { error } = schema.safeParse(
    schema._def.typeName === z.ZodFirstPartyTypeKind.ZodArray ? [] : {}
=======
}

function createErrorSchema<T extends ZodSchema>(schema: T) {
  const { error } = schema.safeParse(
    schema._def.typeName === z.ZodFirstPartyTypeKind.ZodArray ? [] : {},
>>>>>>> temp
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
<<<<<<< HEAD
          })
=======
          }),
>>>>>>> temp
        ),
        name: z.string(),
      })
      .openapi({
        example: error,
      }),
  });
<<<<<<< HEAD
};
=======
}
>>>>>>> temp

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
<<<<<<< HEAD
  HttpStatusCodes,
  HttpStatusPhrases,
  jsonContent,
  createMessageObjectSchema,
  createErrorSchema,
  jsonContentRequired,
  IdParamsSchema,
=======
  createErrorSchema,
  createMessageObjectSchema,
  HttpStatusCodes,
  HttpStatusPhrases,
  IdParamsSchema,
  jsonContent,
  jsonContentRequired,
>>>>>>> temp
  notFoundSchema,
};
