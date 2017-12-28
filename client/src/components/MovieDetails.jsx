import React from 'react';

export default class Details extends React.Component{
  constructor(props) {
    super(props)
    this.movie = this.props.movieObj;
  }

  render(){
    return(
    <div id='details'>
      <p>name: {this.movie.name}</p>
      <p>job: {this.movie.job} </p>
    </div>)
  }
}
