import React from 'react'
import './JobAddingForm.css'

const JobAddingForm = () => {
  return (
    <div className='jobAddingForm'>
        <form action="" className='job_form'>
            <header>POST A JOB</header>
            <form_group>
                <label htmlFor="job_name">Job</label>
                <input type="text" placeholder='job name' />
            </form_group>
            <form_group>
                <label htmlFor="job_description">Job Description</label>
                <input type="text" placeholder='job description' />
            </form_group>
            <form_group>
                <label htmlFor="price">PRICE PER HOUR</label>
                <input type="text" placeholder='price' />
            </form_group>
            <button type='submit'>SUBMIT</button>
        </form>
        name, description,poster, status
    </div>
  )
}

export default JobAddingForm
