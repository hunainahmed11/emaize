import React from 'react'

function OTP() {
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
            <h3 className="account-title">OTP</h3>
            <p className="account-subtitle">Verification your account</p>
            {/* Account Form */}
            <form action="index.html">
              <div className="otp-wrap">
                <input
                  type="text"
                  placeholder={0}
                  maxLength={1}
                  className="otp-input"
                />
                <input
                  type="text"
                  placeholder={0}
                  maxLength={1}
                  className="otp-input"
                />
                <input
                  type="text"
                  placeholder={0}
                  maxLength={1}
                  className="otp-input"
                />
                <input
                  type="text"
                  placeholder={0}
                  maxLength={1}
                  className="otp-input"
                />
              </div>
              <div className="form-group text-center">
                <button className="btn btn-primary account-btn" type="submit">
                  Enter
                </button>
              </div>
              <div className="account-footer">
                <p>
                  Not yet received? <a href="javascript:void(0);">Resend OTP</a>
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

export default OTP