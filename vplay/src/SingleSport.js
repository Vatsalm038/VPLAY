import React, { useEffect, useState } from "react";
import { Routes, useParams } from "react-router-dom";
import { db } from "./firebase";

import Header from "./Header";

const SingleSport = () => {
  const params = useParams();

  const [Players, setPlayers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [name] = useState({
    Name: "",
  });

  useEffect(() => {
    db.collection(params.name)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setPlayers((arr) => [...arr, data]);
          setLoading(false);
        });
      });
  }, [params.name]);

  const handleChange = (e) => {
    name.Name = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection(params.name)
      .add(name)
      .then((res) => {
        alert("Data Added");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <Header />
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            backgroundColor: "black",
            marginBottom: "15px",
            padding: "3px",
          }}
        >
          PickUp
        </h1>
        <div
          className="row row-cols-1 row-cols-md-2 g-4"
          style={{ width: "100%" }}
        >
          <div className="col-md-6">
            <div className="card">
              <img
                src="/assets/Turf3.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>{params.ename}</b>
                </h5>
                <p className="card-text">
                  6 V 6 - Football League at Sports Co
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {loading === true ? (
              <>
                <p>Loading Already Joined Players</p>
              </>
            ) : (
              <>
                <h1>Already Joined Players are:</h1>{" "}
                {Players.map((player, i) => (
                  <>
                    <p>{player.Name}</p>
                  </>
                ))}
              </>
            )}
            <form>
              <input
                type="name"
                placeholder="Enter your name to join.."
                onChange={handleChange}
                style={{ height: "35px", paddingLeft: "10px", outline: "none" }}
              />
              <input
                type="submit"
                onClick={handleSubmit}
                style={{
                  height: "35px",
                  outline: "none",
                  width: "150px",
                  backgroundColor: " #000",
                  color: "#fff",
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSport;
