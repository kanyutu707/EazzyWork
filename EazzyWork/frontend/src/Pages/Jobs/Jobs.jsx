import React, { useEffect, useState } from 'react';
import './Jobs.css';
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';

const Jobs = ({ userType }) => {
    const [jobs, setJobs] = useState([]);
    const navigate=useNavigate();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("http://localhost:9020/site/jobs");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                let data = [];
                if (userType === "Worker") {
                    data = await response.json();
                } else {
                    const responseData = await response.json();
                    data = responseData.filter(displayData => displayData.job_poster === Cookies.get('email'));
                }
                setJobs(data);
                console.log(data);
            } catch (error) {
                console.error('There was a problem fetching the data: ', error);
            }
        };
        fetchJobs();
    }, [userType]); // Added userType as a dependency

    const handleOnClick=async (id)=>{
     
     console.log(id)
     if(Cookies.get('role')==="Worker")   
     navigate(`/Worker/job/${id}`);
    else if(Cookies.get('role')==="Client"){
        navigate(`/Employer/bids/${id}`);
    }
     
    }
    return (
        <div className='jobs'>
            <div className="dashHeader">JOBS</div>
            {jobs.map(job => (
                <section className="singleJob" key={job.id} onClick={()=>handleOnClick(job.id)}>
                    <h3>{job.job_name}</h3>
                    <h4>{job.job_description}</h4>
                    <span className="status_payment">
                        <h4>{job.job_status}</h4>

                        <h4>{job.job_price}</h4>
                        <h4 href="#">more</h4>
                    </span>
                </section>
            ))}
        </div>
    );
};

Jobs.defaultProps = {
    userType: 'Worker'
};

export default Jobs;
