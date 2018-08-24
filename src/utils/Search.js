import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Books from './Books'

class Search extends Component {
// static propTypes = {
//   books: PropTypes.array.isRequired,
//   newBooks: PropTypes.array.isRequired
// }
state = {
  query: '',
  newBooks: []
}
  searchLibrary = (event) => {
    this.setState({query: event.target.value})
  }
render() {
  const newBooks = this.state
  return (
            <div className="search-books">
              <div className="search-books-bar">
                <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.searchLibrary}/>
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {this.state.newBooks.map((book) => (
                    <li key={book.id}>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
    )
  }
}

export default Search
