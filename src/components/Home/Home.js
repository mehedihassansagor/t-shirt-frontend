import React from "react";
import CarouselPage from "../CarouselPage/CarouselPage";
import Footer from "../Footer/Footer";
import Product from "./../Product/Product";

const Home = () => {
  return (
    <>
     
      <div className="container">
      <CarouselPage />
        <Product />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default Home;
