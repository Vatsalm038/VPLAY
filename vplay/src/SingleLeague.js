import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const SingleLeague = () => {
  const params = useParams();

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
          <div className="col-md-6">
            <div className="card">
              <img
                src="/assets/Turf3.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>{params.name}</b>
                </h5>
                <p className="card-text">
                  6 V 6 - Football League at Sports Co
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2>Fixtures for this tournament</h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Team</th>
                  <th scope="col">Team</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>IT Smashers</td>
                  <td>AIDS Rocks</td>
                  <td>20th October: 9.30</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>ViralCharacters</td>
                  <td>Norton Destructors</td>
                  <td>21st October: 9.30</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cool Matterw</td>
                  <td>Whiterose</td>
                  <td>22nd OCtober: 9.30</td>
                </tr>
              </tbody>
            </table>

            <h2>Results of Previous Matches</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Team</th>
                  <th scope="col">Team</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>IT Smashers</td>
                  <td>AIDS Rocks</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>ViralCharacters</td>
                  <td>Norton Destructors</td>
                  <td>3-2</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Cool Matterw</td>
                  <td>Whiterose</td>
                  <td>4-3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleLeague;
