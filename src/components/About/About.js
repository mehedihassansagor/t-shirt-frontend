import {useContext, React} from "react";
import { UserContext } from './../../App';

const About = () => {
  const [loggedinUser, setLoggedinUser] = useContext(UserContext);
  console.log("this is from about", loggedinUser)
  return (
    <div>
      <div className="container my-5">
        <h1 className="text-center">About Us</h1>
        <p>
          We are a T-Shirt company dedicated to providing high-quality,
          comfortable, and stylish T-Shirts for all occasions. Our mission is to
          offer our customers a variety of T-Shirts that meet their individual
          needs and styles.
        </p>
        <p>
          All of our T-Shirts are made from the finest materials, and we are
          constantly adding new designs to our collection to keep up with the
          latest trends and fashion styles. Our T-Shirts are perfect for casual
          wear, but can also be dressed up for a night out on the town.
        </p>
        <p>
          At our T-Shirt company, customer satisfaction is our top priority. We
          are always striving to improve our products and services, and welcome
          feedback from our customers to help us achieve this goal. Thank you
          for choosing us as your T-Shirt provider!
        </p>
      </div>
    </div>
  );
};

export default About;
