import React from "react";
import Card from "react-bootstrap/Card";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./ProductCart.css"

const ProductCart = (props) => {
  console.log(props);
  const { name, _id, size, imageURL, price } = props.singleTshirt;

  const handleDelete = (id, e) => {
    Axios.delete(`http://localhost:8000/tshirt/${id}`)
      .then((res) => console.log("delete"))
      .catch((error) => console.log(error));
    window.location.reload();
  };

  return (
    <div className="row">
      <Card className="mt-3 col-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" className="image_style" src={imageURL} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {/* <Card.Text>{description}</Card.Text> */}
          <Card.Text>{size}</Card.Text>
          <Card.Text className="fw-bold">Price: {price} BDT</Card.Text>
          <div className="d-grid gap-2 col-6 mx-auto">
            <Link className="btn btn-primary" to={`/dashboard/${_id}`}  href="/dashboard">
              BUY
            </Link>
            <button
              className="btn btn-danger"
              type="button"
              onClick={(e) => handleDelete(_id, e)}
            >
              DEL
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCart;
