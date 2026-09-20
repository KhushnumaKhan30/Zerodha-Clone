import React from "react";

function Stats() {
  return (
    <div className="container mt-5 p-2 mb-5">
      <div className="row p-2">
        <div className="col-6 mt-5 p-3">
          <h2 className="mb-4 text-muted">Trust with confidence</h2>

          <h4 className="text-muted">Customer-first always</h4>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h4 className="text-muted">No spam or gimmicks</h4>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h4 className="text-muted">The Zerodha universe</h4>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h4 className="text-muted">Do better with money</h4>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 mt-4 p-2">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem"
            className="img-fluid mt-4"
            style={{ width: "92%" }}
          />
          <div className="text-center">
            <a href="#" className=" mx-2 " style={{ textDecoration: "None" }}>
              Explore our Products <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="#" className=" mx-2 " style={{ textDecoration: "None" }}>
              Try Kite Demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
