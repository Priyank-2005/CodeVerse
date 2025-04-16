import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Reusing the same styling

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    } else {
      alert('Please enter your email address.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Reset Your Password</h2>
      {!submitted ? (
        <form onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Send Reset Link</button>
          <div className="auth-links">
            <Link to="/login">Back to Login</Link>
          </div>
        </form>
      ) : (
        <p>
          A password reset link has been sent to <strong>{email}</strong>. <br />
          Please check your inbox.
        </p>
      )}
    </div>
  );
}

export default ForgotPassword;
