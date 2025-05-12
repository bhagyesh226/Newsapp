import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sign_up() {
  const [emailId, setEmailId] = useState("");
  const [pass, setPass] = useState("");
  const [fname, setFname] = useState("");
  const [pnum, setPnum] = useState("");
  const [submittedList, setSubmittedList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('submittedData')) || [];
    setSubmittedList(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('submittedData', JSON.stringify(submittedList));
  }, [submittedList]);

  const submit = () => {
    if (emailId === "" || pass === "" || fname === "" || pnum === "") {
      alert("Please fill in all fields.");
    } else {
      const newEntry = { name: fname, phone: pnum, email: emailId, password: pass };
      const updatedList = [...submittedList, newEntry];
      setSubmittedList(updatedList);
      setFname('');
      setPnum('');
      setEmailId('');
      setPass('');
      alert("Sign-up successful! Redirecting to login...");
      navigate('/');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'rgb(64, 192, 201)' }}>
      <div className="card shadow-lg p-4 bg-secondary" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Sign Up</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Enter name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                placeholder='Enter name'
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pnumber" className="form-label">Phone number</label>
              <input
                type="tel"
                className="form-control"
                id="pnumber"
                value={pnum}
                onChange={(e) => setPnum(e.target.value)}
                placeholder='Enter number'
              />
            </div>
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
              <button type="button" className="btn btn-primary" onClick={submit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
