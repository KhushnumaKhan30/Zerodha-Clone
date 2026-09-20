import React from 'react'

function Team() {
    return (
       <div className="container ">
      <div className="row mb-5 text-center text-muted pb-5 ">
        <h3>
           People
        </h3>
      </div>

      <div
        className="row  mt-5 text-muted "
        style={{ lineHeight: "1.6", fontSize: "1.0em" }}
      >
        <div className="col-lg-6 col-sm-12  text-muted text-center">
           <img src = "media/images/nithinKamath.jpg" alt = "Nithin Kamath" className="img-fluid mb-3 " style={{ borderRadius: "100%", width:"58%%" }}/>
           <h5>Nithin Kamath</h5>
           <p>Founder and CEO</p>
        </div>

        <div className="col-lg-6 col-sm-12 p-5">
          <p className="mb-2">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="mb-2">
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
            <p className="mb-2">
            Playing basketball is his zen.
          </p>

           <p className="mb-2">Connect on &nbsp;
            <a href="" style={{ textDecoration: "none" }}>
             Homepage 
            </a> /
             <a href="" style={{ textDecoration: "none" }}>
            TradingQnA
            </a> /
             <a href="" style={{ textDecoration: "none" }}>
             Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
    );
}

export default Team;