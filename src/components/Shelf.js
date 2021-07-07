import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ShowBooks from './ShowBooks'

class Shelf  extends Component{
  
  static proptypes =  {
    books: PropTypes.array.isRequired,  
    updateShelf : PropTypes.func.isRequired,
  }

  state = {
    books_Shelfs : [
      {
        title: 'Currently Reading',
        shelf: 'currentlyReading'
      },
      {
        title: 'Want To Read',
        shelf: 'wantToRead'
      },
      {
        title: 'Read',
        shelf: 'read'
      }
    ]
  }
  
  render()
  {
    const {books} = this.props;
    return(
    <div>      
      {this.state.books_Shelfs.map(shelf => (
          <ShowBooks key={shelf.shelf} books={books} shelf={shelf.shelf} title={shelf.title} updateShelf={this.props.updateShelf}/>
        )
       )}
    </div>
    );
  }
}


export default Shelf
