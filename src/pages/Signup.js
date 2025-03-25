import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Signup = () => {
  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Signup;
