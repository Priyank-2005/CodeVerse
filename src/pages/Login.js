import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
};

export default Login;
