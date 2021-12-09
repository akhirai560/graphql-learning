const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = require("graphql");
const _ = require("lodash");

const users = [
  { id: "23", firstName: "Bill", age: 33 },
  { id: "22", firstName: "Bill", age: 22 },
  { id: "25", firstName: "Bill", age: 25 },
  { id: "24", firstName: "Bill", age: 28 },
  { id: "30", firstName: "Bill", age: 40 },
];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
