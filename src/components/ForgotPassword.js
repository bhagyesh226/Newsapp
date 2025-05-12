import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [foundUser, setFoundUser] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const findPassword = () => {
    const storedData = JSON.parse(localStorage.getItem('submittedData')) || [];
    const user = storedData.find(u => u.email === email);

    if (user) {
      setFoundUser(user);
    } else {
      alert("Email not found.");
    }
  };

  const updatePassword = () => {
    if (!newPassword) {
      alert("Please enter a new password.");
      return;
    }

    const storedData = JSON.parse(localStorage.getItem('submittedData')) || [];
    const updatedData = storedData.map(user =>
      user.email === email ? { ...user, password: newPassword } : user
    );

    localStorage.setItem('submittedData', JSON.stringify(updatedData));
    alert("Password updated successfully!");
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'rgb(64, 192, 201)' }}>
      <div className="card shadow-lg p-4 bg-secondary" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Forgot Password</h3>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Enter your registered email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter email'
            />
          </div>
          <div className="d-grid mb-3">
            <button className="btn btn-primary" onClick={findPassword}>
              Search
            </button>
          </div>

          {foundUser && (
            <>
              <div className="mb-3">
                <label htmlFor="newPass" className="form-label">Enter New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPass"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder='New password'
                />
              </div>
              <div className="d-grid">
                <button className="btn btn-success" onClick={updatePassword}>
                  Update Password
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
