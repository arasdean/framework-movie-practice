
import React from 'react';
import Details from './MovieDetails.jsx';

export default class Movie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {isToggleOn: true, panel: true};
    this.handleClick = this.handleClick.bind(this);
    this.panelOpen = this.panelOpen.bind(this);
  }
  handleClick(e){
    this.props.list.push(this.props.film);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  panelOpen(e) {
    e.preventDefault()
    this.setState(prevState => ({
      panel: !prevState.panel
    }));
  }
  render() {
    return (
      <div>
        <div id='filmTitle'>
        <a href='' onClick={this.panelOpen}> {this.props.film} </a>
        {this.state.isToggleOn ?
        <button id='Watch' type='submit' onClick={this.handleClick}> Watch
        </button>
        :
        <button id='Watched' type='submit' onClick={this.handleClick}> Watched
        </button>}
      </div>
      {this.state.panel ? <div></div> : <Details movieObj= {this.props.movieObj} />}
    </div>

  )
  }
}

// {this.state.isToggleOn ? <p color='red'>'Watch'</p> : 'Watched'}
