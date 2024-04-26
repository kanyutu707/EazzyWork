import React from 'react'
import './TopBar.css'
import {Dropdown} from 'flowbite-react';
import {HiViewGrid} from "react-icons/hi"
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';


const TopBar = () => {
  const navigate=useNavigate()
  const handleLogout = async () => {
   
    try {
        // Add logic to remove JWT token
        Cookies.remove('jwt');

        const response = await fetch('http://localhost:9020/site/Logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        console.log('Logged out successfully');
        // Remove the 'email' cookie
        Cookies.remove('role');
        Cookies.remove('email');
        navigate('/signIn')
    } catch (error) {
        console.error('There was a problem with your fetch operation: ', error);
    }
};


  return (
    
    <span className="topNav">
    <h3>HOME</h3>
    <div className="mydropdown">
    <img src="" alt="" srcSet=""/>
    <Dropdown dismissOnClick={false} className='realDropdown'>
      <Dropdown.Item icon={HiViewGrid} onClick={handleLogout} placement="left start">LOGOUT</Dropdown.Item>
      <Dropdown.Item>SETTINGS</Dropdown.Item>

    </Dropdown>
    </div>
 </span>
  )
}

export default TopBar
