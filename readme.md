# Hono-Scalar

Hono-Scalar is a backend API built with **Hono**, **Drizzle ORM**, and **LibSQL**. It leverages **Bun** for fast runtime execution and includes **Pino** for logging, **Zod** for validation, and **Envalid** for environment variable management.

## Features

- **Hono** - Lightweight and fast web framework
- **Drizzle ORM** - Type-safe and efficient database queries
- **LibSQL** - Cloud-native SQLite alternative
- **Pino** - High-performance logging
- **Zod** - Schema validation
- **Envalid** - Environment variable validation
- **Bun** - Fast runtime for execution
- **ESLint** - Code linting with Antfu's configuration

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Bun](https://bun.sh/) (Latest version)
- Node.js (if Bun isn't installed globally)

### Installation

Clone the repository and install dependencies:

```sh
bun install
```

### Environment Variables

Create a `.env` file in the root directory and configure the required environment variables:

```env
DATABASE_URL=<your-database-url>
DATABASE_AUTH_TOKEN=<your-auth-token>
CORS_ORIGIN=*
BODY_LIMIT=10
PORT=4000
LOG_LEVEL=debug
NODE_ENV=development
```

### Running the Project

To start the development server:

```sh
bun run dev
```

To start in production mode:

```sh
bun run start
```

### Linting

Run ESLint to check for code quality:

```sh
bun run lint
```

To automatically fix lint errors:

```sh
bun run lint:fix
```

## API Documentation

Hono-Scalar provides OpenAPI documentation:

- Scaler UI: [http://localhost:4000/docs](http://localhost:4000/docs)
- API Reference: [http://localhost:4000/reference](http://localhost:4000/reference)

## Project Structure

```
.
├── src
│   ├── index.ts        # Main entry point
│   ├── routes          # API routes
│   ├── configs         # Configuration files
│   ├── db              # Database schema & queries
│   ├── middlewares     # Middleware functions
│   ├── utils           # Utility functions
├── .eslintrc.js        # ESLint configuration
├── drizzle.config.ts   # Drizzle ORM configuration
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
└── README.md           # Documentation
```

## Dependencies

### Production

- **[@hono/zod-openapi](https://www.npmjs.com/package/@hono/zod-openapi)** - OpenAPI support for Hono
- **[@libsql/client](https://www.npmjs.com/package/@libsql/client)** - Client for LibSQL
- **[@scalar/hono-api-reference](https://www.npmjs.com/package/@scalar/hono-api-reference)** - API reference UI
- **[drizzle-orm](https://www.npmjs.com/package/drizzle-orm)** - ORM for database operations
- **[drizzle-zod](https://www.npmjs.com/package/drizzle-zod)** - Zod integration with Drizzle ORM
- **[envalid](https://www.npmjs.com/package/envalid)** - Environment validation
- **[hono](https://www.npmjs.com/package/hono)** - Web framework
- **[hono-pino](https://www.npmjs.com/package/hono-pino)** - Pino integration for Hono
- **[pino](https://www.npmjs.com/package/pino)** - Logging
- **[zod](https://www.npmjs.com/package/zod)** - Schema validation

### Development

- **[@antfu/eslint-config](https://www.npmjs.com/package/@antfu/eslint-config)** - ESLint rules
- **[@types/bun](https://www.npmjs.com/package/@types/bun)** - TypeScript types for Bun
- **[drizzle-kit](https://www.npmjs.com/package/drizzle-kit)** - Drizzle migration tool
- **[eslint](https://www.npmjs.com/package/eslint)** - Linting
- **[eslint-plugin-format](https://www.npmjs.com/package/eslint-plugin-format)** - Formatting plugin
- **[typescript](https://www.npmjs.com/package/typescript)** - TypeScript support

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
