import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv';
import compression from 'compression';
import server from './graphQL';

config();
const  APIServer = express();

const API_PORT = process.env.API_PORT ?? 3010;
const { mongoURI: dbURI } = process.env;

mongoose.connect(
  dbURI ?? '',
  { useNewUrlParser: true })
  .then(() => {
  // eslint-disable-next-line no-console
  console.log('> ⚾️ Connected to Database');
})
  .catch((error: Error) => {
    // eslint-disable-next-line no-console
    console.log(error);
  });

export const db = mongoose.connection;
APIServer.use(compression());

server.applyMiddleware({ app:APIServer });

APIServer.get('/', (req: Request, res: Response) => res.send('api server working'));
// eslint-disable-next-line no-console
APIServer.listen(API_PORT,  () => console.log(`> 🍄 API Sever listening on port ${API_PORT}${server.graphqlPath}!`));