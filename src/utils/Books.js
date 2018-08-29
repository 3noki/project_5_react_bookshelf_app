import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Books extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, authors } = this.props;
    const title = book.title ? book.title : "No title available"

    return (
            <div key={book.id} className='book'>
            {console.log(book.id)}
              <div className='book-top'>
              <div className='book-cover' style={{ width: 124, height: 188, backgroundImage: (book.imageLinks) ?
              (`url(${book.imageLinks.thumbnail})`)
              :(`url(${'icons/no_image_available.jpg'})`),
              backgroundRepeat: 'no-repeat'}}></div>
              </div>

              <div className="book-shelf-changer">
                <select value= {book.shelf} onChange={(event) => this.props.updateShelf(book, event.target.value)}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>

                <div className='book-title'>{title}</div>
                (book.authors.length > 0) ? (
                  {book.authors && book.authors.map((author, index) =>
                    <div className='book-authors' key={index}>{authors}</div>
                  )}
                ):(<div className='book-authors'>Author'(s)' Unkown</div>)
            </div>
    )
  }
}
