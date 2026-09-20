import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import Home from "./components/Home";


function ProtectedDashboard() {

  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);


  useEffect(() => {

    axios.get(
      "https://zerodha-clone-backend-tftb.onrender.com/auth/check",
      {
        withCredentials: true
      }
    )
    .then((response) => {

      if (response.data.success) {
        setAuthenticated(true);
      }

    })
    .catch((error) => {

      console.log(
        error.response?.data || error.message
      );

      window.location.href = "http://localhost:3000/login";

    })
    .finally(() => {

      setLoading(false);

    });

  }, []);


  // While checking login
  if (loading) {
    return <h2>Checking login...</h2>;
  }


  // If user is not logged in
  if (!authenticated) {
    return null;
  }


  // If user is logged in
  return <Home />;
}


const root = ReactDOM.createRoot(
  document.getElementById("root")
);


root.render(

  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route
          path="/*"
          element={<ProtectedDashboard />}
        />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>

);
