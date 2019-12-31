const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

const server = new GraphQLServer({
  schema: "../prisma/datamodel.prisma",
  context: { prisma }
});

const graphQLOptions = {
  endpoint: 'https://eu1.prisma.sh/fastpenguin91-c6edf8/color-swatches-server/dev',
  typeDefs: './schema.graphql'
  //endpoint: 'https://us1.prisma.sh/fastpenguin91-c6edf8/finaltest/dev'
}

server.start(graphQLOptions, () => console.log(`Server is running on http://localhost:4000`));

