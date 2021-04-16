import { createContext } from "../../graphql/context"
import { ApolloServer } from "apollo-server-micro"
import { schema } from "../../graphql/schema"

const apolloServer = new ApolloServer({
  context: createContext,
  schema,
  tracing: process.env.NODE_ENV === "development",
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({
  path: "/api/graphql",
})
