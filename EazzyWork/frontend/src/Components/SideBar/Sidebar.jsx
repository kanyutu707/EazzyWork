import React from 'react'
import { Router, Link} from "react-router-dom"
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className='sideBarContainer'>
        <span className='h3'>=</span>
        <nav>
          <ul>
        <li><Link to="/Worker/">DASHBOARD</Link></li>
        <li><Link to="/Worker/jobs">JOBS</Link></li>
        <li><Link to="/Worker/payments">PAYMENTS</Link></li>
        <li><Link to="/Worker/account" >ACCOUNT</Link></li>
        </ul>
        </nav>
    
    </div>
  )
}

export default Sidebar
