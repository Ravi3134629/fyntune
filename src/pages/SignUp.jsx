import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import signup from "../utils/signup";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
function SignUp() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSignup = (e) => {
    if (name && username && password) {
      signup(name, username, password).then((data) => {
        const { error, message } = data;
        console.log(error, message);
        if (error) {
          setUsername("");
          setPassword("");
          setName("");
          return alert(message);
        }
        window.location.href = "/login";
      });
    }
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
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                id="full_name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              />
            </div>

            <div className="input-field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="johndoe_91"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="off"
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
                autoCorrect="off"
              />
            </div>

            <input
              type="button"
              value="Create an account"
              className="signup-btn"
              onClick={handleSignup}
            />
            <div className="auth-switch">
              Already a user? <a href="/login">Signin</a>
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
