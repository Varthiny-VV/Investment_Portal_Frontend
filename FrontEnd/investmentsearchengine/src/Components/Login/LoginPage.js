import React, { useState } from 'react';
import './Login.css';
import GroupImage from './Images/Group 427318265.png';
import RectangleImage from './Images/Rectangle.jpg';
import GreenTriangleImage from './Images/green triangle.png';
import RightTriangleImage from './Images/right triangle.png';
import LeftBlueImage from './Images/leftblue.png';
import LeftCircleImage from './Images/leftcircle.png';
import RightCircleImage from './Images/rightcircle.png';
import QuotationImage from './Images/quotation.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import ResponsiveImg from '../../images/ResponsiveD.png';
import ResponsiveDown from '../../images/ResponiveDown.png';


const SignInPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    emailId: '',
    password: '',
  });

  const validateForm = () => {
    let isValid = true;

  if (!user.emailId) {
    toast.error('Email is required');
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.emailId)) {
    toast.error('Invalid email format');
    isValid = false;
  }

  if (!user.password) {
    toast.error('Password is required');
    isValid = false;
  }

  return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // You can add your own logic here to handle the sign-in process
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.emailId || !emailRegex.test(user.emailId)) {
      toast.error("Please enter a valid email address.");
      return;}

      fetch('https://localhost:7232/api/User/Login', {
        method: 'POST',
        headers: {
          Accept: 'text/plain',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...user, user: {} }),
      })
        .then(async (data) => {
          if (data.status === 200) {
            var myData = await data.json();
            localStorage.setItem('token', myData.token);
            localStorage.setItem('userid',myData.userID)
            navigate('/landingpage')
            toast.success("Login Successful!");
            setTimeout(() => {
              navigate("/landingpage");
            }, 2000);
          } else {
            toast.error("Login failed :(");
          }
        })
        .catch((err) => {
          console.log(err.error);
        });
    }
  };

  return (
    <div>
      <ToastContainer />
    <div className='loginpage-container'>
      <div id="responsiveDesign-login">
          <img src={ResponsiveImg} class="Reg-img-fluid" id="ResponsiveDesignImg-login" alt="resp"/>
          <img src={ResponsiveDown} class="Reg-img-fluid" id="ResponsiveDownImg-login" alt="respDown"/>
        </div>
      <div id="Logindesign" className='login'>
        <span class="Logindot"></span>
        <img src={RectangleImage} class="loginimg-fluid" id="LoginbgGradient" alt="Background Gradient" />
        <img src={GreenTriangleImage} id="LoginsideGreen" class="Loginimg-fluid" alt="Green Triangle" />
        <img src={RightTriangleImage} id="LoginrSideBlue" class="Loginimg-fluid" alt="Right Blue Triangle" />
        <img src={LeftBlueImage} id="LoginlSideBlue" class="Loginimg-fluid" alt="Left Blue Image" />
        <img src={LeftCircleImage} id="LoginrCircle" class="Loginimg-fluid" alt="Right Circle" />
        <img src={RightCircleImage} id="LoginlCircle" class="Loginimg-fluid" alt="Left Circle" />
        <span class="Logindot"></span>
        <img src={QuotationImage} id="Loginquotation" class="Loginimg-fluid" alt="Quotation" />
        <h1 id="Loginheader">Experience Seamless Stock <br />Search Here</h1>
        <h4 id="LoginsubHeader">Kanini Ticker Platform</h4>
      </div>
      <div id="Loginformsec">
        <img src={GroupImage} id="Loginlog-logo" className="Loginimg-fluid" alt="Group Logo" /><br /><br />
        <p id="LoginsignIn">Sign In</p>
        <p id="Logincont">Welcome back! Please enter email id and password</p>
        <form onSubmit={handleSubmit}>
          <div id="Loginform-group">
            <label id="LoginemailLbl" class="Loginlable">Email ID</label>
            <input
              type="email"
              id="Loginemail-box"
              placeholder="example@kanini.com"
              onChange={(event) => {
                setUser({ ...user, emailId: event.target.value });
              }}
            />
          </div>
          <br />
          <div id="Loginform-group">
            <label id="LoginpasswordLbl">Password</label>
            <input
              type="password"
              id="Loginpassword-box"
              placeholder="************"
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }}
            />
          </div>
          <br />
          <br />
          <button type="submit" disabled={!user.emailId || !user.password} id="Loginsub-btn">
            SIGN IN
          </button>
          <div id="newUser">
              <br/>
              <p>Don't have an account? <Link to='/RegisterPage'>Sign Up</Link></p>
              
           </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignInPage;
