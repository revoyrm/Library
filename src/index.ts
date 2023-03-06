import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import { AppDataSource } from "./data-source";

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await AppDataSource.initialize();

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

startServer();
