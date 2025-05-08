# Hono-Scalar

Hono-Scalar is a backend API built with **Hono**, **Drizzle ORM**, and **MySQL**. It leverages **Bun** for fast runtime execution and includes **Pino** for logging, **Zod** for validation, and **Envalid** for environment variable management.

## Features

- **Hono** - Lightweight and fast web framework
- **Drizzle ORM** - Type-safe and efficient database queries
- **MySQL** - MySQL data for queries operations
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
DATABASE_URL=""
STRICT_MODE=""
CORS_ORIGIN=""
BODY_LIMIT=""
PORT=""
LOG_LEVEL=""
NODE_ENV=""
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

- Hono OpenAPI Docs: [http://localhost:4000/api/docs](http://localhost:4000/api/docs)
- Scaler API Reference: [http://localhost:4000/api/reference](http://localhost:4000/api/reference)

## Project Structure

```
.
├── src
│   ├── index.ts        # Main entry point
│   ├── app.ts          # Hono OpenAPI config
│   ├── routes          # API routes
│   ├── configs         # Configuration files
│   ├── database        # Database schema & queries
│   ├── middlewares     # Middleware functions
│   ├── utils           # Utility functions
├── eslint.config.ts    # ESLint configuration
├── drizzle.config.ts   # Drizzle ORM configuration
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
└── readme.md           # Documentation
```

<<<<<<< HEAD
## License

This project is licensed under the `MIT` License.
=======
---

## License

This project is licensed under the `MIT` License.

---

### **Developed by [shekharsikku](https://linkedin.com/in/shekharsikku)**
>>>>>>> temp
