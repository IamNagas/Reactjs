import React, { Component } from 'react'

class Registration extends Component {
    state={
        userName:"",
        email:""
    }
    userNameHandler=(event)=>{
        //console.log(event.target.value);
        this.setState({userName:event.target.value})
    }
    emailHandler=(event)=>{
        //console.log(event.target.value);
        this.setState({email:event.target.value})  
    }
    submitHandler=(event)=>{
        console.log(this.state);
        event.preventDefault()
    }
  render() {
    return (
      <div>
           <h1>Registartion form</h1>
           <pre>{JSON.stringify(this.state)}</pre>
          <form onSubmit={this.submitHandler}>                     
              <label>Username:</label>
              <input type="text" onChange={this.userNameHandler}/>
              <label>Email:</label> 
              <input type="text " onChange={this.emailHandler}/><br/>
              <button type='text' value="Registration">Registraition</button>
          </form>
      </div>
    )
  }
}

export default Registration;