import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Books from './Books.js'

export default class ChangeShelf extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
}

moveBook = (shelf) => {
  const { books } = this.props
  return books.filter(book => book.shelf === shelf)
}

render() {
  const { book, books } = this.props
  const updateShelf = this.state

    return (
      <div className="book-shelf-changer">
        <select onChange={(event) => updateShelf(book, event.target.value)}>
          <option value="move" disabled>Move to...</option>
          <option value="Currently Reading">Currently Reading</option>
          <option value="Want To Read">Want to Read</option>
          <option value="Read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}
