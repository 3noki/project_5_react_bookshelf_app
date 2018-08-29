import React, { Component } from 'react'
import Books from './Books.js'
import logo from '../icons/logo.svg'
import { Link } from 'react-router-dom'

export default class Bookshelf extends Component {

render() {
  const { book, books, newBook, getBookShelf } = this.props

  return (
    <div className="app">
    {console.log(this.props.books)}

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
            	{this.props.books && this.props.books.filter(book => book.shelf === 'currentlyReading').map(book =>
                <div className="bookshelf-books">
                {getBookShelf(book)}
                {console.log(this.props.book)}
                      <ol className="books-grid">
                        <li key={book.id}>
                            <Books
                              book={book}
                              books={this.props.books}
                              onUpdateShelf={this.updateShelf}
                            />
                        </li>
                      </ol>
                  </div>
              )}
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            	{this.props.books && books.filter(book => book.shelf === 'wantToRead').map(book =>
                <div className="bookshelf-books">
                      <ol className="books-grid">
                        <li key={book.id}>
                            <Books
                              book={book}
                              books={this.props.books}
                              onUpdateShelf={this.updateShelf}
                            />
                        </li>
                      </ol>
                  </div>
              )}
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Completed Reading</h2>
            	{this.props.books && books.filter(book => book.shelf === 'read').map(book =>
                <div className="bookshelf-books">
                      <ol className="books-grid">
                        <li key={book.id}>
                            <Books
                              book={book}
                              books={this.props.books}
                              onUpdateShelf={this.updateShelf}
                            />
                        </li>
                      </ol>
                  </div>
              )}
          </div>

            <div className="open-search">
              <Link to="/search">Search</Link>
            </div>
        </div>
      </div>

      </div>
    )
  }
}
