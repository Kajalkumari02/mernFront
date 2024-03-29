import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const Signup = () => {

    const [Credentials,setCredentials]=useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit=async(e)=>{
       e.preventDefault();
       const response= await fetch("https://mernback-f9td.onrender.com/api/createuser",{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({name:Credentials.name,email:Credentials.email,password:Credentials.password,location:Credentials.geolocation})
       });
       const json=await response.json();
       console.log(json);
       if(!json.success){
        alert("Enter valid credentials")
       }
    }
    const onChange=(e)=>{
        setCredentials({...Credentials,[e.target.name]:e.target.value})
    }
  return (
    <>
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={Credentials.name} onChange={onChange}/>
    </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={Credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={Credentials.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
    <input type="text" className="form-control" name='geolocation' value={Credentials.geolocation} onChange={onChange} id="exampleInputAddress1"/>
  </div>
  <button type="submit" className=" m-3btn btn-success">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>

</form>
</div>
    </>
  )
}

export default Signup

