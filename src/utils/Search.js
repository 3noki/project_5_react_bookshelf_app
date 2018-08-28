import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Books from './Books.js'
import { Link } from 'react-router-dom'

export default class Search extends Component {

static propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  newBooks: PropTypes.array.isRequired
}
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
    })
  }


render() {
  const { query, newBooks } = this.state
  const { book, books } = this.props

  return (
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
                {console.log(newBooks)}
                <ol className="books-grid">
                  <li>
                    {this.props.newBooks && this.state.newBooks.map((book) => (
                      <Books
                      books={this.state.books}
                      book={this.state.book}
                      key={book.id}
                      />
                    ))}
                  </li>
                </ol>
              </div>
            </div>
    )
  }
}
