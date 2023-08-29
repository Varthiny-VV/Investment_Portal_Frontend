import React, { useEffect } from "react";
import "../CompanyTitle/CompanyTitle.css";
import BackSymbol from "../images/BackSymbol.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import UpStockButton from "../images/StockIncrement.svg";
import { FaRegEye } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";

function CompanyTitle(props) {
  const dateTimeString = props.stockPrice.date;
  const updatedStockPrice = props.stockPrice.updatedStockPrice;
  const date = new Date(dateTimeString);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="CompanyTitle">
      <div>
        <div
          className="backButton"
          onClick={() => {
            navigate(-1);
          }}
        >
          <div>
            <img src={BackSymbol} className="backSymbol" />
            <span className="backText">Back</span>
          </div>
        </div>
        <div className="companyName">
          <div>
            <span className="companyTitle">{props.title.companyName}</span>
          </div>
          <Link to="/watchlist" className="watchlist">
            <FaRegEye />
          </Link>
          <Link to={`/compare/${id}`} className="addToCart">
            <TfiMenuAlt />
          </Link>
        </div>
        <div className="companyCodes">
          <div className="companyLabelCode">
            <label>NSE :</label>
            <span className="stockExchnageCode"> {props.title.nse}</span>
          </div>
          <div className="companyLabelCode">
            <label>BSE :</label>
            <span className="stockExchnageCode">{props.title.bse}</span>
          </div>
          <div className="companyLabelCode">
            <label>SECTOR :</label>
            <span className="stockExchnageSector">{props.title.sector}</span>
          </div>
        </div>
      </div>
      <div className="upStockButton">
        <div
          className="stockChangeButton"
          style={{
            background: updatedStockPrice >= 0 ? "#b9dd4e" : "#ed2939",
          }}
        >
          <>
            {updatedStockPrice >= 0 ? (
              <BiSolidUpArrow className="UpStockButtonImage" />
            ) : (
              <BiSolidDownArrow className="UpStockButtonImage" />
            )}
          </>
          <span>{props.stockPrice.currentStockPrice}</span>
        </div>
        <div className="stockChangeValue">
          <span
            className="stockIncrementPercentrage"
            style={{
              color:
                updatedStockPrice >= 0
                  ? "var(--dark-grey, #161616)"
                  : "#ed2939",
            }}
          >
            {updatedStockPrice >= 0 ? "+" : ""}
            {props.stockPrice.updatedStockPrice} (
            {props.stockPrice.updatedStockPercent}%)
          </span>
          <span>
            <span className="nselabel">NSE: </span>
            <span className="nseTimingLabel">
              Today {hour}:{minute}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
export default CompanyTitle;
