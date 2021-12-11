import ApolloClient from 'apollo-boost';

const client = ApolloClient({
    uri: "https://jsonplaceholder.typicode.com/todos"
})
export default client;
