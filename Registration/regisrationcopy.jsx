import React, { Component } from 'react';

 class Registration extends Component {
     state={
         username:""

     }
     userNameHandler=(event)=>{
         console.log(event);
         console.log(event.target);
         console.log(event.target.value);
     }
  render() {
    return (
          <>
          <h2>Regiatration form</h2>
        
          <form>
              <lebal>userName</lebal>
              <pre>{JSON.stringify(this.state)}</pre>
              <input type="text" onChange={this.userName}></input>
              <br/>
              <button>Login</button>
          </form>
    
    
    </>
    )
  }
}

export default Registration;
