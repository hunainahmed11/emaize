import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Assets() {
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
             <div className="row align-items-center">
               <div className="col">
                 <h3 className="page-title">Assets</h3>
                 <ul className="breadcrumb">
                   <li className="breadcrumb-item">
                     <a href="index.html">Dashboard</a>
                   </li>
                   <li className="breadcrumb-item active">Assets</li>
                 </ul>
               </div>
               <div className="col-auto float-right ml-auto">
                 <a
                   href="#"
                   className="btn add-btn"
                   data-toggle="modal"
                   data-target="#add_asset"
                 >
                   <i className="fa fa-plus" /> Add Asset
                 </a>
               </div>
             </div>
           </div>
           {/* /Page Header */}
           {/* Search Filter */}
           <div className="row filter-row">
             <div className="col-sm-6 col-md-3">
               <div className="form-group form-focus">
                 <input type="text" className="form-control floating" />
                 <label className="focus-label">Employee Name</label>
               </div>
             </div>
             <div className="col-sm-6 col-md-3">
               <div className="form-group form-focus select-focus">
                 <select className="select floating">
                   <option value=""> -- Select -- </option>
                   <option value={0}> Pending </option>
                   <option value={1}> Approved </option>
                   <option value={2}> Returned </option>
                 </select>
                 <label className="focus-label">Status</label>
               </div>
             </div>
             <div className="col-sm-12 col-md-4">
               <div className="row">
                 <div className="col-md-6 col-sm-6">
                   <div className="form-group form-focus">
                     <div className="cal-icon">
                       <input
                         className="form-control floating datetimepicker"
                         type="text"
                       />
                     </div>
                     <label className="focus-label">From</label>
                   </div>
                 </div>
                 <div className="col-md-6 col-sm-6">
                   <div className="form-group form-focus">
                     <div className="cal-icon">
                       <input
                         className="form-control floating datetimepicker"
                         type="text"
                       />
                     </div>
                     <label className="focus-label">To</label>
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-sm-6 col-md-2">
               <a href="#" className="btn btn-success btn-block">
                 {" "}
                 Search{" "}
               </a>
             </div>
           </div>
           {/* /Search Filter */}
           <div className="row">
             <div className="col-md-12">
               <div className="table-responsive">
                 <table className="table table-striped custom-table mb-0 datatable">
                   <thead>
                     <tr>
                       <th>Asset User</th>
                       <th>Asset Name</th>
                       <th>Asset Id</th>
                       <th>Purchase Date</th>
                       <th>Warrenty</th>
                       <th>Warrenty End</th>
                       <th>Amount</th>
                       <th className="text-center">Status</th>
                       <th className="text-right" />
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td>Richard Miles</td>
                       <td>
                         <strong>Dell Laptop</strong>
                       </td>
                       <td>#AST-0001</td>
                       <td>5 Jan 2019</td>
                       <td>12 Months</td>
                       <td>5 Jan 2019</td>
                       <td>$1215</td>
                       <td className="text-center">
                         <div className="dropdown action-label">
                           <a
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             href="#"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-danger" />{" "}
                             Pending
                           </a>
                           <div className="dropdown-menu dropdown-menu-right">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Pending
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Approved
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-info" />{" "}
                               Returned
                             </a>
                           </div>
                         </div>
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
                               data-target="#edit_asset"
                             >
                               <i className="fa fa-pencil m-r-5" /> Edit
                             </a>
                             <a
                               className="dropdown-item"
                               href="#"
                               data-toggle="modal"
                               data-target="#delete_asset"
                             >
                               <i className="fa fa-trash-o m-r-5" /> Delete
                             </a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>John Doe</td>
                       <td>
                         <strong>Seagate Harddisk</strong>
                       </td>
                       <td>#AST-0002</td>
                       <td>14 Jan 2019</td>
                       <td>12 Months</td>
                       <td>14 Jan 2019</td>
                       <td>$300</td>
                       <td className="text-center">
                         <div className="dropdown action-label">
                           <a
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             href="#"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-success" />{" "}
                             Approved
                           </a>
                           <div className="dropdown-menu dropdown-menu-right">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Pending
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Approved
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-info" />{" "}
                               Returned
                             </a>
                           </div>
                         </div>
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
                               data-target="#edit_asset"
                             >
                               <i className="fa fa-pencil m-r-5" /> Edit
                             </a>
                             <a
                               className="dropdown-item"
                               href="#"
                               data-toggle="modal"
                               data-target="#delete_asset"
                             >
                               <i className="fa fa-trash-o m-r-5" /> Delete
                             </a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>John Smith</td>
                       <td>
                         <strong>Canon Portable Printer</strong>
                       </td>
                       <td>#AST-0003</td>
                       <td>14 Jan 2019</td>
                       <td>12 Months</td>
                       <td>14 Jan 2019</td>
                       <td>$2500</td>
                       <td className="text-center">
                         <div className="dropdown action-label">
                           <a
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             href="#"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-info" />{" "}
                             Returned
                           </a>
                           <div className="dropdown-menu dropdown-menu-right">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Pending
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Approved
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-info" />{" "}
                               Returned
                             </a>
                           </div>
                         </div>
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
                               data-target="#edit_asset"
                             >
                               <i className="fa fa-pencil m-r-5" /> Edit
                             </a>
                             <a
                               className="dropdown-item"
                               href="#"
                               data-toggle="modal"
                               data-target="#delete_asset"
                             >
                               <i className="fa fa-trash-o m-r-5" /> Delete
                             </a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>Mike Litorus</td>
                       <td>
                         <strong>Dell Laptop</strong>
                       </td>
                       <td>#AST-0004</td>
                       <td>5 Jan 2019</td>
                       <td>12 Months</td>
                       <td>5 Jan 2019</td>
                       <td>$1215</td>
                       <td className="text-center">
                         <div className="dropdown action-label">
                           <a
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             href="#"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-danger" />{" "}
                             Pending
                           </a>
                           <div className="dropdown-menu dropdown-menu-right">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Pending
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Approved
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-info" />{" "}
                               Returned
                             </a>
                           </div>
                         </div>
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
                               data-target="#edit_asset"
                             >
                               <i className="fa fa-pencil m-r-5" /> Edit
                             </a>
                             <a
                               className="dropdown-item"
                               href="#"
                               data-toggle="modal"
                               data-target="#delete_asset"
                             >
                               <i className="fa fa-trash-o m-r-5" /> Delete
                             </a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>Wilmer Deluna</td>
                       <td>
                         <strong>Seagate Harddisk</strong>
                       </td>
                       <td>#AST-0005</td>
                       <td>14 Jan 2019</td>
                       <td>12 Months</td>
                       <td>14 Jan 2019</td>
                       <td>$300</td>
                       <td className="text-center">
                         <div className="dropdown action-label">
                           <a
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             href="#"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-success" />{" "}
                             Approved
                           </a>
                           <div className="dropdown-menu dropdown-menu-right">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Pending
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Approved
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-info" />{" "}
                               Returned
                             </a>
                           </div>
                         </div>
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
                               data-target="#edit_asset"
                             >
                               <i className="fa fa-pencil m-r-5" /> Edit
                             </a>
                             <a
                               className="dropdown-item"
                               href="#"
                               data-toggle="modal"
                               data-target="#delete_asset"
                             >
                               <i className="fa fa-trash-o m-r-5" /> Delete
                             </a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>Jeffrey Warden</td>
                       <td>
                         <strong>Canon Portable Printer</strong>
                       </td>
                       <td>#AST-0006</td>
                       <td>14 Jan 2019</td>
                       <td>12 Months</td>
                       <td>14 Jan 2019</td>
                       <td>$2500</td>
                       <td className="text-center">
                         <div className="dropdown action-label">
                           <a
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             href="#"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-info" />{" "}
                             Returned
                           </a>
                           <div className="dropdown-menu dropdown-menu-right">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Pending
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Approved
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-info" />{" "}
                               Returned
                             </a>
                           </div>
                         </div>
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
                               data-target="#edit_asset"
                             >
                               <i className="fa fa-pencil m-r-5" /> Edit
                             </a>
                             <a
                               className="dropdown-item"
                               href="#"
                               data-toggle="modal"
                               data-target="#delete_asset"
                             >
                               <i className="fa fa-trash-o m-r-5" /> Delete
                             </a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>Bernardo Galaviz</td>
                       <td>
                         <strong>Dell Laptop</strong>
                       </td>
                       <td>#AST-0007</td>
                       <td>5 Jan 2019</td>
                       <td>12 Months</td>
                       <td>5 Jan 2019</td>
                       <td>$1215</td>
                       <td className="text-center">
                         <div className="dropdown action-label">
                           <a
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             href="#"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-danger" />{" "}
                             Pending
                           </a>
                           <div className="dropdown-menu dropdown-menu-right">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Pending
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Approved
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-info" />{" "}
                               Returned
                             </a>
                           </div>
                         </div>
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
                               data-target="#edit_asset"
                             >
                               <i className="fa fa-pencil m-r-5" /> Edit
                             </a>
                             <a
                               className="dropdown-item"
                               href="#"
                               data-toggle="modal"
                               data-target="#delete_asset"
                             >
                               <i className="fa fa-trash-o m-r-5" /> Delete
                             </a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>Lesley Grauer</td>
                       <td>
                         <strong>Seagate Harddisk</strong>
                       </td>
                       <td>#AST-0008</td>
                       <td>14 Jan 2019</td>
                       <td>12 Months</td>
                       <td>14 Jan 2019</td>
                       <td>$300</td>
                       <td className="text-center">
                         <div className="dropdown action-label">
                           <a
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             href="#"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-success" />{" "}
                             Approved
                           </a>
                           <div className="dropdown-menu dropdown-menu-right">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Pending
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Approved
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-info" />{" "}
                               Returned
                             </a>
                           </div>
                         </div>
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
                               data-target="#edit_asset"
                             >
                               <i className="fa fa-pencil m-r-5" /> Edit
                             </a>
                             <a
                               className="dropdown-item"
                               href="#"
                               data-toggle="modal"
                               data-target="#delete_asset"
                             >
                               <i className="fa fa-trash-o m-r-5" /> Delete
                             </a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>Jeffery Lalor</td>
                       <td>
                         <strong>Canon Portable Printer</strong>
                       </td>
                       <td>#AST-0009</td>
                       <td>14 Jan 2019</td>
                       <td>12 Months</td>
                       <td>14 Jan 2019</td>
                       <td>$2500</td>
                       <td className="text-center">
                         <div className="dropdown action-label">
                           <a
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             href="#"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-info" />{" "}
                             Returned
                           </a>
                           <div className="dropdown-menu dropdown-menu-right">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Pending
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Approved
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-info" />{" "}
                               Returned
                             </a>
                           </div>
                         </div>
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
                               data-target="#edit_asset"
                             >
                               <i className="fa fa-pencil m-r-5" /> Edit
                             </a>
                             <a
                               className="dropdown-item"
                               href="#"
                               data-toggle="modal"
                               data-target="#delete_asset"
                             >
                               <i className="fa fa-trash-o m-r-5" /> Delete
                             </a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>Loren Gatlin</td>
                       <td>
                         <strong>Dell Laptop</strong>
                       </td>
                       <td>#AST-0010</td>
                       <td>5 Jan 2019</td>
                       <td>12 Months</td>
                       <td>5 Jan 2019</td>
                       <td>$1215</td>
                       <td className="text-center">
                         <div className="dropdown action-label">
                           <a
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             href="#"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-danger" />{" "}
                             Pending
                           </a>
                           <div className="dropdown-menu dropdown-menu-right">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Pending
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Approved
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-info" />{" "}
                               Returned
                             </a>
                           </div>
                         </div>
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
                               data-target="#edit_asset"
                             >
                               <i className="fa fa-pencil m-r-5" /> Edit
                             </a>
                             <a
                               className="dropdown-item"
                               href="#"
                               data-toggle="modal"
                               data-target="#delete_asset"
                             >
                               <i className="fa fa-trash-o m-r-5" /> Delete
                             </a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>Tarah Shropshire</td>
                       <td>
                         <strong>Seagate Harddisk</strong>
                       </td>
                       <td>#AST-0011</td>
                       <td>14 Jan 2019</td>
                       <td>12 Months</td>
                       <td>14 Jan 2019</td>
                       <td>$300</td>
                       <td className="text-center">
                         <div className="dropdown action-label">
                           <a
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             href="#"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-success" />{" "}
                             Approved
                           </a>
                           <div className="dropdown-menu dropdown-menu-right">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Pending
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Approved
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-info" />{" "}
                               Returned
                             </a>
                           </div>
                         </div>
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
                               data-target="#edit_asset"
                             >
                               <i className="fa fa-pencil m-r-5" /> Edit
                             </a>
                             <a
                               className="dropdown-item"
                               href="#"
                               data-toggle="modal"
                               data-target="#delete_asset"
                             >
                               <i className="fa fa-trash-o m-r-5" /> Delete
                             </a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>Catherine Manseau</td>
                       <td>
                         <strong>Canon Portable Printer</strong>
                       </td>
                       <td>#AST-0012</td>
                       <td>14 Jan 2019</td>
                       <td>12 Months</td>
                       <td>14 Jan 2019</td>
                       <td>$2500</td>
                       <td className="text-center">
                         <div className="dropdown action-label">
                           <a
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             href="#"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-info" />{" "}
                             Returned
                           </a>
                           <div className="dropdown-menu dropdown-menu-right">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Pending
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Approved
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-info" />{" "}
                               Returned
                             </a>
                           </div>
                         </div>
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
                               data-target="#edit_asset"
                             >
                               <i className="fa fa-pencil m-r-5" /> Edit
                             </a>
                             <a
                               className="dropdown-item"
                               href="#"
                               data-toggle="modal"
                               data-target="#delete_asset"
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
         {/* /Page Content */}
         {/* Add Asset Modal */}
         <div id="add_asset" className="modal custom-modal fade" role="dialog">
           <div className="modal-dialog modal-md" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Add Asset</h5>
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
                         <label>Asset Name</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Asset Id</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Purchase Date</label>
                         <input
                           className="form-control datetimepicker"
                           type="text"
                         />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Purchase From</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Manufacturer</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Model</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Serial Number</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Supplier</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Condition</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Warranty</label>
                         <input
                           className="form-control"
                           type="text"
                           placeholder="In Months"
                         />
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Value</label>
                         <input
                           placeholder="$1800"
                           className="form-control"
                           type="text"
                         />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Asset User</label>
                         <select className="select">
                           <option>John Doe</option>
                           <option>Richard Miles</option>
                         </select>
                       </div>
                     </div>
                     <div className="col-md-12">
                       <div className="form-group">
                         <label>Description</label>
                         <textarea className="form-control" defaultValue={""} />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Status</label>
                         <select className="select">
                           <option>Pending</option>
                           <option>Approved</option>
                           <option>Deployed</option>
                           <option>Damaged</option>
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
         {/* /Add Asset Modal */}
         {/* Edit Asset Modal */}
         <div id="edit_asset" className="modal custom-modal fade" role="dialog">
           <div className="modal-dialog modal-md" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Edit Asset</h5>
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
                         <label>Asset Name</label>
                         <input
                           className="form-control"
                           type="text"
                           defaultValue="Dell Laptop"
                         />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Asset Id</label>
                         <input
                           className="form-control"
                           type="text"
                           defaultValue="#AST-0001"
                           readOnly=""
                         />
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Purchase Date</label>
                         <input
                           className="form-control datetimepicker"
                           type="text"
                         />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Purchase From</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Manufacturer</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Model</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Serial Number</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Supplier</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Condition</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Warranty</label>
                         <input
                           className="form-control"
                           type="text"
                           placeholder="In Months"
                         />
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Value</label>
                         <input
                           placeholder="$1800"
                           className="form-control"
                           type="text"
                         />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Asset User</label>
                         <select className="select">
                           <option>John Doe</option>
                           <option>Richard Miles</option>
                         </select>
                       </div>
                     </div>
                     <div className="col-md-12">
                       <div className="form-group">
                         <label>Description</label>
                         <textarea className="form-control" defaultValue={""} />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Status</label>
                         <select className="select">
                           <option>Pending</option>
                           <option>Approved</option>
                           <option>Deployed</option>
                           <option>Damaged</option>
                         </select>
                       </div>
                     </div>
                   </div>
                   <div className="submit-section">
                     <button className="btn btn-primary submit-btn">Save</button>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
         {/* Edit Asset Modal */}
         {/* Delete Asset Modal */}
         <div className="modal custom-modal fade" id="delete_asset" role="dialog">
           <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
               <div className="modal-body">
                 <div className="form-header">
                   <h3>Delete Asset</h3>
                   <p>Are you sure want to delete?</p>
                 </div>
                 <div className="modal-btn delete-action">
                   <div className="row">
                     <div className="col-6">
                       <a
                         href="javascript:void(0);"
                         className="btn btn-primary continue-btn"
                       >
                         Delete
                       </a>
                     </div>
                     <div className="col-6">
                       <a
                         href="javascript:void(0);"
                         data-dismiss="modal"
                         className="btn btn-primary cancel-btn"
                       >
                         Cancel
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/* /Delete Asset Modal */}
       </div>
       {/* /Page Wrapper */}
     </div>
     {/* /Main Wrapper */}
     {/* jQuery */}
     {/* Bootstrap Core JS */}
     {/* Slimscroll JS */}
     {/* Datatable JS */}
     {/* Select2 JS */}
     {/* Datetimepicker JS */}
     {/* Custom JS */}
   </>
   
  
  )
}

export default Assets