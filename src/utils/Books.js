import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChangeShelf from './ChangeShelf.js'

export default class Books extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, updateShelf } = this.props;

    return (
            <div key={book.id} className='book'>
              <div className='book-top'>
              <div className='book-cover' style={{ width: 124, height: 188, backgroundImage: (book.imageLinks) ?
              (`url(${book.imageLinks.thumbnail})`)
              :(`url(${'icons/no_image_available.jpg'})`),
              backgroundRepeat: 'no-repeat'}}></div>
              </div>
              <ChangeShelf />
                <div className='book-title'>{this.props.title}</div>
                (book.authors.length > 0) ? (
                  {book.authors && book.authors.map((author, index) =>
                    <div className='book-authors' key={index}>{this.props.authors}</div>
                  )}
                ):(<div className='book-authors'>Author'(s)' Unkown</div>)
            </div>
    )
  }
}
