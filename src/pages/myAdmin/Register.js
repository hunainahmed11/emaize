import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register() {
  
  return (
<>
  {/* Main Wrapper */}
  <div className="main-wrapper">
    <div className="account-content">
      <a href="job-list.html" className="btn btn-primary apply-btn">
        Apply Job
      </a>
      <div className="container">
        {/* Account Logo */}
        <div className="account-logo">
          <a href="index.html">
            <img src="assets/img/logo2.png" alt="Emaize Web Admin" />
          </a>
        </div>
        {/* /Account Logo */}
        <div className="account-box">
          <div className="account-wrapper">
            <h3 className="account-title">Register</h3>
            <p className="account-subtitle">Access to our dashboard</p>
            {/* Account Form */}
            <form action="index.html">
              <div className="form-group">
                <label>Email</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" />
              </div>
              <div className="form-group">
                <label>Repeat Password</label>
                <input className="form-control" type="password" />
              </div>
              <div className="form-group text-center">
                <button className="btn btn-primary account-btn" type="submit">
                  Register
                </button>
              </div>
              <div className="account-footer">
                <p>
                  Already have an account? <a href="login.html">Login</a>
                </p>
              </div>
            </form>
            {/* /Account Form */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Main Wrapper */}
  {/* jQuery */}
  {/* Bootstrap Core JS */}
  {/* Custom JS */}
</>

    )
}

export default Register