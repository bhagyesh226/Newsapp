import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login(props) {
  const [emailId, setEmailId] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (emailId === "" || pass === "") {
      alert("Please enter both email and password.");
    } else {
      props.onLogin(emailId, pass);
    }
  };

  const handleSignUp = () => {
    navigate('/sign_up');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'rgb(64, 192, 201)' }}>
      <div className="card shadow-lg p-4 bg-secondary" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Login</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                placeholder='Enter email'
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder='Enter password'
              />
            </div>
              <div className="d-grid">
                <button type="button" className="btn btn-primary" onClick={handleLogin}>
                  Login
                </button>
              </div>
              <div className="text-center mt-3">
                <button className="btn btn-link text-light" onClick={handleSignUp}>
                  Don’t have an account? <strong>Sign Up</strong>
                </button>
              </div>
              <div className="text-center mt-2">
                <button className="btn btn-link text-white-50" type="button" onClick={() => navigate('/forgot-password')}>
                  Forgot Password?
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}
