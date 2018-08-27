default paragraph content

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">React bookshelf app</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>


{/*const books = [
  { title: 'want to read'},
  { title: 'lotr',
    bookCoverURL: "file:///home/user/Pictures/blackcat.jpg"},
  { title: 'star wars'}
]*/}


import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Books extends Component {

static propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
}

  render() {
    const { book, books } = this.props
    const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noCover
    const title = book.title ? book.title : "No title available"

    return (
      <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id}>
              <div className='book'>
                <div className='book-top'>
                  <div className='book-cover' style={{ width: 124, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})`, backgroundRepeat  : 'no-repeat'}}></div>

                      <div className="book-shelf-changer">
                        <select onChange={() => this.props.onChangeShelf(book)}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>

                    </div>

                    <div className='book-title'>{book.title}</div>
                    <div className='book-authors'>{book.authors}</div>

                </div>
                </li>
            ))}
      </ol>
    )
  }
}
export default Books



{this.state.newBooks.map((book) => (
    <Books key={book.id} book={this.props.book} books={this.props.books} newBooks={ this.props.newBooks }/>
))}

<Route path="/search" render={() => (<Search books={this.state.books}/>)}/>

class Book extends Component {
  render() {
    return (
      <div className="App-text">Title: {this.props.name}</div>
    )
  }
}

class BooksApp extends Component {
  render() {
    const books = this.props.titles

    return <ol>
      {books.map((book => (
        <li key={book.title}>{book.title}</li>)
      ))}
    </ol>
  }
}


        <p className="App-text">
          Books
        </p>

        books
          <Book name={"lotr"}/>
          <BooksApp className="App-text" titles={[
            { title: 'want to read'},
            { title: 'lotr',
              bookCoverURL: "/home/user/Pictures/blackcat.jpg"}
          ]}/>
          <BooksApp className="App-text" titles={[
            { title: 'already read' },
            { title: 'the hobbit' }
          ]}/>


          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React bookshelf app</h1>
          </header>

              <BookList books={this.state.books}/>





              html, body, .root {
                height: 100%;
              }
              body {
                line-height: 1.5;
              }
              body, .app {
                background: white;
              }

              /* main page */
              .list-books-title {
                padding: 10px 0;
                background-color: orange;
                text-align: center;
              }
              .list-books-title h1 {
                font-weight: 400;
                margin: 0;
                color: white;
              }
              .list-books-content {
                padding: 0 0 80px;
                flex: 1;
              }
              .bookshelf {
                padding: 0 10px 20px;
              }
              .bookshelf-title {
                border-bottom: 1px solid #dedede;
              }
              .bookshelf-books {
                text-align: center;
              }
              ol, li {
                /* text-align: left; */
              }
              li {
                list-style-type: none;
                /* padding: 0px; */
              }
              /* .book-list {
                width: 100%;
                margin: 0;
                padding: 0;
                list-style-type: none;
                padding: 10px 0;
                background: #528a54;
                text-align: center;
              } */
              .book-list-item {
                padding: 6px;
                margin: 6px;
                width: 168px;
                display: flex;
                flex-wrap: nowrap;
                flex-direction: column;
                align-content: center;
                align-items: center;
                justify-content: center;
              }
              @media (min-width: 600px) {
                .bookshelf {
                  padding: 0 20px 40px;
                }
              }
              /* books grid */
              .books-grid {
                width:100%;
                /* list-style-type: none;
                padding: 0;
                margin: 0; */
                /* display: flex;
                justify-content: center;
                flex-wrap: wrap; */
                /* display: flex;
                flex-direction: row;
                justify-content: center;
                flex-wrap: wrap;
                align-content: space-between; */
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-content: space-around;
                align-items: baseline;
                justify-content: space-evenly;

              }
              .books-grid li {
                padding: 10px 15px;
                text-align: left;
              }
              .book {
                width: 140px;
                /* display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex-wrap: wrap;
                align-content: space-between; */
              }

              .book-title,
              .book-authors {
                font-size: 0.8em;
                text-align: center;
              }
              .book-title {
                margin-top: 10px;
              }
              .book-authors {
                color: #999;
              }

              .book-top {
                /* position: relative;
                height: 200px;
                background-color: lightblue; */
                /* display: flex;
                align-items: space-between;
                flex-wrap: nowrap;
                justify-content: space-between; */
                /* padding:2px; */
              }
              /* book cover */

              .book-cover {
                box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
                background: #eee;
                width:124px;
                height:158px;
              }

              .book-cover-title {
                padding: 20px 10px 0;
                text-align: center;
                font-size: 0.8em;
              }




              .App {
                text-align: center;
              }

              .App-logo {
                animation: App-logo-spin infinite 20s linear;
                height: 80px;
              }

              .App-header {
                background-color: #222;
                height: 150px;
                padding: 20px;
                color: white;
                margin-bottom: 4px;
              }

              .App-title {
                font-size: 1.5em;
              }

              .App-intro {
                font-size: large;
              }

              .App-text {
                text-align: left;
              }

              @keyframes App-logo-spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }

              .open-search {
                position: fixed;
                right: 25px;
                bottom: 25px;
              }
              .open-search a {
                display: block;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: #2cb4b4;
                background-image: url('./icons/add.svg');
                background-repeat: no-repeat;
                background-position: center;
                background-size: 28px;
                box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
                font-size: 0;
              }

              /* search page */

              .search-books-bar {
                position: fixed;
                width: 100%;
                top: 0;
                left: 0;
                z-index: 5;
                display: flex;
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 0 6px rgba(0,0,0,0.23);
              }
              .search-books-input-wrapper {
                flex: 1;
                background: #e9e;
              }
              .search-books-bar input {
                width: 100%;
                padding: 15px 10px;
                font-size: 1.25em;
                border: none;
                outline: none;
              }

              .close-search {
                display: block;
                top: 20px;
                left: 15px;
                width: 50px;
                height: 53px;
                background: white;
                background-image: url('./icons/arrow-back.svg');
                background-position: center;
                background-repeat: no-repeat;
                background-size: 28px;
                font-size: 0;
              }

              .search-books-results {
                padding: 80px 10px 20px;
              }


              .book-shelf-changer {
                position: absolute;
                right: 0;
                bottom: -10px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #60ac5d;
                background-image: url('./icons/arrow-drop-down.svg');
                background-repeat: no-repeat;
                background-position: center;
                background-size: 20px;
                box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
              }
              .book-shelf-changer select {
                width: 100%;
                height: 100%;
                opacity: 0;
                cursor: pointer;
              }
