import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Job.css';
import Cookies from 'js-cookie'

const Job = () => {
    const [job, setJob] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("http://localhost:9020/site/jobs");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const responseData = await response.json();
                const data = responseData.filter(displayData => displayData.id === Number(id)); // Convert id to a number

                setJob(data);
                console.log(data);
            } catch (error) {
                console.error('There was a problem fetching the data: ', error);
            }
        };
        fetchJobs();
    }, []); // Empty dependency array to run the effect only once

    
    const [formData, setFormData]=useState({
        "job_doer":Cookies.get('email'),
        "bid_amount":"",
        "current_job":id,
        "job_status":false
        
      
       });
       const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
       };
       const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await fetch('http://localhost:9020/site/assigned_jobs', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData),
            });
            if(!response.ok){
                console.log(response)
                throw new Error('Network response was not ok')
                
            }
            console.log('Form data submitted successfully');
            window.location.href=window.location.href;
        }
        catch(error){
            console.error('There was a problem with your fetch operation: ', error)
        }
       }
    return (
        <div className='jobs' id='myJob'>
            {job.map(singleJob=>(
                <section id='singleJob'>
                    <h1>JOB NAME</h1>

                    <h3>{singleJob.job_name}</h3>
                    <h1>JOB DESCRIPTION</h1>
                    <h4>{singleJob.job_description}</h4>
                    <h4>{singleJob.job_status}</h4>
                    <h1>PRICE</h1>
                    <h4>{singleJob.job_price}</h4>
                    <span>
                        <h1>REQUIREMENTS</h1>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nisi, nemo nulla exercitationem hic labore vel itaque earum totam aperiam dolorem sit placeat aspernatur. Omnis, officiis sapiente, modi quasi blanditiis harum iusto ab, fuga nam nobis placeat molestiae tempora nemo. Neque esse cupiditate veritatis. Hic eum tempore quasi voluptatum asperiores, voluptates quo aliquam nisi cum consectetur perspiciatis facere vitae adipisci sint? Cupiditate commodi possimus iste tempore ipsam voluptate eos molestiae voluptatum quo libero veritatis reprehenderit blanditiis, explicabo ea accusamus sed optio sequi esse aperiam alias autem numquam. Iure possimus, fugiat consectetur aspernatur tenetur reiciendis iste quidem, officia voluptate atque qui veritatis architecto, praesentium doloremque. Explicabo quaerat perspiciatis doloremque, deleniti quasi non earum velit minima quia nemo dolores, corrupti ab labore, atque maiores quas sed odio. Minus voluptatem quod officiis, neque earum incidunt quia molestias quasi minima nulla cupiditate ex dolores numquam maiores quaerat! Assumenda necessitatibus, fugiat architecto ut soluta voluptatum facilis et, pariatur quo optio repudiandae cupiditate perferendis! Ab dignissimos quae consectetur quas tempora molestiae rerum est, quod expedita ipsam possimus fugiat quaerat iste veritatis, et enim! Pariatur obcaecati temporibus minima iure aspernatur, quod officiis laborum alias molestias aliquam quas dolore deleniti dolores accusantium reprehenderit. Velit incidunt iure cumque ab.</h4>
                    </span>
                    <span>
                        <h1>RESPONSIBILITIES</h1>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequuntur dolores vel quasi laudantium dolor assumenda ducimus. Incidunt, blanditiis itaque a ducimus reprehenderit tempore labore aut similique illo rerum sint, culpa tenetur doloremque ipsam iste fuga magni voluptatibus consequatur iusto, dolor fugit quo voluptatum veniam! Voluptatem, deleniti velit corrupti qui veniam vel earum, possimus praesentium quaerat fugiat ullam eos molestiae sunt perferendis soluta reprehenderit dignissimos. Quas nam iusto, natus nisi veniam fuga atque at quam quia voluptatem tempore consectetur aliquid sint sunt eum, voluptate esse. Nam est similique recusandae optio doloribus pariatur beatae repellendus quam officiis architecto, esse ut sapiente debitis obcaecati accusantium quia placeat asperiores distinctio commodi, porro consequatur unde? Officiis magni, perspiciatis, nisi facilis sequi illo incidunt magnam maxime possimus placeat dignissimos aperiam expedita nesciunt consectetur. At praesentium possimus earum, magni vero aspernatur iste pariatur, neque perferendis soluta fuga blanditiis accusantium! Officiis quos molestias, error nihil cupiditate nisi assumenda esse voluptas iusto accusamus ab, provident ipsam. Et error dolorum similique dignissimos nulla ratione, perspiciatis sunt doloremque sapiente enim, nihil magnam voluptatem aliquam vel magni voluptate aliquid! Facilis culpa, unde consequatur a voluptatem molestiae hic iure eum, quidem temporibus sit cupiditate placeat incidunt eos vel. Quam, soluta. Fuga, rerum?</h4>
                    </span>
                    <form className="bidOption" onSubmit={handleSubmit}>
                        <h1>BID</h1>
                    <div className="job_inputs">
                        <label htmlFor="resume">RESUME</label>
                    <input type="file" placeholder='input your resume' />
                    </div>
                    <div className='job_inputs'>
                        <label htmlFor="salary">EXPECTED SALARY</label>
                    <input type="number" placeholder='input amount in dollars ($) per month' onChange={handleChange}  name='bid_amount' value={formData.bid_amount}/>
                    </div>
                    <button type='submit'>BID</button>
                    </form>
                </section>
            ))}
          </div>
    );
};

export default Job;
