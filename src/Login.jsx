import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputData);
    const url = "http://localhost:3001/users";
    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);

      data.map((item) => {
        if (
          item.email === inputData.email &&
          item.password === inputData.password
        ) {
          navigate("/");
        }
      });
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  const handleRegister = async () => {
    const url = "http://localhost:3001/users";
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(inputData),
    };
    try {
      let response = await fetch(url, payload);
      let data = await response.json();
      if (data !== null || data !== undefined) {
        navigate("/");
      }
    } catch (error) {
      console.log("Error uploading user data:", error);
    }
  };

  return (
    <div className="login">
      <NavLink to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
          className="login__logo"
          alt="Amazon Logo"
        />
      </NavLink>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form onSubmit={handleSubmit}>
          <div className="login__signInEmail">
            <h5>Email</h5>
            <input
              type="text"
              name="email"
              value={inputData.email}
              onChange={handleInput}
            />
          </div>
          <div className="login__signInPassword">
            <h5>Password</h5>
            <input
              type="password"
              name="password"
              value={inputData.password}
              onChange={handleInput}
            />
            <button className="login__signInButton" type="submit">
              Sign-In
            </button>
          </div>
        </form>
        <p>
          By signing-In you agree to Amazon's conditions of use and sale. Please
          see our Privacy Notice, our Cookies Notice, and our Interest Based
          Ads.
        </p>
        <button className="login__registerButton" onClick={handleRegister}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;