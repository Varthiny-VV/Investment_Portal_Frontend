import React from "react";
import "./HomeHeader.css";

function HomeHeader() {
  return (
    <div className="HomeHeader_body">
      <div className="HomeHeader_text">
        <a href="" className="easy_way_to_learn">
          Easy way to learn
        </a></div>
      
      <div className="HomeHeader_container">
        <div className=" Home_Header_background"></div>
        <div className="HomeHeader_content">
          <div className="HomeHeader_text1">
          <h2>How to invest in stockmarket</h2>
          </div>
          <div className="HomeHeader_text2">
          <p>
            Unearth a concise guide to start your investing journey <br></br>and
            optimize your market opportunities.
          </p>
          </div>
          <div className="HomeHeader_btn">
          <a href="" className="login_to_know">
            Login to know
          </a>
          <span>
        
            <a href="" className="check_calculator">
              Check Calculator
            </a>
          </span>
          </div>         
      
          <div><img
            className="home_header_img"
            src={process.env.PUBLIC_URL + "/images/HomeHeader.png"}
            alt="Logo"
          /></div>
          </div>
          
        
      </div>
    </div>
  );
}
export default HomeHeader;