const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");

const resolvers = {
  Query: {
    async feed(parent, args, context) {

      colorsFilter = args.filter
        ? { color_code_contains: args.filter }
        : { color_code_contains: "" };
      
        const colorsConnection = await context.prisma.query.colorsConnection(
        { where: colorsFilter },
        `{
          aggregate {
            count
          }
        }`
      );
      let count = colorsConnection.aggregate.count;
      
      const colors = await context.prisma.query.colors({
        where: {
          color_code_contains: args.filter
        }, 
        skip: args.skip,
        first: args.first
      });

      return {
        count,
        colors
      }

    },
    async colorsConnection(_, args, context, info) {

      const colorsConn = await context.prisma.query.colorsConnection(
        {},
        `{
          aggregate {
            count
          }
          edges {
            node {
              id
            }
          }
        }`
      );

      return {
        aggregate: {
          count: 108
        },
        edges: [
          {
            cursor: "ck49m8kdx9khr0964dtsodo8m",
            node: {
              id: "ck49m8kdx9khr0964dtsodo8m",
              color_code: "#00ff00"
            }
          },
          {
            cursor: "ck49m96i59kn60964ngpps95m",
            node: {
              id: "ck49m96i59kn60964ngpps95m",
              color_code: "#00f400"
            }
          }
        ]
      };
    },
    async test(_, args, context, info) {
      colorsFilter = args.filter
        ? { color_code_contains: args.filter }
        : { color_code_contains: "" };
      const colors = await context.prisma.query.colors({ where: colorsFilter });

      console.log("colors: ");
      console.log(colors);

      /*const colorsConn = await context.prisma.query.colorsConnection(
        { where: colorsFilter },
        `{
          aggregate {
            count
          }
        }`
      );*/
      //console.log(colorsConn);

      //return colorsConn;

      return {
        "aggregate": {
          "count": 3 //colorsConn.aggregate.count
        },
      "edges": [
        {
          "cursor": "ck49m8kdx9khr0964dtsodo8m",
          "node": {
            "id": "ck49m8kdx9khr0964dtsodo8m",
            "color_code": "#00ff00"
          }
        },
        {
          "cursor": "ck49m96i59kn60964ngpps95m",
          "node": {
            "id": "ck49m96i59kn60964ngpps95m",
            "color_code": "#00f400"
          }
        } ] };

    },
    colors: (_, args, context, info) => {
      return context.prisma.query.colors({
        where: {
          color_code_contains: args.filter
        },
        skip: args.skip,
        first: args.first
      });
    },
    randomColor: (_, args, context, info) => {
      return context.prisma.query.colors().then(colorsArr => {
        return colorsArr[Math.floor(Math.random() * colorsArr.length)];
      });
    },
    color: (_, args, context, info) => {
      return context.prisma.query.color(
        {
          where: {
            id: args.id
          }
        },
        info
      );
    }
  },
  Mutation: {}
};

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint:
        "https://eu1.prisma.sh/fastpenguin91-c6edf8/color-swatches-server/dev"
      //endpoint: 'https://us1.prisma.sh/fastpenguin91-c6edf8/finaltest/dev',
    })
  })
});

server.start(() =>
  console.log(`GraphQL server is running on http://localhost:4000`)
);