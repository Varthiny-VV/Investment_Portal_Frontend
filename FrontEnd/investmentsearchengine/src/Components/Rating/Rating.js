import React from "react";
import "../Rating/Rating.css";
import infoSymbol from "../images/infoSymbol.svg";

function Rating(props) {
  const percentage = (props.rating.totalRating / 5) * 100;
  const ratingStars = [];
  return (
    <div className="Rating">
      <div className="ratingHeader">
        <div className=" ratingTitle">
          Finstar
          <img className="infosymbol" src={infoSymbol} alt="info Symbol" />
        </div>
        <div className="ratingStars">
          <i data-star={props.rating.totalRating} className="stars"></i>
        </div>
        <div>
          {props.rating.totalRating} ({props.rating.totalReviewCount})
        </div>
      </div>
      <div className="ratingAverages">
        <div className="stableExepensive">
          <fieldset className="ratingFieldset">
            <legend
              style={{
                background:
                  props.rating.ownerShipRate >= 0 ? "#b9dd4e" : "#ed2939",
              }}
            >
              Stable
            </legend>
            <div>
              <span className="averageTitle">
                Ownership
                <img
                  className="infosymbol"
                  src={infoSymbol}
                  alt="info Symbol"
                />
              </span>
              <span className="rated" id="starRatingAverages">
                &#9733;
              </span>
              <span className="averageTitle">
                {props.rating.ownerShipRate}{" "}
                <span className="averageValue">
                  ({props.rating.ownerShipReviewCount})
                </span>
              </span>
            </div>
          </fieldset>
          <fieldset className="ratingFieldset">
            <legend
              style={{
                background:
                  props.rating.ownerShipRate >= 0 ? "#b9dd4e" : "#ed2939",
              }}
            >
              Expensive
            </legend>
            <div>
              <span className="averageTitle">
                Valuation
                <img
                  className="infosymbol"
                  src={infoSymbol}
                  alt="info Symbol"
                />
              </span>
              <span className="rated" id="starRatingAverages">
                &#9733;
              </span>
              <span className="averageTitle">
                {props.rating.valuationRate}{" "}
                <span className="averageValue">
                  ({props.rating.valuationReviewCount})
                </span>
              </span>
            </div>
          </fieldset>
        </div>
        <div className="optimalAverages">
          <fieldset className="ratingFieldset">
            <legend
              style={{
                background:
                  props.rating.ownerShipRate >= 0 ? "#b9dd4e" : "#ed2939",
              }}
            >
              Optimal
            </legend>
            <div>
              <span className="averageTitle">
                Efficiency
                <img
                  className="infosymbol"
                  src={infoSymbol}
                  alt="info Symbol"
                />
              </span>
              <span className="rated" id="starRatingAverages">
                &#9733;
              </span>
              <span className="averageTitle">
                {props.rating.efficiencyRate}{" "}
                <span className="averageValue">
                  ({props.rating.efficienncyReviewCount})
                </span>
              </span>
            </div>
          </fieldset>
          <fieldset className="ratingFieldset">
            <legend
              style={{
                background:
                  props.rating.ownerShipRate >= 0 ? "#b9dd4e" : "#ed2939",
              }}
            >
              Average
            </legend>
            <div>
              <span className="averageTitle">
                Financials
                <img
                  className="infosymbol"
                  src={infoSymbol}
                  alt="info Symbol"
                />
              </span>
              <span className="rated" id="starRatingAverages">
                &#9733;
              </span>
              <span className="averageTitle">
                {props.rating.financialRate}{" "}
                <span className="averageValue">
                  ({props.rating.financialReviewCount})
                </span>
              </span>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default Rating;
