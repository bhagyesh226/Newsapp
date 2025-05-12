import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import About from './components/About';
import Login from './components/Login';
import Sign_up from './components/Sign_up';
import ForgotPassword from './components/ForgotPassword';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: 'general',
      isAuthenticated: false,
    };
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  handleLogin = (email, password) => {
    const storedData = JSON.parse(localStorage.getItem('submittedData')) || [];
    const user = storedData.find(u => u.email === email && u.password === password);
    if (user) {
      this.setState({ isAuthenticated: true });
    } else {
      alert("Invalid email or password.");
    }
  };

  handleLogout = () => {
    this.setState({ isAuthenticated: false });
  };

  render() {
    const { searchQuery, isAuthenticated } = this.state;

    return (
      <Router>
        <div style={{ backgroundColor: 'rgb(64, 192, 201)' }}>
          <Navbar onSearch={this.handleSearch} onLogout={this.handleLogout} isAuthenticated={isAuthenticated} />
          <Routes>
            <Route path="/" element={
              isAuthenticated ? (
                <div className="pt-5 mt-5 text-white">
                  <News query={searchQuery} />
                </div>
              ) : (
                <div className="pt-5 mt-5 text-white">
                  <Login onLogin={this.handleLogin} />
                </div>
              )
            } />
            <Route path="/about" element={
              isAuthenticated ? (
                <div className="pt-5 mt-5 text-white">
                  <About query={searchQuery} />
                </div>
              ) : (
                <div className="pt-5 mt-5 text-white">
                  <Login onLogin={this.handleLogin} />
                </div>
              )
            } />
            
            <Route path="/sign_up" element={<div className="pt-5 mt-5 text-white"><Sign_up /></div>} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
