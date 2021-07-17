const { ApolloServer } = require('apollo-server');
const { gql } = require('graphql-tag');

const typeDefs = gql`
    type Query {
        sayHi: String!
    }
`;

const resolvers = {
    Query: {
        sayHi: () => 'Heloo World From GraphQL..'
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({ port:5000 }).then((res) =>{
    console.log(`Our Server are runing in ${res.url}`);
});