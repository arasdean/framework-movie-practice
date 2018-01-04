import React from 'react';



export default class Search extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id='search'>

        <form>
          <input type="textarea" />
          <button type='submit'> Search </button> 
        </form>

      </div>
    )
  }
}
