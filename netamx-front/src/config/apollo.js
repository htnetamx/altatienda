import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'node-fetch';

const location = window.location.host;
//const urlService = location.includes('localhost') || location.includes('develop') ? 'https://api-dev-neta.therocketcode.com/' : 'https://api.netamx.app/';
//console.log('urlService', urlService)
// 'http://localhost:5000/graphql'
const urlService = 'http://localhost:5001/graphql';
const httpLink = new HttpLink({
  uri: urlService,
  // uri: 'http://localhost:5000/graphql',
  credentials: 'include',
  fetch,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      securityWord: 'test',
    },
  };
});

const client = () =>
  new ApolloClient({
    // ssrMode: typeof window === 'undefined',
    connectToDevTools: true,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

export default client;
