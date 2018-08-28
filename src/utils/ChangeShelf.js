import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Books from './Books.js'

export default class ChangeShelf extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

updateShelf = (book, newShelf) => {
  this.setState(previousState => {
    const newBooks = previousState.books.filter((b) => b.id !== book.id)
    newBooks.push({ book, newShelf })
    return { books: newBooks }
  })
  BooksAPI.update(book, newShelf)
}
moveBook = (shelf) => {
  const { books } = this.props
  return books.filter(book => book.shelf === shelf)
}

render() {
  const { book, books, updateShelf } = this.props

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
