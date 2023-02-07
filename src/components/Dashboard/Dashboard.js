import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

const Dashboard = () => {
  const { _id } = useParams();

  const [tShirt, setTshirt] = useState([]);
  console.log("this is tshirt:", tShirt);

  useEffect(() => {
    Axios.get("http://localhost:8000/tshirt")
      .then((res) => setTshirt(res.data))
      .catch((error) => console.log(error));
  }, [tShirt._id]);

  console.log("this is from useparams", _id);
  const singleTshirt = tShirt.find((s) => s.id === _id);
  console.log("this is", singleTshirt);

  return (
    <div>
      {/* {singleTshirt?.name} */}
      this
      <div class="container my-5">
        <h1 class="text-center">Checkout</h1>
        <form>
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="fullName"
              placeholder="Enter your full name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="form-group">
            <label for="shippingAddress">Shipping Address</label>
            <input
              type="text"
              class="form-control"
              id="shippingAddress"
              placeholder="Enter your shipping address"
            />
          </div>
          <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input
              type="tel"
              class="form-control"
              id="phoneNumber"
              placeholder="Enter your phone number"
            />
          </div>
          <div class="form-group">
            <label for="tShirtSize">T-Shirt Size</label>
            <select class="form-control" id="tShirtSize">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>X-Large</option>
              <option>XX-Large</option>
            </select>
          </div>
          <br />
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
