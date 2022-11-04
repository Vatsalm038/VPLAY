import React, { useContext, useState, useRef } from "react";
import Header from "./Header";
import { Link , Navigate} from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { UserContext } from "./context/userContext";

const SignUp = () => {
  const { user, setUser } = useContext(UserContext);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [samasya, setSamasya] = useState("");

  const auth = getAuth();
  const handleSubmit = (e, auth, name, email, password) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed up");
        setSamasya("");
        setUser(userCredential.user);
        localStorage.setItem("user", JSON.stringify(userCredential.user));
        updateProfile(auth.currentUser, {
          displayName: `${name}`,
        });
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
    <div>
      <Header />
      <div>
        <form>
          <div>Sign Up</div>
          {samasya && <p>{samasya}</p>}
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" ref={nameRef}></input>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" ref={emailRef}></input>
          <label htmlFor="password">Create password:</label>
          <input type="password" name="pass" ref={passwordRef}></input>
          <label htmlFor="confirmpass">Confirm password:</label>
          <input
            type="password"
            name="confirmpass"
            ref={confirmPasswordRef}
          ></input>
          <button
            type="submit"
            onClick={(e) => {
              if (
                passwordRef.current.value !== confirmPasswordRef.current.value
              ) {
                e.preventDefault();
                setSamasya("Passwords did not match");
              } else if (
                nameRef.current.value === "" ||
                emailRef.current.value === "" ||
                passwordRef.current.value === "" ||
                confirmPasswordRef.current.value === ""
              ) {
                setSamasya("Please fill all the fields");
              } else {
                handleSubmit(
                  e,
                  auth,
                  nameRef.current.value,
                  emailRef.current.value,
                  passwordRef.current.value
                );
              }
            }}
          >
            Submit
          </button>
          <div>
            Already have an account?
            <Link to="/login">
              <span>Login</span>
            </Link>
            .
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
