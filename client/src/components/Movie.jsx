import React from 'react';
import rif from 'render-if'

export default class Movie extends React.Component{
  constructor(props) {
    super(props)


  }



  render(){
    return(
      <div id='filmTitle'>
        {this.props.movie.title}
        <button id='Watch' onClick={() => {this.props.submit(this.props.movie)}}> Watched </button>
      </div>
    )
  }
}
