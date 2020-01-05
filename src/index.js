const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");

const resolvers = {
  Query: {
    colors: (_, args, context, info) => {
      console.log("Hello it works? checking args...")
      console.log(args)
      console.log("dev mode dev mode!")
      return context.prisma.query.colors(
        {
          where: {
            color_code_contains: args.filter
          },
          skip: args.skip,
          first: args.first,
        }
      )
      /*This works*///return context.prisma.query.colors();
    },
    randomColor: (_, args, context, info) => {
      return context.prisma.query.colors().then(colorsArr => {
        return colorsArr[Math.floor(Math.random()*colorsArr.length)];
      });
    },
    color: (_, args, context, info) => {
      return context.prisma.query.color(
        {
          where: {
            id: args.id,
          },
        },
        info,
      )
    },
  },
  Mutation: {
  },
}


const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://eu1.prisma.sh/fastpenguin91-c6edf8/color-swatches-server/dev',
      //endpoint: 'https://us1.prisma.sh/fastpenguin91-c6edf8/finaltest/dev',
    }),
  }),
})


server.start(() => console.log(`GraphQL server is running on http://localhost:4000`))
//server.start(graphQLOptions, () => console.log(`Server is running on http://localhost:4000`));
//server.start(graphQLOptions, () => console.log(`Server is running on http://localhost:4000`));

