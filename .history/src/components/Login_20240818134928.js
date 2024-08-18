import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function Login() {
  return (
    <div className="auth-background" style={{ backgroundImage: 'url(./login.jpg)' }}>
      <div className="auth-overlay"></div>
      <div className="auth-container">
        <form className="auth-form">
          <h2>Log In</h2>
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
          <p>Don't have an account? <Link to="/signup">Register</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
