import React from "react";

function Awards() {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <img
              src="media/images/largestBroker.svg"
              alt="Largest Broker"
              className="img-fluid mt-4"
            />
          </div>
          <div className="col-lg-6 col-sm-12 mt-5">
            <h1 className="text-muted">Largest stock broker in India</h1>
            <p className="mb-5">
              With over 2 million active users, we are the largest stock broker
              in India daily by trading and investing in :
            </p>

            <div className="row className='text-muted'">
              <div className="col-lg-6 col-sm-12">
                <ul>
                  <li>Future and Options</li>
                  <li> Commodity Derivatives</li>
                  <li>Currency Derivatives</li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-12">
                <ul>
                  <li>Stocks and Shares</li>
                  <li> Direct Mutual Funds</li>
                  <li>Bonds and Government Securities</li>
                </ul>
              </div>
            </div>
            <img
              src="media/images/pressLogos.png"
              alt="Awards"
              className="img-fluid mt-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
