import React from "react";
import { useSelector } from "react-redux";
import { 
    Route,
    Routes,
    Navigate,
    Outlet,
    BrowserRouter } from "react-router-dom";

    const IsRoute = ({ path, children }: any) => {
        const auth = localStorage.getItem("authToken");
      
        return auth ? <Outlet /> : <Navigate to="/sign-in" />;
      };

      export default IsRoute;