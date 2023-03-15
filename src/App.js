import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Order from "./components/Order/Order";
import About from "./components/About/About";
import Contactus from "./components/Contactus/Contactus";
import Navbar from "./components/Navbar/Navbar";
import UploadProduct from "./components/Product/uploadProduct";
import Dashboard from "./components/Dashboard/Dashboard";
import Payment from "./components/Payment/Payment";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { createContext, useState } from "react";

export const UserContext = createContext();
//  export default UserContext;
function App() {
  const [loggedinUser, setLoggedinUser] = useState({});
  return (
    <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contactus />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/uploadproduct" element={<UploadProduct />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/dashboard/:_id" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/registerPage" element={<RegisterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
