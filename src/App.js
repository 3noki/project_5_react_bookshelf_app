import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI'
import logo from './icons/logo.svg';
import './App.css';
import Books from './utils/Books.js'
import Search from './utils/Search.js'



class App extends Component {
  state = {
    books: [],
    showSearchPage: false
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {this.setState({books})})
  }
  changeshelf = (book) => {
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id)
    }))
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
              {this.state.showSearchPage ? (
                <Search />
              ) : (

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
                          <Books onChangeShelf={this.changeShelf} books={this.state.books}/>
                        </div>
                      </div>

                      <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                          <Books books={this.state.books}/>
                        </div>
                      </div>
                      <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                          <Books books={this.state.books}/>

                        </div>
                      </div>
                    </div>

                  <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                  </div>

                </div>
              )}
            </div>
          )
        }
      }


export default App;
