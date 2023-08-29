import React, { useState } from "react";
import "../Navbar/Navbar.css";
import KaniniLogo from "../images/Kanini-Logo.svg";
import Logout from "../images/LockImage.svg";
import { Link } from "react-router-dom";
import ProfileLogo from "../images/Profile.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav">
      <div className="logo">
        <img src={KaniniLogo} alt="KaniniLogo" className="kaniniLogo" />
      </div>
      <div className="profile">
        <ul>
          <li>
            <img
              src={ProfileLogo}
              className="profileLogo"
              onClick={() => {
                setOpen(!open);
              }}
            />
            <ul className={open ? "profileItemsDisplay" : "profileItemsHidden"}>
              <li>
                <Link to="/watchlist" style={{ color: "#000000" }}>
                  WatchList
                </Link>
              </li>
              <li>
                <Link to="/compare" style={{ color: "#000000" }}>
                  Compare
                </Link>
              </li>
              <li>
                <Link to="/loginpage" style={{ color: "#000000" }}>
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
