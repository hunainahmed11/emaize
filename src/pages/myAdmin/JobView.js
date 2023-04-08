import React from 'react'

function JobView() {
  return (


<>
  {/* Main Wrapper */}
  <div className="main-wrapper">
    {/* Header */}
    <div className="header">
      {/* Logo */}
      <div className="header-left">
        <a href="index.html" className="logo">
          <img src="assets/img/logo.png" width={40} height={40} alt="" />
        </a>
      </div>
      {/* /Logo */}
      {/* Header Title */}
      <div className="page-title-box float-left">
        <h3>Emaize Web Admin</h3>
      </div>
      {/* /Header Title */}
      {/* Header Menu */}
      <ul className="nav user-menu">
        {/* Search */}
        <li className="nav-item">
          <div className="top-nav-search">
            <a href="javascript:void(0);" className="responsive-search">
              <i className="fa fa-search" />
            </a>
            <form action="search.html">
              <input
                className="form-control"
                type="text"
                placeholder="Search here"
              />
              <button className="btn" type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
        </li>
        {/* /Search */}
        {/* Flag */}
        <li className="nav-item dropdown has-arrow flag-nav">
          <a
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="#"
            role="button"
          >
            <img src="assets/img/flags/us.png" alt="" height={20} />{" "}
            <span>English</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a href="javascript:void(0);" className="dropdown-item">
              <img src="assets/img/flags/us.png" alt="" height={16} /> English
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              <img src="assets/img/flags/fr.png" alt="" height={16} /> French
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              <img src="assets/img/flags/es.png" alt="" height={16} /> Spanish
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              <img src="assets/img/flags/de.png" alt="" height={16} /> German
            </a>
          </div>
        </li>
        {/* /Flag */}
        <li className="nav-item">
          <a className="nav-link" href="login.html">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="register.html">
            Register
          </a>
        </li>
      </ul>
      {/* /Header Menu */}
      {/* Mobile Menu */}
      <div className="dropdown mobile-user-menu">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v" />
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="login.html">
            Login
          </a>
          <a className="dropdown-item" href="register.html">
            Register
          </a>
        </div>
      </div>
      {/* /Mobile Menu */}
    </div>
    {/* /Header */}
    {/* Page Wrapper */}
    <div className="page-wrapper job-wrapper">
      {/* Page Content */}
      <div className="content container">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Jobs</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Jobs</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-8">
            <div className="job-info job-widget">
              <h3 className="job-title">Android Developer</h3>
              <span className="job-dept">App Development</span>
              <ul className="job-post-det">
                <li>
                  <i className="fa fa-calendar" /> Post Date:{" "}
                  <span className="text-blue">Feb 18, 2019</span>
                </li>
                <li>
                  <i className="fa fa-calendar" /> Last Date:{" "}
                  <span className="text-blue">May 31, 2019</span>
                </li>
                <li>
                  <i className="fa fa-user-o" /> Applications:{" "}
                  <span className="text-blue">4</span>
                </li>
                <li>
                  <i className="fa fa-eye" /> Views:{" "}
                  <span className="text-blue">3806</span>
                </li>
              </ul>
            </div>
            <div className="job-content job-widget">
              <div className="job-desc-title">
                <h4>Job Description</h4>
              </div>
              <div className="job-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </div>
              <div className="job-desc-title">
                <h4>Job Description</h4>
              </div>
              <div className="job-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
                <ul className="square-list">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="job-det-info job-widget">
              <a
                className="btn job-btn"
                href="#"
                data-toggle="modal"
                data-target="#apply_job"
              >
                Apply For This Job
              </a>
              <div className="info-list">
                <span>
                  <i className="fa fa-bar-chart" />
                </span>
                <h5>Job Type</h5>
                <p> Full Time</p>
              </div>
              <div className="info-list">
                <span>
                  <i className="fa fa-money" />
                </span>
                <h5>Salary</h5>
                <p>$32k - $38k</p>
              </div>
              <div className="info-list">
                <span>
                  <i className="fa fa-suitcase" />
                </span>
                <h5>Experience</h5>
                <p>2 Years</p>
              </div>
              <div className="info-list">
                <span>
                  <i className="fa fa-ticket" />
                </span>
                <h5>Vacancy</h5>
                <p>5</p>
              </div>
              <div className="info-list">
                <span>
                  <i className="fa fa-map-signs" />
                </span>
                <h5>Location</h5>
                <p>
                  {" "}
                  Emaize Web Admin
                  <br /> 3864 Quiet Valley Lane,
                  <br /> Sherman Oaks,
                  <br /> California, 91403
                </p>
              </div>
              <div className="info-list">
                <p>
                  {" "}
                  818-978-7102
                  <br /> danielporter@example.com
                  <br /> https://www.example.com
                </p>
              </div>
              <div className="info-list text-center">
                <a className="app-ends" href="#">
                  Application ends in 2d 7h 6m
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Apply Job Modal */}
      <div className="modal custom-modal fade" id="apply_job" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Your Details</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label>Upload your CV</label>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="cv_upload"
                    />
                    <label className="custom-file-label" htmlFor="cv_upload">
                      Choose file
                    </label>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Apply Job Modal */}
    </div>
    {/* /Page Wrapper */}
  </div>
  {/* /Main Wrapper */}
  {/* jQuery */}
  {/* Bootstrap Core JS */}
  {/* Custom JS */}
</>
    )
}

export default JobView