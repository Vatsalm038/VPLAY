import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "./context/userContext";
import Header from "./Header";
import "./abc.css";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [samasya, setSamasya] = useState("");

  const auth = getAuth();
  const handleLogin = (e, auth, email, password) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        localStorage.setItem("user", JSON.stringify(userCredential.user));
      })
      .catch((error) => {
        console.error(error);
        setSamasya(error.message.slice(22, -2));
      });
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="main_box">
      <Header />
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="box Auth-form-content">
          <div><h1 className="Auth-form-title">Login</h1></div>
          {samasya && <p>{samasya}</p>}
          <label htmlFor="email"><h4>Email:</h4></label>
          <input type="text" name="email" ref={emailRef}></input>
          <label htmlFor="password"><h4>Password:</h4></label>
          <input type="password" name="pass" ref={passwordRef}></input>
          <button className="submit"
            onClick={(e) =>
              handleLogin(
                e,
                auth,
                emailRef.current.value,
                passwordRef.current.value
              )
            }
          >
            Submit
          </button>
          <div className="acc">
            Need an account?
            <Link to="/signup">
              <span>Signup</span>
            </Link>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
