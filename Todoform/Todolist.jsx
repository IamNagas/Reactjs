import React,{useState} from 'react'

function Todolist() {
    let[data,setData]=useState({
         firstName:"",
        secondName:"", 
        mobileNumber:"",
        email:"",
        password:""
    });
    let [todo,setTodo]=useState([]);
    let changeHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value}) 
    }
    let submitHandler=(event)=>{
        event.preventDefault()
        let newTodo=[data,...todo]
        setTodo(newTodo); 
        setData("firstName")
        
    }
     let deleteHandler=(indexvalue)=>{
        let newTodo =todo.filter((todo,index)=>index !==indexvalue);
        setTodo(newTodo); 
       
    }
  return (
    <div>
        <div className="cotainer mt-4">
            <div className="row">
                <div className="col-8  m-auto shadow p-4 ">
                    <pre>{JSON.stringify(data)}</pre>
                <h1 className='text-center mb-4'>Todo List</h1>
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label  className="form-label">FirstName</label>
                        <input type="text" className="form-control" name='firstName' value={data.name} onChange={changeHandler}/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">SecondName</label>
                        <input type="text" className="form-control" name='secondName' value={data.name} onChange={changeHandler} />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Mobile Number</label>
                        <input type="text" className="form-control" name='mobileNumber' value={data.mobileNumber} onChange={changeHandler} />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={data.email}onChange={changeHandler}/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={data.password} onChange={changeHandler} />
                    </div>
                       {/* <div className="mb-3 form-check">     
                        <label className="form-radio-label">Add your list</label>
                    </div>
                     <button type="submit" className="btn btn-primary">Add</button> */}
                   <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input mt-4"/>
                        <label className="form-check-label mt-3" >Confirm above details are correct or not.</label>
                    </div>
                     <button type="submit" className="btn btn-success">Submit</button> &nbsp; &nbsp;
                     <button type="Reset" className='"btn btn-danger'>Reset</button>
                </form>
                </div>
            </div>
        </div>
        <div className='col-6 m-auto'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>SL.No</th>
                        <th>firstName</th>
                        <th>secondName</th>
                        <th>mobileNumber</th>
                        <th>email</th>
                        <th>password</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map((element,index)=>{
                            return (<tr key={index}>
                                <td>{index+1}</td>
                                <td>{element.firstName}</td>
                                <td>{element.secondName}</td>
                                <td>{element.mobileNumber}</td>
                                <td>{element.email}</td>
                                <td>{element.password}</td>
                            <td><button  type="delete"className='mb-1' onClick={()=>{deleteHandler(index)}}>Delete</button>
                            </td>
                            </tr>)

                        })
                    }
                   
                </tbody>
            </table>
        </div>

    </div>
    
  )
}
export default Todolist;
