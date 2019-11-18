import React, { useState } from 'react'
import { graphql} from 'react-apollo'
import { getAuthorsQuery, AddBookMutation } from '../queries/queries'
import {flowRight as compose} from 'lodash'

function AddBook(props) {
  

const [Name, setName] = useState("")
const [Genre, setGenre] = useState("")
const [AuthorId, setAuthorId] = useState("")

  function displayAuthors() {
    var data = props.getAuthorsQuery;
    if (data.loading) {
      return (<option>Loading</option>)
    } else {
      return data.authors.map(author => {
        return (<option key={author.id} value={author.id}>{author.name}</option>)
      })
    }
  }
   function SubmitForm(e){
    e.preventDefault()
    props.AddBookMutation({
      variables:{
        name: Name,
        genre: Genre,
        authorId: AuthorId
      }
    })
   }
 

  return (
    <form id="add-book" onSubmit={SubmitForm}>

      <div className="filed">
        <label>Book Name:</label>
        <input type="text" onChange= {e => setName(e.target.value)}/>
      </div>

      <div className="filed">
        <label>Genre:</label>
        <input type="text" onChange= {e => setGenre(e.target.value)}/>
      </div>

      <div className="filed">
        <label>Author:</label>
        <select onChange= {e => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  )
}

export default compose(
  graphql(getAuthorsQuery, { name:"getAuthorsQuery"}),
  graphql(AddBookMutation, { name:"AddBookMutation"})
)(AddBook)
