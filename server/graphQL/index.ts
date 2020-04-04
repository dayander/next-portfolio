import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema/types';
import resolvers from './schema/resolvers';
import { models } from '../models';
// eslint-disable-next-line import/named
import { db } from '../apiServer';
import { createToken, getUserFromToken } from '../auth';
import jwt, { Secret } from 'jsonwebtoken';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context({ req }) {
    const token = req?.headers?.authorization ?? '';
    let user;
    if (token) {
      user = getUserFromToken(token);
      // console.log(user);
    }

    return {
      models,
      db,
      createToken,
      user,
    };
  },
});

export default server;
