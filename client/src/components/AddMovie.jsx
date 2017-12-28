import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>
        <form id='add' onSubmit= {this.props.submit} >
          <input type='textarea' onChange= {this.props.change} ></input>
          <button type='submit'> AddMovie </button>
        </form>
      </div>)
  }
}
