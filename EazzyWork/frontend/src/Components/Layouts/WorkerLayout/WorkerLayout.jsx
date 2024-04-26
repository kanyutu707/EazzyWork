import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from '../../SideBar/Sidebar'
import './WorkerLayout.css'
import Dashboard from '../../../Pages/Dashboard/Dashboard'
import TopBar from '../../TopBar/TopBar'
import Jobs from '../../../Pages/Jobs/Jobs'
import Payments from '../../../Pages/Payments/Payments'
import Account from '../../../Pages/Account/Account'
import Job from '../../../Pages/Job/Job'
const WorkerLayout = () => {
  return (
    <div className='workerContainer'>

      <TopBar />



      <section className="containerContent">
        <div className="leftContent">
          <Sidebar />
        </div>
        <div className="rightContent">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="payments" element={<Payments />} />
            <Route path="account" element={<Account />} />
            <Route path="job/:id" element={<Job/>}/>
          </Routes>
        </div>
      </section>


    </div>

  )
}

export default WorkerLayout
