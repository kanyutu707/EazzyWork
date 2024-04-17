import React from "react";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import "./App.css";
import WorkerLayout from "./Components/Layouts/WorkerLayout/WorkerLayout";
import Index from "./Pages/index/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployerLayout from "./Components/Layouts/EmployerLayout/EmployerLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="" element={<Index />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Worker/*" element={<WorkerLayout />} />
        <Route path="Employer/*" element={<EmployerLayout />} />
        
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
