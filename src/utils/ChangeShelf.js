import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

export default class ChangeShelf extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

onChangeShelf = (newBook, newShelf) => {
  const newBooks = this.props
  BooksAPI.update(newBook, newShelf).then(response => {
    newBook.shelf = newShelf
    let updatedBooks = this.state.books.filter(book => book.id !== newBook.id)
    updatedBooks.push(newBooks);
    this.setState({ books: updatedBooks})
  })
}

render() {
  const { book, books, onChangeShelf } = this.props

    return (
      <div className="book-shelf-changer">
        <select onChange={(event) => onChangeShelf(book, event.target.value)} defaultvalue={"none"}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}
