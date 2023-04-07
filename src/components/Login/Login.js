import { React, useState } from "react";

// firebase
import firebase from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./../Firebase/Firebase.init";
const auth = getAuth(app);

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const Login = () => {
  const [loggedinUser, setLoggedinUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoohleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setLoggedinUser(user);

        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoohleLogOut = () => {
    signOut(auth)
      .then(() => {
        setLoggedinUser({});
      })
      .catch(() => {
        setLoggedinUser({});
      });
  };
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center">Login Please</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="example@gmail.com"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div>name:{loggedinUser.displayName}</div>
          <br />
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <br />
        <br />
        <hr />
        {loggedinUser.email ? (
          <div className="btn btn-danger" onClick={handleGoohleLogOut}>
            google signOut
          </div>
        ) : (
          <div className="btn btn-primary" onClick={handleGoohleLogin}>
            google signin
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
