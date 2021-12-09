import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({ //Chamando a API com o ApolloClient
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})