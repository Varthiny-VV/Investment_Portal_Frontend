import React, { useState } from "react";
import './LumpsumCalculator.css'

import kanini from "../images/Group 427318265.png";
import LumpsumResults from "./lumpsumresults";
import lumpsumimage from "../images/lumpsumimage.jpg"

function LumpsumCalculator() {



    const [InvestmentAmount, setInvestmentAmount] = useState("");
    const [ExpectedRateOfReturn, setExpectedRateOfReturn] = useState("");
    const [Tenure, setTenure] = useState("");
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
                <center> <h1>Lumpsum Calculator
                </h1>  </center>
                <div className="lumpsum-flex-container">
                    <div className="lumpsum-flex1">
                        <div className="calculatortext">Thinking of making a Lumpsum investment? Calculate the future value of your wealth using our Lumpsum Calculator.</div>
                        <hr></hr>
                        <div className="lumpsumcalculatorfunction">
                            <div>
                                <label className="calculator-labeltext">Investment Amount</label>
                                <input
                                    type="number"
                                    className="calculator-input"
                                    value={InvestmentAmount}
                                    onChange={(event) => handleInputChange(event, 1)}
                                />
                            </div>
                            <div>
                                <label className="calculator-labeltext">Expected rate of return (P.A) </label>
                                <input
                                    type="number"
                                    className="calculator-input"
                                    value={ExpectedRateOfReturn}
                                    onChange={(event) => handleInputChange(event, 2)}
                                />
                            </div>
                            <div>
                                <label className="calculator-labeltext">Tenure (in years) (Up to 50 years)</label>
                                <input
                                    type="number"
                                    max="50"
                                    className="calculator-input"
                                    value={Tenure}
                                    onChange={(event) => handleInputChange(event, 3)}
                                />
                            </div>
                        </div>
                        
                        <div>
                            <button
                                className="lumpsumcalculatebtn"
                                onClick={handleLumpsumResults}
                            >
                                Plan my Future Value
                            </button>
                        </div>

                        {/* Display the FutureValueComponent if showFutureValue is true */}
                        {showLumpsumResults && (
                            <LumpsumResults
                                investmentAmount={InvestmentAmount}
                                expectedRateOfReturn={ExpectedRateOfReturn}
                                tenure={Tenure}
                            />
                        )}
                    </div>



                    <div className="lumpsum-flex2">
                        <img className="lumpsumimage" src={lumpsumimage}></img>

                    </div>

                </div>






                <div className="lumpsumdescription">

                    <p>
                        <center><h2>About  Lumpsum Calculator</h2></center>
                        <br></br><br></br>

                        <b>1) What is a Lumpsum Investment?</b>
                        <br></br>

                        Lumpsum investment or one-time investment is a style of investment in which you invest once (lumpsum) and allow your invested money to generate compounding returns over a given time frame.
                        <br></br><br></br>
                        <b>2) What Is Lumpsum Calculator?
                        </b>
                        <br></br><br></br>

                        With Lumpsum calculator you can calculate the maturity value of your investment. In other words, the Lumpsum Calculator tells the future value of your investment made today at a certain rate of interest. For example: If you invest 1 lakh rupees for 60 years at 15% rate of interest then according to lumpsum calculator, the future value of your investments will be mindboggling 43.8 cr. after 60 years.
                        <br></br><br></br>


                        <b>3) How does this Lumpsum Calculator work?
                        </b>
                        <br></br><br></br>


                        Our lumpsum calculator is so convenient to use that even a layman can use it. In our Lumpsum Calculator, you need to just enter the required inputs such as the amount you are willing to invest, the time period (in years) you are willing to stay invested and, the expected rate of return per annum that you think the investment will generate. After entering the required variables, the calculator will give you the future value of your investments.
                        The formula that we have used in this Lumpsum Calculator is: Value = Investment*(1+R)N
                        <br></br><br></br>
                        <b>4) When should one prefer Lumpsum Investment?
                        </b>
                        <br></br><br></br>

                        Ideally any investment (whether lumpsum or SIP) should be done keeping in mind various things like current income, risk profile, age, tax constraints, liquidity needs, time frame and certain other unique constraints. Lumpsum investment is preferred when one has large amount of surplus funds and more importantly if he/she thinks that market has majorly corrected or it won’t fall just after making the investment. Lumpsum investment done over a longer period helps generate compounding rate of returns.
                        <br></br><br></br>

                        <b>5) What’s the difference between Lumpsum and SIP?
                        </b>

                        <br></br><br></br>

                        In lumpsum investment one needs to invest only once whereas, in SIP or Systematic Investment Plan one invests a fixed amount periodically. In lumpsum investment style the market condition plays a huge role because if the market makes a major correction after your investment, then it might take few years to reach your original investment amount. Whereas, in SIP or systematic investment style one need not worry about timing the market as investment is made during both ups and downs of the market. Therefore, the return generated is weighted average return.
                        <br></br><br></br>

                        <b>6) Where can I park my funds for Lumpsum investment?
                        </b>
                        <br></br><br></br>

                        For lumpsum investment one can choose various instruments like Mutual Funds, Equity Shares, Exchange Traded Funds, Liquid Funds, Bonds, Fixed Deposits etc. But again, we think that you should select these instruments for lumpsum investment only after considering your risk profile, financial goals, liquidity needs etc.
                    </p>



                </div>


            </div>
            \        </div>
    );
}

export default LumpsumCalculator;