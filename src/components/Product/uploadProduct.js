import React from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useState } from "react";


const UploadProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const tshirtData = {
      name: data.name,
      description: data.description,
      price: data.price,
      imageURL: imageURL,
    };
    console.log(tshirtData);
    Axios.post('http://localhost:8000/tshirt', tshirtData)
    .then(response =>console.log(response))
    .catch(error => {
        console.log(error)
    });
    window.location.reload();
}


  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "798767f30df3dcdc7763cb42cb4936d6");
    imageData.append("image", e.target.files[0]);

    Axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
        console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <form align="center" onSubmit={handleSubmit(onSubmit)}>
        <p>
          <b>Add T shirts</b>
        </p>

        <input
          className="form-control"
          placeholder="name of product"
          name="name"
          {...register("name")}
        />
        <br />
        <br />
        <textarea
          className="form-control"
          style={{ height: "300px" }}
          name="description"
          placeholder="description"
          {...register("description")}
        />
        <br />
        <br />
        <input
          placeholder="Price"
          className="form-control"
          name="price"
          {...register("price")}
        />
        <br />
        <br />
        <input className="form-control" onChange={handleImageUpload} type="file" />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <br />
        {/* <input   type="submit" /> */}
        <button type="submit" className="btn btn-primary">
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default UploadProduct;
