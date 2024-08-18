import React from 'react';
import './Auth.css';

function Signup() {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Sign Up</button>
        <div className="auth-options">
          <p>Or sign up with:</p>
          <button className="google-signup">Google</button>
          <button className="facebook-signup">Facebook</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
