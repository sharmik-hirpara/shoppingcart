import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav
      className="navbar navbar-light bg-light"
      style={{ display: "inherit" }}
    >
      <img src={require("../image/logo.png")} alt="Logo" width="75" />
      {/* <h1 className="navbar-brand ">Online Shopping Company</h1> */}
      <a className="navbar-brand" href="#">
        Online Shopping Company{" "}
        {/* <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span> */}
      </a>
    </nav>
  );
};

export default NavBar;
