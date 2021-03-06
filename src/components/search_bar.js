import React, {Component} from 'react';

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    onDataChange (term) {
      console.log(term)
      this.setState({term})
    }
    onInputChange (term) {
      //this.setState({term})
      this.props.onSearchTermChange(term)
    }
    render() {
      return (
        <div className="search-bar">
          <input value={this.state.term}
                 onChange={event => this.onDataChange(event.target.value)}
                 placeholder="Search Here" />
          <button className="search-button" onClick={event => this.onInputChange(this.state.term)}>search</button>
        </div>
      )
  }


}

export default SearchBar

//value of the input: {this.state.term}
