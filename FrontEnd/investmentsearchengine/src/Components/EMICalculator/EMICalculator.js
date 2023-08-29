import React, { useState } from "react";
import './EMICalculator.css'

import kanini from "../images/Group 427318265.png";
import lumpsumimage from "../images/lumpsumimage.jpg"
import EMIResults from "./EMIResults";

function EMICalculator() {
    const [LoanAmount, setInvestmentAmount] = useState("");
    const [LoanTenure, setExpectedRateOfReturn] = useState("");
    const [IntrestRate, setTenure] = useState("");
    const [showLumpsumResults, setshowLumpsumResults] = useState(false);

    const handleInputChange = (event, inputNumber) => {
        const inputValue = event.target.value;
        switch (inputNumber) {
            case 1:
                setInvestmentAmount(inputValue);
                break;
            case 2:
                setExpectedRateOfReturn(inputValue);
                break;
            case 3:
                setTenure(inputValue);
                break;
            default:
                break;
        }
    };
    const handleLumpsumResults = () => {
        setshowLumpsumResults(true);
    };

    return (
        <div >
            <header className="comparepageheader">
                <nav id="comparepageheaderNav">
                    <div id="KaniniLogo">
                        <img src={kanini} alt="KaniniLogo" id="comparepage-logo" className="img-fluid" />
                    </div>
                </nav>
            </header>
            <div className="lumpsumcalculator-body">
                <center> <h1>EMI Calculator
                </h1>  </center>
                <div className="lumpsum-flex-container">
                    <div className="lumpsum-flex1">
                        <div className="calculatortext">Wish to calculate the monthly EMI of your loan? Calculate the EMI that you would pay every month to repay your loan using our EMI Calculator.

</div>
                        <hr></hr>
                        <div className="lumpsumcalculatorfunction">
                            <div>
                                <label className="calculator-labeltext">Loan Amount *</label>
                                <input
                                    type="number"
                                    className="calculator-input"
                                    value={LoanAmount}
                                    onChange={(event) => handleInputChange(event, 1)}
                                />
                            </div>
                            <div>
                                <label className="calculator-labeltext">Loan Tenure*(Up to 30 years)</label>
                                <input
                                    type="number"
                                    className="calculator-input"
                                    value={LoanTenure}
                                    onChange={(event) => handleInputChange(event, 2)}
                                />
                            </div>
                            <div>
                                <label className="calculator-labeltext">Interest Rate(P.A) *</label>
                                <input
                                    type="number"
                                    max="50"
                                    className="calculator-input"
                                    value={IntrestRate}
                                    onChange={(event) => handleInputChange(event, 3)}
                                />
                            </div>
                        </div>
                        
                        <div>
                            <button
                                className="lumpsumcalculatebtn"
                                onClick={handleLumpsumResults}
                            >
                                Calculate My EMI Value
                            </button>
                        </div>
                        {showLumpsumResults && (
                            <EMIResults
                                loanamount={LoanAmount}
                                loantenure={LoanTenure}
                                interestrate={IntrestRate}
                            />
                        )}
                    </div>



                    <div className="lumpsum-flex2">
                        <img className="lumpsumimage" src={lumpsumimage}></img>

                    </div>

                </div>






                <div className="lumpsumdescription">

                    <p>
                        <center><h2>About  EMI Calculator</h2></center>
                        <br></br><br></br>

                        <b>1) 1) What is meant by an EMI?</b>
                        <br></br>

                        EMI stands for Equated Monthly Installments which a borrower pays regularly to the lender in return for the principal and the interest accrued on it. The total payment amount that is the loan amount and the accrued interest, is divided equally by the loan tenure to calculate EMI. The EMIs is to be paid till the total repayment of loan is not done.

<br></br><br></br>
                        <b>2) What are the benefits of EMI?


                        </b>
                        <br></br><br></br>

                        EMI helps in reducing the financial burden from the borrower as he doesn’t have to pay the loan amount back at once. It helps to the borrower to fulfill their luxury dreams by purchasing things in an EMI as they don’t have to make an upfront expense. EMI is easy on the wallet and has flexibility as it lets us decide our EMI amount or tenure.

<br></br><br></br>


                        <b>3) What is the loan tenure?


                        </b>
                        <br></br><br></br>


                        Whenever we take loans for anything be it home loan, car loan, personal loan, we have to pay it through EMI over a specified period called Loan Tenure. The shorter the loan tenure, higher the EMIs will be and vice versa. So, it is advised to choose a reasonable duration so as to avoid paying high EMIs.

<br></br><br></br>
                        <b>4) How is interest rate determined in EMIs?


                        </b>
                        <br></br><br></br>

                        The Education loan interest rate is the rate charges on the loan by the lender. It can be fixed or floating. If its fixed, then the EMI amount will be same every month. However, if you have opted for floating interest rate then the EMI can be affected positively or negatively depending upon the interest rate movement.

<br></br><br></br>

                        <b>5) How is EMI calculated?


                        </b>

                        <br></br><br></br>

                        EMI calculation is dependent on 3 things; loan amount, interest rate and tenure of the repayment. The interest rate is calculated per month instead of per annum as the EMI is monthly payment. Then the total loan amount and interest amount is divided by the tenure (number of months) to calculate EMI. However, we don’t need to remember any formula to calculate it as we have made an online EMI calculator for your convenience.

<br></br><br></br>

                        <b>6) How to use this online EMI calculator?


                        </b>
                        <br></br><br></br>

                        To use EMI calculator online you need to enter 3 things, i.e., loan amount, the interest rate and the loan tenure. After entering the values, you will get the EMI amount which you need to pay monthly and the breakup of total loan value and interest value in the pie-chart.

</p>



                </div>


            </div>
            \        </div>
    );
}

export default EMICalculator;