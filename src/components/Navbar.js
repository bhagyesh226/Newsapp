import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/imgs/NEWS2.jpg';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
  <div className="container-fluid">
    <img src={logo} alt="search" className="me-2" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
   <Link className="nav-link text-white" to="/">NEWSapp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
        <li className="nav-item">
           <Link className="nav-link text-white" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About</Link>
        </li>
              {this.props.isAuthenticated && (
                <li className="nav-item">
                  <button className="btn btn-outline-info" onClick={this.props.onLogout}>
                    Logout
                  </button>
                </li>
              )}
      </ul>
     
    </div>
  </div>
</nav>


    //   <nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
    //     <div className="container-fluid">
    //  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //   <span className="navbar-toggler-icon"></span>
    // </button>
    //       <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
           
    //         <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
    //           <li className="nav-item">
    //             <img src={logo} alt="search" className="me-2" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link text-white" to="/">NEWSapp</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link text-white" to="/">Home</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link text-white" to="/about">About</Link>
    //           </li>
    //           {this.props.isAuthenticated && (
    //             <li className="nav-item">
    //               <button className="btn btn-outline-info" onClick={this.props.onLogout}>
    //                 Logout
    //               </button>
    //             </li>
    //           )}
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    );
  }
}

export default Navbar;
