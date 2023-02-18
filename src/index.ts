import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
  // await createConnection();

  // const app = express();

  // server.applyMiddleware({ app });

  // app.listen({ port: 4000 }, () =>
  //   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  // );
};

startServer();
