import React from "react";
import "../CompanyEssentials/CompanyEssentials.css";
import infoSymbol from "../images/infoSymbol.svg";

function CompanyEssentials(props) {
  return (
    <div className="CompanyEssentials">
      <label className="companyEsentialsHeader">Company Essentials</label>
      <hr className="horizontalRule" />
      <div className="esentialInfo">
        <span className="esentialValueTitle esentialValue">
          MARKET CAP
          <img className="infosymbol" src={infoSymbol} alt="info Symbol" />
        </span>
        <span className="esentialValue">
          <span>&#8377;</span>
          {props.essentials.marketCap} Cr
        </span>
      </div>
      <div className="evenEsential">
        <span className="esentialValueTitle esentialValue">
          ENTERPRISES VALUE
          <img className="infosymbol" src={infoSymbol} alt="info Symbol" />
        </span>
        <span className="esentialValue">
          <span>&#8377;</span> {props.essentials.enterpriceValue} Cr
        </span>
      </div>
      <div className="esentialInfo ">
        <span className="esentialValueTitle esentialValue">
          NO. OF SHARES
          <img className="infosymbol" src={infoSymbol} alt="info Symbol" />
        </span>
        <span className="esentialValue">
          <span>&#8377;</span> {props.essentials.noOfShares} Cr.
        </span>
      </div>
      <div className="evenEsential ">
        <span className="esentialValueTitle esentialValue">
          DIV YIELD
          <img className="infosymbol" src={infoSymbol} alt="info Symbol" />
        </span>
        <span className="esentialValue">{props.essentials.divYield}%</span>
      </div>
      <div className="esentialInfo ">
        <span className="esentialValueTitle esentialValue">
          CASH <img className="infosymbol" src={infoSymbol} alt="info Symbol" />
        </span>
        <span className="esentialValue">
          <span>&#8377;</span> {props.essentials.cash} Cr.
        </span>
      </div>
      <div className="evenEsential ">
        <span className="esentialValueTitle esentialValue">
          PROMOTER HOLDING
          <img className="infosymbol" src={infoSymbol} alt="info Symbol" />
        </span>
        <span className="esentialValue">
          {props.essentials.promoterHolding}%
        </span>
      </div>
    </div>
  );
}

export default CompanyEssentials;
