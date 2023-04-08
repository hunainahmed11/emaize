import React from 'react'

function ForgotPassword() {
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
              <h3 className="account-title">Forgot Password?</h3>
              <p className="account-subtitle">
                Enter your email to get a password reset link
              </p>
              {/* Account Form */}
              <form>
                <div className="form-group">
                  <label>Email Address</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit">
                    Reset Password
                  </button>
                </div>
                <div className="account-footer">
                  <p>
                    Remember your password? <a href="login.html">Login</a>
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

export default ForgotPassword