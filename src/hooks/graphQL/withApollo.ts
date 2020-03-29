import withApollo from 'next-with-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import fetch from 'isomorphic-unfetch';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: `http://localhost:${process.env.endpoint ?? 3000}/api/graphql`,
});

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link,
      cache: new InMemoryCache().restore(initialState),
      ssrMode: true,
    })
);
