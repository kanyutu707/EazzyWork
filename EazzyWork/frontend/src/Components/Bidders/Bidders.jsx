import React, { useEffect, useState } from "react";
import "./Bidders.css";
import { useNavigate, useParams } from "react-router-dom";

const Bidders = () => {
  const [jobs, setJobs] = useState([]);
  const [bidders, setBidders] = useState([]);
  const [totalEmail, setTotalEmail] = useState([]); // Changed to array
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:9020/site/assigned_jobs");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log(responseData)
        const data = responseData.filter(displayData => displayData.current_job === Number(id));
        console.log(data)
        const emails = data.map(dataEmails => dataEmails.job_doer); // Extracting emails
        setTotalEmail(emails); // Setting emails array
        setJobs(data);
        console.log( emails);
        console.log(data);
      } catch (error) {
        console.error('There was a problem fetching the data: ', error);
      }
    };
    fetchJobs();
  }, [id]); // Added id as a dependency

  useEffect(() => {
    const fetchBidders = async () => {
      try {
        const response = await fetch("http://localhost:9020/site/User_List");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log( responseData)
        let data;
        totalEmail.map(
          (email)=>{
            data = responseData.filter(displayData => displayData.email===email);
          }
        )
        console.log(data);
        // Filtering based on totalEmail
        setBidders(data);
      } catch (error) {
        console.error('There was a problem fetching the data: ', error);
      }
    };
    if (totalEmail.length > 0) { // Adding this condition to prevent unnecessary fetch
      fetchBidders();
    }
  }, [totalEmail]); // Added totalEmail as a dependency

  return (
    <section className="biddingContainer">
      <div className="dashHeader">BIDDERS</div>
      <div className="bidders">
        {bidders.map((bidder, index) => (
          <section className="bidder" key={index}>
            <img src={bidder.image} alt="" />
            <span className="bidderDetails">
              <h3>REFERENCE ID<h5>{bidder.first_name + " " + bidder.last_name}</h5></h3>
              <h3>BID AMOUNT<h5>{bidder.email}</h5></h3>
            </span>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Bidders;
