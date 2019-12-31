const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

// I think the object here in graphqlServer and graphQLOptions are supposed to do the same thing
// so one of them is unnecessary?
const server = new GraphQLServer({
  schema: "../prisma/datamodel.prisma",
  typeDefs: './schema.graphql',
  resolvers: resolvers,
  context: { prisma }
});

const resolvers = {
  Query: {
    info: () => `This is a test query defined in resolvers`
  }
}

const graphQLOptions = {
  endpoint: 'https://eu1.prisma.sh/fastpenguin91-c6edf8/color-swatches-server/dev',
  typeDefs: './schema.graphql',
  resolvers: resolvers
  //endpoint: 'https://us1.prisma.sh/fastpenguin91-c6edf8/finaltest/dev'
}

server.start(graphQLOptions, () => console.log(`Server is running on http://localhost:4000`));

