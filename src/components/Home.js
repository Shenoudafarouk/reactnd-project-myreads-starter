import React from "react";
import "../App.css";
import Shelf from "./Shelf";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

class Home extends React.Component {


  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        </div>
        <Shelf books={this.props.books} updateShelf={this.props.updateShelf} />
        <div className="open-search">
          <Link to="/Search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Home;

Home.propTypes = {
   books: PropTypes.array.isRequired,
   updateShelf : PropTypes.func.isRequired,
};