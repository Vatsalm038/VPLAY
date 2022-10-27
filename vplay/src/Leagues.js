import React from "react";
import Header from "./Header";

const Leagues = () => {
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
          Leagues
        </h1>
        <div
          className="row row-cols-1 row-cols-md-2 g-4"
          style={{ width: "100%" }}
        >
          <div className="col">
            <div className="card">
              <img src="assets/Turf3.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <b>MGPL SEASON 2</b>
                </h5>
                <p className="card-text">
                  6 V 6 - Football League at Sports Co
                </p>
                <div id="last">
                  <a href="#/" className="btn btn-primary">
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="assets/Turf3.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <b>WORLD CUP TOURNAMENT</b>
                </h5>
                <p className="card-text">
                  Join Our One Day Tournament at St Francis Cricket Ground
                  Outdoor astrol
                </p>
                <div id="last">
                  <a href="#/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="assets/Turf3.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <b>HOWZATT' 22</b>
                </h5>
                <p className="card-text">
                  Thadomal Shahani Engineering College Presents Howzatt
                  <br />
                  <br />6 V 6 - Football League
                </p>
                <div id="last">
                  <a href="#/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="assets/Turf3.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <b>RC CLASH OF TITANS</b>
                </h5>
                <p className="card-text">
                  Join Our Winter League In RC Outdoor astrol
                  <br />
                  <br />7 V 7 - One Day Football Tournament
                </p>
                <div id="last">
                  <a href="#/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leagues;
