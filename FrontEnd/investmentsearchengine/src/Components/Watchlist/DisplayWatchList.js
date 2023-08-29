
import React from 'react';
import './DisplayWatchList.css';
import Card from './Card';
import logo from '../images/logo.jpg';
 import pic1 from '../images/Vector.png';
 import backicon from "../images/BackSymbol.svg";


function DisplayWatchList() {
  return (
    <div className='display'>
    <div className="mainContainer">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <button className="buttoncss">
          <img src={pic1} className="pic" alt="" />
          Logout
        </button>
      </div>
      <div className="contentContainer">
        <div className="headerContainer">
          <div className="headerLeftContainer">
            <div className="backContainer"><img src={backicon} alt="BackArrowImage" id="backArrowImage" className="img-fluid" /> Back</div>
            <div className="headContainer">Your watchlist</div>
            <div className="watchlistText">
             You have added the following components to your watchlist. Your watchlist is updated every day.
            </div>
          </div>
        </div>
        <Card />
      </div>
    </div>
    </div>
  );
}

export default DisplayWatchList;
