import React, { Component } from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import Bookshelf from './utils/Bookshelf.js'
import Search from './utils/Search.js'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'


export default class App extends Component {
  state = { books: [] }

  componentDidMount() {
      BooksAPI.getAll().then(books => {this.setState({books} )})
    }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="app">
            <Route path='/search' render={() => (
              <Search
                books={this.state.books}
                onUpdateShelf={this.updateShelf}
                />
            )} />
            <Route path='/' render={() => (
              <Bookshelf
                books={this.state.books}
                onUpdateShelf={this.updateShelf}
                />
            )} />
            <Redirect from='*' to='/' />
            </div>
        </Switch>
      </BrowserRouter>
    )
  }
}
