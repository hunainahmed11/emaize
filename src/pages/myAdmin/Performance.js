import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Performance() {
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
              <h3 className="page-title">Performance</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Performance</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <section className="review-section information">
          <div className="review-header text-center">
            <h3 className="review-title">Employee Basic Information</h3>
            <p className="text-muted">Lorem ipsum dollar</p>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="table-responsive">
                <table className="table table-bordered table-nowrap review-table mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <form>
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="depart3">Department</label>
                            <input
                              type="text"
                              className="form-control"
                              id="depart3"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="departa">Designation</label>
                            <input
                              type="text"
                              className="form-control"
                              id="departa"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="qualif">Qualification: </label>
                            <input
                              type="text"
                              className="form-control"
                              id="qualif"
                            />
                          </div>
                        </form>
                      </td>
                      <td>
                        <form>
                          <div className="form-group">
                            <label htmlFor="doj">Emp ID</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="DGT-009"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="doj">Date of Join</label>
                            <input
                              type="text"
                              className="form-control"
                              id="doj"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="doc">Date of Confirmation</label>
                            <input
                              type="text"
                              className="form-control"
                              id="doc"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="qualif1">
                              Previous years of Exp
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="qualif1"
                            />
                          </div>
                        </form>
                      </td>
                      <td>
                        <form>
                          <div className="form-group">
                            <label htmlFor="name1"> RO's Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name1"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="depart1"> RO Designation: </label>
                            <input
                              type="text"
                              className="form-control"
                              id="depart1"
                            />
                          </div>
                        </form>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="review-section professional-excellence">
          <div className="review-header text-center">
            <h3 className="review-title">Professional Excellence</h3>
            <p className="text-muted">Lorem ipsum dollar</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered review-table mb-0">
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}>#</th>
                      <th>Key Result Area</th>
                      <th>Key Performance Indicators</th>
                      <th>Weightage</th>
                      <th>
                        Percentage achieved <br />( self Score )
                      </th>
                      <th>
                        Points Scored <br />( self )
                      </th>
                      <th>
                        Percentage achieved <br />( RO's Score )
                      </th>
                      <th>
                        Points Scored <br />( RO )
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowSpan={2}>1</td>
                      <td rowSpan={2}>Production</td>
                      <td>Quality</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={30}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>TAT (turn around time)</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={30}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Process Improvement</td>
                      <td>PMS,New Ideas</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={10}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Team Management</td>
                      <td>Team Productivity,dynaics,attendance,attrition</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={5}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Knowledge Sharing</td>
                      <td>Sharing the knowledge for team productivity </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={5}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Reporting and Communication</td>
                      <td>Emails/Calls/Reports and Other Communication</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={5}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} className="text-center">
                        Total{" "}
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={85}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="review-section personal-excellence">
          <div className="review-header text-center">
            <h3 className="review-title">Personal Excellence</h3>
            <p className="text-muted">Lorem ipsum dollar</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered review-table mb-0">
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}>#</th>
                      <th>Personal Attributes</th>
                      <th>Key Indicators</th>
                      <th>Weightage</th>
                      <th>
                        Percentage achieved <br />( self Score )
                      </th>
                      <th>
                        Points Scored <br />( self )
                      </th>
                      <th>
                        Percentage achieved <br />( RO's Score )
                      </th>
                      <th>
                        Points Scored <br />( RO )
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowSpan={2}>1</td>
                      <td rowSpan={2}>Attendance</td>
                      <td>Planned or Unplanned Leaves</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={2}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Time Consciousness</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={2}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td rowSpan={2}>2</td>
                      <td rowSpan={2}>Attitude &amp; Behavior</td>
                      <td>Team Collaboration</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={2}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Professionalism &amp; Responsiveness</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={2}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Policy &amp; Procedures </td>
                      <td>Adherence to policies and procedures</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={2}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Initiatives</td>
                      <td>Special Efforts, Suggestions,Ideas,etc.</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={2}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Continuous Skill Improvement</td>
                      <td>
                        Preparedness to move to next level &amp; Training
                        utilization
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={3}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} className="text-center">
                        Total{" "}
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={15}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} className="text-center">
                        <b>Total Percentage(%)</b>
                      </td>
                      <td colSpan={5} className="text-center">
                        <input
                          type="text"
                          className="form-control"
                          readOnly=""
                          defaultValue={0}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={8} className="text-center">
                        <div className="grade-span">
                          <h4>Grade</h4>
                          <span className="badge bg-inverse-danger">
                            Below 65 Poor
                          </span>
                          <span className="badge bg-inverse-warning">
                            65-74 Average
                          </span>
                          <span className="badge bg-inverse-info">
                            75-84 Satisfactory
                          </span>
                          <span className="badge bg-inverse-purple">
                            85-92 Good
                          </span>
                          <span className="badge bg-inverse-success">
                            Above 92 Excellent
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="review-section">
          <div className="review-header text-center">
            <h3 className="review-title">
              Special Initiatives, Achievements, contributions if any
            </h3>
            <p className="text-muted">Lorem ipsum dollar</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table
                  className="table table-bordered table-review review-table mb-0"
                  id="table_achievements"
                >
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}>#</th>
                      <th>By Self</th>
                      <th>RO's Comment</th>
                      <th>HOD's Comment</th>
                      <th style={{ width: 64 }}>
                        <button
                          type="button"
                          className="btn btn-primary btn-add-row"
                        >
                          <i className="fa fa-plus" />
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody id="table_achievements_tbody">
                    <tr>
                      <td>1</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="review-section">
          <div className="review-header text-center">
            <h3 className="review-title">Comments on the role</h3>
            <p className="text-muted">
              alterations if any requirred like addition/deletion of
              responsibilities
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table
                  className="table table-bordered table-review review-table mb-0"
                  id="table_alterations"
                >
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}>#</th>
                      <th>By Self</th>
                      <th>RO's Comment</th>
                      <th>HOD's Comment</th>
                      <th style={{ width: 64 }}>
                        <button
                          type="button"
                          className="btn btn-primary btn-add-row"
                        >
                          <i className="fa fa-plus" />
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody id="table_alterations_tbody">
                    <tr>
                      <td>1</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="review-section">
          <div className="review-header text-center">
            <h3 className="review-title">Comments on the role</h3>
            <p className="text-muted">
              alterations if any requirred like addition/deletion of
              responsibilities
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered review-table mb-0">
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}>#</th>
                      <th>Strengths</th>
                      <th>Area's for Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="review-section">
          <div className="review-header text-center">
            <h3 className="review-title">
              Appraisee's Strengths and Areas for Improvement perceived by the
              Reporting officer
            </h3>
            <p className="text-muted">Lorem ipsum dollar</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered review-table mb-0">
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}>#</th>
                      <th>Strengths</th>
                      <th>Area's for Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="review-section">
          <div className="review-header text-center">
            <h3 className="review-title">
              Appraisee's Strengths and Areas for Improvement perceived by the
              Head of the Department
            </h3>
            <p className="text-muted">Lorem ipsum dollar</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered review-table mb-0">
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}>#</th>
                      <th>Strengths</th>
                      <th>Area's for Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="review-section">
          <div className="review-header text-center">
            <h3 className="review-title">Personal Goals</h3>
            <p className="text-muted">Lorem ipsum dollar</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered review-table mb-0">
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}>#</th>
                      <th>Goal Achieved during last year</th>
                      <th>Goal set for current year</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="review-section">
          <div className="review-header text-center">
            <h3 className="review-title">Personal Updates</h3>
            <p className="text-muted">Lorem ipsum dollar</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered review-table mb-0">
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}>#</th>
                      <th>Last Year</th>
                      <th>Yes/No</th>
                      <th>Details</th>
                      <th>Current Year</th>
                      <th>Yes/No</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Married/Engaged?</td>
                      <td>
                        <select className="form-control select">
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>Marriage Plans</td>
                      <td>
                        <select className="form-control select">
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Higher Studies/Certifications?</td>
                      <td>
                        <select className="form-control select">
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>Plans For Higher Study</td>
                      <td>
                        <select className="form-control select">
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Health Issues?</td>
                      <td>
                        <select className="form-control select">
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>Certification Plans</td>
                      <td>
                        <select className="form-control select">
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Others</td>
                      <td>
                        <select className="form-control select">
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>Others</td>
                      <td>
                        <select className="form-control select">
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="review-section">
          <div className="review-header text-center">
            <h3 className="review-title">
              Professional Goals Achieved for last year
            </h3>
            <p className="text-muted">Lorem ipsum dollar</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table
                  className="table table-bordered table-review review-table mb-0"
                  id="table_goals"
                >
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}>#</th>
                      <th>By Self</th>
                      <th>RO's Comment</th>
                      <th>HOD's Comment</th>
                      <th style={{ width: 64 }}>
                        <button
                          type="button"
                          className="btn btn-primary btn-add-row"
                        >
                          <i className="fa fa-plus" />
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody id="table_goals_tbody">
                    <tr>
                      <td>1</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="review-section">
          <div className="review-header text-center">
            <h3 className="review-title">
              Professional Goals for the forthcoming year
            </h3>
            <p className="text-muted">Lorem ipsum dollar</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table
                  className="table table-bordered table-review review-table mb-0"
                  id="table_forthcoming"
                >
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}>#</th>
                      <th>By Self</th>
                      <th>RO's Comment</th>
                      <th>HOD's Comment</th>
                      <th style={{ width: 64 }}>
                        <button
                          type="button"
                          className="btn btn-primary btn-add-row"
                        >
                          <i className="fa fa-plus" />
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody id="table_forthcoming_tbody">
                    <tr>
                      <td>1</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="review-section">
          <div className="review-header text-center">
            <h3 className="review-title">Training Requirements</h3>
            <p className="text-muted">
              if any to achieve the Performance Standard Targets completely
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table
                  className="table table-bordered table-review review-table mb-0"
                  id="table_targets"
                >
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}>#</th>
                      <th>By Self</th>
                      <th>RO's Comment</th>
                      <th>HOD's Comment</th>
                      <th style={{ width: 64 }}>
                        <button
                          type="button"
                          className="btn btn-primary btn-add-row"
                        >
                          <i className="fa fa-plus" />
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody id="table_targets_tbody">
                    <tr>
                      <td>1</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="review-section">
          <div className="review-header text-center">
            <h3 className="review-title">
              Any other general comments, observations, suggestions etc.
            </h3>
            <p className="text-muted">Lorem ipsum dollar</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table
                  className="table table-bordered table-review review-table mb-0"
                  id="general_comments"
                >
                  <thead>
                    <tr>
                      <th style={{ width: 40 }}>#</th>
                      <th>Self</th>
                      <th>RO</th>
                      <th>HOD</th>
                      <th style={{ width: 64 }}>
                        <button
                          type="button"
                          className="btn btn-primary btn-add-row"
                        >
                          <i className="fa fa-plus" />
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody id="general_comments_tbody">
                    <tr>
                      <td>1</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="review-section">
          <div className="review-header text-center">
            <h3 className="review-title">For RO's Use Only</h3>
            <p className="text-muted">Lorem ipsum dollar</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered review-table mb-0">
                  <thead>
                    <tr>
                      <th />
                      <th>Yes/No</th>
                      <th>If Yes - Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>The Team member has Work related Issues</td>
                      <td>
                        <select className="form-control select">
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>The Team member has Leave Issues</td>
                      <td>
                        <select className="form-control select">
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>The team member has Stability Issues</td>
                      <td>
                        <select className="form-control select">
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>The Team member exhibits non-supportive attitude</td>
                      <td>
                        <select className="form-control select">
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Any other points in specific to note about the team
                        member
                      </td>
                      <td>
                        <select className="form-control select">
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>Overall Comment /Performance of the team member</td>
                      <td>
                        <select className="form-control select">
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="review-section">
          <div className="review-header text-center">
            <h3 className="review-title">For HRD's Use Only</h3>
            <p className="text-muted">Lorem ipsum dollar</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered review-table mb-0">
                  <thead>
                    <tr>
                      <th>Overall Parameters</th>
                      <th>Available Points</th>
                      <th>Points Scored</th>
                      <th>RO's Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        KRAs Target Achievement Points (will be considered from
                        the overall score specified in this document by the
                        Reporting officer)
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Professional Skills Scores(RO's Points furnished in the
                        skill &amp; attitude assessment sheet will be
                        considered)
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Personal Skills Scores(RO's Points furnished in the
                        skill &amp; attitude assessment sheet will be
                        considered)
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>Special Achievements Score (HOD to furnish)</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>Overall Total Score</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered review-table mb-0">
                <thead>
                  <tr>
                    <th />
                    <th>Name</th>
                    <th>Signature</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Employee</td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>Reporting Officer</td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>HOD</td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                  </tr>
                  <tr>
                    <td>HRD</td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
    {/* /Page Wrapper */}
  </div>
  {/* /Main Wrapper */}
  {/* jQuery */}
  {/* Bootstrap Core JS */}
  {/* Slimscroll JS */}
  {/* Select2 JS */}
  {/* Custom JS */}
  {/* Add Table Row JS */}
</>

    )
}

export default Performance