import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import TrackPackage from './pages/TrackPackage/track-package';
import Quote from './pages/Quote/quote';
import Payment from './pages/Payment/payment';
import Ship from './pages/Ship/ship';
import SignIn from './pages/sign-in';
import About from './pages/about';
import PaymentSucessful from './pages/paymentSuccessful';
import LandingPage from './pages/landingPage';
import Footer from './components/footer';
import { RecoilRoot, useRecoilState } from 'recoil';
import {deliveryDriverLoggedInState, deliveryAdminLoggedInState, userLoggedInState} from './recoil/globalState';
import React from 'react';
import Admin from './pages/Admin/admin';
import Driver from './pages/Driver/driver';
import KommunicateChat from './chat';


function App() {

  const [userLoggedIn, setUserLoggedIn] = useRecoilState(userLoggedInState);
  const [deliveryAdminLoggedIn, setDeliveryAdminLoggedIn] = useRecoilState(deliveryAdminLoggedInState);
  const [deliveryDriverLoggedIn, setDeliveryDriverLoggedIn] = useRecoilState(deliveryDriverLoggedInState);
  
  return (
      <React.Suspense fallback={<div>Loading...</div>}>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          padding: '0',
        }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<LandingPage />} />
            {/* display track package for user and admin for admin */}
            <Route path="/track-package" element={<TrackPackage />} /> 
            {deliveryAdminLoggedIn ? <Route path="/admin" element={<Admin />} /> : null}
            <Route path="/quote" element={<Quote />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/ship" element={<Ship />} />
            <Route path="/driver" element={<Driver />} />
            <Route path="/about" element={<About />} />
            <Route path="/paymentSuccessful" element={<PaymentSucessful />} />
            <Route path="/sign-in" element={<SignIn />} />

          </Routes>
          <Footer />
        </Router>
        </div>
        <div>
          <KommunicateChat/>
        </div>
      </React.Suspense>
  );
}

export default App;
