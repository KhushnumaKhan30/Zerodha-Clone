import React from "react";

function Pricings() {
  return (
    <div className="container mt-5 p-2 mb-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h3 className="text-muted">Unbeatable pricing</h3>
          <p className="text-muted p-2">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className=" mx-2 " style={{ textDecoration: "None" }}>
            See pricing <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div className="col-6">
          <div className="row">
            <div className="col-4">
              <img
                src="media/images/pricing0.svg"
                alt="Equity Delivery"
                className="img-fluid"
              />
              <p className="text-muted">Free account opening</p>
            </div>
            <div className="col-4">
              <img
                src="media/images/pricingEquity.svg"
                alt="Future and Options"
                className="img-fluid"
              />
              <p className="text-muted">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col-4 ">
              <img
                src="media/images/other-trades.svg"
                alt="Commodity Derivatives"
                className="img-fluid"
              />
              <p className="text-muted"> Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricings;
