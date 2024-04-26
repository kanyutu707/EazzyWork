import React, { useState } from 'react';
import './JobAddingForm.css';
import Cookies from 'js-cookie'


const JobAddingForm = () => {
   const [formData, setFormData]=useState({
    
    "job_name":"",
    "job_description":"",
    "job_poster":Cookies.get('email'),
    "job_status":true,
    "job_price":""
  
   });
   const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value});
   };
   const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
        const response=await fetch('http://localhost:9020/site/jobs', {
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
        <div className='jobAddingForm'>
            <form className='job_form' onSubmit={handleSubmit}>
                <header>POST A JOB</header>
                <div className='form_group'>
                    <label htmlFor="job_name">Job</label>
                    <input type="text" placeholder='job name' onChange={handleChange}  name='job_name' value={formData.job_name}/>
                </div>
                <div className='form_group'>
                    <label htmlFor="job_description">Job Description</label>
                    <input type="text" placeholder='job description' onChange={handleChange}  name='job_description' value={formData.job_description}/>
                </div>
                <div className='form_group'>
                    <label htmlFor="price">PRICE PER HOUR</label>
                    <input type="number" placeholder='price' onChange={handleChange} name='job_price' value={formData.job_price} />
                </div>
                <button type='submit'>SUBMIT</button>
          
            </form>
        </div>
    );
};

export default JobAddingForm;
