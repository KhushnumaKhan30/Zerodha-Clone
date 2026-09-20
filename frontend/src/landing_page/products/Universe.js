import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center ">
        <h3 className="text-muted mb-3 mt-5">The Zerodha Universe</h3>
        <p className="text-muted mb-5 ">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

          
        <div className="col-lg-4 col-sm-12 mt-5 ">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            className="img-fluid "
            style={{width:"60%"}}
          />
          <p className="p-4 text-muted" style={{ fontSize: "12px" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12 mt-5">
          <img src="media/images/sensibullLogo.svg" alt="" className="img-fluid" style={{width:"60%"}} />
          <p className="p-4 text-muted" style={{ fontSize: "12px" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12 mt-5  ">
          <img src="media/images/tijori.svg" alt="" className="img-fluid" style={{width:"50%"}}/>
          <p className="p-4 text-muted" style={{ fontSize: "12px" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

          <div className="col-lg-4 col-sm-12 mt-5 ">
          <img
            src="media/images/streakLogo.png"
            alt=""
            className="img-fluid "
            style={{width:"50%"}}
          />
          <p className="p-4 text-muted" style={{ fontSize: "12px" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12 mt-5 ">
          <img src="media/images/smallcaseLogo.png" alt="" className="img-fluid" style={{width:"60%" }}/>
          <p className="p-4 text-muted" style={{ fontSize: "12px" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12 mt-5 ">
          <img src="media/images/dittoLogo.png" alt="" className="img-fluid" style={{width:"50%"}} />
          <p className="p-4 text-muted" style={{ fontSize: "12px" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
               <button
            className="p-2 btn btn-primary fs-5 mt-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
            onClick={() => window.location.href = "/signup"}
          >
            Sign up for Free
          </button> 
      </div>
    </div>
  );
}

export default Universe;
