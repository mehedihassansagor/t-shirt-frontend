import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h5>About Us</h5>
              <p>Learn more about our t-shirt company and what we stand for.</p>
            </div>
            <div className="col-sm-3">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-envelope"></i> info@tshirtco.com
                </li>
                <li>
                  <i className="fa fa-phone"></i> (555) 555-5555
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h5>Follow Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h5>Subscribe</h5>
              <form action="#">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center py-3">
            Copyright &copy; 2023 T-Shirt Co. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
