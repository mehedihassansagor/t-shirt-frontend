import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import imagePic from "../images/paymentPicture1.png"
import { useForm } from "react-hook-form";

const Dashboard = () => {
  //PHONE NO VALIDATION
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    console.log(value);

    if (value.length < 7 || value.length > 15) {
      setErrorMessage("Phone number must be between 10 and 15 characters long");
    } else {
      setErrorMessage("please");
    }

    setPhoneNumber(value);
  };
  //useform
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [tShirt, setTshirt] = useState([]);
  // console.log("single", tShirt);

  useEffect(() => {
    Axios.get("http://localhost:8000/tshirt")
      .then((res) => setTshirt(res.data))
      .catch((error) => console.log(error));
  }, [tShirt._id]);

  const { _id } = useParams();
  const singleTshirt = tShirt.find((s) => s._id === _id);

  //quantity

  const [quantity, setQuantity] = useState(1);
  // console.log("quantity", quantity);
  const [price, setPrice] = useState(1);

  //increment
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  //decrement
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  //oredr submission
  const onSubmit = (data) => {
    const orderData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      size: data.size,
      quantity: data.quantity,
      totalPrice: data.totalPrice * quantity,
      productName: singleTshirt?.name,
      productId: singleTshirt?._id,
    };
    console.log("order here", orderData);
    Axios.post("http://localhost:8000/order", orderData)
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      });
    // window.location.reload();
  };

  return (
    <div className="container my-1">
      <h2 className="text-center">Checkout</h2>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <h3>Product Details:</h3>
          <div className="card mb-3">
            <img
            
              src={singleTshirt?.imageURL}  
              
              style={{ width: "55%" }}
              className="card-img-top rounded mx-auto img-thumbnail"
              alt="T-Shirt"
            />
            <div className="card-body">
              <h5 className="card-title">{singleTshirt?.name}</h5>
              <h5 className="card-title">Price: {singleTshirt?.price} BDT</h5>
              <p className="card-text">{singleTshirt?.description} </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h3>Order Summary:</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                required="true"
                type="text"
                className="form-control"
                id="name"
                name="name"
                {...register("name")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                required="true"
                type="email"
                className="form-control"
                id="email"
                name="email"
                {...register("email")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Phone:</label>
              <input
                type="tel"
                value={phoneNumber}
                required="true"
                className="form-control"
                id="phone"
                name="phone"
                {...register("phone")}
                minlength="10"
                maxlength="13"
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="phoneNumber">Phone:</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter phone number"
                // minlength="10"
                // maxlength="13"
                required="true"
                className="form-control"
                id="phone"
                aria-describedby="phoneHelp"
                {...register("phone")}
              />
              <div className="text-danger" style={{display:"none"}}>
                {errorMessage}
              </div>
            </div> */}

            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                required="true"
                type="text"
                className="form-control"
                id="address"
                name="address"
                {...register("address")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="tShirtSize">T-Shirt Size</label>

              <select
                className="form-control"
                id="tShirtSize"
                name="size"
                {...register("size")}
              >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>X-Large</option>
                <option>XL-Large</option>
              </select>
            </div>
            <div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <br />
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  value={quantity}
                  // readOnly
                  {...register("quantity")}
                />
                <br />
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={decrementQuantity}
                >
                  -
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={incrementQuantity}
                >
                  +
                </button>
                <br />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="totalPrice">Total Price:</label>
                {/* <p>{quantity * singleTshirt?.price}</p> */}
                <input
                  type="number"
                  className="form-control"
                  id="totalPrice"
                  value={singleTshirt?.price * quantity}
                  name="totalPrice"
                  {...register("totalPrice")}
                />
              </div>
            </div>
            {/* payment part*/}
            {/* <h3 class="mb-3">Payment Information:</h3>
            <div class="form-group">
              <label for="payment-method">Payment Method:</label>
              <select
                class="form-control"
                id="payment-method"
                name="payment_method"
                required
              >
                <option value="">Select Payment Method</option>
                <option value="credit-card">Credit Card</option>
                <option value="debit-card">Debit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>

            <div class="form-group">
              <label for="cardholder-name">Cardholder Name:</label>
              <input
                type="text"
                class="form-control"
                id="cardholder-name"
                name="cardholder_name"
                required
              />
            </div>

            <div class="form-group">
              <label for="card-number">Card Number:</label>
              <input
                type="text"
                class="form-control"
                id="card-number"
                name="card_number"
                required
              />
            </div>

            <div class="form-group">
              <label for="expiration-date">Expiration Date:</label>
              <input
                type="month"
                class="form-control"
                id="expiration-date"
                name="expiration_date"
                required
              />
            </div>

            <div class="form-group">
              <label for="cvv">CVV/CVC:</label>
              <input
                type="text"
                class="form-control"
                id="cvv"
                name="cvv"
                required
              />
            </div> */}
            {/* payment part finish */}
            <br />
            <button
              // onChange={handlePhoneNumberChange}
              // onSubmit={handlePhoneNumberChange}
              type="submit"
              className="btn btn-primary fw-bold form-control my-1"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
