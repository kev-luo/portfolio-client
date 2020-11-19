import App from '../App';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://portfolio-kl.herokuapp.com/'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)