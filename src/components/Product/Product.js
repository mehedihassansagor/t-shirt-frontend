import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import Axios from "axios";

import "./product.css"

const Product = () => {

  const [tshirt, setTshirt] = useState([])
     useEffect(() => {
    Axios.get("http://localhost:8000/tshirt")
      .then((res) =>setTshirt(res.data))
      .catch((error) => console.log(error));
  }, [tshirt._id]);
  return (
    <>
      <div className="grid">
      {
        tshirt.map((singleTshirt)=> <ProductCart key={singleTshirt.id} singleTshirt={singleTshirt} />)
      }
        
      </div>
    </>
  );
};

export default Product;
