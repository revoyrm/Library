import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { bookType } from "./schema/book";
import { bookResolver } from "./resolvers/book"; //todo do better
const startServer = async () => {
    const server = new ApolloServer({
        typeDefs: bookType,
        resolvers: bookResolver,
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
