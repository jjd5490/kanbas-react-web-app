import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./index.css";

function ProjectNav() {
  const { pathname } = useLocation();

  return (
    <div className="col-2">
      <div className="list-group">
        <div
          className={`list-group-item ${
            pathname.includes("home") ? "active" : ""
          }`}
        >
          <Link to="/project/home">Home</Link>
        </div>
        <div
          className={`list-group-item ${
            pathname.includes("search") ? "active" : ""
          }`}
        >
          <Link to="/project/search">Search</Link>
        </div>
        <div
          className={`list-group-item ${
            pathname.includes("signin") ? "active" : ""
          }`}
        >
          <Link to="/project/signin">Signin</Link>
        </div>
        <div
          className={`list-group-item ${
            pathname.includes("signup") ? "active" : ""
          }`}
        >
          <Link to="/project/signup">Signup</Link>
        </div>
        <div
          className={`list-group-item ${
            pathname.includes("account") ? "active" : ""
          }`}
        >
          <Link to="/project/account">Account</Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectNav;
