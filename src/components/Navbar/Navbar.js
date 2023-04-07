import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./../../App";

const Navbar = () => {
  const [loggedinUser, setLoggedinUser] = useContext(UserContext);
  console.log("this is from nav", loggedinUser);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div>T-SHIRT</div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="">
                  <div>Home</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  <div>About</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/order">
                  <div>Order</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  <div>Contact</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  <div>LogIn</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/uploadproduct">
                  <div>Upload</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/dashboard">
                  <div>Dashboard</div>
                </Link>
              </li>
              <li className="nav-item">
                <div>
                  <p>{loggedinUser.email}</p>
                  <p>{loggedinUser.displayName}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
