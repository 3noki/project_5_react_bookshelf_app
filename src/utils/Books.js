import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Books extends Component {

static propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
}

  render() {
    const { book, books } = this.props;

    return (
      <ol className="books-grid">
        {this.props.books && this.props.books.map((book) => (
          <li key={book.id}>
          {console.log(book.title)}
            <div className='book'>
              <div className='book-top'>
              <div className='book-cover' style={{ width: 124, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})`, backgroundRepeat  : 'no-repeat'}}></div>
              </div>
                <div className='book-title'>{this.props.title}</div>
                <div className='book-authors'>{this.props.authors}</div>
            </div>
          </li>
        ))}
      </ol>
    )
  }
}
