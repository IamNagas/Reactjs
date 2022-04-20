import React,{useState} from 'react'

function Validationform() {
    let [data,setdata]=useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:""
    });
    const {username,email,password,confirmpassword}=data;
    const [todo,setTodo]=useState([])
    let changeHandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    let deleteHandler=(indexvalue)=>{
        let newTodo=todo.filter((todo,index)=>index !==deleteHandler);
        setTodo(newTodo)
      }
      let editHandler=(indexvalue)=>{
          let newTodo=todo.filter((todo,index)=>index !==indexvalue);
          setTodo(newTodo)
      }
    let submitHandler=e=>{
        e.preventDefault()
        let newTodo=[data,...todo]
        setTodo(newTodo)

        //console.log(data);

       
        if (username.length <= 5){
            alert("username must be 5 character")
        }
        else if(password !==confirmpassword){
            alert("password are not matching")
        }
        else {
            console.log(data);
        }
        
    }
  return (
    <>
      <div className="container">
          <div className="row">
              <div className="col">
                  <center>
                      <form autoComplete='off' onSubmit={submitHandler} >
                          <div>
                          <label>Username</label>
                          <input type="text" className='form-control' placeholder='username' name='username' value={username} onChange={changeHandler}/>  <br/>
                          </div>
                          <label>email</label>
                          <input type="email" className='form-control' placeholder='email'  name='email' value={email} onChange={changeHandler}/><br/>
                          <label>password</label>
                          <input type="password" className='form-control' placeholder='password' name='password' value={password} onChange={changeHandler}/><br/>
                          <label>confirmpassword</label>
                          <input type="password" className='form-control' placeholder='confirmpassword'  name='confirmpassword' value={confirmpassword} onChange={changeHandler}/><br/>
                          <input type="submit" name="submit"></input>
                      </form>
                  </center>
              </div>
          </div>
      </div>
      <div className='col-6 m-auto'>
      <table className='table'>
          <thead>
              <tr>   
                   <th>S.No</th>
                   <th>username</th>
                   <th>email</th>
                   <th>password</th>
                   <th>confirmpassword</th>
                </tr>
          </thead>
          <tbody>
              {  
              todo.map((element,index)=>{
                  return (<tr key={index}>
                           <td>{index+1}</td>
                           <td>{element.username}</td>
                           <td>{element.emial}</td>
                           <td>{element.password}</td>
                           <td>{element.confirmpassword}</td>
                           <button type="delete" onClick={()=>{deleteHandler(index)}}>Delete</button>
                           <button type="edit" onClick={()=>{editHandler(index)}}>Edit</button>         

                  </tr>)
                  }) 
                }                               
          </tbody>
      </table>
      </div>
    </>
  )
}

export default Validationform;
