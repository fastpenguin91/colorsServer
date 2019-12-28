"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Color",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Course",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/fastpenguin91-c6edf8/color-swatches-server/dev`
});
exports.prisma = new exports.Prisma();
