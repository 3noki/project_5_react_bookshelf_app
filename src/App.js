import React, { Component } from 'react'
import * as BooksAPI from './utils/BooksAPI'
import logo from './icons/logo.svg'
import './App.css'
import Books from './utils/Books.js'
import Bookshelf from './utils/Bookshelf.js'
import Search from './utils/Search.js'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'


export default class App extends Component {
  state = {
    books: [],
    showSearchPage: false
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {this.setState({books} )})
  }


  render() {
    const { books } = this.state

    return (
      <BrowserRouter>
        <Switch>
          <div className="app">
            <Route path='/search' component={ Search } />
            <Route exact path='/' component={ Bookshelf } />
            <Redirect from='*' to='/' />
            </div>
        </Switch>
      </BrowserRouter>
    )
  }
}
