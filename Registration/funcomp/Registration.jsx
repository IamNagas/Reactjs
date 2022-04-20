 import React, { useState } from 'react'

function Registartion() {
  let [data,setData]=useState({
    userName:"",
    email:""
  });
  

  
  let submitHandler=(event)=>{
    event.preventDefault();
    console.log(data);
  }
  return (
    <><center>
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 m-auto shadow p-4">
        <h1>Registration form</h1>
    <pre>{JSON.stringify(data)}</pre>
    <form onSubmit={submitHandler}>
      <label>User Name </label>
      <input type="text" onChange={e=>{setData({...data,userName:e.target.value})}}/><br/>
      <label> Email</label>
      <input type="text" onChange={e=>{setData({...data,email:e.target.value})}}/><br/>
      <button>Registration</button>
    </form>
        </div>
      </div>
    </div>
    </center>
    </>
  )
}

export default Registartion

 