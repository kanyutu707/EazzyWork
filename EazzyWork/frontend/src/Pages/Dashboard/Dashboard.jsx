import React from 'react'
import DashStatCards from '../../Components/DashStatCards/DashStatCards'
import TopBar from '../../Components/TopBar/TopBar'
import Sidebar from '../../Components/SideBar/Sidebar'
import './DashContainer.css'
import Recent from '../../Components/Recent/Recent'
import Trending from '../../Components/Trending/Trending'

const Dashboard = () => {
  return (
    <div className='DashContainer'>
       <div className="dashHeader">DASHBOARD</div>
        
      <DashStatCards/>
      <Recent/>
      <Trending/>
     

    </div>
  )
}

export default Dashboard
