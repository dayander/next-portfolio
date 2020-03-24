import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: `http://localhost:${process.env.API_PORT ?? 3010}/api/`,
      cache: new InMemoryCache().restore(initialState || {}),
    })
);
