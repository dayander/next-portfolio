import {ApolloServer} from 'apollo-server-express';
import typeDefs from './schema/types';
import resolvers from './schema/resolvers';
import { models } from '../models';
// eslint-disable-next-line import/named
import { db } from '../apiServer';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return {
      models,
      db,
    };
  }
});

export default server;
