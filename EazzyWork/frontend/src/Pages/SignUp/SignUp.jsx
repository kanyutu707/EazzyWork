import React, { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'


const SignUp = () => {
     
    const [formData, setFormData]=useState({
        "first_name":"",
        "last_name":"",
        "email":"",
        "password":"",
        "role":"",
        "resume":null
      
       });
       const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
       };
       const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await fetch('http://localhost:9020/site/users', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData),
            });
            if(!response.ok){
                console.log(response)
                throw new Error('Network response was not ok')
                
            }
            console.log('Form data submitted successfully');
            window.location.href=window.location.href;
        }
        catch(error){
            console.error('There was a problem with your fetch operation: ', error)
        }
       }
  return (
    <div className="container">
    <form action="" className='sign_up_form' onSubmit={handleSubmit}>
        <header className="form-header">SIGN UP</header>
        <form-group >
            <label htmlFor="first_name">FIRST NAME</label>
            <input type="text" placeholder='Input your first name' onChange={handleChange}  name='first_name' value={formData.first_name} />
        </form-group>
        <form-group>
            <label htmlFor="last_name">LAST NAME</label>
            <input type="text" placeholder='Input your last name' onChange={handleChange}  name='last_name' value={formData.last_name}/>
        </form-group>
        <form-group>
            <label htmlFor="email">EMAIL</label>
            <input type="email"  placeholder='input your email' onChange={handleChange}  name='email' value={formData.email}/>
        </form-group>
        <form-group>
            <label htmlFor="password">PASSWORD</label>
            <input type="password" placeholder="password" onChange={handleChange}  name='password' value={formData.password}/>
        </form-group>
        <form-group>
            <label htmlFor="role">ROLE</label>
            <input type="text" placeholder="ROLE" onChange={handleChange}  name='role' value={formData.role}/>
        </form-group>
        <form-group>
            <label htmlFor="resume">RESUME</label>
            <input type="file" placeholder="RESUME" onChange={handleChange}  name='resume' value={formData.resume}/>
        </form-group>
        <button>SIGN UP</button>
    </form>
    </div>

  )
}

export default SignUp
