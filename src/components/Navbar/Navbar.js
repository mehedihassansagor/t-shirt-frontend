import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to = "/">
            <b>T-SHIRT</b>
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
                <Link className="nav-link active" to = "">
                 <b>Home</b> 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to = "/about">
                  <b>About</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to = "/order">
                  <b>Order</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to = "/contact">
                  <b>Contact</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to = "/login">
                 <b>LogIn</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to = "/uploadproduct">
                 <b>Upload</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to = "/dashboard">
                <b>Dashboard</b>
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
