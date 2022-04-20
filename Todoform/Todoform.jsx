import React,{useState} from 'react';

const Todoform = () => {
    const [inputValues,setinputValues]=useState({
        email:'',
        password:''
    });
    const [todo,setTodo] = useState([]);
    const changeHandler = (e)=>{
        setinputValues({...inputValues,[e.target.name]:e.target.value})
    }
    const submmitHandler = (e)=>{
        e.preventDefault();
        const newTodo = [inputValues,...todo];
        setTodo(newTodo);
        console.log(inputValues);
    }
  return (<>
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-6 m-auto shadow p-4'>
                <div>
                    {/* <pre>{JSON.stringify(inputValues)}</pre> */}
                    <h1 className='text-center mb-4'>Login Form</h1>
                    <form onSubmit={submmitHandler}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="text" className="form-control" name='email' value={inputValues.email}
                            onChange={changeHandler}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name='password'  value={inputValues.password} 
                            onChange={changeHandler}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-scuss">Submit</button>
                    </form>
                </div>
            </div>
        </div>

        <div className='row mt-5'>
            <div className='col-6 m-auto'>
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>S NO</th>
                                <th>EMAIL</th>
                                <th>PASSWORD</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               todo.map((elem,index)=>{
                                    return(<tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.password}</td>
                                    </tr>)
                               }) 
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </>)
}

export default Todoform;