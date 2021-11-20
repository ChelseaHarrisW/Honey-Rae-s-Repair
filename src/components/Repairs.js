// ^^the functions above are importing statements that are later called below to render the coresponding import location that
// below are followed from the listed items. 
// the functions below are being called in a function called Repairs which is returning the functions ability to render the HTML to the DOM setCustomers
// see corresponding function at loocation.

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Repairs.css";

export const Repairs = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("honey_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
