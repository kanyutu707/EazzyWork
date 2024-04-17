import React from 'react'
import './SignIn.css'
import { Link} from "react-router-dom"

const SignIn = () => {
  return (
    <div className="container">
    <form action="" method="post" className='sign_in_form'>
    <header className="form-header">SIGN UP</header>
        <form-group >
            <label htmlFor="first_name">EMAIL</label>
            <input type="email" placeholder='Input your emall' />
        </form-group>
        <form-group>
            <label htmlFor="password">PASSWORD</label>
            <input type="text" placeholder="password" />
        </form-group>
       
        <Link to="/Employer">Sign In</Link>
        <h5>Do you have an account? <Link to="/Signup">SignUp</Link></h5>
    </form>
    </div>

  )
}

export default SignIn
