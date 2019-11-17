import React from 'react';
import BookList from './components/BookList'
import AddBook from './components/AddBook'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'


//apolli cleint setup
const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1> OPA</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
