const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");

const resolvers = {
  Query: {
    colors: (_, args, context, info) => {
      console.log("in colors resolver. checking args...")
      console.log(args)
      return context.prisma.query.colors(
        {
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
    info: () => `This is a test query!`,
    posts: (_, args, context, info) => {
      return context.prisma.query.posts(
        {
          where: {
            OR: [
              { title_contains: args.searchString },
              { content_contains: args.searchString },
            ],
          },
        },
        info,
      )
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
    user: (_, args, context, info) => {
      return context.prisma.query.user(
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
    createDraft: (_, args, context, info) => {
      return context.prisma.mutation.createPost(
        {
          data: {
            title: args.title,
            content: args.content,
            author: {
              connect: {
                id: args.authorId,
              },
            },
          },
        },
        info,
      )
    },
    publish: (_, args, context, info) => {
      return context.prisma.mutation.updatePost(
        {
          where: {
            id: args.id,
          },
          data: {
            published: true,
          },
        },
        info,
      )
    },
    deletePost: (_, args, context, info) => {
      return context.prisma.mutation.deletePost(
        {
          where: {
            id: args.id,
          },
        },
        info,
      )
    },
    signup: (_, args, context, info) => {
      return context.prisma.mutation.createUser(
        {
          data: {
            name: args.name,
          },
        },
        info,
      )
    },
  },
}


const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      //endpoint: 'https://us1.prisma.sh/fastpenguin91-c6edf8/finaltest/dev',
      endpoint: 'https://eu1.prisma.sh/fastpenguin91-c6edf8/color-swatches-server/dev',
    }),
  }),
})


server.start(() => console.log(`GraphQL server is running on http://localhost:4000`))
//server.start(graphQLOptions, () => console.log(`Server is running on http://localhost:4000`));
//server.start(graphQLOptions, () => console.log(`Server is running on http://localhost:4000`));

