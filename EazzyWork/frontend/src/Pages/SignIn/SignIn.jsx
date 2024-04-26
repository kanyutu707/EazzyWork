import React, { useState } from 'react'
import './SignIn.css'
import { Link, Navigate, useNavigate} from "react-router-dom"
import Cookies from 'js-cookie'


const SignIn = () => {
    const [user, setUser]=useState([])
    const navigate=useNavigate()
    const [formData, setFormData]=useState({
      
        "email":"",
        "password":"",
     
      
       });
       const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
       };
       const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await fetch('http://localhost:9020/site/Login', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData),
                credentials:'include'
            });
            if(!response.ok){
                console.log(response)
                throw new Error('Network response was not ok')
                
            }
            const data=await response.json();
            const authToken=data.jwt;
            console.log(authToken);
            fetchUserData();
            console.log('Form data submitted successfully');
   
        }
        catch(error){
            console.error('There was a problem with your fetch operation: ', error)
        }
       }
       const fetchUserData = async () => {
        try {
          const response = await fetch("http://localhost:9020/site/user", {
            credentials: 'include' // Ensure cookies are sent with the request
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const userData = await response.json();
          setUser(userData);
          console.log(userData); 
          Cookies.set('email', userData.email, {expires:3600});
          Cookies.set('role', userData.role, {expires:3600})

          if(userData.role==='Client'){
            navigate('/Employer/');
          }else if(userData.role==='Worker'){
            navigate('/Worker/');
          }
          else{
            alert("ROLE NOT FOUND")
          }
          
        } catch (error) {
          console.error('There was a problem fetching the user data: ', error);
        }
      };

    
      
  return (
    <div className="container">
    <form className='sign_in_form' onSubmit={handleSubmit}>
    <header className="form-header">SIGN UP</header>
        <form-group >
            <label htmlFor="first_name">EMAIL</label>
            <input type="email" placeholder='Input your emall'  onChange={handleChange}  name='email' value={formData.email} />
        </form-group>
        <form-group>
            <label htmlFor="password">PASSWORD</label>
            <input type="password" placeholder="password"  onChange={handleChange}  name='password' value={formData.password} />
        </form-group>
       
        <button type='submit' >Sign In</button>
        <h5>Do you have an account? <Link to="/Signup">SignUp</Link></h5>
    </form>
    </div>

  )
}

export default SignIn
