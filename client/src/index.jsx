import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
const http = require('http');
// const request = require('request')
var movies = [
  {title: 'Mean Girls',
  name: 'arglebargle', job: 'engineer'},
  {title: 'Hackers',
  name: 'zulu', job: 'boss'},
  {title: 'The Grey',
  name: 'tutsi', job: 'shaykh'},
  {title: 'Sunshine', name: 'wahed', job: 'investor'},
  {title: 'Ex Machina', name: 'haroon', job: 'king'},
];

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.currentMovieList = this.props.movies;
    this.state = {value: '', newMovie: '', watchedList: []};

    this.handleChange = this.handleChange.bind(this); // this will actually change state
    this.handleSubmit = this.handleSubmit.bind(this); // binding this so we can pass it down

  }
  
  componentWillMount() {

    http.get('/movies', (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      }).on('end', () => {
        console.log(body);
        this.currentMovieList = body;
      })
    })


  }

  handleChange(event) {
    // alert("Just searched " + event.target.value);
    this.setState({value: event.target.value});

  }

  handleSubmit(event) {
    // USING ALERT FOR TEST
    // alert('Thanks for searching: ' + this.state.value);
    event.preventDefault();
    // created matched to contain matches
    var matches = [];
    var movieTitles = this.props.movies.map((movie) => movie.title)
    // for each movie title, check if each state.val is in each string (movie title)
    movieTitles.forEach((movie) => {
      // console.log(typeof movie);
      if(movie.includes(this.state.value)){
        //if check passes, then push into the matched array
        matches.push(movie)
      }
    });
    // then create a new array containing matched Title objects
    var matchedArrayWithObjects = matches.map((title) => {
      return {'title': title};
    });
    //console log as test
    // console.log('TEST: ', matchedArrayWithObjects);
    // Now its time to re-render
    if (matchedArrayWithObjects.length > 0) {
      this.currentMovieList = matchedArrayWithObjects;
      ReactDOM.render( <MovieList movies={movies} />, document.getElementById('app'));
    } else {
      ReactDOM.render( <p> Movie not found! Refresh to search again. </p> , document.getElementById('app'));
    }

  }

  handleMovie(event) {
    this.setState({newMovie: event.target.value});
  }

  addMovie(event) {
    // preventDefault stops the page from goddamn refreshing everytime
    event.preventDefault();
    // create an object
    var newObject = {'title': this.state.newMovie};
    this.props.movies.push(newObject);
    // re-render the movielist
    ReactDOM.render( <MovieList movies={this.props.movies} />, document.getElementById('app'));
  }

  watchedSort(event) {
    event.preventDefault();
    if(this.state.watchedList.length > 0) {
      var matchedArrayWithObjects = this.state.watchedList.map((title) => {
        return {'title': title};
      });
      this.currentMovieList = matchedArrayWithObjects;
      ReactDOM.render( <MovieList movies={movies} />, document.getElementById('app'));
    }
  }

  needToWatchSort(event){
    event.preventDefault();
    var toWatch = [];
    var movieTitles = this.props.movies.map((movie) => movie.title)
    movieTitles.forEach((movie) => {
      if(!this.state.watchedList.includes(movie)) {
        toWatch.push(movie);
      }
    });
    var matchedArrayWithObjects = toWatch.map((title) => {
      return {'title': title};
    });

    if (matchedArrayWithObjects.length > 0) {
      this.currentMovieList = matchedArrayWithObjects;
      ReactDOM.render( <MovieList movies={movies} />, document.getElementById('app'));
    }

  }
  // potentail optimization after refactor
  // reRender() {
  //   ReactDOM.render( <MovieList movies={movies} />, document.getElementById('app'));
  // }
  render() {
    return (
      <div>
        <Search submit = {this.handleSubmit} value={this.state.value} change={this.handleChange} />
        <AddMovie submit = {this.addMovie.bind(this)} change= {this.handleMovie.bind(this)}/>
        <div id="tabs">
          <button onClick={this.watchedSort.bind(this)}>Watched</button>
          <button onClick={this.needToWatchSort.bind(this)}>Watch</button>
        </div>
        <div id="MovieList">
          {this.currentMovieList.map((movie) => <Movie film= {movie.title} movieObj={movie} key= {this.currentMovieList.indexOf(movie)} list={this.state.watchedList}/> )}
        </div>
      </div>
    )
  }
}

ReactDOM.render( <MovieList movies={movies} />, document.getElementById('app'));
