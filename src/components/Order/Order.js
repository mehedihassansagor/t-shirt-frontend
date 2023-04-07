import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

const Order = () => {
  const [order, setOrder] = useState([]);
  // console.log(order);

  //delete order

  useEffect(() => {
    Axios.get("http://localhost:8000/order")
      .then((res) => setOrder(res.data))
      .catch((error) => console.log(error));
  }, []);
  //delete
  const handleDelete = (_id) => {
    Axios.delete(`http://localhost:8000/order/${_id}`)
      .then((res) => console.log("delete"))
      .catch((error) => console.log(error));
    window.location.reload();
    console.log("delete clicked");
  };
  return (
    <div>
      (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Product Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Size</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {order.map((order) =>  (
              
              <tr 
              key = {order._id}>
                <td>{order.name}</td>
                <td>{order.productName}</td>
                <td>{order.address}</td>
                <td>{order.email}</td>
                <td>{order.size}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(order._id)}
                  >
                    {/* <FontAwesomeIcon icon={faTrashAlt} /> */}
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )
    </div>
  );
};

export default Order;
