importReactfrom'react';
import'./Login.css';

functionLogin() {
  return (
    <divclassName="login-container"><h2>Login</h2><form><input type="text" placeholder="Username" required /><input type="password" placeholder="Password" required /><button type="submit">Login</button></form></div>
  );
}

exportdefaultLogin;
