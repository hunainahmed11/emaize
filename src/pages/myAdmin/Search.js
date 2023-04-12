import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Search() {
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
      {/* Sidebar */}
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              {/* Dashoard li Side Barr */}
              <li className="submenu">
      <a href="#" onClick={toggleSubmenu}>
        <i className="la la-dashboard" /> <span> Dashboard</span>{" "}
        <span className="menu-arrow" />
      </a>
      {isSubmenuOpen && (
        <ul>
          <li>
            <Link to="/Indexx">Admin Dashboard</Link>
          </li>
          <li>
            <Link to="/EmployeeDashboard">Employee Dashboard</Link>
          </li>
        </ul>
      )}
    </li>
  






     
{/* Apps sidebar */}

              <li className="submenu">
              <a href="#" onClick={toggleSubmenuApp}>
                  <i className="la la-cube" /> <span> Apps</span>{" "}
                  <span className="menu-arrow" />
                </a>
                {isSubmenuApp && (
                  <ul>
                  <li>
                    <Link to="/ChatAdmin">Chat</Link>
                  </li>
                  <li className="submenu">
                  <a href="#" onClick={toggleSubmenuAppMenu}>
                      <span> Calls</span> <span className="menu-arrow" />
                    </a>
                    {isSubmenuAppMenu && (

                    <ul>
                      <li>
                        <Link to="/VoiceCall">Voice Call</Link>
                      </li>
                      <li>
                        <Link to="/VideoCall">Video Call</Link>
                      </li>
                      <li>
                        <Link to="/OutGoingCall">Outgoing Call</Link>
                      </li>
                      <li>
                        <Link to="/IncommingCall">Incoming Call</Link>
                      </li>
                    </ul>
                    )}

                  </li>
                  <li>
                    <Link to="/Events">Calendar</Link>
                  </li>
                  <li>
                    <Link to="/Contacts">Contacts</Link>
                  </li>
                  <li>
                    <Link to="/Inboxx">Email</Link>
                  </li>
                  <li>
                    <Link to="/FileManager">File Manager</Link>
                  </li>
                </ul>
                )}
              </li>
              <li className="menu-title">
                <span>Employees</span>
              </li>
              <li className="submenu">
                <a href="#" className="noti-dot" onClick={toggleSubmenuEmployee}>
                  <i className="la la-user" /> <span> Employees</span>{" "}
                  <span className="menu-arrow" />
                </a>
                {isSubmenuEmployee && (
                <ul>
                  <li>
                    <Link to="Employeez">All Employees</Link>
                  </li>
                  <li>
                    <Link to="/Holiday">Holidays</Link>
                  </li>
                  <li>
                    <Link to="/Leaves">
                      Leaves (Admin){" "}
                      <span className="badge badge-pill bg-primary float-right">
                        1
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/LeavesEmployee">Leaves (Employee)</Link>
                  </li>
                  <li>
                    <Link to="/LeaveSettings">Leave Settings</Link>
                  </li>
                  <li>
                    <Link to="/AttendanceAdmin">Attendance (Admin)</Link>
                  </li>
                  <li>
                    <Link to="/AttendanceEmployee">Attendance (Employee)</Link>
                  </li>
                  <li>
                    <Link to="/DepartmentAdmin">Departments</Link>
                  </li>
                  <li>
                    <Link to="/Designation">Designations</Link>
                  </li>
                  <li>
                    <Link to="/TimeSheet">Timesheet</Link>
                  </li>
                  <li>
                    <Link to="/Overtime">Overtime</Link>
                  </li>
                </ul>
                )}
              </li>
              <li>
                <Link to="/Clientsz">
                  <i className="la la-users" /> <span>Clients</span>
                </Link>
              </li>
              <li className="submenu">
                <a href="#" onClick={toggleSubmenuProject}>
                  <i className="la la-rocket" /> <span> Projects</span>{" "}
                  <span className="menu-arrow" />
                </a>
                {isSubmenuProject && (
                <ul>
                  <li>
                    <Link to="/Projectsz">Projects</Link>
                  </li>
                  <li>
                  <Link to="/Taskz">Tasks</Link>
                  </li>
                  <li>
                  <Link to="/TaskBoard">Task Board</Link>
                  </li>
                </ul>
                )}
              </li>
              <li>
                <Link to="/Leads">
                  <i className="la la-user-secret" /> <span>Leads</span>
                </Link>
              </li>
              <li>
                <Link to="/TicketView">
                  <i className="la la-ticket" /> <span>Tickets</span>
                </Link>
              </li>
              <li className="menu-title">
                <span>HR</span>
              </li>
              <li className="submenu">
                <a href="#" onClick={toggleSubmenuAccounts}>
                  <i className="la la-files-o" /> <span> Accounts </span>{" "}
                  <span className="menu-arrow" />
                </a>
                {isSubmenuAccounts && (
                <ul>
                  <li>
                    <Link to="/Estimates">Estimates</Link>
                  </li>
                  <li>
                    <Link to="/Invoicesz">Invoices</Link>
                  </li>
                  <li>
                  <Link to="/Paymentsz">Payments</Link>
                  </li>
                  <li>
                  <Link to="/Expenses">Expenses</Link>
                  </li>
                  <li>
                    <Link to="/ProvidentFund">Provident Fund</Link>
                  </li>
                  <li>
                    <Link to="/Taxes">Taxes</Link>
                  </li>
                </ul>
                )}
              </li>
              <li className="submenu">
                <a href="#" onClick={toggleSubmenuPayroll} >
                  <i className="la la-money" /> <span> Payroll </span>{" "}
                  <span className="menu-arrow" />
                </a>
                {isSubmenuProject && (
                <ul>
                  <li>
                    <Link to="/Salary"> Employee Salary </Link>
                  </li>
                  <li>
                    <Link to="/SalarySettings"> Payslip </Link>
                  </li>
                  <li>
                    <Link to="/PayrollItems"> Payroll Items </Link>
                  </li>
                </ul>
                )}
              </li>
              <li>
                <Link to="/Policies">
                  <i className="la la-file-pdf-o" /> <span>Policies</span>
                </Link>
              </li>
              <li className="submenu">
                <a href="#" onClick={toggleSubmenuReports}>
                  <i className="la la-pie-chart" /> <span> Reports </span>{" "}
                  <span className="menu-arrow" />
                </a>
                {isSubmenuProject && (
                <ul>
                  <li>
                    <Link to="/ExpenseReports"> Expense Report </Link>
                  </li>
                  <li>
                  <Link to="/InvoiceReports"> Invoice Report </Link>
                  </li>
                </ul>
                )}
              </li>
              <li className="menu-title">
                <span>Performance</span>
              </li>
              <li className="submenu">
                <a href="#" onClick={toggleSubmenuPerformance}>
                  <i className="la la-graduation-cap" />{" "}
                  <span> Performance </span> <span className="menu-arrow" />
                </a>
                {isSubmenuProject && (
                <ul>
                  <li>
                  <Link to="/PerformanceIndicator">
                      {" "}
                      Performance Indicator{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/Performance"> Performance Review </Link>
                  </li>
                  <li>
                    <Link to="/PerformanceAppraisal">
                      {" "}
                      Performance Appraisal{" "}
                    </Link>
                  </li>
                </ul>
                )}
              </li>
              <li className="submenu">
                <a href="#" onClick={toggleSubmenuGoals}>
                  <i className="la la-crosshairs" /> <span> Goals </span>{" "}
                  <span className="menu-arrow" />
                </a>
                {isSubmenuGoals && (
                <ul>
                  <li>
                    <Link to="/GoalTracking"> Goal List </Link>
                  </li>
                  <li>
                    <Link to="/GoalType"> Goal Type </Link>
                  </li>
                </ul>
                )}
              </li>
              <li className="submenu">
                <a href="#" onClick={toggleSubmenuTraining}>
                  <i className="la la-edit" /> <span> Training </span>{" "}
                  <span className="menu-arrow" />
                </a>
                {isSubmenuTraining && (
                <ul>
                  <li>
                  <Link to="/Training"> Training List </Link>
                  </li>
                  <li>
                  <Link to="/Trainers"> Trainers</Link>
                  </li>
                  <li>
                    <Link to="/TrainingType"> Training Type </Link>
                  </li>
                </ul>
                )}
              </li>
              <li>
                <Link to="/Promotion">
                  <i className="la la-bullhorn" /> <span>Promotion</span>
                </Link>
              </li>
              <li>
                <Link to="/Resignation">
                  <i className="la la-external-link-square" />{" "}
                  <span>Resignation</span>
                </Link>
              </li>
              <li>
                <Link to="/Termination">
                  <i className="la la-times-circle" /> <span>Termination</span>
                </Link>
              </li>
              <li className="menu-title">
                <span>Administration</span>
              </li>
              <li>
                <Link to="Assets">
                  <i className="la la-object-ungroup" /> <span>Assets</span>
                </Link>
              </li>
              <li className="submenu">
                <a href="#" onClick={toggleSubmenuJobs}>
                  <i className="la la-briefcase" /> <span> Jobs </span>{" "}
                  <span className="menu-arrow" />
                </a>
                {isSubmenuJobs && (
                <ul>
                  <li>
                    <Link to="/Jobsz"> Manage Jobs </Link>
                  </li>
                  <li>
                    <Link to="/JobApplicants"> Applied Candidates </Link>
                  </li>
                </ul>
                )}
              </li>
              <li>
                <Link to="/knowledgeBase">
                  <i className="la la-question" /> <span>Knowledgebase</span>
                </Link>
              </li>
              <li className="active">
                <Link to="/Activities">
                  <i className="la la-bell" /> <span>Activities</span>
                </Link>
              </li>
              <li>
                <Link to="/Usersz">
                  <i className="la la-user-plus" /> <span>Users</span>
                </Link>
              </li>
              <li>
                <Link to="/Settingsz">
                  <i className="la la-cog" /> <span>Settings</span>
                </Link>
              </li>
              <li className="menu-title">
                <span>Pages</span>
              </li>
              <li className="submenu">
                <a href="#" onClick={toggleSubmenuProfile}>
                  <i className="la la-user" /> <span> Profile </span>{" "}
                  <span className="menu-arrow" />
                </a>
                {isSubmenuProfile && (
                <ul>
                  <li>
                    <Link to="/Profilee"> Employee Profile </Link>
                  </li>
                  <li>
                    <Link to="/ClientProfile"> Client Profile </Link>
                  </li>
                </ul>
                )}
              </li>
              <li className="submenu">
                <a href="#" onClick={toggleSubmenuAuthentication}>
                  <i className="la la-key" /> <span> Authentication </span>{" "}
                  <span className="menu-arrow" />
                </a>
                {isSubmenuAuthentication && (
                <ul>
                  <li>
                    <Link to="/LogIn"> Login </Link>
                  </li>
                  <li>
                    <Link to="/Register"> Register </Link>
                  </li>
                  <li>
                    <Link to="/ForgotPassword"> Forgot Password </Link>
                  </li>
                  <li>
                    <Link to="/OTP"> OTP </Link>
                  </li>
                  <li>
                    <Link to="/LockScreen"> Lock Screen </Link>
                  </li>
                </ul>
                )}
              </li>
              <li className="submenu">
                <a href="#" onClick={toggleSubmenuErrorPages}>
                  <i className="la la-exclamation-triangle" />{" "}
                  <span> Error Pages </span> <span className="menu-arrow" />
                </a>
                {isSubmenuErrorPages && (
                <ul>
                  <li>
                    <Link to="/Errorz404">404 Error </Link>
                  </li>
                  <li>
                    <Link to="/Errorz500">500 Error </Link>
                  </li>
                </ul>
                )}
              </li>
              <li className="submenu">
                <a href="#" onClick={toggleSubmenuSubscriptions}>
                  <i className="la la-hand-o-up" /> <span> Subscriptions </span>{" "}
                  <span className="menu-arrow" />
                </a>
                {isSubmenuSubscriptions && (
                <ul>
                  <li>
                    <Link to="/Subscriptions"> Subscriptions (Admin) </Link>
                  </li>
                  <li>
                    <Link to="/SubscriptionsCompany">
                      {" "}
                      Subscriptions (Company){" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/SubscribedCompanies"> Subscribed Companies</Link>
                  </li>
                </ul>
                )}
              </li>
              <li className="submenu">
                <a href="#" onClick={toggleSubmenuPages} >
                  <i className="la la-columns" /> <span> Pages </span>{" "}
                  <span className="menu-arrow" />
                </a>
            {isSubmenuPages && (
                <ul>
                  <li>
                    <Link to="/Search"> Search </Link>
                  </li>
                  <li>
                    <Link to="/FAQs"> FAQ </Link>
                  </li>
                  <li>
                  <Link to="/Terms"> Terms </Link>
                  </li>
                  <li>
                  <Link to="/PrivacyPolicy"> Privacy Policy </Link>
                  </li>
                  <li>
                  <Link to="/BlankPage"> Blank Page </Link>
                  </li>
                </ul>
                )}
              </li>
              <li className="menu-title">
                <span>UI Interface</span>
              </li>
              <li>
              <Link to="/Components">
                  <i className="la la-puzzle-piece" /> <span>Components</span>
                </Link>
              </li>
              <li className="submenu" onClick={toggleSubmenuForms}>
                <a href="#" >
                  <i className="la la-object-group" /> <span> Forms </span>{" "}
                  <span className="menu-arrow" />
                </a>
                {isSubmenuForms && (
                <ul>
                  <li>
                    <Link to="/FormBasicInputs">Basic Inputs </Link>
                  </li>
                  <li>
                  <Link to="/FormInputGroups">Input Groups </Link>
                  </li>
                  <li>
                    <Link to="/FormHorizontal">Horizontal Form </Link>
                  </li>
                  <li>
                    <Link to="/FormVertical"> Vertical Form </Link>
                  </li>
                  <li>
                    <Link to="FormMask"> Form Mask </Link>
                  </li>
                  <li>
                    <Link to="/FormValidation"> Form Validation </Link>
                  </li>
                </ul>
                )}
              </li>
              <li className="submenu">
                <a href="#" onClick={toggleSubmenuTables}>
                  <i className="la la-table" /> <span> Tables </span>{" "}
                  <span className="menu-arrow" />
                </a>
                {isSubmenuTables && (
                <ul>
                  <li>
                    <Link to="TablesBasic">Basic Tables </Link>
                  </li>
                  <li>
                    <Link to="/DataTables">Data Table </Link>
                  </li>
                </ul>
                )}
              </li>
              <li className="menu-title">
                <span>Extras</span>
              </li>
              <li>
                <a href="#">
                  <i className="la la-file-text" /> <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i className="la la-info" /> <span>Change Log</span>{" "}
                  <span className="badge badge-primary ml-auto">v3.4</span>
                </a>
              </li>
              <li className="submenu">
                <a href="javascript:void(0);">
                  <i className="la la-share-alt" /> <span>Multi Level</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      {" "}
                      <span>Level 1</span> <span className="menu-arrow" />
                    </a>
                    <ul style={{ display: "none" }}>
                      <li>
                        <a href="javascript:void(0);">
                          <span>Level 2</span>
                        </a>
                      </li>
                      <li className="submenu">
                        <a href="javascript:void(0);">
                          {" "}
                          <span> Level 2</span> <span className="menu-arrow" />
                        </a>
                        <ul style={{ display: "none" }}>
                          <li>
                            <a href="javascript:void(0);">Level 3</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Level 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          {" "}
                          <span>Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      {" "}
                      <span>Level 1</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    {/* /Sidebar */}
    {/* Page Wrapper */}
    <div className="page-wrapper">
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Search</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Search</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Content Starts */}
        <div className="row">
          <div className="col-12">
            {/* Search Form */}
            <div className="main-search">
              <form action="#">
                <div className="input-group">
                  <input type="text" className="form-control" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* /Search Form */}
            <div className="search-result">
              <h3>
                Search Result Found For: <u>Keyword</u>
              </h3>
              <p>215 Results found</p>
            </div>
            <div className="search-lists">
              <ul className="nav nav-tabs nav-tabs-solid">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#results_projects"
                    data-toggle="tab"
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#results_clients"
                    data-toggle="tab"
                  >
                    Clients
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#results_users"
                    data-toggle="tab"
                  >
                    Users
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane show active" id="results_projects">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="dropdown dropdown-action profile-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                          <h4 className="project-title">
                            <a href="project-view.html">Office Management</a>
                          </h4>
                          <small className="block text-ellipsis m-b-15">
                            <span className="text-xs">1</span>{" "}
                            <span className="text-muted">open tasks, </span>
                            <span className="text-xs">9</span>{" "}
                            <span className="text-muted">tasks completed</span>
                          </small>
                          <p className="text-muted">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a
                            galley of type and scrambled it...
                          </p>
                          <div className="pro-deadline m-b-15">
                            <div className="sub-title">Deadline:</div>
                            <div className="text-muted">17 Apr 2019</div>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Jeffery Lalor"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-16.jpg"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Team :</div>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="John Doe"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-02.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Richard Miles"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-09.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="John Smith"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-10.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Mike Litorus"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-05.jpg"
                                  />
                                </a>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <a
                                  href="#"
                                  className="all-users dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  +15
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-02.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-09.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-10.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-05.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-11.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-12.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-13.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-01.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-16.jpg"
                                      />
                                    </a>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Previous"
                                        >
                                          <span aria-hidden="true">«</span>
                                          <span className="sr-only">
                                            Previous
                                          </span>
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          1
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          2
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Next"
                                        >
                                          <span aria-hidden="true">»</span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <p className="m-b-5">
                            Progress{" "}
                            <span className="text-success float-right">
                              40%
                            </span>
                          </p>
                          <div className="progress progress-xs mb-0">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              data-toggle="tooltip"
                              title="40%"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="dropdown dropdown-action profile-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                          <h4 className="project-title">
                            <a href="project-view.html">Project Management</a>
                          </h4>
                          <small className="block text-ellipsis m-b-15">
                            <span className="text-xs">2</span>{" "}
                            <span className="text-muted">open tasks, </span>
                            <span className="text-xs">5</span>{" "}
                            <span className="text-muted">tasks completed</span>
                          </small>
                          <p className="text-muted">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a
                            galley of type and scrambled it...
                          </p>
                          <div className="pro-deadline m-b-15">
                            <div className="sub-title">Deadline:</div>
                            <div className="text-muted">17 Apr 2019</div>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Jeffery Lalor"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-16.jpg"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Team :</div>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="John Doe"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-02.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Richard Miles"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-09.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="John Smith"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-10.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Mike Litorus"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-05.jpg"
                                  />
                                </a>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <a
                                  href="#"
                                  className="all-users dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  +15
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-02.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-09.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-10.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-05.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-11.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-12.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-13.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-01.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-16.jpg"
                                      />
                                    </a>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Previous"
                                        >
                                          <span aria-hidden="true">«</span>
                                          <span className="sr-only">
                                            Previous
                                          </span>
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          1
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          2
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Next"
                                        >
                                          <span aria-hidden="true">»</span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <p className="m-b-5">
                            Progress{" "}
                            <span className="text-success float-right">
                              40%
                            </span>
                          </p>
                          <div className="progress progress-xs mb-0">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              data-toggle="tooltip"
                              title="40%"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="dropdown dropdown-action profile-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                          <h4 className="project-title">
                            <a href="project-view.html">Video Calling App</a>
                          </h4>
                          <small className="block text-ellipsis m-b-15">
                            <span className="text-xs">3</span>{" "}
                            <span className="text-muted">open tasks, </span>
                            <span className="text-xs">3</span>{" "}
                            <span className="text-muted">tasks completed</span>
                          </small>
                          <p className="text-muted">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a
                            galley of type and scrambled it...
                          </p>
                          <div className="pro-deadline m-b-15">
                            <div className="sub-title">Deadline:</div>
                            <div className="text-muted">17 Apr 2019</div>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Jeffery Lalor"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-16.jpg"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Team :</div>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="John Doe"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-02.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Richard Miles"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-09.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="John Smith"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-10.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Mike Litorus"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-05.jpg"
                                  />
                                </a>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <a
                                  href="#"
                                  className="all-users dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  +15
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-02.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-09.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-10.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-05.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-11.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-12.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-13.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-01.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-16.jpg"
                                      />
                                    </a>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Previous"
                                        >
                                          <span aria-hidden="true">«</span>
                                          <span className="sr-only">
                                            Previous
                                          </span>
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          1
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          2
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Next"
                                        >
                                          <span aria-hidden="true">»</span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <p className="m-b-5">
                            Progress{" "}
                            <span className="text-success float-right">
                              40%
                            </span>
                          </p>
                          <div className="progress progress-xs mb-0">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              data-toggle="tooltip"
                              title="40%"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="dropdown dropdown-action profile-action">
                            <a
                              href="#"
                              className="action-icon dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="material-icons">more_vert</i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#edit_project"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_project"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                          <h4 className="project-title">
                            <a href="project-view.html">
                              Hospital Administration
                            </a>
                          </h4>
                          <small className="block text-ellipsis m-b-15">
                            <span className="text-xs">12</span>{" "}
                            <span className="text-muted">open tasks, </span>
                            <span className="text-xs">4</span>{" "}
                            <span className="text-muted">tasks completed</span>
                          </small>
                          <p className="text-muted">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a
                            galley of type and scrambled it...
                          </p>
                          <div className="pro-deadline m-b-15">
                            <div className="sub-title">Deadline:</div>
                            <div className="text-muted">17 Apr 2019</div>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Jeffery Lalor"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-16.jpg"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Team :</div>
                            <ul className="team-members">
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="John Doe"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-02.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Richard Miles"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-09.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="John Smith"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-10.jpg"
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-toggle="tooltip"
                                  title="Mike Litorus"
                                >
                                  <img
                                    alt=""
                                    src="assets/img/profiles/avatar-05.jpg"
                                  />
                                </a>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <a
                                  href="#"
                                  className="all-users dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  +15
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-02.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-09.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-10.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-05.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-11.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-12.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-13.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-01.jpg"
                                      />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src="assets/img/profiles/avatar-16.jpg"
                                      />
                                    </a>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Previous"
                                        >
                                          <span aria-hidden="true">«</span>
                                          <span className="sr-only">
                                            Previous
                                          </span>
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          1
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          2
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Next"
                                        >
                                          <span aria-hidden="true">»</span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <p className="m-b-5">
                            Progress{" "}
                            <span className="text-success float-right">
                              40%
                            </span>
                          </p>
                          <div className="progress progress-xs mb-0">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              data-toggle="tooltip"
                              title="40%"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="results_clients">
                  <div className="row staff-grid-row">
                    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a href="client-profile.html" className="avatar">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-19.jpg"
                            />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_client"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_client"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile.html">Global Technologies</a>
                        </h4>
                        <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile.html">Barry Cuda</a>
                        </h5>
                        <div className="small text-muted">CEO</div>
                        <a
                          href="chat.html"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          Message
                        </a>
                        <a
                          href="client-profile.html"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a href="client-profile.html" className="avatar">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-29.jpg"
                            />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_client"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_client"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile.html">Delta Infotech</a>
                        </h4>
                        <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile.html">Tressa Wexler</a>
                        </h5>
                        <div className="small text-muted">Manager</div>
                        <a
                          href="chat.html"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          Message
                        </a>
                        <a
                          href="client-profile.html"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a href="client-profile.html" className="avatar">
                            <img
                              src="assets/img/profiles/avatar-07.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_client"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_client"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile.html">Cream Inc</a>
                        </h4>
                        <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile.html">Ruby Bartlett</a>
                        </h5>
                        <div className="small text-muted">CEO</div>
                        <a
                          href="chat.html"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          Message
                        </a>
                        <a
                          href="client-profile.html"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a href="client-profile.html" className="avatar">
                            <img
                              src="assets/img/profiles/avatar-06.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_client"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_client"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile.html">Wellware Company</a>
                        </h4>
                        <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile.html">Misty Tison</a>
                        </h5>
                        <div className="small text-muted">CEO</div>
                        <a
                          href="chat.html"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          Message
                        </a>
                        <a
                          href="client-profile.html"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a href="client-profile.html" className="avatar">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-14.jpg"
                            />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_client"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_client"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile.html">Mustang Technologies</a>
                        </h4>
                        <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile.html">Daniel Deacon</a>
                        </h5>
                        <div className="small text-muted">CEO</div>
                        <a
                          href="chat.html"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          Message
                        </a>
                        <a
                          href="client-profile.html"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a href="client-profile.html" className="avatar">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-18.jpg"
                            />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_client"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_client"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile.html">
                            International Software Inc
                          </a>
                        </h4>
                        <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile.html">Walter Weaver</a>
                        </h5>
                        <div className="small text-muted">CEO</div>
                        <a
                          href="chat.html"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          Message
                        </a>
                        <a
                          href="client-profile.html"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a href="client-profile.html" className="avatar">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-28.jpg"
                            />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_client"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_client"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile.html">Mercury Software Inc</a>
                        </h4>
                        <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile.html">Amanda Warren</a>
                        </h5>
                        <div className="small text-muted">CEO</div>
                        <a
                          href="chat.html"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          Message
                        </a>
                        <a
                          href="client-profile.html"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                      <div className="profile-widget">
                        <div className="profile-img">
                          <a href="client-profile.html" className="avatar">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-13.jpg"
                            />
                          </a>
                        </div>
                        <div className="dropdown profile-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="material-icons">more_vert</i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#edit_client"
                            >
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_client"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                        <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile.html">Carlson Tech</a>
                        </h4>
                        <h5 className="user-name m-t-10 mb-0 text-ellipsis">
                          <a href="client-profile.html">Betty Carlson</a>
                        </h5>
                        <div className="small text-muted">CEO</div>
                        <a
                          href="chat.html"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          Message
                        </a>
                        <a
                          href="client-profile.html"
                          className="btn btn-white btn-sm m-t-10"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="results_users">
                  <div className="table-responsive">
                    <table className="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Company</th>
                          <th>Created Date</th>
                          <th>Role</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar">
                                <img
                                  src="assets/img/profiles/avatar-21.jpg"
                                  alt=""
                                />
                              </a>
                              <a href="profile.html">
                                Daniel Porter <span>Admin</span>
                              </a>
                            </h2>
                          </td>
                          <td>danielporter@example.com</td>
                          <td>Emaize Web Admin</td>
                          <td>1 Jan 2013</td>
                          <td>
                            <span className="badge bg-inverse-danger">
                              Admin
                            </span>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_user"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_user"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-02.jpg"
                                />
                              </a>
                              <a href="profile.html">
                                John Doe <span>Web Designer</span>
                              </a>
                            </h2>
                          </td>
                          <td>johndoe@example.com</td>
                          <td>Emaize Web Admin</td>
                          <td>1 Jan 2013</td>
                          <td>
                            <span className="badge bg-inverse-success">
                              Employee
                            </span>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_user"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_user"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-09.jpg"
                                />
                              </a>
                              <a href="profile.html">
                                Richard Miles <span>Admin</span>
                              </a>
                            </h2>
                          </td>
                          <td>richardmiles@example.com</td>
                          <td>Emaize Web Admin</td>
                          <td>1 Jan 2013</td>
                          <td>
                            <span className="badge bg-inverse-success">
                              Employee
                            </span>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_user"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_user"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-10.jpg"
                                />
                              </a>
                              <a href="profile.html">
                                John Smith <span>Android Developer</span>
                              </a>
                            </h2>
                          </td>
                          <td>johnsmith@example.com</td>
                          <td>Emaize Web Admin</td>
                          <td>1 Jan 2013</td>
                          <td>
                            <span className="badge bg-inverse-success">
                              Employee
                            </span>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_user"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_user"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-05.jpg"
                                />
                              </a>
                              <a href="profile.html">
                                Mike Litorus <span>IOS Developer</span>
                              </a>
                            </h2>
                          </td>
                          <td>mikelitorus@example.com</td>
                          <td>Emaize Web Admin</td>
                          <td>1 Jan 2013</td>
                          <td>
                            <span className="badge bg-inverse-success">
                              Employee
                            </span>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_user"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_user"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-11.jpg"
                                />
                              </a>
                              <a href="profile.html">
                                Wilmer Deluna <span>Team Leader</span>
                              </a>
                            </h2>
                          </td>
                          <td>wilmerdeluna@example.com</td>
                          <td>Emaize Web Admin</td>
                          <td>1 Jan 2013</td>
                          <td>
                            <span className="badge bg-inverse-success">
                              Employee
                            </span>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_user"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_user"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar">
                                <img
                                  src="assets/img/profiles/avatar-19.jpg"
                                  alt=""
                                />
                              </a>
                              <a href="profile.html">
                                Barry Cuda <span>Global Technologies</span>
                              </a>
                            </h2>
                          </td>
                          <td>barrycuda@example.com</td>
                          <td>Global Technologies</td>
                          <td>1 Jan 2013</td>
                          <td>
                            <span className="badge bg-inverse-info">
                              Client
                            </span>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#edit_user"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_user"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Content End */}
      </div>
      {/* /Page Content */}
    </div>
    {/* /Page Wrapper */}
  </div>
  {/* /Main Wrapper */}
  {/* jQuery */}
  {/* Bootstrap Core JS */}
  {/* Slimscroll JS */}
  {/* Custom JS */}
</>

    )
}

export default Search