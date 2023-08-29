import React, { useEffect, useState } from 'react';
import './Card.css';
import WatchList from './WatchList';

function Card() {
  const [searchInput, setSearchInput] = useState('');
  const [companyData, setCompanyData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [watchListUpdated, setWatchListUpdated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [myUserWishlist, setMyUserWishlist] = useState([]);

  // Fetch company data from API
  useEffect(() => {
    fetchCompanyData();
  }, [watchListUpdated]);

  const fetchCompanyData = async () => {
    try {
      const response = await fetch('http://localhost:5169/api/CompanyDetails/GetAllCompanyDetails');
      const data = await response.json();
      setCompanyData(data);
    } catch (error) {
      console.error('Error fetching company data:', error);
    }
  };

  const handleSearchInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);

    // Filtering the company data based on search input
    const filteredCompanies = companyData.filter((company) =>
      company.companyName.toLowerCase().includes(input.toLowerCase())
    );
    setSearchResults(filteredCompanies);
    setShowDropdown(true); // Showing the dropdown when there are search results
  };

  const handleCompanyClick = (companyId) => {
    setSearchInput(companyId);
    setShowDropdown(false); // Hiding the dropdown when a company is clicked
    setSearchInput('');
  };

  const handleCompanyAdd = async (companyId) => {
    try {
      console.log('Adding company with ID:', companyId);
      console.log(localStorage.getItem('userid'))
      const response = await fetch('https://localhost:7232/api/WishList/AddingToWishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'text/plain',
        },
        body: JSON.stringify({
          userId: localStorage.getItem('userid'),
          companyId: companyId,

        }),
      });

      if (response.status === 200) {
        console.log('Company added to wishlist successfully');
        // Instead of toggling watchListUpdated, we'll generate a new timestamp and set it as the new state value
        setWatchListUpdated(new Date().getTime());
        setSearchInput(''); // Clearing the search input
      } else {
        console.log(response.text())

        console.log('Failed to add company to wishlist');
      }
    } catch (error) {
      console.error('Error adding company to wishlist:', error);
    }

    setShowDropdown(false); // Hiding the dropdown regardless of whether the company is added or not
    setSearchInput('');
  };

  const updateMyUser = (myUserWishlist) => {
    // Updating the myUserWishlist data in the Card component
    console.log('Updated myUser:', myUserWishlist);
    setMyUserWishlist(myUserWishlist);
  };

  return (
    <div className="cardContainer">
      <div className="headContainer">
        <div className="subContainer1">
          <i className="fas fa-eye" style={{ color: 'rgba(80, 150, 255, 0.96)', fontSize: '20px', marginRight: '10px' }}></i>
          Watchlist companies &#40;<span style={{ padding: '2px', fontFamily: 'Inter', fontStyle: 'normal' }}>{myUserWishlist.length}</span>&#41;
        </div>
        <div className="searchAdd">
          <span>Search</span>
          <span>&nbsp;&amp;&nbsp;</span>
          <span>Add</span>
        </div>
        <div className="searchInput">
          <button type="submit" className="searchButton">
            <i className="fas fa-search" style={{ color: 'rgba(80, 150, 255, 0.96)' }}></i>
          </button>
          <input
            type="text"
            placeholder="Search a company to add"
            className="searchInputField"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          {searchInput && searchResults.length > 0 && showDropdown && (
            <div className="searchDropdown">
              {searchResults.map((company) => (
                <div className="searchResultItem" key={company.companyId}>
                  <div className="companyName" onClick={() => handleCompanyClick(company.companyId)}>
                    {company.companyName}
                  </div>
                  <button className="addButton" onClick={() => handleCompanyAdd(company.companyId)}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="watchlistContainer">
        <WatchList watchListUpdated={watchListUpdated} updateMyUser={updateMyUser} />
      </div>
    </div>
  );
}

export default Card;
