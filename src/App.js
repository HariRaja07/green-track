import React, {useState, useEffect} from 'react';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import Upload from './Upload';
import FarmerDashboard from './FarmerDashboard';
import AdminDashboard from './AdminDashboard';
import CustomerDashboard from './CustomerDashboard';
import CropRegistration from './CropRegistration';
import MidTermVerification from './MidTermVerification';
import RequestCertification from './RequestCertification';
import FinalVerification from './FinalVerification';
import Midterm from './MidTerm';
import ApproveNewApplicant from './ApproveNewApplicant';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Navbar from './NavbarMui';
function App() {
 
  return (
    <Router>
      <div>
        <Navbar/>
        <section>                              
            <Routes>                                                                        
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/upload" element={<Upload/>}/>
            <Route path="/farmerdashboard" element={<FarmerDashboard/>}/>
            <Route path="/admindashboard" element={<AdminDashboard/>}/>
            <Route path="/cutomerdashboard" element={<CustomerDashboard/>}/>
            <Route path="/crop-registration" element={<CropRegistration />} />
            <Route path="/mid-term-verification" element={<MidTermVerification />} />
            <Route path="/request-certification" element={<RequestCertification />} />
            <Route path="/mid-term" element={<Midterm/>}/>
            <Route path="/final-verification" element={<FinalVerification/>}/>
            <Route path="/approve-new-applicant" element={<ApproveNewApplicant/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;