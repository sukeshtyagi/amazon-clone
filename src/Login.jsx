import React from "react";
import { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {
  const [signData, setSignData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    setSignData((signData) => {
      return {
        ...signData,
        [name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signData);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(signData);
  };

  return (
    <>
      <div className="login">
        <NavLink to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
            className="login__logo"
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
                value={signData.email}
                onChange={handleInput}
              />
            </div>
            <div className="login__signInPassword">
              <h5>Password</h5>
              <input
                type="password"
                name="password"
                value={signData.password}
                onChange={handleInput}
              />
              <button className="login__signInButton">Sign-In</button>
            </div>
          </form>
          <p>
            By signing-In you agree to Amazon's conditons of use and sale.Please
            see our Privacy Notice, our Cookies Notice and our Interest Based
            Ads
          </p>
          <button className="login__registerButton"
          onSubmit={handleRegister}>
            Create your Amazon Account
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
