import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Profilee() {
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
              <h3 className="page-title">Profile</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Profile</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="card mb-0">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="profile-view">
                  <div className="profile-img-wrap">
                    <div className="profile-img">
                      <a href="#">
                        <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                      </a>
                    </div>
                  </div>
                  <div className="profile-basic">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="profile-info-left">
                          <h3 className="user-name m-t-0 mb-0">John Doe</h3>
                          <h6 className="text-muted">UI/UX Design Team</h6>
                          <small className="text-muted">Web Designer</small>
                          <div className="staff-id">Employee ID : FT-0001</div>
                          <div className="small doj text-muted">
                            Date of Join : 1st Jan 2013
                          </div>
                          <div className="staff-msg">
                            <a className="btn btn-custom" href="chat.html">
                              Send Message
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <ul className="personal-info">
                          <li>
                            <div className="title">Phone:</div>
                            <div className="text">
                              <a href="">9876543210</a>
                            </div>
                          </li>
                          <li>
                            <div className="title">Email:</div>
                            <div className="text">
                              <a href="">johndoe@example.com</a>
                            </div>
                          </li>
                          <li>
                            <div className="title">Birthday:</div>
                            <div className="text">24th July</div>
                          </li>
                          <li>
                            <div className="title">Address:</div>
                            <div className="text">
                              1861 Bayonne Ave, Manchester Township, NJ, 08759
                            </div>
                          </li>
                          <li>
                            <div className="title">Gender:</div>
                            <div className="text">Male</div>
                          </li>
                          <li>
                            <div className="title">Reports to:</div>
                            <div className="text">
                              <div className="avatar-box">
                                <div className="avatar avatar-xs">
                                  <img
                                    src="assets/img/profiles/avatar-16.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <a href="profile.html">Jeffery Lalor</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pro-edit">
                    <a
                      data-target="#profile_info"
                      data-toggle="modal"
                      className="edit-icon"
                      href="#"
                    >
                      <i className="fa fa-pencil" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card tab-box">
          <div className="row user-tabs">
            <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
              <ul className="nav nav-tabs nav-tabs-bottom">
                <li className="nav-item">
                  <a
                    href="#emp_profile"
                    data-toggle="tab"
                    className="nav-link active"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#emp_projects"
                    data-toggle="tab"
                    className="nav-link"
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#bank_statutory"
                    data-toggle="tab"
                    className="nav-link"
                  >
                    Bank &amp; Statutory{" "}
                    <small className="text-danger">(Admin Only)</small>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content">
          {/* Profile Info Tab */}
          <div
            id="emp_profile"
            className="pro-overview tab-pane fade show active"
          >
            <div className="row">
              <div className="col-md-6 d-flex">
                <div className="card profile-box flex-fill">
                  <div className="card-body">
                    <h3 className="card-title">
                      Personal Informations{" "}
                      <a
                        href="#"
                        className="edit-icon"
                        data-toggle="modal"
                        data-target="#personal_info_modal"
                      >
                        <i className="fa fa-pencil" />
                      </a>
                    </h3>
                    <ul className="personal-info">
                      <li>
                        <div className="title">Passport No.</div>
                        <div className="text">9876543210</div>
                      </li>
                      <li>
                        <div className="title">Passport Exp Date.</div>
                        <div className="text">9876543210</div>
                      </li>
                      <li>
                        <div className="title">Tel</div>
                        <div className="text">
                          <a href="">9876543210</a>
                        </div>
                      </li>
                      <li>
                        <div className="title">Nationality</div>
                        <div className="text">Indian</div>
                      </li>
                      <li>
                        <div className="title">Religion</div>
                        <div className="text">Christian</div>
                      </li>
                      <li>
                        <div className="title">Marital status</div>
                        <div className="text">Married</div>
                      </li>
                      <li>
                        <div className="title">Employment of spouse</div>
                        <div className="text">No</div>
                      </li>
                      <li>
                        <div className="title">No. of children</div>
                        <div className="text">2</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div className="card profile-box flex-fill">
                  <div className="card-body">
                    <h3 className="card-title">
                      Emergency Contact{" "}
                      <a
                        href="#"
                        className="edit-icon"
                        data-toggle="modal"
                        data-target="#emergency_contact_modal"
                      >
                        <i className="fa fa-pencil" />
                      </a>
                    </h3>
                    <h5 className="section-title">Primary</h5>
                    <ul className="personal-info">
                      <li>
                        <div className="title">Name</div>
                        <div className="text">John Doe</div>
                      </li>
                      <li>
                        <div className="title">Relationship</div>
                        <div className="text">Father</div>
                      </li>
                      <li>
                        <div className="title">Phone </div>
                        <div className="text">9876543210, 9876543210</div>
                      </li>
                    </ul>
                    <hr />
                    <h5 className="section-title">Secondary</h5>
                    <ul className="personal-info">
                      <li>
                        <div className="title">Name</div>
                        <div className="text">Karen Wills</div>
                      </li>
                      <li>
                        <div className="title">Relationship</div>
                        <div className="text">Brother</div>
                      </li>
                      <li>
                        <div className="title">Phone </div>
                        <div className="text">9876543210, 9876543210</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 d-flex">
                <div className="card profile-box flex-fill">
                  <div className="card-body">
                    <h3 className="card-title">Bank information</h3>
                    <ul className="personal-info">
                      <li>
                        <div className="title">Bank name</div>
                        <div className="text">ICICI Bank</div>
                      </li>
                      <li>
                        <div className="title">Bank account No.</div>
                        <div className="text">159843014641</div>
                      </li>
                      <li>
                        <div className="title">IFSC Code</div>
                        <div className="text">ICI24504</div>
                      </li>
                      <li>
                        <div className="title">PAN No</div>
                        <div className="text">TC000Y56</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div className="card profile-box flex-fill">
                  <div className="card-body">
                    <h3 className="card-title">
                      Family Informations{" "}
                      <a
                        href="#"
                        className="edit-icon"
                        data-toggle="modal"
                        data-target="#family_info_modal"
                      >
                        <i className="fa fa-pencil" />
                      </a>
                    </h3>
                    <div className="table-responsive">
                      <table className="table table-nowrap">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Relationship</th>
                            <th>Date of Birth</th>
                            <th>Phone</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Leo</td>
                            <td>Brother</td>
                            <td>Feb 16th, 2019</td>
                            <td>9876543210</td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a
                                  aria-expanded="false"
                                  data-toggle="dropdown"
                                  className="action-icon dropdown-toggle"
                                  href="#"
                                >
                                  <i className="material-icons">more_vert</i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item">
                                    <i className="fa fa-pencil m-r-5" /> Edit
                                  </a>
                                  <a href="#" className="dropdown-item">
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
            <div className="row">
              <div className="col-md-6 d-flex">
                <div className="card profile-box flex-fill">
                  <div className="card-body">
                    <h3 className="card-title">
                      Education Informations{" "}
                      <a
                        href="#"
                        className="edit-icon"
                        data-toggle="modal"
                        data-target="#education_info"
                      >
                        <i className="fa fa-pencil" />
                      </a>
                    </h3>
                    <div className="experience-box">
                      <ul className="experience-list">
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <a href="#/" className="name">
                                International College of Arts and Science (UG)
                              </a>
                              <div>Bsc Computer Science</div>
                              <span className="time">2000 - 2003</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <a href="#/" className="name">
                                International College of Arts and Science (PG)
                              </a>
                              <div>Msc Computer Science</div>
                              <span className="time">2000 - 2003</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div className="card profile-box flex-fill">
                  <div className="card-body">
                    <h3 className="card-title">
                      Experience{" "}
                      <a
                        href="#"
                        className="edit-icon"
                        data-toggle="modal"
                        data-target="#experience_info"
                      >
                        <i className="fa fa-pencil" />
                      </a>
                    </h3>
                    <div className="experience-box">
                      <ul className="experience-list">
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <a href="#/" className="name">
                                Web Designer at Zen Corporation
                              </a>
                              <span className="time">
                                Jan 2013 - Present (5 years 2 months)
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <a href="#/" className="name">
                                Web Designer at Ron-tech
                              </a>
                              <span className="time">
                                Jan 2013 - Present (5 years 2 months)
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <a href="#/" className="name">
                                Web Designer at Dalt Technology
                              </a>
                              <span className="time">
                                Jan 2013 - Present (5 years 2 months)
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Profile Info Tab */}
          {/* Projects Tab */}
          <div className="tab-pane fade" id="emp_projects">
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown profile-action">
                      <a
                        aria-expanded="false"
                        data-toggle="dropdown"
                        className="action-icon dropdown-toggle"
                        href="#"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          data-target="#edit_project"
                          data-toggle="modal"
                          href="#"
                          className="dropdown-item"
                        >
                          <i className="fa fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          data-target="#delete_project"
                          data-toggle="modal"
                          href="#"
                          className="dropdown-item"
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
                          <a href="#" data-toggle="tooltip" title="John Doe">
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
                          <a href="#" data-toggle="tooltip" title="John Smith">
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
                        <li>
                          <a href="#" className="all-users">
                            +15
                          </a>
                        </li>
                      </ul>
                    </div>
                    <p className="m-b-5">
                      Progress{" "}
                      <span className="text-success float-right">40%</span>
                    </p>
                    <div className="progress progress-xs mb-0">
                      <div
                        style={{ width: "40%" }}
                        title=""
                        data-toggle="tooltip"
                        role="progressbar"
                        className="progress-bar bg-success"
                        data-original-title="40%"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown profile-action">
                      <a
                        aria-expanded="false"
                        data-toggle="dropdown"
                        className="action-icon dropdown-toggle"
                        href="#"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          data-target="#edit_project"
                          data-toggle="modal"
                          href="#"
                          className="dropdown-item"
                        >
                          <i className="fa fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          data-target="#delete_project"
                          data-toggle="modal"
                          href="#"
                          className="dropdown-item"
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
                          <a href="#" data-toggle="tooltip" title="John Doe">
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
                          <a href="#" data-toggle="tooltip" title="John Smith">
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
                        <li>
                          <a href="#" className="all-users">
                            +15
                          </a>
                        </li>
                      </ul>
                    </div>
                    <p className="m-b-5">
                      Progress{" "}
                      <span className="text-success float-right">40%</span>
                    </p>
                    <div className="progress progress-xs mb-0">
                      <div
                        style={{ width: "40%" }}
                        title=""
                        data-toggle="tooltip"
                        role="progressbar"
                        className="progress-bar bg-success"
                        data-original-title="40%"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown profile-action">
                      <a
                        aria-expanded="false"
                        data-toggle="dropdown"
                        className="action-icon dropdown-toggle"
                        href="#"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          data-target="#edit_project"
                          data-toggle="modal"
                          href="#"
                          className="dropdown-item"
                        >
                          <i className="fa fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          data-target="#delete_project"
                          data-toggle="modal"
                          href="#"
                          className="dropdown-item"
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
                          <a href="#" data-toggle="tooltip" title="John Doe">
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
                          <a href="#" data-toggle="tooltip" title="John Smith">
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
                        <li>
                          <a href="#" className="all-users">
                            +15
                          </a>
                        </li>
                      </ul>
                    </div>
                    <p className="m-b-5">
                      Progress{" "}
                      <span className="text-success float-right">40%</span>
                    </p>
                    <div className="progress progress-xs mb-0">
                      <div
                        style={{ width: "40%" }}
                        title=""
                        data-toggle="tooltip"
                        role="progressbar"
                        className="progress-bar bg-success"
                        data-original-title="40%"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown profile-action">
                      <a
                        aria-expanded="false"
                        data-toggle="dropdown"
                        className="action-icon dropdown-toggle"
                        href="#"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          data-target="#edit_project"
                          data-toggle="modal"
                          href="#"
                          className="dropdown-item"
                        >
                          <i className="fa fa-pencil m-r-5" /> Edit
                        </a>
                        <a
                          data-target="#delete_project"
                          data-toggle="modal"
                          href="#"
                          className="dropdown-item"
                        >
                          <i className="fa fa-trash-o m-r-5" /> Delete
                        </a>
                      </div>
                    </div>
                    <h4 className="project-title">
                      <a href="project-view.html">Hospital Administration</a>
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
                          <a href="#" data-toggle="tooltip" title="John Doe">
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
                          <a href="#" data-toggle="tooltip" title="John Smith">
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
                        <li>
                          <a href="#" className="all-users">
                            +15
                          </a>
                        </li>
                      </ul>
                    </div>
                    <p className="m-b-5">
                      Progress{" "}
                      <span className="text-success float-right">40%</span>
                    </p>
                    <div className="progress progress-xs mb-0">
                      <div
                        style={{ width: "40%" }}
                        title=""
                        data-toggle="tooltip"
                        role="progressbar"
                        className="progress-bar bg-success"
                        data-original-title="40%"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Projects Tab */}
          {/* Bank Statutory Tab */}
          <div className="tab-pane fade" id="bank_statutory">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title"> Basic Salary Information</h3>
                <form>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">
                          Salary basis <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select salary basis type</option>
                          <option>Hourly</option>
                          <option>Daily</option>
                          <option>Weekly</option>
                          <option>Monthly</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">
                          Salary amount{" "}
                          <small className="text-muted">per month</small>
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Type your salary amount"
                            defaultValue={0.0}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Payment type</label>
                        <select className="select">
                          <option>Select payment type</option>
                          <option>Bank transfer</option>
                          <option>Check</option>
                          <option>Cash</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <h3 className="card-title"> PF Information</h3>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">
                          PF contribution
                        </label>
                        <select className="select">
                          <option>Select PF contribution</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">
                          PF No. <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select PF contribution</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">
                          Employee PF rate
                        </label>
                        <select className="select">
                          <option>Select PF contribution</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">
                          Additional rate <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select additional rate</option>
                          <option>0%</option>
                          <option>1%</option>
                          <option>2%</option>
                          <option>3%</option>
                          <option>4%</option>
                          <option>5%</option>
                          <option>6%</option>
                          <option>7%</option>
                          <option>8%</option>
                          <option>9%</option>
                          <option>10%</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Total rate</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="N/A"
                          defaultValue="11%"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">
                          Employee PF rate
                        </label>
                        <select className="select">
                          <option>Select PF contribution</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">
                          Additional rate <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select additional rate</option>
                          <option>0%</option>
                          <option>1%</option>
                          <option>2%</option>
                          <option>3%</option>
                          <option>4%</option>
                          <option>5%</option>
                          <option>6%</option>
                          <option>7%</option>
                          <option>8%</option>
                          <option>9%</option>
                          <option>10%</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Total rate</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="N/A"
                          defaultValue="11%"
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <h3 className="card-title"> ESI Information</h3>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">
                          ESI contribution
                        </label>
                        <select className="select">
                          <option>Select ESI contribution</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">
                          ESI No. <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select ESI contribution</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">
                          Employee ESI rate
                        </label>
                        <select className="select">
                          <option>Select ESI contribution</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">
                          Additional rate <span className="text-danger">*</span>
                        </label>
                        <select className="select">
                          <option>Select additional rate</option>
                          <option>0%</option>
                          <option>1%</option>
                          <option>2%</option>
                          <option>3%</option>
                          <option>4%</option>
                          <option>5%</option>
                          <option>6%</option>
                          <option>7%</option>
                          <option>8%</option>
                          <option>9%</option>
                          <option>10%</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Total rate</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="N/A"
                          defaultValue="11%"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button
                      className="btn btn-primary submit-btn"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Bank Statutory Tab */}
        </div>
      </div>
      {/* /Page Content */}
      {/* Profile Modal */}
      <div id="profile_info" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Profile Information</h5>
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
                <div className="row">
                  <div className="col-md-12">
                    <div className="profile-img-wrap edit-img">
                      <img
                        className="inline-block"
                        src="assets/img/profiles/avatar-02.jpg"
                        alt="user"
                      />
                      <div className="fileupload btn">
                        <span className="btn-text">edit</span>
                        <input className="upload" type="file" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="John"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Doe"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Birth Date</label>
                          <div className="cal-icon">
                            <input
                              className="form-control datetimepicker"
                              type="text"
                              defaultValue="05/06/1985"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Gender</label>
                          <select className="select form-control">
                            <option value="male selected">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="4487 Snowbird Lane"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>State</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="New York"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Country</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="United States"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Pin Code</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={10523}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="631-889-3206"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Department <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select Department</option>
                        <option>Web Development</option>
                        <option>IT Management</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Designation <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select Designation</option>
                        <option>Web Designer</option>
                        <option>Web Developer</option>
                        <option>Android Developer</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Reports To <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>-</option>
                        <option>Wilmer Deluna</option>
                        <option>Lesley Grauer</option>
                        <option>Jeffery Lalor</option>
                      </select>
                    </div>
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
      {/* /Profile Modal */}
      {/* Personal Info Modal */}
      <div
        id="personal_info_modal"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Personal Information</h5>
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
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Passport No</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Passport Expiry Date</label>
                      <div className="cal-icon">
                        <input
                          className="form-control datetimepicker"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Tel</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Nationality <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Religion</label>
                      <div className="cal-icon">
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Marital status <span className="text-danger">*</span>
                      </label>
                      <select className="select form-control">
                        <option>-</option>
                        <option>Single</option>
                        <option>Married</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Employment of spouse</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>No. of children </label>
                      <input className="form-control" type="text" />
                    </div>
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
      {/* /Personal Info Modal */}
      {/* Family Info Modal */}
      <div
        id="family_info_modal"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Family Informations</h5>
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
                <div className="form-scroll">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">
                        Family Member{" "}
                        <a href="javascript:void(0);" className="delete-icon">
                          <i className="fa fa-trash-o" />
                        </a>
                      </h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Name <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Relationship{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Date of birth{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Phone <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">
                        Education Informations{" "}
                        <a href="javascript:void(0);" className="delete-icon">
                          <i className="fa fa-trash-o" />
                        </a>
                      </h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Name <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Relationship{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Date of birth{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>
                              Phone <span className="text-danger">*</span>
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="add-more">
                        <a href="javascript:void(0);">
                          <i className="fa fa-plus-circle" /> Add More
                        </a>
                      </div>
                    </div>
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
      {/* /Family Info Modal */}
      {/* Emergency Contact Modal */}
      <div
        id="emergency_contact_modal"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Personal Information</h5>
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
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Primary Contact</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Name <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Relationship <span className="text-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Phone <span className="text-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone 2</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Primary Contact</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Name <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Relationship <span className="text-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Phone <span className="text-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone 2</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
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
      {/* /Emergency Contact Modal */}
      {/* Education Modal */}
      <div
        id="education_info"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Education Informations</h5>
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
                <div className="form-scroll">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">
                        Education Informations{" "}
                        <a href="javascript:void(0);" className="delete-icon">
                          <i className="fa fa-trash-o" />
                        </a>
                      </h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <input
                              type="text"
                              defaultValue="Oxford University"
                              className="form-control floating"
                            />
                            <label className="focus-label">Institution</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <input
                              type="text"
                              defaultValue="Computer Science"
                              className="form-control floating"
                            />
                            <label className="focus-label">Subject</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <div className="cal-icon">
                              <input
                                type="text"
                                defaultValue="01/06/2002"
                                className="form-control floating datetimepicker"
                              />
                            </div>
                            <label className="focus-label">Starting Date</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <div className="cal-icon">
                              <input
                                type="text"
                                defaultValue="31/05/2006"
                                className="form-control floating datetimepicker"
                              />
                            </div>
                            <label className="focus-label">Complete Date</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <input
                              type="text"
                              defaultValue="BE Computer Science"
                              className="form-control floating"
                            />
                            <label className="focus-label">Degree</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <input
                              type="text"
                              defaultValue="Grade A"
                              className="form-control floating"
                            />
                            <label className="focus-label">Grade</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">
                        Education Informations{" "}
                        <a href="javascript:void(0);" className="delete-icon">
                          <i className="fa fa-trash-o" />
                        </a>
                      </h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <input
                              type="text"
                              defaultValue="Oxford University"
                              className="form-control floating"
                            />
                            <label className="focus-label">Institution</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <input
                              type="text"
                              defaultValue="Computer Science"
                              className="form-control floating"
                            />
                            <label className="focus-label">Subject</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <div className="cal-icon">
                              <input
                                type="text"
                                defaultValue="01/06/2002"
                                className="form-control floating datetimepicker"
                              />
                            </div>
                            <label className="focus-label">Starting Date</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <div className="cal-icon">
                              <input
                                type="text"
                                defaultValue="31/05/2006"
                                className="form-control floating datetimepicker"
                              />
                            </div>
                            <label className="focus-label">Complete Date</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <input
                              type="text"
                              defaultValue="BE Computer Science"
                              className="form-control floating"
                            />
                            <label className="focus-label">Degree</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <input
                              type="text"
                              defaultValue="Grade A"
                              className="form-control floating"
                            />
                            <label className="focus-label">Grade</label>
                          </div>
                        </div>
                      </div>
                      <div className="add-more">
                        <a href="javascript:void(0);">
                          <i className="fa fa-plus-circle" /> Add More
                        </a>
                      </div>
                    </div>
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
      {/* /Education Modal */}
      {/* Experience Modal */}
      <div
        id="experience_info"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Experience Informations</h5>
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
                <div className="form-scroll">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">
                        Experience Informations{" "}
                        <a href="javascript:void(0);" className="delete-icon">
                          <i className="fa fa-trash-o" />
                        </a>
                      </h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input
                              type="text"
                              className="form-control floating"
                              defaultValue="Digital Devlopment Inc"
                            />
                            <label className="focus-label">Company Name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input
                              type="text"
                              className="form-control floating"
                              defaultValue="United States"
                            />
                            <label className="focus-label">Location</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input
                              type="text"
                              className="form-control floating"
                              defaultValue="Web Developer"
                            />
                            <label className="focus-label">Job Position</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <div className="cal-icon">
                              <input
                                type="text"
                                className="form-control floating datetimepicker"
                                defaultValue="01/07/2007"
                              />
                            </div>
                            <label className="focus-label">Period From</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <div className="cal-icon">
                              <input
                                type="text"
                                className="form-control floating datetimepicker"
                                defaultValue="08/06/2018"
                              />
                            </div>
                            <label className="focus-label">Period To</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">
                        Experience Informations{" "}
                        <a href="javascript:void(0);" className="delete-icon">
                          <i className="fa fa-trash-o" />
                        </a>
                      </h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input
                              type="text"
                              className="form-control floating"
                              defaultValue="Digital Devlopment Inc"
                            />
                            <label className="focus-label">Company Name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input
                              type="text"
                              className="form-control floating"
                              defaultValue="United States"
                            />
                            <label className="focus-label">Location</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input
                              type="text"
                              className="form-control floating"
                              defaultValue="Web Developer"
                            />
                            <label className="focus-label">Job Position</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <div className="cal-icon">
                              <input
                                type="text"
                                className="form-control floating datetimepicker"
                                defaultValue="01/07/2007"
                              />
                            </div>
                            <label className="focus-label">Period From</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <div className="cal-icon">
                              <input
                                type="text"
                                className="form-control floating datetimepicker"
                                defaultValue="08/06/2018"
                              />
                            </div>
                            <label className="focus-label">Period To</label>
                          </div>
                        </div>
                      </div>
                      <div className="add-more">
                        <a href="javascript:void(0);">
                          <i className="fa fa-plus-circle" /> Add More
                        </a>
                      </div>
                    </div>
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
      {/* /Experience Modal */}
    </div>
    {/* /Page Wrapper */}
  </div>
  {/* /Main Wrapper */}
  {/* jQuery */}
  {/* Bootstrap Core JS */}
  {/* Slimscroll JS */}
  {/* Select2 JS */}
  {/* Datetimepicker JS */}
  {/* Tagsinput JS */}
  {/* Custom JS */}
</>
    )
}

export default Profilee