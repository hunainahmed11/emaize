import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
function FileManager() {
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
          <div className="row">
            <div className="col-sm-12">
              <div className="file-wrap">
                <div className="file-sidebar">
                  <div className="file-header justify-content-center">
                    <span>Projects</span>
                    <a href="javascript:void(0);" className="file-side-close">
                      <i className="fa fa-times" />
                    </a>
                  </div>
                  <form className="file-search">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <i className="fa fa-search" />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                  <div className="file-pro-list">
                    <div className="file-scroll">
                      <ul className="file-menu">
                        <li className="active">
                          <a href="#">All Projects</a>
                        </li>
                        <li>
                          <a href="#">Office Management</a>
                        </li>
                        <li>
                          <a href="#">Video Calling App</a>
                        </li>
                        <li>
                          <a href="#">Hospital Administration</a>
                        </li>
                        <li>
                          <a href="#">Virtual Host</a>
                        </li>
                      </ul>
                      <div className="show-more">
                        <a href="#">Show More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="file-cont-wrap">
                  <div className="file-cont-inner">
                    <div className="file-cont-header">
                      <div className="file-options">
                        <a
                          href="javascript:void(0)"
                          id="file_sidebar_toggle"
                          className="file-sidebar-toggle"
                        >
                          <i className="fa fa-bars" />
                        </a>
                      </div>
                      <span>File Manager</span>
                      <div className="file-options">
                        <span className="btn-file">
                          <input type="file" className="upload" />
                          <i className="fa fa-upload" />
                        </span>
                      </div>
                    </div>
                    <div className="file-content">
                      <form className="file-search">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <i className="fa fa-search" />
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                        </div>
                      </form>
                      <div className="file-body">
                        <div className="file-scroll">
                          <div className="file-content-inner">
                            <h4>Recent Files</h4>
                            <div className="row row-sm">
                              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file">
                                  <div className="dropdown-file">
                                    <a
                                      href=""
                                      className="dropdown-link"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item">
                                        View Details
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Share
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Download
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Rename
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="card-file-thumb">
                                    <i className="fa fa-file-pdf-o" />
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      <a href="">Sample.pdf</a>
                                    </h6>
                                    <span>10.45kb</span>
                                  </div>
                                  <div className="card-footer">
                                    <span className="d-none d-sm-inline">
                                      Last Modified:{" "}
                                    </span>
                                    1 min ago
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file">
                                  <div className="dropdown-file">
                                    <a
                                      href=""
                                      className="dropdown-link"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item">
                                        View Details
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Share
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Download
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Rename
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="card-file-thumb">
                                    <i className="fa fa-file-word-o" />
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      <a href="">Document.docx</a>
                                    </h6>
                                    <span>22.67kb</span>
                                  </div>
                                  <div className="card-footer">
                                    <span className="d-none d-sm-inline">
                                      Last Modified:{" "}
                                    </span>
                                    30 mins ago
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file">
                                  <div className="dropdown-file">
                                    <a
                                      href=""
                                      className="dropdown-link"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item">
                                        View Details
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Share
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Download
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Rename
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="card-file-thumb">
                                    <i className="fa fa-file-image-o" />
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      <a href="">icon.png</a>
                                    </h6>
                                    <span>12.47kb</span>
                                  </div>
                                  <div className="card-footer">
                                    <span className="d-none d-sm-inline">
                                      Last Modified:{" "}
                                    </span>
                                    1 hour ago
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file">
                                  <div className="dropdown-file">
                                    <a
                                      href=""
                                      className="dropdown-link"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item">
                                        View Details
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Share
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Download
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Rename
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="card-file-thumb">
                                    <i className="fa fa-file-excel-o" />
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      <a href="">Users.xls</a>
                                    </h6>
                                    <span>35.11kb</span>
                                  </div>
                                  <div className="card-footer">
                                    23 Jul 6:30 PM
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h4>Files</h4>
                            <div className="row row-sm">
                              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file">
                                  <div className="dropdown-file">
                                    <a
                                      href=""
                                      className="dropdown-link"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item">
                                        View Details
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Share
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Download
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Rename
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="card-file-thumb">
                                    <i className="fa fa-file-word-o" />
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      <a href="">Updates.docx</a>
                                    </h6>
                                    <span>12mb</span>
                                  </div>
                                  <div className="card-footer">9 Aug 1:17 PM</div>
                                </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file">
                                  <div className="dropdown-file">
                                    <a
                                      href=""
                                      className="dropdown-link"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item">
                                        View Details
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Share
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Download
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Rename
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="card-file-thumb">
                                    <i className="fa fa-file-powerpoint-o" />
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      <a href="">Vision.ppt</a>
                                    </h6>
                                    <span>72.50kb</span>
                                  </div>
                                  <div className="card-footer">
                                    6 Aug 11:42 AM
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file">
                                  <div className="dropdown-file">
                                    <a
                                      href=""
                                      className="dropdown-link"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item">
                                        View Details
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Share
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Download
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Rename
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="card-file-thumb">
                                    <i className="fa fa-file-audio-o" />
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      <a href="">Voice.mp3</a>
                                    </h6>
                                    <span>2.17mb</span>
                                  </div>
                                  <div className="card-footer">
                                    <span className="d-none d-sm-inline">
                                      Last Modified:{" "}
                                    </span>
                                    30 Jul 9:00 PM
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file">
                                  <div className="dropdown-file">
                                    <a
                                      href=""
                                      className="dropdown-link"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item">
                                        View Details
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Share
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Download
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Rename
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="card-file-thumb">
                                    <i className="fa fa-file-pdf-o" />
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      <a href="">Tutorials.pdf</a>
                                    </h6>
                                    <span>8.2mb</span>
                                  </div>
                                  <div className="card-footer">
                                    21 Jul 10:45 PM
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file">
                                  <div className="dropdown-file">
                                    <a
                                      href=""
                                      className="dropdown-link"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item">
                                        View Details
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Share
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Download
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Rename
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="card-file-thumb">
                                    <i className="fa fa-file-excel-o" />
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      <a href="">Tasks.xls</a>
                                    </h6>
                                    <span>92.82kb</span>
                                  </div>
                                  <div className="card-footer">
                                    16 Jun 4:59 PM
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file">
                                  <div className="dropdown-file">
                                    <a
                                      href=""
                                      className="dropdown-link"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item">
                                        View Details
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Share
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Download
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Rename
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="card-file-thumb">
                                    <i className="fa fa-file-image-o" />
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      <a href="">Page.psd</a>
                                    </h6>
                                    <span>118.71mb</span>
                                  </div>
                                  <div className="card-footer">
                                    14 Jun 9:00 AM
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file">
                                  <div className="dropdown-file">
                                    <a
                                      href=""
                                      className="dropdown-link"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item">
                                        View Details
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Share
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Download
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Rename
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="card-file-thumb">
                                    <i className="fa fa-file-text-o" />
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      <a href="">License.txt</a>
                                    </h6>
                                    <span>18.7kb</span>
                                  </div>
                                  <div className="card-footer">5 May 8:21 PM</div>
                                </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file">
                                  <div className="dropdown-file">
                                    <a
                                      href=""
                                      className="dropdown-link"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item">
                                        View Details
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Share
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Download
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Rename
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="card-file-thumb">
                                    <i className="fa fa-file-word-o" />
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      <a href="">Expenses.docx</a>
                                    </h6>
                                    <span>66.2kb</span>
                                  </div>
                                  <div className="card-footer">
                                    24 Apr 7:50 PM
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file">
                                  <div className="dropdown-file">
                                    <a
                                      href=""
                                      className="dropdown-link"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item">
                                        View Details
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Share
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Download
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Rename
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="card-file-thumb">
                                    <i className="fa fa-file-audio-o" />
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      <a href="">Music.mp3</a>
                                    </h6>
                                    <span>3.6mb</span>
                                  </div>
                                  <div className="card-footer">
                                    13 Mar 2:00 PM
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file">
                                  <div className="dropdown-file">
                                    <a
                                      href=""
                                      className="dropdown-link"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item">
                                        View Details
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Share
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Download
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Rename
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="card-file-thumb">
                                    <i className="fa fa-file-text-o" />
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      <a href="">Installation.txt</a>
                                    </h6>
                                    <span>43.9kb</span>
                                  </div>
                                  <div className="card-footer">
                                    26 Feb 5:01 PM
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file">
                                  <div className="dropdown-file">
                                    <a
                                      href=""
                                      className="dropdown-link"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item">
                                        View Details
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Share
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Download
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Rename
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="card-file-thumb">
                                    <i className="fa fa-file-video-o" />
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      <a href="">Workflow.mp4</a>
                                    </h6>
                                    <span>47.65mb</span>
                                  </div>
                                  <div className="card-footer">
                                    3 Jan 11:35 AM
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file">
                                  <div className="dropdown-file">
                                    <a
                                      href=""
                                      className="dropdown-link"
                                      data-toggle="dropdown"
                                    >
                                      <i className="fa fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item">
                                        View Details
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Share
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Download
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Rename
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="card-file-thumb">
                                    <i className="fa fa-file-code-o" />
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      <a href="">index.html</a>
                                    </h6>
                                    <span>23.7kb</span>
                                  </div>
                                  <div className="card-footer">1 Jan 8:55 AM</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
    {/* Custom JS */}
  </>
  
  )
}

export default FileManager