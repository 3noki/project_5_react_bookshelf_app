import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Books from './Books.js'
import { Link } from 'react-router-dom'

export default class Search extends Component {

state = {
  query: '',
  newBooks: []
}

searchLibrary = (query) => {
    if(query.length >= 0) {
      this.setState({
        query: query.trim()
      })}
    BooksAPI.search(query).then(searchResults => {
      this.setState({newBooks: searchResults})
      {console.log(searchResults)}
    })
  }


render() {
  const { newBooks } = this.state
  const { query, books } = this.props

  return (
    <div className="app">
            <div className="search-books">
              <div className="search-books-bar">

              <Link to="/" className="close-search">Close</Link>

                <div className="search-books-input-wrapper">

                  <input
                  type="text"
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(event) => this.searchLibrary(event.target.value)}
                  />

                </div>
              </div>

              <div className="search-books-results">
                <ol className="books-grid">
                  <li>
                  {newBooks.length >= 1 ? (
                    (newBooks && newBooks.map(book => (
                      <Books
                      books={books}
                      book={book}
                      key={book.id}
                      />
                    )))
                  ) : ( <div>No books in this query, try another search</div>)}

                  </li>
                </ol>
              </div>
            </div>
    </div>
    )
  }
}
