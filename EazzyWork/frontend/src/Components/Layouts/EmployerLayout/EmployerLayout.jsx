import React from 'react'
import TopBar from '../../TopBar/TopBar'
import Admin_Sidebar from '../../Admin_Sidebar/Admin_Sidebar'
import DashStatCards from '../../DashStatCards/DashStatCards'
import Jobs from '../../../Pages/Jobs/Jobs'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './EmployerLayout.css'
import JobAddingForm from '../../JobAddingForm/JobAddingForm'
import EmployerDashboard from '../../EmployerDashboard/EmployerDashboard'
import Bidders from '../../Bidders/Bidders'
import Payments from '../../../Pages/Payments/Payments'
import Account from '../../../Pages/Account/Account'

const EmployerLayout = () => {
  return (
    <div className='workerContainer'>
      <Admin_Sidebar/>
      <section className='content'>
        <TopBar/>
        <Routes>
        <Route  index element={<EmployerDashboard/>}/>
        <Route path="/bidders" element={<Bidders/>}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/account" element={<Account/>}/>
        </Routes>
       
       
      </section>
    </div>
  )
}

export default EmployerLayout
