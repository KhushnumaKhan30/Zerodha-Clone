import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-white border-bottom">
      <div class="container p-2">
        <a class="navbar-brand" href="#">
          <img
            src="media/images/logo.svg"
            alt="Zerodha Logo"
            className="img-fluid"
            style={{ width: "30%" }}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav  mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="/about">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="/products">
                  Products
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="/pricing">
                  Pricing
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="/support">
                  Support
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/login">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="signup">
                  Signup
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
