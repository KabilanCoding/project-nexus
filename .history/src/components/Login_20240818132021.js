import React from 'react';
import './Auth.css';

function Login() {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Log In</h2>
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
