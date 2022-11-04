import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
const Login = () => {
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
            Login
          </h1>
        </div>
        <>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n        body {\n            font-family: Arial, Helvetica, sans-serif;\n            background-color: White;\n        }\n\n        * {\n            box-sizing: border-box;\n        }\n\n        /* Add padding to containers /\n\n        .container {\n            padding: 16px;\n            background-color: white;\n        }\n\n        / Full-width input fields /\n\n        input[type=text],\n        input[type=password] {\n            width: 100%;\n            padding: 15px;\n            margin: 5px 0 22px 0;\n            display: list-block;\n            border: none;\n            background: #f1f1f1;\n        }\n\n        input[type=text]:focus,\n        input[type=password]:focus {\n            background-color: #ddd;\n            outline: none;\n        }\n\n        / Overwrite default styles of hr /\n\n        hr {\n            border: 1px solid #f1f1f1;\n            margin-bottom: 25px;\n        }\n\n        / Set a style for the submit button /\n\n        .registerbtn {\n            background-color: #04AA6D;\n            color: white;\n            padding: 16px 20px;\n            margin: 8px 0;\n            border: none;\n            cursor: pointer;\n            width: 50%;\n            opacity: 0.9;\n        }\n\n        .registerbtn:hover {\n            opacity: 1;\n        }\n\n        / Add a blue text color to links /\n\n        a {\n            color: dodgerblue;\n        }\n\n        / Set a grey background color and center the text of the "sign in" section */\n\n        .signin {\n            background-color: #f1f1f1;\n            text-align: center;\n        }\n    '
    }}
  />
  <form>
    <div className="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <label htmlFor="email">
        <b>Email</b>
      </label>
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        id="email"
        required=""
      />
      <label>
        <b>Password</b>
      </label>
      <input
        type="password"
        placeholder="Password"
        name="psw"
        id="psw"
        required=""
      />
      <hr />
      <p>
        By creating an account you agree to our{" "}
        <a href="#">Terms &amp; Privacy</a>.
      </p>
      <button
        type="button"
        id="submitData"
        name="submitData"
        className="registerbtn"
      >
        Register
      </button>
    </div>
    <div className="container signin">
      <p>
        Already have an account? <a href="#">Sign in</a>.
      </p>
    </div>
  </form>
</>
       </>
    );
}

export default Login;