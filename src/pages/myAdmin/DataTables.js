import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function DataTables() {
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
         <div className="content container-fluid">
           {/* Page Header */}
           <div className="page-header">
             <div className="row">
               <div className="col">
                 <h3 className="page-title">Data Tables</h3>
                 <ul className="breadcrumb">
                   <li className="breadcrumb-item">
                     <Link to="/Indexx">Dashboard</Link>
                   </li>
                   <li className="breadcrumb-item active">Data Tables</li>
                 </ul>
               </div>
             </div>
           </div>
           {/* /Page Header */}
           <div className="row">
             <div className="col-sm-12">
               <div className="card mb-0">
                 <div className="card-header">
                   <h4 className="card-title mb-0">Default Datatable</h4>
                   <p className="card-text">
                     This is the most basic example of the datatables with zero
                     configuration. Use the <code>.datatable</code> class to
                     initialize datatables.
                   </p>
                 </div>
                 <div className="card-body">
                   <div className="table-responsive">
                     <table className="datatable table table-stripped mb-0">
                       <thead>
                         <tr>
                           <th>Name</th>
                           <th>Position</th>
                           <th>Office</th>
                           <th>Age</th>
                           <th>Salary</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <td>Tiger Nixon</td>
                           <td>System Architect</td>
                           <td>Edinburgh</td>
                           <td>61</td>
                           <td>$320,800</td>
                         </tr>
                         <tr>
                           <td>Garrett Winters</td>
                           <td>Accountant</td>
                           <td>Tokyo</td>
                           <td>63</td>
                           <td>$170,750</td>
                         </tr>
                         <tr>
                           <td>Ashton Cox</td>
                           <td>Junior Technical Author</td>
                           <td>San Francisco</td>
                           <td>66</td>
                           <td>$86,000</td>
                         </tr>
                         <tr>
                           <td>Cedric Kelly</td>
                           <td>Senior Javascript Developer</td>
                           <td>Edinburgh</td>
                           <td>22</td>
                           <td>$433,060</td>
                         </tr>
                         <tr>
                           <td>Airi Satou</td>
                           <td>Accountant</td>
                           <td>Tokyo</td>
                           <td>33</td>
                           <td>$162,700</td>
                         </tr>
                         <tr>
                           <td>Brielle Williamson</td>
                           <td>Integration Specialist</td>
                           <td>New York</td>
                           <td>61</td>
                           <td>$372,000</td>
                         </tr>
                         <tr>
                           <td>Herrod Chandler</td>
                           <td>Sales Assistant</td>
                           <td>San Francisco</td>
                           <td>59</td>
                           <td>$137,500</td>
                         </tr>
                         <tr>
                           <td>Rhona Davidson</td>
                           <td>Integration Specialist</td>
                           <td>Tokyo</td>
                           <td>55</td>
                           <td>$327,900</td>
                         </tr>
                         <tr>
                           <td>Colleen Hurst</td>
                           <td>Javascript Developer</td>
                           <td>San Francisco</td>
                           <td>39</td>
                           <td>$205,500</td>
                         </tr>
                         <tr>
                           <td>Sonya Frost</td>
                           <td>Software Engineer</td>
                           <td>Edinburgh</td>
                           <td>23</td>
                           <td>$103,600</td>
                         </tr>
                         <tr>
                           <td>Jena Gaines</td>
                           <td>Office Manager</td>
                           <td>London</td>
                           <td>30</td>
                           <td>$90,560</td>
                         </tr>
                         <tr>
                           <td>Quinn Flynn</td>
                           <td>Support Lead</td>
                           <td>Edinburgh</td>
                           <td>22</td>
                           <td>$342,000</td>
                         </tr>
                         <tr>
                           <td>Charde Marshall</td>
                           <td>Regional Director</td>
                           <td>San Francisco</td>
                           <td>36</td>
                           <td>$470,600</td>
                         </tr>
                         <tr>
                           <td>Haley Kennedy</td>
                           <td>Senior Marketing Designer</td>
                           <td>London</td>
                           <td>43</td>
                           <td>$313,500</td>
                         </tr>
                         <tr>
                           <td>Tatyana Fitzpatrick</td>
                           <td>Regional Director</td>
                           <td>London</td>
                           <td>19</td>
                           <td>$385,750</td>
                         </tr>
                         <tr>
                           <td>Michael Silva</td>
                           <td>Marketing Designer</td>
                           <td>London</td>
                           <td>66</td>
                           <td>$198,500</td>
                         </tr>
                         <tr>
                           <td>Paul Byrd</td>
                           <td>Chief Financial Officer (CFO)</td>
                           <td>New York</td>
                           <td>64</td>
                           <td>$725,000</td>
                         </tr>
                         <tr>
                           <td>Gloria Little</td>
                           <td>Systems Administrator</td>
                           <td>New York</td>
                           <td>59</td>
                           <td>$237,500</td>
                         </tr>
                         <tr>
                           <td>Bradley Greer</td>
                           <td>Software Engineer</td>
                           <td>London</td>
                           <td>41</td>
                           <td>$132,000</td>
                         </tr>
                         <tr>
                           <td>Dai Rios</td>
                           <td>Personnel Lead</td>
                           <td>Edinburgh</td>
                           <td>35</td>
                           <td>$217,500</td>
                         </tr>
                         <tr>
                           <td>Jenette Caldwell</td>
                           <td>Development Lead</td>
                           <td>New York</td>
                           <td>30</td>
                           <td>$345,000</td>
                         </tr>
                         <tr>
                           <td>Yuri Berry</td>
                           <td>Chief Marketing Officer (CMO)</td>
                           <td>New York</td>
                           <td>40</td>
                           <td>$675,000</td>
                         </tr>
                         <tr>
                           <td>Caesar Vance</td>
                           <td>Pre-Sales Support</td>
                           <td>New York</td>
                           <td>21</td>
                           <td>$106,450</td>
                         </tr>
                         <tr>
                           <td>Doris Wilder</td>
                           <td>Sales Assistant</td>
                           <td>Sidney</td>
                           <td>23</td>
                           <td>$85,600</td>
                         </tr>
                         <tr>
                           <td>Angelica Ramos</td>
                           <td>Chief Executive Officer (CEO)</td>
                           <td>London</td>
                           <td>47</td>
                           <td>$1,200,000</td>
                         </tr>
                         <tr>
                           <td>Gavin Joyce</td>
                           <td>Developer</td>
                           <td>Edinburgh</td>
                           <td>42</td>
                           <td>$92,575</td>
                         </tr>
                         <tr>
                           <td>Jennifer Chang</td>
                           <td>Regional Director</td>
                           <td>Singapore</td>
                           <td>28</td>
                           <td>$357,650</td>
                         </tr>
                         <tr>
                           <td>Brenden Wagner</td>
                           <td>Software Engineer</td>
                           <td>San Francisco</td>
                           <td>28</td>
                           <td>$206,850</td>
                         </tr>
                         <tr>
                           <td>Fiona Green</td>
                           <td>Chief Operating Officer (COO)</td>
                           <td>San Francisco</td>
                           <td>48</td>
                           <td>$850,000</td>
                         </tr>
                         <tr>
                           <td>Shou Itou</td>
                           <td>Regional Marketing</td>
                           <td>Tokyo</td>
                           <td>20</td>
                           <td>$163,000</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* /Page Wrapper */}
     </div>
     {/* /Main Wrapper */}
     {/* jQuery */}
     {/* Bootstrap Core JS */}
     {/* Slimscroll JS */}
     {/* Datatable JS */}
     {/* Custom JS */}
   </>
   
  
  )
}

export default DataTables