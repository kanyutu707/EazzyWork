import React from 'react'
import { Link } from 'react-router-dom'

const Admin_Sidebar = () => {
  return (
    <div className='sideBarContainer'> 
    <span className='h3'>=</span>
    <nav>
      <ul>
   <li> <Link to="/Employer/">DASHBOARD</Link></li>
   <li> <Link to="/Employer/bidders">Bidders</Link></li>
   <li> <Link to="/Employer/payments">Payments</Link></li>
    <li><Link to="/Employer/Account">Account</Link></li>
    </ul>
    </nav>
   
 
 </div>
  )
}

export default Admin_Sidebar
