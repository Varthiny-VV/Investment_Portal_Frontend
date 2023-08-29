import React, { useEffect, useState } from 'react';
import logo from '../images/Kanini-Logo.svg';
import pic1 from '../images/Vector.png';
import './Main.css';
import bg2 from '../images/plus image.png';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [searchInput, setSearchInput] = useState('');
  const [companyDetails, setCompanyDetails] = useState([]);
  const [trendingCompanies, setTrendingCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCompanyDetails();
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const trendingResponse = await fetch('http://localhost:5081/api/companies/filtered-companies');
      const detailsResponse = await fetch('http://localhost:5169/api/CompanyDetails/GetAllCompanyDetails');

      if (trendingResponse.ok && detailsResponse.ok) {
        const trendingData = await trendingResponse.json();
        const detailsData = await detailsResponse.json();
        console.log(trendingData);
        console.log(detailsData);
        const trendingCompanyIds = trendingData.map(item => item.companyID);
        const filteredDetailsData = detailsData.filter(item => trendingCompanyIds.includes(item.companyId));
        setTrendingCompanies(filteredDetailsData);
        console.log(filteredDetailsData)

      } else {
        console.log('Failed to fetch data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCompanyDetails = async () => {
    try {
      const response = await fetch("http://localhost:5169/api/CompanyDetails/GetAllCompanyDetails");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCompanyDetails(data);
      } else {
        console.log("Failed to fetch company details");
      }
    } catch (error) {
      console.log(error);
    }
  };



  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleCompanyClick = (companyId) => {
    console.log(companyId)
    localStorage.setItem('companyId', companyId);
    navigate('/:id');
    console.log(companyId);
  };

  const filteredCompanies = searchInput
    ? companyDetails.filter(
      (company) =>
        company.companyName.toLowerCase().startsWith(searchInput.toLowerCase()) ||
        (company.nse && company.nse.toLowerCase().startsWith(searchInput.toLowerCase()))
    )
    : [];


  return (
    <div className="LandingPageDisplay">
      <div className="LandingPageContainer">
        <div className="LandingPageheaders">
          <img src={logo} className="LandingPagelogos" alt="logo" />
          <button className="LandingPagebuttons">
            <img src={pic1} className="pics" alt="" />
            Logout
          </button>
        </div>
      </div>
      <div className="LandingPageContainer">
        <div className="LandingPagebackground">
          <div className="LandingPagemainText">Investing Search Engine</div>
          <div className="LandingPagesubText">The Modern Stock Screener that helps you pick better stocks</div>

          <div className="LandingPagewrapper">

            <button type="submit" className="LandingsearchButton">
              <i className="fas fa-search" style={{ color: 'white' }}></i>
            </button>

            <input
              className="LandingPageinput"
              placeholder="Search for stocks"
              type="text"
              value={searchInput}
              onChange={handleSearchChange}
            />
            {filteredCompanies.length > 0 && (
              <div className="LandingPagesearchResults">
                {filteredCompanies.map((company, index) => (
                  <div
                    key={index}
                    className='searchresultsCompanyNameNSE'
                    onClick={() => handleCompanyClick(company.companyId)}
                  >
                    <p className='LandingPageCompanyName'>
                      {company.companyName}
                    </p>
                    <p className='landingPageNSE'>
                      NSE:{company.nse}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px', fontWeight: 'bold' }}>What's Trending</div>
          <img src={bg2} alt="logo" height={20} />
          <div>
            <div className="LandingPagelogo"> 
              <div style={{ paddingLeft: '10%', paddingRight: '10%', textAlign: 'center', position: 'fixed'}}>
                {trendingCompanies.map((trendingCompany) => {
                  const companyDetail = companyDetails.find((company) => company.companyId === trendingCompany.companyId);
                  if (companyDetail && companyDetail.image) {
                    return (
                      <img
                        key={trendingCompany.companyId}
                        src={companyDetail.image}
                        alt={trendingCompany.companyName}
                        height={70}
                        style={{ marginRight: '15px', marginLeft: '15px', borderRadius:'50%'  }}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;