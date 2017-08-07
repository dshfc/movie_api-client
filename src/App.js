import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    title: ''
  };
this.searchMovie = this.searchMovie.bind(this);
this.clearSearch = this.clearSearch.bind(this);
this.handleChange = this.handleChange.bind(this);

  }
handleChange(event) {
  const newState = {};
  newState[event.target.title] = event.target.value;
  this.setState(Object.assign({}, this.state, newState));
}

searchMovie() {
  this.props.searchMovie(this.state);
}

clearSearch(event) {
  
  this.setState({title: ''});

}
  render() {
    return (
      <div className="App">
          <h1>Movie search</h1>
          <form>
        <input type="text" name="title" value = {this.props.title} onChange = {this.handleChange}/>
        
        <button id ="search" onClick = {this.searchMovie}> Search </button>
        <button id ="clear" onClick = {this.clearSearch}> Clear </button>
        </form>
      </div>
    );
  }
}


