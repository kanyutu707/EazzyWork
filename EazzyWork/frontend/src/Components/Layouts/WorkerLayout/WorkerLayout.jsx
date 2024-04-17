import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sidebar from '../../SideBar/Sidebar'
import './WorkerLayout.css'
import Dashboard from '../../../Pages/Dashboard/Dashboard'
import TopBar from '../../TopBar/TopBar'
import Jobs from '../../../Pages/Jobs/Jobs'
import Payments from '../../../Pages/Payments/Payments'
import Account from '../../../Pages/Account/Account'
const WorkerLayout = () => {
  return (
    <div className='workerContainer'>
    
 
        
     
            <Sidebar/>
            <section className="content">
            <TopBar/>
               <Routes>
                    <Route  index element={<Dashboard/>}/>
                    <Route path="/jobs" element={<Jobs/>}/>
                    <Route path="payments" element={<Payments/>}/>
                    <Route path="account" element={<Account/>}/>
                    </Routes>
                </section>
            
       
    </div>
    
  )
}

export default WorkerLayout
