import React from 'react'
import './Hero.css'
import { Link} from "react-router-dom"

const Hero = () => {
    
  return (
    <div className='heroContainer'>
      <span className="heroad">
        <h3>WELCOME TO EAZZYJOB YOUR BEST SHOT AT GETTING FREELANCE WORK, CONTRACTUAL WORK OR EVEN SOME PERMANENT JOB
        </h3>
        
        <Link to="/SignIn">LET'S GO</Link>
      </span>

    </div>
  )
}

export default Hero
