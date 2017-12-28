import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>
        <form onSubmit= {this.props.submit} >
          <input type='textarea' onChange= {this.props.change} ></input>
          <button type='submit'> Search </button>
        </form>

      </div>)
  }
}
