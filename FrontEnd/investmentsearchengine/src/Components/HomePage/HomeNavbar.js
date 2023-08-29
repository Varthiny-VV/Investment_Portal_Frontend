// import React, { useState } from "react";
// import "./HomeNavbar.css";
// import { Link } from 'react-router-dom';

// function HomeNavbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };
//   const handleDiscoverClick = () => {
//     setIsDiscoverOpen(!isDiscoverOpen);
//   };

//   const isActive = (path) => {
//     const currentPath = window.location.pathname;
//     return currentPath === path ? "active" : "";
//   };

//   return (
//     <div className="navbody">
//       <header className="navHeader">
//         <a href="#">
//           <img
//             className="navLogo"
//             src={process.env.PUBLIC_URL + "/images/kaniniLogo.png"}
//             alt="Logo"
//           />
//         </a>
//         <ul className={`homeNavbar ${isOpen ? "open" : ""}`}>
//           <li>
//             <a href="/" className={isActive("/")}>
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="/AboutusPage" className={isActive("/AboutusPage")}>
//               About Us
//             </a>
//           </li>
//           <li>
        
//             <a href="#" className={isActive("/CalculatorPage")}>
//               Calculator
//             </a>
//           </li>
//         </ul>
//         <div className="main">
         
     
//       <img className="user userSignButton"
//             src={process.env.PUBLIC_URL + "/images/loginRegister.png"}
//              alt="Click me!" />

   
//           <div
//             className={`bx ${isOpen ? "bx-x" : "bx-menu"}`}
//             id="menu-icon"
//             onClick={handleClick}
//           ></div>
//         </div>
//         {/* <div className="line">
//         <img className="under_line"
//             src={process.env.PUBLIC_URL + "/images/Line 4.png"}
//              alt="Click me!" />
//         </div> */}
       
//       </header>
     
//     </div>
//   );
// }

// export default HomeNavbar;



import React, { useState } from "react";
import "./HomeNavbar.css";
import { Link } from "react-router-dom";

function HomeNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    const currentPath = window.location.pathname;
    return currentPath === path ? "active" : "";
  };

  return (
    <div className="navbody">
      <header className="navHeader">
        <div className="logo-menu">
          <a href="#">
            <img
              className="navLogo"
              src={process.env.PUBLIC_URL + "/images/kaniniLogo.png"}
              alt="Logo"
            />
          </a>
          <div
            className={`bx ${isOpen ? "bx-x" : "bx-menu"}`}
            id="menu-icon"
            onClick={handleClick}
          ></div>
        </div>
        <ul className={`homeNavbar ${isOpen ? "open" : ""}`}>
          <li>
            <a href="/" className={isActive("/")}>
              Home
            </a>
          </li>
          <li>
            <a href="/AboutusPage" className={isActive("/AboutusPage")}>
              About Us
            </a>
          </li>
          <li>
            <a href="#" className={isActive("/CalculatorPage")}>
              Calculator
            </a>
          </li>
        </ul>
        <div className="main">
          <img
            className="user userSignButton"
            src={process.env.PUBLIC_URL + "/images/loginRegister.png"}
            alt="Click me!"
          />
        </div>
      </header>
    </div>
  );
}

export default HomeNavbar;
