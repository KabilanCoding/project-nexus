import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add signup logic here
    navigate('/'); // Redirect to login after successful signup
  };

  return (
    <div className="auth-background" style={{ backgroundImage: 'url(./signup.jpg)' }}>
      <div className="auth-overlay"></div>
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
          <p>Already have an account? <Link to="/">Log In</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
