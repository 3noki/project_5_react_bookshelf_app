import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Books extends Component {

static propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
}

  render() {
    const { book, books } = this.props;

    return (
      <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id}>

        <div className='book'>
          <div className='book-top'>
          <div className='book-cover' style={{ width: 124, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})`, backgroundRepeat  : 'no-repeat'}}></div>
          </div>
            <div className='book-title'>{book.title}</div>
            <div className='book-authors'>{book.authors}</div>
        </div>
      </li>
    ))}
</ol>
    )
  }
}
export default Books
