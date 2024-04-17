import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='aboutContainer'>
      <header className='aboutHeader'>WHAT WE DO</header>
      <div className="abouts">
      <section className="employer">
        <h3>EMPLOYERS</h3>
        <h4>We strive to provide you with a large pool of competent individuals who will be able to accomplish the task at hand in a fast, smooth and clean manner</h4>
      </section>
      <section className="employee">
        <h3>EMPLOYEES</h3>
        <h4>
            You are provided with a huge pool of job opportunities that you can apply to. The jobs have competitive wages and you are ensured of a smooth application process
        </h4>
      </section>
      </div>
    </div>
  )
}

export default About
