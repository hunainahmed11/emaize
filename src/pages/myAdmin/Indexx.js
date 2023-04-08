import React from 'react'

function Indexx() {
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
            <h3 className="account-title">Login</h3>
            <p className="account-subtitle">Access to our dashboard</p>
            {/* Account Form */}
            <form action="home.html">
              <div className="form-group">
                <label>Email Address</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label>Password</label>
                  </div>
                  <div className="col-auto">
                    <a className="text-muted" href="forgot-password.html">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <input className="form-control" type="password" />
              </div>
              <div className="form-group text-center">
                <button className="btn btn-primary account-btn" type="submit">
                  Login
                </button>
              </div>
              <div className="account-footer" style={{ display: "none" }}>
                <p>
                  Don't have an account yet?{" "}
                  <a href="register.html">Register</a>
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

export default Indexx