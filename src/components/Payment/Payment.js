import React from "react";
import picture1 from "../images/paymentPicture1.png";
const Payment = () => {
  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-6">
    //       <img
    //         src="https://example.com/tshirt.jpg"
    //         alt="T-shirt image"
    //         className="img-fluid"
    //       />
    //     </div>
    //     <div className="col-6 my-5">
    //       <div className="container">
    //         <h1>Payment Page</h1>
    //         <form>
    //           <div className="form-group">
    //             <label for="cardnumber">Credit Card Number</label>
    //             <input
    //               type="text"
    //               className="form-control"
    //               id="cardnumber"
    //               placeholder="Enter card number"
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label for="expirydate">Expiry Date</label>
    //             <input
    //               type="text"
    //               className="form-control"
    //               id="expirydate"
    //               placeholder="Enter expiry date"
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label for="cvv">CVV</label>
    //             <input
    //               type="text"
    //               className="form-control"
    //               id="cvv"
    //               placeholder="Enter CVV"
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label for="cardholdername">Cardholder Name</label>
    //             <input
    //               type="text"
    //               className="form-control"
    //               id="cardholdername"
    //               placeholder="Enter cardholder name"
    //             />
    //           </div>
    //           <button type="submit" className="btn btn-primary">
    //             Pay Now
    //           </button>
    //         </form>
    //       </div>
    //       <h3 className="mb-3 my-5">Payment Information:</h3>
    //       <div className="form-group">
    //         <label for="payment-method">Payment Method:</label>
    //         <select
    //           className="form-control"
    //           id="payment-method"
    //           name="payment_method"
    //           required
    //         >
    //           <option value="">Select Payment Method</option>
    //           <option value="credit-card">Credit Card</option>
    //           <option value="debit-card">Debit Card</option>
    //           <option value="paypal">PayPal</option>
    //         </select>
    //       </div>

    //       <div className="form-group">
    //         <label for="cardholder-name">Cardholder Name:</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="cardholder-name"
    //           name="cardholder_name"
    //           required
    //         />
    //       </div>

    //       <div className="form-group">
    //         <label for="card-number">Card Number:</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="card-number"
    //           name="card_number"
    //           required
    //         />
    //       </div>

    //       <div className="form-group">
    //         <label for="expiration-date">Expiration Date:</label>
    //         <input
    //           type="month"
    //           className="form-control"
    //           id="expiration-date"
    //           name="expiration_date"
    //           required
    //         />
    //       </div>

    //       <div className="form-group">
    //         <label for="cvv">CVV/CVC:</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="cvv"
    //           name="cvv"
    //           required
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6">
          <img
            src={picture1}
            alt="T-shirt"
            className="img-fluid rounded"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h1>Payment Information</h1>
          <form>
            <div className="form-group">
              <label for="payment-method">Payment Method:</label>

              <select
                className="form-control"
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
            <div className="form-group">
              <label for="cardnumber">Credit Card Number</label>
              <input
                type="text"
                className="form-control"
                id="cardnumber"
                placeholder="Enter card number"
              />
            </div>
            <div className="form-group">
              <label for="expirydate">Expiry Date</label>
              <input
                type="text"
                className="form-control"
                id="expirydate"
                placeholder="Enter expiry date"
              />
            </div>
            <div className="form-group">
              <label for="cvv">CVV</label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                placeholder="Enter CVV"
              />
            </div>
            <div className="form-group">
              <label for="cardholdername">Cardholder Name</label>
              <input
                type="text"
                className="form-control"
                id="cardholdername"
                placeholder="Enter cardholder name"
              />
            </div>
            <button type="submit" className="btn btn-primary my-2 form-control">
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
