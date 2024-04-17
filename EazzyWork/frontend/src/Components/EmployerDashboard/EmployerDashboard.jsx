import React from 'react'
import JobAddingForm from '../JobAddingForm/JobAddingForm'
import Jobs from '../../Pages/Jobs/Jobs'
import DashStatCards from '../DashStatCards/DashStatCards'
import './EmployerDashboard.css'
const EmployerDashboard = () => {
  return (
    <div>
       <DashStatCards/>
        <section className="jobAdder">
        <Jobs/>
        <JobAddingForm/>
        </section>
    </div>
  )
}

export default EmployerDashboard
