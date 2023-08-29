import React from "react";
import "./HomeFooter.css";

function HomeFooter(){
    return(
        
        <div>
            <footer>
            <div className="bottom-details">
                <div className="bottom_text">
                    <span className="copyright_text">&#169; 2023Kanini. All Rights Reserved.</span>
                    <span className="policy_terms">
                        <a href="#">Terms&Condition</a> 
                        <a href="#">Privacy</a>
                        <a href="#">CookieSettings</a>
                    </span>
                    
                </div>
            </div>
            </footer>
           
        </div>
    );
        
    }
export default HomeFooter;