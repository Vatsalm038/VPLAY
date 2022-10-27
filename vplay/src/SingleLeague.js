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
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
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
                  <td>India</td>
                  <td>China</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
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
