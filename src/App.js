import React, { Component } from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import Bookshelf from './utils/Bookshelf.js'
import Search from './utils/Search.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default class App extends Component {
  state = { books: [] }

  componentDidMount() {
      BooksAPI.getAll().then(books => {this.setState({books})})
    }

  updateShelf = (newBook, shelf) => {
    const { book } = this.props
    BooksAPI.update(newBook, shelf.then(response =>{
      book.shelf = shelf
      const newBooks = this.state.books.filter(b => b.id !== newBook.id)
      newBooks.push(newBook)
      this.setState({books: newBook})
    }))
  }

  getBookshelf = (book) => {
    BooksAPI.get(book.id).then(book => { return book.shelf })
  }

  render() {
    const { books } = this.state
    const { newBook } = this.state

    return (
      <BrowserRouter>
        <Switch>
            <Route path='/search' render={({history}) => (
              <Search books={ books } onUpdateShelf={ this.updateShelf } /> )}
            />
            <Route exact path='/' render={() => (
              <Bookshelf newBook={newBook} books={ books } onUpdateShelf={ this.updateShelf } getBookshelf={this.getBookshelf} /> )}
            />
        </Switch>
      </BrowserRouter>
    )
  }
}
