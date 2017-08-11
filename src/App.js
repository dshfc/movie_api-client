import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList'
export default class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    search: '',
    movies: []
  };
// this.searchMovie = this.searchMovie.bind(this);
// this.clearSearch = this.clearSearch.bind(this);
  }

searchMovie(e) {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?apikey=c5a8df09&s=${e.target.search.value}`)
    .then((response) => response.json())
    .then((response) => this.setState({movies: response.Search}));
     
    }

clearSearch(){ 
        // let newState = this.state
        // newState= {}
        this.setState({ movies: '' })
    }


  render() {
    return (
      <div className="App">
        <MovieList movies={this.state.movies}/>
          <h1>Movie search</h1>
          <form onSubmit={(event) => this.searchMovie(event)}>
          <input type="text" name= "search" />
          <input type='submit'/>
        </form>
        <button id ="clear" onClick = {() => this.clearSearch()}> Clear </button>
      </div>
    );
  }
}


