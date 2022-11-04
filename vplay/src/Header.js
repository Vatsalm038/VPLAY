import React from "react";
import {Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useState, useContext } from "react";
import { UserContext } from "./context/userContext";

const Header = () => {
   const { user, setUser } = useContext(UserContext);

   const auth = getAuth();

   const handleSignout = (e, auth) => {
     e.preventDefault();

     signOut(auth)
       .then(() => {
         console.log("Sign-out successful.");
         localStorage.removeItem("user");
         setUser(null);
       })
       .catch((error) => {
         console.error("An error happened while signing out: ", error);
       });
   };
  return (
    <section id="header">
      <Link to="/">
        {" "}
        <img
          src="/assets/logo.png"
          className="logo"
          alt="VPLAY"
          width="100px"
          height="50px"
        />
      </Link>
      <div>
        <ul id="navbar">
          <li>
            <Link to="/Pickup">PICK UP</Link>
          </li>
          <li>
            <Link to="/Leagues">LEAGUES</Link>
          </li>
          {/* <li>
            <a href="profile">PROFILE</a>
          </li> */}
          <li>
            <Link to="/settings">SETTINGS</Link>
          </li>
          <li>
            {user ? <p>{user.displayName}</p> : <Link to="/signup">SIGNUP</Link>}
          </li>
          <li>
            {user ? (
              <button
                onClick={(e) => {
                  handleSignout(e, auth);
                }}
              >
                <Link to="/">Sign out</Link>
              </button>
            ) : (
             ""
            )}
          </li>

          {/* <li><a href="settings.html"><i class="fa-duotone fa-gear"></i></a></li> */}
        </ul>
      </div>
    </section>
  );
};

export default Header;
