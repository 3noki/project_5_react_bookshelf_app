import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Books from './Books'

class Search extends Component {
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

    this.setState({query: query.trim() })
    BooksAPI.search(query).then(book =>
      this.setState({newBooks: book})
    )
  }

render() {
  const { query, newBooks } = this.state
  const { book, books } = this.props

  return (
            <div className="search-books">
              <div className="search-books-bar">
                <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
                  {this.props.newBooks && this.state.newBooks.map((book) => (
                    <Books
                    onChangeShelf={this.changeShelf}
                    books={this.state.books}
                    book={this.state.book}
                    key={book.id}
                    />
                  ))}
              </div>
            </div>
    )
  }
}

export default Search
