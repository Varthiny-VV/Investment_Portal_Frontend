import React, { useState, useEffect } from "react";
import "./Registartion.css";
import quotation from '../../images/quotation.png';
import RectangleImage from '../../images/Rectangle.jpg';
import GreenTriangleImage from '../../images/green triangle.png';
import RightTriangleImage from '../../images/right triangle.png';
import LeftBlueImage from '../../images/leftblue.png';
import RightCircleImage from '../../images/right triangle.png';
import LeftCircleImage from '../../images/leftcircle.png';
import logo from '../../images/logo1.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import ResponsiveImg from '../../images/ResponsiveD.png'
import ResponsiveDown from '../../images/ResponiveDown.png';




function RegistrationPage() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    firstname: "",
    lastname: "",
    dob: new Date(),
    phonenumber: "",
    email: "",
    role: "",
    passwordClear: "",
    confirmPasswordClear: ""
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);

  useEffect(() => {
    if (registrationStatus === "registering") {
      // Make the API call here
      fetch("https://localhost:7232/api/User/Register", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(register)
      })
        .then(async (response) => {

          if (response.ok) {
            setRegistrationStatus("success");
            console.log(response);
            toast.success("Registration successful!");
            setTimeout(() => {
              navigate("/");
            }, 2000);

          } else {
            throw new Error("Error registering user");
          }
        })
        .catch((error) => {
          console.log(error);
          setRegistrationStatus("error");
          toast.error("Error registering user.");
        });
    }
  }, [registrationStatus, register]);

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!register.email || !emailRegex.test(register.email)) {
    toast.error("Please enter a valid email address.");
    return;
  }

  // Validation for password
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!register.passwordClear || !passwordRegex.test(register.passwordClear)) {
    toast.error(
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
    );
    return;
  }
    if (register.passwordClear !== register.confirmPasswordClear) {
      // Handle password mismatch, show an error message to the user
      toast.error("Passwords do not match.");
      return;}
    setRegistrationStatus("registering");
  };

  return (

    <div>
      <ToastContainer />
      <div className="RegPage-Container">
      <div id="responsiveDesign">
          <img src={ResponsiveImg} class="Reg-img-fluid" id="ResponsiveDesignImg" alt="resp"/>
          <img src={ResponsiveDown} class="Reg-img-fluid" id="ResponsiveDownImg" alt="respDown"/>
        </div>
      <div id="Reg-design">
        <span class="Reg-dot"></span>
        
        <img src={RectangleImage} class="Reg-img-fluid" id="bgGradient" alt="Background Gradient" />
        <img src={GreenTriangleImage} id="sideGreen" class="Reg-img-fluid" alt="Green Triangle" />
        <img src={RightTriangleImage} id="rSideBlue" class="Reg-img-fluid" alt="Right Blue Triangle" />
        <img src={LeftBlueImage} id="lSideBlue" class="Reg-img-fluid" alt="Left Blue Image" />
        <img src={LeftCircleImage} id="rCircle" class="Reg-img-fluid" alt="Right Circle" />
        <img src={RightCircleImage} id="lCircle" class="Reg-img-fluid" alt="Left Circle" />
        <span class="Reg-dot"></span>
        <img src={quotation} id="quotation" className="Reg-img-fluid" alt="quotation"/>
        <h1 id="Reg-header">Experience Seamless Stock <br />Search Here</h1>
        
        <h4 id="Reg-subHeader">Kanini Ticker Platform</h4>
      </div>
      <div id="Reg-formsec">
        <img src={logo} id="Reglogo" className="Reg-img-fluid" alt="Group Logo" /><br /><br /><br />
        <p id="signUp">Sign Up</p>
        <p id="RegCont">Welcome!Please enter your details for signing up.</p>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label id="Reg-firstnameLbl" className="Reg-labels">First Name</label> 
            <input
              type="text"
              id="firstname-box"
              placeholder="Eg:John"
              className="Reg-input"
              value={register.firstname}
              onChange={(event)=>{
                setRegister({...register,firstname:event.target.value});
              }}
            />
          </div>
          
          <div>
            <label id="Reg-lastnameLbl" className="Reg-labels">Last Name</label> 
            <input
              type="text"
              id="lastname-box"
              className="Reg-input"
              placeholder="Eg:Watson"
              value={register.lastname}
              onChange={(event)=>{
                setRegister({...register,lastname:event.target.value})
              }}
            />
          </div>
          
          <div id="form-group">
            <label id="Reg-dobLbl" className="Reg-labels">Date of Birth</label>
            <input
              type="date"
              id="dob-box"
              className="Reg-input"
              value={register.dob}
              onChange={(event)=>{
                setRegister({...register,dob:event.target.value})
              }}
            />
          </div>
          
          <div>
            <label id="Reg-phonenumberLbl" className="Reg-labels">Phone Number</label>
            <input
              type="tel" 
              placeholder="Eg:9847583909"
              className="Reg-input"
              id="phonenumber-box"
              value={register.phonenumber}
              onChange={(event)=>{
                setRegister({...register,phonenumber:event.target.value})}}
            />
          </div>
         
          <div>
            <label id="Reg-emailLbl" className="Reg-labels">Email</label> 
            <input
              type="email"
              id="Reg-email-box"
              className="Reg-input"
              placeholder="example@kanini.com"
              value={register.email}
              onChange={(event)=>{
                setRegister({...register,email:event.target.value})}}
            />
          </div>
         
          <div>
            <label id="Reg-PassLbl" className="Reg-labels">Password</label> 
            <input
              type="password"
              id="Reg-password-box"
              className="Reg-input"
              placeholder="****"
              value={register.passwordClear}
              onChange={(event)=>{
                setRegister({...register,passwordClear:event.target.value})}}
            />
          </div>
        
          <div>
            <label id="Reg-ConfirmPassLbl" className="Reg-labels">Confirm password</label> 
            <input
              type="password"
              id="Reg-Confirmpassword-box"
              className="Reg-input"
              placeholder="****"
              value={register.confirmPasswordClear}
              onChange={(event)=>{
                setRegister({ ...register, confirmPasswordClear: event.target.value });}}
            />
          </div>
          
          <button type="submit" 
                  id="Reg-sub-btn"
                  disabled={
                    !register.firstname ||
                    !register.lastname ||
                    !register.dob ||
                    !register.phonenumber ||
                    !register.email ||
                    !register.passwordClear ||
                    !register.confirmPasswordClear
                  }>
            SIGN UP
          </button>
          <div id="alreadyUser">
              <br/>
              <p>Already a user? <Link to='/'>Sign In</Link></p>
              
           </div>
        </form>
      </div>
    </div>
    </div>




    
  );
}

export default RegistrationPage;