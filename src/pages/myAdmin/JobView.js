import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function JobView() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const [isSubmenuApp, setIsSubmenuApp] = useState(false);

  const toggleSubmenuApp = () => {
    setIsSubmenuApp(!isSubmenuApp);
  };

  const [isSubmenuAppMenu, setIsSubmenuAppMenu] = useState(false);

  const toggleSubmenuAppMenu = () => {
    setIsSubmenuAppMenu(!isSubmenuAppMenu);
  };

  const [isSubmenuEmployee, setIsSubmenuEmployee] = useState(false);

  const toggleSubmenuEmployee = () => {
    setIsSubmenuEmployee(!isSubmenuEmployee);
  };

  const [isSubmenuProject, setIsSubmenuProject] = useState(false);

  const toggleSubmenuProject = () => {
    setIsSubmenuProject(!isSubmenuProject);
  };

  const [isSubmenuAccounts, setIsSubmenuAccounts] = useState(false);

  const toggleSubmenuAccounts = () => {
    setIsSubmenuAccounts(!isSubmenuAccounts);
  };
  const [isSubmenuPayroll, setIsSubmenuPayroll] = useState(false);

  const toggleSubmenuPayroll = () => {
    setIsSubmenuPayroll(!isSubmenuAccounts);
  };

  const [isSubmenuReports, setIsSubmenuReports] = useState(false);

  const toggleSubmenuReports = () => {
    setIsSubmenuReports(!isSubmenuReports);
  };

  const [isSubmenuPerformance, setIsSubmenuPerformance] = useState(false);

  const toggleSubmenuPerformance = () => {
    setIsSubmenuPerformance(!isSubmenuPerformance);
  };
  const [isSubmenuGoals, setIsSubmenuGoals] = useState(false);

  const toggleSubmenuGoals = () => {
    setIsSubmenuGoals(!isSubmenuGoals);
  };
  const [isSubmenuTraining, setIsSubmenuTraining] = useState(false);

  const toggleSubmenuTraining = () => {
    setIsSubmenuTraining(!isSubmenuTraining);
  };

  const [isSubmenuJobs, setIsSubmenuJobs] = useState(false);

  const toggleSubmenuJobs = () => {
    setIsSubmenuJobs(!isSubmenuJobs);
  };

  const [isSubmenuProfile, setIsSubmenuProfile] = useState(false);

  const toggleSubmenuProfile = () => {
    setIsSubmenuProfile(!isSubmenuProfile);
  };
  const [isSubmenuAuthentication, setIsSubmenuAuthentication] = useState(false);

  const toggleSubmenuAuthentication = () => {
    setIsSubmenuAuthentication(!isSubmenuAuthentication);
  };
  const [isSubmenuErrorPages, setIsSubmenuErrorPages] = useState(false);

  const toggleSubmenuErrorPages= () => {
    setIsSubmenuErrorPages(!isSubmenuErrorPages);
  };

  const [isSubmenuSubscriptions, setIsSubmenuSubscriptions] = useState(false);

  const toggleSubmenuSubscriptions= () => {
    setIsSubmenuSubscriptions(!isSubmenuSubscriptions);
  };

  const [isSubmenuPages, setIsSubmenuPages] = useState(false);

  const toggleSubmenuPages= () => {
    setIsSubmenuPages(!isSubmenuPages);
  };
  const [isSubmenuForms, setIsSubmenuForms] = useState(false);

  const toggleSubmenuForms= () => {
    setIsSubmenuForms(!isSubmenuForms);
  };
  const [isSubmenuTables, setIsSubmenuTables] = useState(false);

  const toggleSubmenuTables= () => {
    setIsSubmenuTables(!isSubmenuTables);
  };

// header

  const [isCollap, setIsCollap] = useState(true);
  

  const handleToggl = () => {
    setIsCollap(!isCollap);
  };

  const [isCollapsed, setIsCollapsed] = useState(true);
  

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  const [isColla, setIsColla] = useState(true);
  

  const handleTogg = () => {
    setIsColla(!isColla);
  };
  const [isColl, setIsColl] = useState(true);
  

  const handleTo = () => {
    setIsColl(!isColl);
  };
  return (


<>
  {/* Main Wrapper */}
  <div className="main-wrapper">
    {/* Header */}
    <div className="header">
        {/* Logo */}
        <div className="header-left">
          <Link to="/Indexx" className="logo">
            <img src="assets/img/logo.png" width={40} height={40} alt="" />
          </Link>
        </div>
        {/* /Logo */}
        <a id="toggle_btn" href="javascript:void(0);">
          <span className="bar-icon">
            <span/>
            <span/>
            <span/>
          </span>
        </a>
        {/* Header Title */}
        <div className="page-title-box">
          <h3>Emaize Web Admin</h3>
        </div>
        {/* /Header Title */}
        <a id="mobile_btn" className="mobile_btn" href="#sidebar">
          <i className="fa fa-bars" />
        </a>
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
          <li className={isCollap ? "collapsed" : ""} >
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              onClick={handleToggl}
            >
              <img src="assets/img/flags/us.png" alt="" height={20} />{" "}
              <span>English</span>
            </a>
            <div className={`sub-menu ${isCollap ? "collapse" : "show"}`}>
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
          {/* Notifications */}
          <li className={isCollapsed ? "collapsed" : ""}>
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
              onClick={handleToggle}
            >
              <i className="fa fa-bell-o" />{" "}
              <span className="badge badge-pill">3</span>
            </a>
            <div className={`sub-menu ${isCollapsed ? "collapse" : "show"}`}>
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <Link to="/Activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">John Doe</span> added new
                            task{" "}
                            <span className="noti-title">
                              Patient appointment booking
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">4 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                  <Link to="/Activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-03.jpg" />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Tarah Shropshire</span>{" "}
                            changed the task name{" "}
                            <span className="noti-title">
                              Appointment booking with payment gateway
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">6 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                  <Link to="/Activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-06.jpg" />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Misty Tison</span> added{" "}
                            <span className="noti-title">Domenic Houston</span>{" "}
                            and <span className="noti-title">Claire Mapes</span>{" "}
                            to project{" "}
                            <span className="noti-title">
                              Doctor available module
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">8 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                  <Link to="/Activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-17.jpg" />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Rolland Webber</span>{" "}
                            completed task{" "}
                            <span className="noti-title">
                              Patient and Doctor video conferencing
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">12 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                  <Link to="/Activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-13.jpg" />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Bernardo Galaviz</span>{" "}
                            added new task{" "}
                            <span className="noti-title">
                              Private chat module
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">2 days ago</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
              <Link to="/Activities">View all Notifications</Link>
              </div>
            </div>
          </li>
          {/* /Notifications */}
          {/* Message Notifications */}
          {/* <li className="nav-item dropdown"> */}
          <li cclassName={isColla ? "collapsed" : ""}>
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
              onClick={handleTogg}
            >
              <i className="fa fa-comment-o" />{" "}
              <span className="badge badge-pill">8</span>
            </a>
            {/* <div className="dropdown-menu notifications"> */}
            <div className={`sub-menu ${isColla ? "collapse" : "show"}`}>
              <div className="topnav-dropdown-header">
                <span className="notification-title">Messages</span>
                <a href="javascript:void(0)" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <Link to="/ChatAdmin">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src="assets/img/profiles/avatar-09.jpg" />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                  <Link to="/ChatAdmin">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">John Doe</span>
                          <span className="message-time">6 Mar</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                  <Link to="/ChatAdmin">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src="assets/img/profiles/avatar-03.jpg" />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Tarah Shropshire{" "}
                          </span>
                          <span className="message-time">5 Mar</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                  <Link to="/ChatAdmin">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src="assets/img/profiles/avatar-05.jpg" />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Mike Litorus</span>
                          <span className="message-time">3 Mar</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                  <Link to="/ChatAdmin">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src="assets/img/profiles/avatar-08.jpg" />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Catherine Manseau{" "}
                          </span>
                          <span className="message-time">27 Feb</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
              <Link to="/ChatAdmin">View all Messages</Link>
              </div>
            </div>
          </li>
          {/* /Message Notifications */}
          <li className={isColl ? "collapsed" : ""}>
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
              onClick={handleTo}
            >
              <span className="user-img">
                <img src="assets/img/profiles/avatar-21.jpg" alt="" />
                <span className="status online" />
              </span>
              <span>Admin</span>
            </a>
            <div className={`sub-menu ${isColl ? "collapse" : "show"}`} >
              <Link className="dropdown-item" to="/Profilee">
                My Profile
              </Link>
              <Link className="dropdown-item" to="/Settingsz">
                Settings
              </Link>
              <Link className="dropdown-item" to="/logIn">
                Logout
              </Link>
            </div>
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
            <Link className="dropdown-item" to="/Profilee">
              My Profile
            </Link>
            <Link className="dropdown-item" to="/Settingsz">
              Settings
            </Link>
            <Link className="dropdown-item" href="logIn">
              Logout
            </Link>
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
                  <Link to="/Indexx">Dashboard</Link>
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