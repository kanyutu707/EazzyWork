import React from 'react'
import { Router, Link} from "react-router-dom"
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className='sideBarContainer'>
        <span className="profile">
            <img src="" alt="" srcset="" />
            <h3>JOHN OLOO</h3>
        </span>
        <Link to="/Worker/">DASHBOARD</Link>
        <Link to="/Worker/jobs">JOBS</Link>
        <Link to="/Worker/payments">PAYMENTS</Link>
        <a href="/Worker/account">ACCOUNT</a>
        
    
    </div>
  )
}

export default Sidebar
