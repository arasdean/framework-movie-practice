import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
const rif = require('render-if')
const http = require('http');



class MovieList extends React.Component {
  constructor(props) {
    super(props);
    var movies = [
      {id: 0, title: 'Mean Girls',
      name: 'arglebargle', job: 'engineer', watched: false },
      {id: 1,title: 'Hackers',
      name: 'tom', job: 'doctor' , watched: false},
      {id: 2,title: 'The Grey',
      name: 'joe', job: 'boss' , watched: false},
      {id: 3,title: 'Sunshine', name: 'wahed', job: 'investor' , watched: false},
      {id: 4,title: 'Ex Machina', name: 'haroon', job: 'cat' , watched: false}
    ];
    this.state = {
      value: '',
      movies: movies,
    };

  }
  // var test = this.state.movies.find((film) => {
  //   return film.title === movie.title;
  // });
  submitFunction(movie) {
    var moviesArray = this.state.movies;

    for(var i= 0; i< moviesArray.length; i++) {
      if (moviesArray[i].title === movie.title) {
        moviesArray[i].watched = !(moviesArray[i].watched);
      }
    }
    console.log(this.state.movies);
    this.setState({movies: moviesArray})

  }

  render() {
    if(this.state.movies){
      return(
        <div>
          <Search />
          <AddMovie />
          <div id='tabs'>
            <button> Watched </button>
            <button> Will Watch</button>
          </div>

          <div id='mList'>

          {this.state.movies.map((movie) => {
            if (movie.watched === false) {
              return <Movie movie={movie} key={this.state.movies.indexOf(movie)}
                submit = {this.submitFunction.bind(this)}/>
            }
         })}
          </div>
        </div>
      )
    }
  }
}

ReactDOM.render(<MovieList />, document.getElementById('app'));
