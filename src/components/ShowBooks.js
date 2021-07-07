import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListBook from './ListBook'

class ShowBooks extends Component {
  
  
  render() {
    const { books, title, shelf } = this.props;
    return (
      <div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter((book) => book.shelf === shelf)
                    .map((book) => (
                      <ListBook key={book.id} book={book} updateShelf={this.props.updateShelf} />
                     ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowBooks;

ShowBooks.propTypes = {
  books: PropTypes.array.isRequired, 
  updateShelf : PropTypes.func.isRequired,
  shelf : PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
