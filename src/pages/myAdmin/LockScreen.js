import React from 'react'

function LockScreen() {
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
            {/* Lock User Img */}
            <div className="lock-user">
              <img
                alt=""
                src="assets/img/profiles/avatar-02.jpg"
                className="rounded-circle"
              />
              <h4>John Doe</h4>
            </div>
            {/* /Lock User Img */}
            {/* Account Form */}
            <form action="index.html">
              <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" />
              </div>
              <div className="form-group text-center">
                <button className="btn btn-primary account-btn" type="submit">
                  Enter
                </button>
              </div>
              <div className="account-footer">
                <p>
                  Sign in as a different user? <a href="register.html">Login</a>
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

export default LockScreen