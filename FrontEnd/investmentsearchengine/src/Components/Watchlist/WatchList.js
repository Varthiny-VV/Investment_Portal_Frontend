import React, { useEffect, useState } from 'react';
import './WatchList.css';

function WatchList({ watchListUpdated, updateMyUser }) {
  const [userId, setUserId] = useState(2);
  const [myUserWishlist, setMyUserWishlist] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [MCapdata, setMCapdata] = useState([]);
  const [stockdetails, setStockDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [deletionOccurred, setDeletionOccurred] = useState(false);


  useEffect(() => {
    // Fetch user data
    fetch('https://localhost:7232/api/WishList/WishList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ UserId: userId }),
    })
      .then(async (response) => {
        if (response.status === 200) {
          const myUserWishlist = await response.json();
          console.log(myUserWishlist);
          setMyUserWishlist(myUserWishlist);
          updateMyUser(myUserWishlist);
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  }, [userId, watchListUpdated,deletionOccurred]);

  useEffect(() => {
    if (myUserWishlist.length > 0) {
      const fetchCompanyData = async () => {
        const promises = myUserWishlist.map(async (user) => {
          const response = await fetch(`http://localhost:5169/api/CompanyDetails/GetCompanyDetails/${user.companyIds}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user }),
          });
          if (response.status === 200) {
            const companyData = await response.json();
            console.log(companyData);
            return companyData;
          }
          return null;
        });

        const companiesData = await Promise.all(promises);
        setCompanyData(companiesData);
      };

      fetchCompanyData();
    }
  }, [myUserWishlist, watchListUpdated]);

  useEffect(() => {
    if (myUserWishlist.length > 0) {
      // Fetch market cap data
      const fetchMCapData = async () => {
        const promises = myUserWishlist.map(async (user) => {
          const response = await fetch(
            `http://localhost:5081/api/Essentials/GetEssentialsByCompany?id=${user.companyIds}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ user }),
            }
          );
          if (response.status === 200) {
            const MCapdata = await response.json();
            console.log(MCapdata);
            return MCapdata;
          }
          return null;
        });

        const MCapData = await Promise.all(promises);
        setMCapdata(MCapData);
      };

      fetchMCapData();
    }
  }, [myUserWishlist, watchListUpdated]);

  useEffect(() => {
    if (myUserWishlist.length > 0) {
      // Fetch stock details
      const fetchStockDetails = async () => {
        const promises = myUserWishlist.map(async (user) => {
          const response = await fetch(
            `http://localhost:5251/api/Stock/GetStockDetailsAveragesCompanyID?companyID=${user.companyIds}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          if (response.status === 200) {
            const stockdetails = await response.json();
            console.log(stockdetails);
            return stockdetails;
          }
          return null;
        });

        const stockDetails = await Promise.all(promises);
        setStockDetails(stockDetails);
      };

      fetchStockDetails();
    }
  }, [myUserWishlist, watchListUpdated]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalRows = myUserWishlist.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = myUserWishlist.slice(startIndex, endIndex);

  if (totalRows === 0) {
    return <div>No companies added to the wishlist.</div>;
  }

  const handleDelete = async (user) =>
  {
   const { wishlistId, companyIds } = user;
   console.log('Deleting  a company with ID:', companyIds);

   try 
   {
     const response = await fetch('https://localhost:7232/api/WishList/RemovingWishListId', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         accept: 'application/json',
       },
       body: JSON.stringify({ userId: userId, companyId: companyIds }),
     });

   
     if (response.status === 200)
      {

       setDeletionOccurred(new Date().getTime());



     }
     else 
     {
       console.log(response);
     }
   }
      
 
 catch(error){
        console.log(error);
 }

 };

  return (
    <div className="watchListContainer">
      <table className="watchListTable">
        <thead>
          <tr>
            <th>S.NO.</th>
            <th className="company">COMPANY</th>
            <th className="price">PRICE</th>
            <th>MCAP</th>
            <th>52 WK HIGH</th>
            <th>52 WK LOW</th>
            <th>DAY LOW</th>
            <th>DAY HIGH</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((user, index) => {
            const companyIndex = startIndex + index;
            const wishlistId = myUserWishlist[companyIndex]?.wishlistId;

            return (
              <tr key={index}>
                <td>{companyIndex + 1}</td>
                <td className="company">{companyData[companyIndex]?.companyName}</td>
                <td>{companyData[companyIndex]?.stockPrice}</td>
                <td>{MCapdata[companyIndex]?.marketCap}</td>
                <td>{stockdetails[companyIndex]?.todayHigh}</td>
                <td>{stockdetails[companyIndex]?.todayLow}</td>
                <td>{stockdetails[companyIndex]?.yearHigh}</td>
                <td>{stockdetails[companyIndex]?.yearLow}</td>
                <td>
                  <button onClick={() => handleDelete(user)} className="deleteButton">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {totalPages > 1 && (
        <div className="paginationButtons">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              className={`paginationButton ${currentPage === pageNumber ? 'active' : ''}`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchList;
