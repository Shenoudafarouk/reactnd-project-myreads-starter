import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.updateShelf = this.updateShelf.bind(this);
  }

  state = {
    books: [],
  };

  componentDidMount = async () => {
    const books = await BooksAPI.getAll();
    this.setState({ books: books });
    console.log(books);
  };

  updateShelf(updatedBook, shelf) {
    this.setState((currentState) => ({
      books: currentState.books
        .filter((book) => {
          return book.id !== updatedBook.id;
        })
        .concat({ ...updatedBook, shelf }),
    }));
    BooksAPI.update(updatedBook, shelf)
  }

  Search = () => {
    return <Search books={this.state.books} updateShelf={this.updateShelf} />;
  };

  MainPage = () => {
    return <Home books={this.state.books} updateShelf={this.updateShelf} />;
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={this.MainPage} />
          <Route exact path="/Search" render={this.Search} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
