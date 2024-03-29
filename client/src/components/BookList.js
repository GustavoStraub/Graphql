import React from 'react'
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../queries/queries'

function BookList(props) {
  function displaybooks() {
    var data = props.data
    if (data.loading) {
      return (<div>Loading Books...</div>)
    } else {
      return data.books.map(book => {
        return (
          <li key={book.id}>{book.name} - {book.genre}</li>
        )
      })
    }
  }

  return (
    <div>
      <ul id='book-list'>
        {displaybooks()}
      </ul>
    </div>
  )
}
export default graphql(getBooksQuery)(BookList)