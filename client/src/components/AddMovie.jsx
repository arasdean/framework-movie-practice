import React from 'react';


export default class AddMovie extends React.Component{
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <form>
        <input type="textarea" />
        <button type='submit'> Add Movie </button>
      </form>
    )
  }

}
