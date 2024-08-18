importReact, { useState } from'react';
import'./Signup.css';

functionSignup() {
  const [error, setError] = useState('');

  consthandleSubmit = (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const confirmPassword = event.target[2].value;

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    setError('');
    // Proceed with the signup process
  };

  return (
    <divclassName="signup-container"><h2>Signup</h2><form onSubmit={handleSubmit}><input type="text" placeholder="Username" required /><input type="password" placeholder="Password" required /><input type="password" placeholder="Confirm Password" required /><button type="submit">Signup</button></form>
      {error && <pclassName="error">{error}</p>}
    </div>
  );
}

exportdefaultSignup;
