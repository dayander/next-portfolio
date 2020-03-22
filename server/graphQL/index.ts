import {ApolloServer} from 'apollo-server-express';
import typeDefs from './schema/types';
import resolvers from './schema/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers
});

export default server;
