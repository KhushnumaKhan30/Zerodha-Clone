import React from "react";

function Hero() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center  p-4">
        <h2 className=" mb-3">Charges</h2>
        <p className=" mb-5 fs-4 text-muted">List of all charges and taxes</p>

        <div className="col-4 mt-5 p-5 text-muted ">
          <img src="media/images/pricing0.svg" className="img-fluid" />
          <h2>Free equity delivery</h2>
          <p >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 mt-5 p-5 text-muted" >
          <img src="media/images/intradayTrades.svg" className="img-fluid"/>
          <h2>Intraday and F&O trades</h2>
          <p >
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 mt-5 p-5 text-muted">
          <img src="media/images/pricing0.svg" className="img-fluid" />
          <h2>Free direct MF</h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
