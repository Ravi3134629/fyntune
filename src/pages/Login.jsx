import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import login from "../utils/login";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
function SignUp() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (e) => {
    login(username, password).then((data) => {
      const { error, token } = data;
      if (error) {
        return alert(error);
      }
      Cookies.set("jwt-token", token);
      window.location.href = "/";
    });
  };

  const handleMouseMove = (e) => {
    console.log(e.pageX, e.pageY);

    // e.target.style.backgroundPositionX = -e.pageX + "px";
    // e.target.style.backgroundPositionY = -e.pageY + "px";
  };

  return (
    <div className="auth-page">
      <div className="auth-page-main-container">
        <div className="auth-header">
          <a href="/" className="font-bold">
            Back to fyntune
          </a>
        </div>

        <div className="auth-page-content">
          <h2>Start exploring camps from all around the world.</h2>
          <div className="auth-form">
            <div className="input-field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="johndoe_91"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <input
              type="button"
              value="Login"
              className="signup-btn"
              onClick={handleLogin}
            />
            <div className="auth-switch">
              Not have account? <a href="/signup">Signup</a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="auth-page-testimonial"
        onMouseMove={handleMouseMove}
      ></div>
    </div>
  );
}

export default SignUp;
