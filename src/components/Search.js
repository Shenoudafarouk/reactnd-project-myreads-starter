import React, { Component } from "react";
import PropTypes from "prop-types";
import ListBook from "./ListBook";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";

class Search extends Component {
  state = {
    query: "",
    matchedBooks: [],
  };

  updateQuery = (query) => {
    let trimmedQuery = query.trim();
    this.setState({
      query: trimmedQuery,
    });

    this.fetchMatchedBooks(query);
  };

  fetchMatchedBooks = (query) => {
    if (query.length !== 0) {
      BooksAPI.search(query).then((matchedBooks) => {
        if (matchedBooks.error) {
          this.setState({ matchedBooks: [] });
        } else {
          this.setState({ matchedBooks: matchedBooks });
          // console.log(matchedBooks);
        }
      });
    } else {
      this.setState({ matchedBooks: [] });
    }
  };

  render() {
    const { query } = this.state;

    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
              {" "}
              Close{" "}
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div></div>

          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.matchedBooks.map((matchedBook) => {
                let shelf = "none";

                this.props.books.forEach((book) => {
                  if (book.id !== matchedBook.id) {
                    matchedBook.shelf = "none";
                  } else {
                    shelf = book.shelf;
                  }
                });

                return (
                  <ListBook
                    key={matchedBook.id}
                    book={matchedBook}
                    updateShelf={this.props.updateShelf}
                    currentShelf={shelf}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;

Search.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
};
