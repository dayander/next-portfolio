import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema/types';
import resolvers from './schema/resolvers';
import { models } from '../models';
import { db } from '../apiServer';
import { createToken, getUserFromToken } from '../auth';
import { buildContext } from 'graphql-passport';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context({ req, res }) {
    const token = req?.headers?.authorization ?? '';
    let user;
    if (token) {
      user = getUserFromToken(token);
    }

    const localAuth = buildContext({ req, res });

    return {
      models,
      db,
      createToken,
      user,
      localAuth,
    };
  },
});

export default server;
