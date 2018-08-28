import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Books from './Books.js'
import ChangeShelf from './ChangeShelf.js'
import logo from '../icons/logo.svg'
import { Link } from 'react-router-dom'

export default class Bookshelf extends Component {

static propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
}

render() {
  const { books } = this.props

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

            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <Books/>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
              </div>
            </div>


            <div className="open-search">
            <Link to="/search">Search</Link>
            </div>

          </div>
      </div>



    )
  }
}
