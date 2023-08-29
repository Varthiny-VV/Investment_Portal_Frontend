import React, { useEffect, useState } from "react";
import kanini from "../images/Group 427318265.png";
import backicon from "../images/BackSymbol.svg";
import dropdownicon from "../images/dropdown.jpg"
import "./Compare.css";
import addtocompare from '../images/addtocompare.png'
import Select from 'react-select'
import compareicon from '../images/compareicon.png'
import { useParams } from "react-router-dom";



function Compare() {
  const [data, setData] = useState({
    essenID: 0,
    companyID: 0,
    marketCap: 0,
    enterpriceValue: 0,
    noOfShares: 0,
    divYield: 0,
    cash: 0,
    promoterHolding: 0,
    price: 0,
    bookValue: 0,
    priceToBook: 0,
    priceToEarning: 0,
    eps: 0,
    netIncome: 0,
    sector: ""
  });

  const [data2, setData2] = useState({
    essenID: 0,
    companyID: 0,
    marketCap: 0,
    enterpriceValue: 0,
    noOfShares: 0,
    divYield: 0,
    cash: 0,
    promoterHolding: 0,
    price: 0,
    bookValue: 0,
    priceToBook: 0,
    priceToEarning: 0,
    eps: 0,
    netIncome: 0,
    sector: ""
  });
  const [companyDetails, setCompanyDetails] = useState([]);

  const [companyName, setCompanyName] = useState("");
  const [companySector, setCompanySector] = useState("");
  const [companyNames, setCompanyNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { id } = useParams();


  const getCompanyEssentials = async () => {
    try {
      console.log(id)
      const response = await fetch(
        "http://localhost:5081/api/Essentials/GetEssentialsByCompany?id=" + id,
        {
          method: "POST",
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
          },
        }
      )
        if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getCompanyDetails = async (companyId) => {
    try {
      const response =await fetch("http://localhost:5169/api/CompanyDetails/GetCompanyDetails/" + id, {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
    });
      if (response.ok) {
        const data = await response.json();
        setCompanyName(data.companyName);
        setCompanySector(data.sector);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  
  const getCompanyDetails2 = async () => {
    try {
      const response = await fetch("http://localhost:5169/api/CompanyDetails/GetAllCompanyDetails");
      if (response.ok) {
        const data = await response.json();
        setCompanyDetails(data); // Set the companyDetails state here
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  // const getCompanyNames = async (companyID) => {
  //   try {
  //     const response = await fetch("http://localhost:5169/api/CompanyDetails");
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //       setCompanyNames(data.map((company) => company.companyName));
  //     } else {
  //       console.error("Error:", response.status);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  const getCompanyNames = async () => {
    try {
      const response = await fetch("http://localhost:5169/api/CompanyDetails/GetAllCompanyDetails");
      if (response.ok) {
        const data = await response.json();
        const names = data.map((company) => company.companyName.toLowerCase());
        setCompanyNames(names);
        setSearchResults(names.filter(name => name.toLowerCase() !== companyName.toLowerCase()));
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };




  useEffect(() => {
    getCompanyEssentials();
    getCompanyDetails();
    getCompanyDetails2();
    getCompanyNames();

  }, []);


  const getCompanyEssentials2 = async (companyId) => {
    try {
      
      const response = await fetch(
        "http://localhost:5081/api/Essentials/GetEssentialsByCompany?id=" + companyId,
        {
          method: "POST",
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
          },
        }
      )
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setData2(data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const handleInputChange = (event) => {

  //   const term = event.target.value;
  //   setSearchTerm(term);

  //   if (term.trim() === "") {
  //     setSearchResults(companyNames);
  //   } else {
  //     const results = companyNames.filter(
  //       (name) => name.toLowerCase().includes(term.toLowerCase())
  //     );


  //     setSearchResults(results);
  //   }
  // };
  const handleInputChange = (inputValue) => {
    setSearchTerm(inputValue);

    const results = companyNames.filter((company) =>
      company.toLowerCase().includes(inputValue.toLowerCase())
    );

    setSearchResults(results);

  }
  const [selectedOption, setSelectedOption] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [companyName2, setcompanyName2] = useState(null);


  const handleSearchItemClick = async (name) => {
    setcompanyName2(name)

    const selectedCompany = companyDetails.find((company) => company.companyName.toLowerCase() === name.toLowerCase());
    if (selectedCompany) {
      const selectedCompanyId = selectedCompany.companyId;
      setSearchTerm(name);
      setIsClicked(true);
      setSelectedOption("");
      await getCompanyEssentials2(selectedCompanyId);

    }
  };
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="comparepagebody">
      <header className="comparepageheader">
        <nav id="comparepageheaderNav">
          <div id="KaniniLogo">
            <img src={kanini} alt="KaniniLogo" id="comparepage-logo" className="img-fluid" />
          </div>
        </nav>
      </header>
      <div className="comparepage body">
        <div className="comparepage-back">
          <div id="backButton">
            <a href="" id="backText">
              <img src={backicon} alt="BackArrowImage" id="backArrowImage" className="img-fluid" /> Back
            </a>
          </div>
        </div>
        <div className="ComparePage">
          <div className="comparepage-flex-container">
            <div className="comparepage-flex-1">
              <div>
                <label type="text" className="comparepage-companyname">{companyName}</label>
              </div>
              <div>
                <label className="sectorlabel">SECTOR :</label><label type="text" className="sectortext"> {companySector}</label>
              </div>
            </div>
            <div className="comparepage-flex-2">

              <div className="searchcard">
                <div className="searchbox">
                  <div className="comparepage-text"> <p>Select a peer to compare</p></div>


                  <div>
                    {/* <input
                    type="dropdown"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Search by company name"
                    className="searchInputBox"
                  /> */}
                  </div>

                  <div className="searchandadd">

                    <Select
                      className="search"
                      placeholder="Select a peer to compare"
                      options={searchResults.map((result) => ({ value: result, label: result }))}
                      value={selectedOption}
                      onChange={handleSelect}
                      onInputChange={handleInputChange}
                      isSearchable={true}
                      autosize={true}


                    />


                    {/* {searchResults.length > 0 && (
                    <div className="search-results searchInputBox">
                      {searchResults.map((result, index) => (
                        <div key={index} onClick={() => handleSearchItemClick(result)}>
                          {result}
                        </div>
                      ))}
                    </div>
                      )}   */}  </div></div>

                {selectedOption && selectedOption.value && (
                  <img
                    className="addtocompareicon"
                    src={addtocompare}
                    onClick={() => handleSearchItemClick(selectedOption.value)}
                  />)}
              </div>
            </div>
          </div>
          <div className="addpeertext">

            <p>Add a peer from above to compare this stock.You can compare upto two peers </p>
          </div>
          <div>
            {/* <button className="button" onClick={getCompanyEssentials2}>
          Active List
        </button> */}
          </div>

          <div class="compare-container">
            <div class="compareiconwithtext">
              <img className="compareicon" src={compareicon}></img>
              <div className="companycomparisiontext"><b> Company comparison for {companyName}</b></div>
            </div>
            <div className="compare-table">
              <table>
                <thead>
                  <tr>
                    <th>Comparison Parameters</th>
                    <th>{companyName}</th>

                    <th>{isClicked || selectedOption ? companyName2 : ""}</th>
                  </tr>
                  <tr>
                    <td>MarketCap</td>
                    <td>{data.marketCap}</td>
                    <td>{data2.marketCap === 0 ? "" : data2.marketCap}</td>
                  </tr>
                  <tr>
                    <td>EnterpriseValue</td>
                    <td>{data.enterpriceValue}</td>
                    <td>{data2.enterpriceValue == 0 ? "" : data2.enterpriceValue}</td>



                  </tr>
                  <tr>
                    <td>NoOfShares</td>
                    <td>{data.noOfShares}</td>
                    <td>{data2.noOfShares === 0 ? "" : data2.noOfShares}</td>
                  </tr>
                  <tr>
                    <td>DivYield</td>
                    <td>{data.divYield}</td>
                    <td>{data2.divYield === 0 ? "" : data2.divYield}</td>
                  </tr>
                  <tr>
                    <td>Cash</td>
                    <td>{data.cash}</td>
                    <td>{data2.cash === 0 ? "" : data2.cash}</td>
                  </tr>
                  <tr>
                    <td>PromoterHolding</td>
                    <td>{data.promoterHolding}</td>
                    <td>{data2.promoterHolding === 0 ? "" : data2.promoterHolding}</td>
                  </tr>

                  <tr>
                    <td>Price</td>
                    <td>{data.price}</td>
                    <td>{data2.price === 0 ? "" : data2.price}</td>
                  </tr> <tr>
                    <td>Book Value</td>
                    <td>{data.bookValue}</td>
                    <td>{data2.bookValue === 0 ? "" : data2.bookValue}</td>
                  </tr>


                  <tr>
                    <td>Price To Book</td>
                    <td>{data.priceToBook}</td>
                    <td>{data2.priceToBook === 0 ? "" : data2.priceToBook}</td>
                  </tr>    <tr>
                    <td>Price To Earning</td>
                    <td>{data.priceToEarning}</td>
                    <td>{data2.priceToEarning === 0 ? "" : data2.priceToEarning}</td>
                  </tr>
                  <tr>
                    <td>Earnings Per Share</td>
                    <td>{data.eps}</td>
                    <td>{data2.eps === 0 ? "" : data2.eps}</td>
                  </tr>
                  <tr>
                    <td>Net Income</td>
                    <td>{data.netIncome}</td>
                    <td>{data2.netIncome === 0 ? "" : data2.netIncome}</td>
                  </tr>   <tr>
                    <td>Sector</td>
                    <td>{data.sector}</td>
                    <td>{data2.sector === 0 ? "" : data2.sector}</td>
                  </tr>



                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compare;
