# Fullstack Next.js Starter

This is a full-stack Next.js application starter built with Typescript, Prisma, apollo-server-micro, and urql on the frontend.

## 🎉 Getting started

1. Clone repo `git clone https://github.com/ndom91/nextjs-prisma-gql-ts-starter`
2. Install dependencies `cd nextjs-prisma-gql-ts-starter && npm install`
3. Copy the `.env.example` and create your own `cp .env.example .env`
4. Fill in the variables like `DATABASE_URL` to match your environment
5. Start the application `npm run dev`

### 🗄 Create the database

Run the following command to create your PostgreSQL database. This also creates the required tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma) as well as the initial migration:

```
npx prisma migrate dev --name init
```

It will connect to the database defined in your `DATABASE_URL` in your `.env` file and create the appropriate tables, columns, etc.

## 📋 License

[`MIT`](https://opensource.org/licenses/MIT)
