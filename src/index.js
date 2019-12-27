const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");
const { find } = require('lodash');


const resolvers = {
  Query: {
    colors: (parent, args, context, info) => {
      const colors = context.prisma.colors({
        skip: args.skip,
        first: args.first
      });
      return colors;
    },
    color: (root, args, context, info) => {
      return context.prisma.color();
    }
  },

  Mutation: {
    setColor: (root, args, context) => {
      return context.prisma.createColor({
        color_code: args.color_code
      });
    }
  },

  Color: {
    id: parent => parent.id,
    color_code: parent => parent.color_code
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma }
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
