import { gql } from 'apollo-boost'

const getAuthorsQuery = gql`
  {
    authors{
      name
      id
    }
  }
`
const getBooksQuery = gql`
  {
    books{
      name
      genre
      id
    }
  }
`
const AddBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
      name
      id
    }
  }
`

export {getAuthorsQuery, getBooksQuery, AddBookMutation}