import React from 'react'
import { Link } from 'react-router-dom'

const Admin_Sidebar = () => {
  return (
    <div className='sideBarContainer'> 
     <span className="profile">
            <img src="" alt="" srcset="" />
            <h3>JOHN OLOO</h3>
        </span>
    <Link to="/Employer/">DASHBOARD</Link>
    <Link to="/Employer/bidders">Bidders</Link>
    <Link to="/Employer/payments">Payments</Link>
    <Link to="/Employer/Account">Account</Link>
    </div>
  )
}

export default Admin_Sidebar
