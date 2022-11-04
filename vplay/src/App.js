import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./Settings";
import Leagues from "./Leagues";
import Pickup from "./Pickup";
import SingleSport from "./SingleSport";
import SingleLeague from "./SingleLeague";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./Login";
import {useState, useEffect} from 'react';
import { UserContext } from './context/userContext'

const App = () => {
  const [user, setUser] = useState(null);
   useEffect(() => {
     if (localStorage.getItem("user")) {
       setUser(JSON.parse(localStorage.getItem("user")));
     }
   }, []);
   console.log(user);

  return (
    <Router>
      <div>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/Leagues" element={<Leagues />} />
            <Route path="/Pickup" element={<Pickup />} />
            <Route path="/go/:name/:ename" element={<SingleSport />} />
            /SingleLeague
            <Route path="/SingleLeague/:name" element={<SingleLeague />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default App;