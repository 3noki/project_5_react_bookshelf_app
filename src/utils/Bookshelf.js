import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Books from './Books.js'
import logo from '../icons/logo.svg'
import { Link } from 'react-router-dom'
import ChangeShelf from "./ChangeShelf.js"

const shelves = [
  { key: 'currentlyReading',
    name: 'Currently Reading' },
  { key: 'wantToRead',
    name: 'Want to Read' },
  { key: 'read',
    name: 'Read' }
]

export default class Bookshelf extends Component {

static propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}

render() {
  const { book, books, shelfkey } = this.props;

  return (

      <div className="list-books">
          <div className="react-app">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React bookshelf app</h1>
            </header>
          </div>

            <div className="list-books-title">
              <h1>my bookshelf</h1>
            </div>

        <div className="list-books-content">
          {shelves.map(shelf => (
            <div key={ shelf.key } className="bookshelf">
              <h2 className="bookshelf-title">{ shelf.name }</h2>

              { updateShelf(shelfkey).length === 0 ?
                (<div>no books on this shelf</div>)
                :
                (<div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        {updateShelf(shelf.key).map(book => (
                          <Books
                            book={book}
                            books={books}
                            key={book.id}
                            onupdateShelf={this.UpdateShelf}
                          />
                        ))}
                      </li>
                    </ol>
                </div>
                )
              }

            </div>
          ))}
          <Link to="/search" className="open-search">Add a book</Link>
        </div>
      </div>

    )
  }
}
