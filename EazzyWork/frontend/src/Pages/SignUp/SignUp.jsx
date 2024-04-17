import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="container">
    <form action="" method="post" className='sign_up_form'>
        <header className="form-header">SIGN UP</header>
        <form-group >
            <label htmlFor="first_name">FIRST NAME</label>
            <input type="text" placeholder='Input your first name' />
        </form-group>
        <form-group>
            <label htmlFor="last_name">LAST NAME</label>
            <input type="text" placeholder='Input your last name' />
        </form-group>
        <form-group>
            <label htmlFor="email">EMAIL</label>
            <input type="email"  placeholder='input your email'/>
        </form-group>
        <form-group>
            <label htmlFor="password">PASSWORD</label>
            <input type="text" placeholder="password" />
        </form-group>
        <Link to="/SignIn">Sign Up</Link>
    </form>
    </div>

  )
}

export default SignUp
