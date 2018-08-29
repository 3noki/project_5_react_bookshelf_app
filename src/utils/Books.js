import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Books extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, onUpdateShelf } = this.props;
    const title = book.title ? book.title : "No title available"

    return (
            <div className='book'>
              <div className='book-top'>
              <div className='book-cover' style={{ width: 124, height: 188, backgroundImage: (book.imageLinks) ?
              (`url(${book.imageLinks.thumbnail})`)
              :(`url(${'icons/no_image_available.jpg'})`),
              backgroundRepeat: 'no-repeat'}}></div>

              <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(event) => this.props.onUpdateShelf(book, event.target.value)}>
                {console.log(book.shelf)}
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
              </div>

                <div className='book-title'>{title}</div>
                {book.authors.length >= 1 ?
                  (
                    book.authors.map((author, index) =>
                    <div className='book-authors' key={index}>{author}</div>)
                  ):
                  (
                    <div className='book-authors'>Authors Unkown</div>
                  )
                }
            </div>
    )
  }
}
