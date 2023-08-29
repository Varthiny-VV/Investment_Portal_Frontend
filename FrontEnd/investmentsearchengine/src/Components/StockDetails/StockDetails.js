import React, { useEffect, useState } from "react";
import "../StockDetails/StockDetails.css";
import Navbar from "../Navbar/Navbar";
import CompanyTitle from "../CompanyTitle/CompanyTitle";
import HighLowAverages from "../HighLowAverages/HighLowAverages";
import SwotAnalysis from "../SwotAnalysis/SwotAnalysis";
import Rating from "../Rating/Rating";
import CompanyEssentials from "../CompanyEssentials/CompanyEssentials";
import { useParams } from "react-router-dom";

function StockDetails() {
  const { id } = useParams();
  const [companyTitle, setCompanyTitle] = useState([]);
  const [currentStockPrice, setCurrentStockPrice] = useState([]);
  const [companyAverages, setCompanyAverages] = useState([]);
  const [swotAnalysis, setSwotAnalysis] = useState([]);
  const [companyEssentilas, setCompanyEssentilas] = useState([]);
  const [companyRating, setCompanyRating] = useState([]);

  const [errorCompanyTitle, setErrorCompanyTitle] = useState(false);
  const [errorCompanyAverages, setErrorCompanyAverages] = useState(false);
  const [errorCurrentStockPrice, setErrorCurrentStockPrice] = useState(false);
  const [errorSwotAnalysis, setErrorSwotAnalysis] = useState(false);
  const [errorCompanyEssentilas, setErrorCompanyEssentilas] = useState(false);
  const [errorCompanyRating, setErrorCompanyRating] = useState(false);
  const [errorCommon, setErrorCommon] = useState(false);

  useEffect(() => {
    const handleError = () => {
      setErrorCommon(true);
    };

    fetch("http://localhost:5169/api/CompanyDetails/GetCompanyDetails/" + id, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch company title");
        }
        const data = await response.json();
        setCompanyTitle(data);
      })
      .catch(() => setErrorCompanyTitle(true));

    fetch(
      "http://localhost:5251/api/Stock/GetStockDetailsAveragesCompanyID?companyId=" +
        id,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch company averages");
        }
        const data = await response.json();
        setCompanyAverages(data);
      })
      .catch(() => setErrorCompanyAverages(true));

    fetch(
      "http://localhost:5251/api/Stock/GetCurrentStockDetailsByCompanyID?companyId=" +
        id,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch current stock price");
        }
        const data = await response.json();
        setCurrentStockPrice(data);
      })
      .catch(() => setErrorCurrentStockPrice(true));

    fetch("http://localhost:5283/api/SWOT/GetSwotByCompanyID?companyId=" + id, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch SWOT analysis");
        }
        const data = await response.json();
        setSwotAnalysis(data);
      })
      .catch(() => setErrorSwotAnalysis(true));

    fetch(
      "http://localhost:5081/api/Essentials/GetEssentialsByCompany?id=" + id,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch company essentials");
        }
        const data = await response.json();
        setCompanyEssentilas(data);
      })
      .catch(() => setErrorCompanyEssentilas(true));

    fetch("https://localhost:7045/api/Finstar/FinstarDetails?id=" + id, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch company rating");
        }
        const data = await response.json();
        setCompanyRating(data);
      })
      .catch(() => setErrorCompanyRating(true));
  }, [id]);
  return (
    <div className="StockDetails">
      <div className="StockDetailsNav">
        <Navbar />
      </div>
      {errorCommon ? (
        <div className="errorMessage">
          Sorry, there was an error fetching the data. Please try again later.
        </div>
      ) : (
        <>
          <div className="StockDetailsCompanyTitle">
            {/* {errorCompanyTitle ? (
              <div className="errorMessage">
                Sorry, there was an error fetching the company title. Please try
                again later.
              </div>
            ) : (
              <CompanyTitle
                title={companyTitle}
                stockPrice={currentStockPrice}
              />
            )} */}
            <CompanyTitle title={companyTitle} stockPrice={currentStockPrice} />
          </div>
          <div className="StockDetailsAverages">
            {/* {errorCompanyAverages ? (
              <div className="errorMessage">
                Sorry, there was an error fetching the company averages. Please
                try again later.
              </div>
            ) : (
              <HighLowAverages averages={companyAverages} />
            )} */}
            <HighLowAverages averages={companyAverages} />
          </div>
          <div className="StockDetailsSwot">
            {/* {errorSwotAnalysis ? (
              <div className="errorMessage">
                Sorry, there was an error fetching the SWOT analysis. Please try
                again later.
              </div>
            ) : (
              <SwotAnalysis swot={swotAnalysis} />
            )} */}
            <SwotAnalysis swot={swotAnalysis} />
          </div>
          <div className="StockDetailsCompanyEssentials">
            {/* {errorCompanyEssentilas ? (
              <div className="errorMessage">
                Sorry, there was an error fetching the company essentials.
                Please try again later.
              </div>
            ) : (
              <CompanyEssentials essentials={companyEssentilas} />
            )} */}
            <CompanyEssentials essentials={companyEssentilas} />
          </div>
          <div className="StockDetailsRating">
            {/* {errorCompanyRating ? (
              <div className="errorMessage">
                Sorry, there was an error fetching the finstar details. Please
                try again later.
              </div>
            ) : (
              <Rating rating={companyRating} />
            )} */}
            <Rating rating={companyRating} />
          </div>
        </>
      )}
    </div>
  );
}

export default StockDetails;
