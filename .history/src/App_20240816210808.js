import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
// In App.js
import './components/LoginSignup.css';


function App() {
  return (
    
      <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
</Routes>
      
  );
}

export default App;
