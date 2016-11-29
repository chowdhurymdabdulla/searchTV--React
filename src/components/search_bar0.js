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

        <form onSubmit={this.onFormSubmit} className="input-group">
          <input value={this.state.term}
            className="form-control"
                 onChange={event => this.onDataChange(event.target.value)}
                 placeholder="Search here any thing you want to watch"

                 />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"
            onClick={event => this.onInputChange(this.state.term)}>
            Submit
          </button>
        </span>
      </form>
      )
  }


}

export default SearchBar

//value of the input: {this.state.term}
    // <div className="search-bar">
    // <button className="search-button" onClick={event => this.onInputChange(this.state.term)}>search</button>
  // </div>
