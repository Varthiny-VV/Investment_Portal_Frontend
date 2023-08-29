import React from "react";
import "./Home.css";
import HomeNavbar from "./HomeNavbar";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";

function Home() {
  return (
    <div className="discover_body">
      <HomeNavbar></HomeNavbar>
      <HomeHeader></HomeHeader>
      <div className="discover">
        <div className="container">
          <h2 className="discover_header">
            Discover about <span className="stock">Stock</span>
          </h2>
      
          <h6 className="discover_sub_header">
            Start investing with the best company in the world, we ensures you to
            get the best stock possible. <br></br>Find the right company to invest in.
          </h6>
          <div className="row">
            <div className="flex">
              <img
                className="img-1"
                src={process.env.PUBLIC_URL + "/images/Rectangle 1.png"}
                alt=""
              ></img>
            </div>
            <div className="flex">
              <h3>How to invest in stock?</h3>
              <p>
                The stock market and investing can be perplexing, often
                misconceived as a form of gambling. However, when comprehended
                and utilized effectively, the stock market has the potential to
                greatly enhance your finances. Here's a concise guide to steer
                you toward a successful start in your investment journey,
                enabling you to maximize its potential.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="discover">
        <div className="container">
          <div className="row">
            <div className="flex">
              <h3>Who should invest in stock market?</h3>
              <p>
                Similar to the essential needs of drinking water and eating,
                growing your wealth through earning and investing is equally
                vital. Merely relying on paychecks isn't sufficient for
                providing a good life for your family. Investing is a necessity,
                regardless of age or income, as it yields fruitful returns and
                secures your financial future.
              </p>
            </div>
            <div className="flex">
              <img
                className="img-1"
                src={process.env.PUBLIC_URL + "/images/Rectangle 2.png"}
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="discover">
        <div className="container">
          <div className="row">
            <div className="flex">
              <img
                className="img-1"
                src={process.env.PUBLIC_URL + "/images/Rectangle 3.png"}
                alt=""
              ></img>
            </div>
            <div className="flex">
              <h3>How to find the right stocks?</h3>
              <p>
                After grasping investment concepts, practice becomes crucial.
                Prior to actual investing, observe the market and analyze stocks
                using accurate information. Present equity research tools often
                lack precise data. Kanini's Investment Search Engine addresses
                this by offering a vast database of listed companies. It's
                tech-powered for precise analyses, aiding you in selecting prime
                stocks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter></HomeFooter>
    </div>
  );
}
export default Home;
