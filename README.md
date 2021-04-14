<img align="right" src="logo.svg" />

# Freizeitly

This is a full-stack Next.js application built with Typescript and Prisma for managing employee time off at your company. This includes vacations, sick leave, parental leave, etc. It's your time, don't waste it organising timeoff slips.

## Getting started

1. Clone repo `git clone https://github.com/ndom91/freizeitly`
2. Install dependencies `cd freizeitly && npm install`
3. Copy the `.env.template` and create your own `cp .env.template .env`
4. Fill in the variables like `DATABASE_URL` to match your environment
5. Start the application `npm run dev`

### Create the database

Run the following command to create your PostgreSQL database file. This also creates the required tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate dev --name init
```

This will connect to the database defined in your `DATABASE_URL` in your `.env` file and create the appropriate tables, columns, etc.

## License

[`MIT`](https://opensource.org/licenses/MIT)
