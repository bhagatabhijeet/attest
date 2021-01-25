const graphql = require("graphql");
const { buildResolveInfo } = require("graphql/execution/execute");
const {  
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} = graphql;

const projects = [
  { id: "1", name: "aProject", description: "This is project One" },
  { id: "2", name: "bProject", description: "This is project Two" },
  { id: "3", name: "cProject", description: "This is project Three" },
];

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: {type:GraphQLString},
    name: {type:GraphQLString},
    description:{type: GraphQLString},
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        const filt = projects.filter((p) => p.id === args.id);
        console.log(filt);
        return filt[0];
        // return "Hello";
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
