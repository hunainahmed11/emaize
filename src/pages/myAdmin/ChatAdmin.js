import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ChatAdmin() {
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
         {/* Chat Main Row */}
         <div className="chat-main-row">
           {/* Chat Main Wrapper */}
           <div className="chat-main-wrapper">
             {/* Chats View */}
             <div className="col-lg-9 message-view task-view">
               <div className="chat-window">
                 <div className="fixed-header">
                   <div className="navbar">
                     <div className="user-details mr-auto">
                       <div className="float-left user-img">
                         <Link to="/Profilee"
                           className="avatar"
                          
                           title="Mike Litorus"
                         >
                           <img
                             src="assets/img/profiles/avatar-05.jpg"
                             alt=""
                             className="rounded-circle"
                           />
                           <span className="status online" />
                         </Link>
                       </div>
                       <div className="user-info float-left">
                         <Link to="/Profilee" title="Mike Litorus">
                           <span>Mike Litorus</span>{" "}
                           <i className="typing-text">Typing...</i>
                         </Link>
                         <span className="last-seen">
                           Last seen today at 7:50 AM
                         </span>
                       </div>
                     </div>
                     <div className="search-box">
                       <div className="input-group input-group-sm">
                         <input
                           type="text"
                           placeholder="Search"
                           className="form-control"
                         />
                         <span className="input-group-append">
                           <button type="button" className="btn">
                             <i className="fa fa-search" />
                           </button>
                         </span>
                       </div>
                     </div>
                     <ul className="nav custom-menu">
                       <li className="nav-item">
                         <a
                           className="nav-link task-chat profile-rightbar float-right"
                           id="task_chat"
                           href="#task_window"
                         >
                           <i className="fa fa-user" />
                         </a>
                       </li>
                       <li className="nav-item">
                         <Link to="/VoiceCall" className="nav-link">
                           <i className="fa fa-phone" />
                         </Link>
                       </li>
                       <li className="nav-item">
                         <Link to="/VideoCall" className="nav-link">
                           <i className="fa fa-video-camera" />
                         </Link>
                       </li>
                       <li className="nav-item dropdown dropdown-action">
                         <a
                           aria-expanded="false"
                           data-toggle="dropdown"
                           className="nav-link dropdown-toggle"
                           href=""
                         >
                           <i className="fa fa-cog" />
                         </a>
                         <div className="dropdown-menu dropdown-menu-right">
                           <a href="javascript:void(0)" className="dropdown-item">
                             Delete Conversations
                           </a>
                           <a href="javascript:void(0)" className="dropdown-item">
                             Settings
                           </a>
                         </div>
                       </li>
                     </ul>
                   </div>
                 </div>
                 <div className="chat-contents">
                   <div className="chat-content-wrap">
                     <div className="chat-wrap-inner">
                       <div className="chat-box">
                         <div className="chats">
                           <div className="chat chat-right">
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <p>Hello. What can I do for you?</p>
                                   <span className="chat-time">8:30 am</span>
                                 </div>
                                 <div className="chat-action-btns">
                                   <ul>
                                     <li>
                                       <a
                                         href="#"
                                         className="share-msg"
                                         title="Share"
                                       >
                                         <i className="fa fa-share-alt" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="edit-msg">
                                         <i className="fa fa-pencil" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="del-msg">
                                         <i className="fa fa-trash-o" />
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div className="chat-line">
                             <span className="chat-date">October 8th, 2018</span>
                           </div>
                           <div className="chat chat-left">
                             <div className="chat-avatar">
                               <Link to="/Profilee" className="avatar">
                                 <img
                                   alt=""
                                   src="assets/img/profiles/avatar-05.jpg"
                                 />
                               </Link>
                             </div>
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <p>I'm just looking around.</p>
                                   <p>
                                     Will you tell me something about yourself?{" "}
                                   </p>
                                   <span className="chat-time">8:35 am</span>
                                 </div>
                                 <div className="chat-action-btns">
                                   <ul>
                                     <li>
                                       <a
                                         href="#"
                                         className="share-msg"
                                         title="Share"
                                       >
                                         <i className="fa fa-share-alt" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="edit-msg">
                                         <i className="fa fa-pencil" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="del-msg">
                                         <i className="fa fa-trash-o" />
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <p>Are you there? That time!</p>
                                   <span className="chat-time">8:40 am</span>
                                 </div>
                                 <div className="chat-action-btns">
                                   <ul>
                                     <li>
                                       <a
                                         href="#"
                                         className="share-msg"
                                         title="Share"
                                       >
                                         <i className="fa fa-share-alt" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="edit-msg">
                                         <i className="fa fa-pencil" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="del-msg">
                                         <i className="fa fa-trash-o" />
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div className="chat chat-right">
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <p>Where?</p>
                                   <span className="chat-time">8:35 am</span>
                                 </div>
                                 <div className="chat-action-btns">
                                   <ul>
                                     <li>
                                       <a
                                         href="#"
                                         className="share-msg"
                                         title="Share"
                                       >
                                         <i className="fa fa-share-alt" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="edit-msg">
                                         <i className="fa fa-pencil" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="del-msg">
                                         <i className="fa fa-trash-o" />
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <p>
                                     OK, my name is Limingqiang. I like singing,
                                     playing basketballand so on.
                                   </p>
                                   <span className="chat-time">8:42 am</span>
                                 </div>
                                 <div className="chat-action-btns">
                                   <ul>
                                     <li>
                                       <a
                                         href="#"
                                         className="share-msg"
                                         title="Share"
                                       >
                                         <i className="fa fa-share-alt" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="edit-msg">
                                         <i className="fa fa-pencil" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="del-msg">
                                         <i className="fa fa-trash-o" />
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div className="chat chat-left">
                             <div className="chat-avatar">
                               <Link to="/Profilee" className="avatar">
                                 <img
                                   alt=""
                                   src="assets/img/profiles/avatar-05.jpg"
                                 />
                               </Link>
                             </div>
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <p>You wait for notice.</p>
                                   <span className="chat-time">8:30 am</span>
                                 </div>
                                 <div className="chat-action-btns">
                                   <ul>
                                     <li>
                                       <a
                                         href="#"
                                         className="share-msg"
                                         title="Share"
                                       >
                                         <i className="fa fa-share-alt" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="edit-msg">
                                         <i className="fa fa-pencil" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="del-msg">
                                         <i className="fa fa-trash-o" />
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <p>Consectetuorem ipsum dolor sit?</p>
                                   <span className="chat-time">8:50 am</span>
                                 </div>
                                 <div className="chat-action-btns">
                                   <ul>
                                     <li>
                                       <a
                                         href="#"
                                         className="share-msg"
                                         title="Share"
                                       >
                                         <i className="fa fa-share-alt" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="edit-msg">
                                         <i className="fa fa-pencil" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="del-msg">
                                         <i className="fa fa-trash-o" />
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <p>OK?</p>
                                   <span className="chat-time">8:55 am</span>
                                 </div>
                                 <div className="chat-action-btns">
                                   <ul>
                                     <li>
                                       <a
                                         href="#"
                                         className="share-msg"
                                         title="Share"
                                       >
                                         <i className="fa fa-share-alt" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="edit-msg">
                                         <i className="fa fa-pencil" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="del-msg">
                                         <i className="fa fa-trash-o" />
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                               <div className="chat-bubble">
                                 <div className="chat-content img-content">
                                   <div className="chat-img-group clearfix">
                                     <p>Uploaded 3 Images</p>
                                     <a className="chat-img-attach" href="#">
                                       <img
                                         width={182}
                                         height={137}
                                         alt=""
                                         src="assets/img/placeholder.jpg"
                                       />
                                       <div className="chat-placeholder">
                                         <div className="chat-img-name">
                                           placeholder.jpg
                                         </div>
                                         <div className="chat-file-desc">
                                           842 KB
                                         </div>
                                       </div>
                                     </a>
                                     <a className="chat-img-attach" href="#">
                                       <img
                                         width={182}
                                         height={137}
                                         alt=""
                                         src="assets/img/placeholder.jpg"
                                       />
                                       <div className="chat-placeholder">
                                         <div className="chat-img-name">
                                           842 KB
                                         </div>
                                       </div>
                                     </a>
                                     <a className="chat-img-attach" href="#">
                                       <img
                                         width={182}
                                         height={137}
                                         alt=""
                                         src="assets/img/placeholder.jpg"
                                       />
                                       <div className="chat-placeholder">
                                         <div className="chat-img-name">
                                           placeholder.jpg
                                         </div>
                                         <div className="chat-file-desc">
                                           842 KB
                                         </div>
                                       </div>
                                     </a>
                                   </div>
                                   <span className="chat-time">9:00 am</span>
                                 </div>
                                 <div className="chat-action-btns">
                                   <ul>
                                     <li>
                                       <a
                                         href="#"
                                         className="share-msg"
                                         title="Share"
                                       >
                                         <i className="fa fa-share-alt" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="edit-msg">
                                         <i className="fa fa-pencil" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="del-msg">
                                         <i className="fa fa-trash-o" />
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div className="chat chat-right">
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <p>OK!</p>
                                   <span className="chat-time">9:00 am</span>
                                 </div>
                                 <div className="chat-action-btns">
                                   <ul>
                                     <li>
                                       <a
                                         href="#"
                                         className="share-msg"
                                         title="Share"
                                       >
                                         <i className="fa fa-share-alt" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="edit-msg">
                                         <i className="fa fa-pencil" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="del-msg">
                                         <i className="fa fa-trash-o" />
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div className="chat chat-left">
                             <div className="chat-avatar">
                               <Link to="/Profilee" className="avatar">
                                 <img
                                   alt=""
                                   src="assets/img/profiles/avatar-05.jpg"
                                 />
                               </Link>
                             </div>
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <p>Uploaded 3 files</p>
                                   <ul className="attach-list">
                                     <li>
                                       <i className="fa fa-file" />{" "}
                                       <a href="#">example.avi</a>
                                     </li>
                                     <li>
                                       <i className="fa fa-file" />{" "}
                                       <a href="#">activity.psd</a>
                                     </li>
                                     <li>
                                       <i className="fa fa-file" />{" "}
                                       <a href="#">example.psd</a>
                                     </li>
                                   </ul>
                                 </div>
                                 <div className="chat-action-btns">
                                   <ul>
                                     <li>
                                       <a
                                         href="#"
                                         className="share-msg"
                                         title="Share"
                                       >
                                         <i className="fa fa-share-alt" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="edit-msg">
                                         <i className="fa fa-pencil" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="del-msg">
                                         <i className="fa fa-trash-o" />
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <p>Consectetuorem ipsum dolor sit?</p>
                                   <span className="chat-time">8:50 am</span>
                                 </div>
                                 <div className="chat-action-btns">
                                   <ul>
                                     <li>
                                       <a
                                         href="#"
                                         className="share-msg"
                                         title="Share"
                                       >
                                         <i className="fa fa-share-alt" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="edit-msg">
                                         <i className="fa fa-pencil" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="del-msg">
                                         <i className="fa fa-trash-o" />
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <p>OK?</p>
                                   <span className="chat-time">8:55 am</span>
                                 </div>
                                 <div className="chat-action-btns">
                                   <ul>
                                     <li>
                                       <a
                                         href="#"
                                         className="share-msg"
                                         title="Share"
                                       >
                                         <i className="fa fa-share-alt" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="edit-msg">
                                         <i className="fa fa-pencil" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="del-msg">
                                         <i className="fa fa-trash-o" />
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div className="chat chat-right">
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content img-content">
                                   <div className="chat-img-group clearfix">
                                     <p>Uploaded 6 Images</p>
                                     <a className="chat-img-attach" href="#">
                                       <img
                                         width={182}
                                         height={137}
                                         alt=""
                                         src="assets/img/placeholder.jpg"
                                       />
                                       <div className="chat-placeholder">
                                         <div className="chat-img-name">
                                           placeholder.jpg
                                         </div>
                                         <div className="chat-file-desc">
                                           842 KB
                                         </div>
                                       </div>
                                     </a>
                                     <a className="chat-img-attach" href="#">
                                       <img
                                         width={182}
                                         height={137}
                                         alt=""
                                         src="assets/img/placeholder.jpg"
                                       />
                                       <div className="chat-placeholder">
                                         <div className="chat-img-name">
                                           842 KB
                                         </div>
                                       </div>
                                     </a>
                                     <a className="chat-img-attach" href="#">
                                       <img
                                         width={182}
                                         height={137}
                                         alt=""
                                         src="assets/img/placeholder.jpg"
                                       />
                                       <div className="chat-placeholder">
                                         <div className="chat-img-name">
                                           placeholder.jpg
                                         </div>
                                         <div className="chat-file-desc">
                                           842 KB
                                         </div>
                                       </div>
                                     </a>
                                     <a className="chat-img-attach" href="#">
                                       <img
                                         width={182}
                                         height={137}
                                         alt=""
                                         src="assets/img/placeholder.jpg"
                                       />
                                       <div className="chat-placeholder">
                                         <div className="chat-img-name">
                                           placeholder.jpg
                                         </div>
                                         <div className="chat-file-desc">
                                           842 KB
                                         </div>
                                       </div>
                                     </a>
                                     <a className="chat-img-attach" href="#">
                                       <img
                                         width={182}
                                         height={137}
                                         alt=""
                                         src="assets/img/placeholder.jpg"
                                       />
                                       <div className="chat-placeholder">
                                         <div className="chat-img-name">
                                           placeholder.jpg
                                         </div>
                                         <div className="chat-file-desc">
                                           842 KB
                                         </div>
                                       </div>
                                     </a>
                                     <a className="chat-img-attach" href="#">
                                       <img
                                         width={182}
                                         height={137}
                                         alt=""
                                         src="assets/img/placeholder.jpg"
                                       />
                                       <div className="chat-placeholder">
                                         <div className="chat-img-name">
                                           placeholder.jpg
                                         </div>
                                         <div className="chat-file-desc">
                                           842 KB
                                         </div>
                                       </div>
                                     </a>
                                   </div>
                                   <span className="chat-time">9:00 am</span>
                                 </div>
                                 <div className="chat-action-btns">
                                   <ul>
                                     <li>
                                       <a
                                         href="#"
                                         className="share-msg"
                                         title="Share"
                                       >
                                         <i className="fa fa-share-alt" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="edit-msg">
                                         <i className="fa fa-pencil" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="del-msg">
                                         <i className="fa fa-trash-o" />
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div className="chat chat-left">
                             <div className="chat-avatar">
                               <Link to="/Profilee" className="avatar">
                                 <img
                                   alt=""
                                   src="assets/img/profiles/avatar-05.jpg"
                                 />
                               </Link>
                             </div>
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <ul className="attach-list">
                                     <li className="pdf-file">
                                       <i className="fa fa-file-pdf-o" />{" "}
                                       <a href="#">Document_2016.pdf</a>
                                     </li>
                                   </ul>
                                   <span className="chat-time">9:00 am</span>
                                 </div>
                                 <div className="chat-action-btns">
                                   <ul>
                                     <li>
                                       <a
                                         href="#"
                                         className="share-msg"
                                         title="Share"
                                       >
                                         <i className="fa fa-share-alt" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="edit-msg">
                                         <i className="fa fa-pencil" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="del-msg">
                                         <i className="fa fa-trash-o" />
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div className="chat chat-right">
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <ul className="attach-list">
                                     <li className="pdf-file">
                                       <i className="fa fa-file-pdf-o" />{" "}
                                       <a href="#">Document_2016.pdf</a>
                                     </li>
                                   </ul>
                                   <span className="chat-time">9:00 am</span>
                                 </div>
                                 <div className="chat-action-btns">
                                   <ul>
                                     <li>
                                       <a
                                         href="#"
                                         className="share-msg"
                                         title="Share"
                                       >
                                         <i className="fa fa-share-alt" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="edit-msg">
                                         <i className="fa fa-pencil" />
                                       </a>
                                     </li>
                                     <li>
                                       <a href="#" className="del-msg">
                                         <i className="fa fa-trash-o" />
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div className="chat chat-left">
                             <div className="chat-avatar">
                               <Link to="/Profilee" className="avatar">
                                 <img
                                   alt=""
                                   src="assets/img/profiles/avatar-05.jpg"
                                 />
                               </Link>
                             </div>
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <p>Typing ...</p>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="chat-footer">
                   <div className="message-bar">
                     <div className="message-inner">
                       <a
                         className="link attach-icon"
                         href="#"
                         data-toggle="modal"
                         data-target="#drag_files"
                       >
                         <img src="assets/img/attachment.png" alt="" />
                       </a>
                       <div className="message-area">
                         <div className="input-group">
                           <textarea
                             className="form-control"
                             placeholder="Type message..."
                             defaultValue={""}
                           />
                           <span className="input-group-append">
                             <button className="btn btn-custom" type="button">
                               <i className="fa fa-send" />
                             </button>
                           </span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             {/* /Chats View */}
             {/* Chat Right Sidebar */}
             <div
               className="col-lg-3 message-view chat-profile-view chat-sidebar"
               id="task_window"
             >
               <div className="chat-window video-window">
                 <div className="fixed-header">
                   <ul className="nav nav-tabs nav-tabs-bottom">
                     <li className="nav-item">
                       <a className="nav-link" href="#calls_tab" data-toggle="tab">
                         Calls
                       </a>
                     </li>
                     <li className="nav-item">
                       <a
                         className="nav-link active"
                         href="#profile_tab"
                         data-toggle="tab"
                       >
                         Profile
                       </a>
                     </li>
                   </ul>
                 </div>
                 <div className="tab-content chat-contents">
                   <div className="content-full tab-pane" id="calls_tab">
                     <div className="chat-wrap-inner">
                       <div className="chat-box">
                         <div className="chats">
                           <div className="chat chat-left">
                             <div className="chat-avatar">
                               <Link to="/Profilee" className="avatar">
                                 <img
                                   alt=""
                                   src="assets/img/profiles/avatar-02.jpg"
                                 />
                               </Link>
                             </div>
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <span className="task-chat-user">You</span>{" "}
                                   <span className="chat-time">8:35 am</span>
                                   <div className="call-details">
                                     <i className="material-icons">phone_missed</i>
                                     <div className="call-info">
                                       <div className="call-user-details">
                                         <span className="call-description">
                                           Jeffrey Warden missed the call
                                         </span>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div className="chat chat-left">
                             <div className="chat-avatar">
                               <Link to="/Profilee" className="avatar">
                                 <img
                                   alt=""
                                   src="assets/img/profiles/avatar-02.jpg"
                                 />
                               </Link>
                             </div>
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <span className="task-chat-user">John Doe</span>{" "}
                                   <span className="chat-time">8:35 am</span>
                                   <div className="call-details">
                                     <i className="material-icons">call_end</i>
                                     <div className="call-info">
                                       <div className="call-user-details">
                                         <span className="call-description">
                                           This call has ended
                                         </span>
                                       </div>
                                       <div className="call-timing">
                                         Duration: <strong>5 min 57 sec</strong>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div className="chat-line">
                             <span className="chat-date">January 29th, 2019</span>
                           </div>
                           <div className="chat chat-left">
                             <div className="chat-avatar">
                               <Link to="/Profilee" className="avatar">
                                 <img
                                   alt=""
                                   src="assets/img/profiles/avatar-05.jpg"
                                 />
                               </Link>
                             </div>
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <span className="task-chat-user">
                                     Richard Miles
                                   </span>{" "}
                                   <span className="chat-time">8:35 am</span>
                                   <div className="call-details">
                                     <i className="material-icons">phone_missed</i>
                                     <div className="call-info">
                                       <div className="call-user-details">
                                         <span className="call-description">
                                           You missed the call
                                         </span>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div className="chat chat-left">
                             <div className="chat-avatar">
                               <Link to="/Profilee" className="avatar">
                                 <img
                                   alt=""
                                   src="assets/img/profiles/avatar-02.jpg"
                                 />
                               </Link>
                             </div>
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <span className="task-chat-user">You</span>{" "}
                                   <span className="chat-time">8:35 am</span>
                                   <div className="call-details">
                                     <i className="material-icons">ring_volume</i>
                                     <div className="call-info">
                                       <div className="call-user-details">
                                         <a
                                           href="#"
                                           className="call-description call-description--linked"
                                           data-qa="call_attachment_link"
                                         >
                                           Calling John Smith ...
                                         </a>
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
                   <div
                     className="content-full tab-pane show active"
                     id="profile_tab"
                   >
                     <div className="display-table">
                       <div className="table-row">
                         <div className="table-body">
                           <div className="table-content">
                             <div className="chat-profile-img">
                               <div className="edit-profile-img">
                                 <img
                                   src="assets/img/profiles/avatar-02.jpg"
                                   alt=""
                                 />
                                 <span className="change-img">Change Image</span>
                               </div>
                               <h3 className="user-name m-t-10 mb-0">John Doe</h3>
                               <small className="text-muted">Web Designer</small>
                               <a
                                 href="javascript:void(0);"
                                 className="btn btn-primary edit-btn"
                               >
                                 <i className="fa fa-pencil" />
                               </a>
                             </div>
                             <div className="chat-profile-info">
                               <ul className="user-det-list">
                                 <li>
                                   <span>Username:</span>
                                   <span className="float-right text-muted">
                                     johndoe
                                   </span>
                                 </li>
                                 <li>
                                   <span>DOB:</span>
                                   <span className="float-right text-muted">
                                     24 July
                                   </span>
                                 </li>
                                 <li>
                                   <span>Email:</span>
                                   <span className="float-right text-muted">
                                     johndoe@example.com
                                   </span>
                                 </li>
                                 <li>
                                   <span>Phone:</span>
                                   <span className="float-right text-muted">
                                     9876543210
                                   </span>
                                 </li>
                               </ul>
                             </div>
                             <div className="transfer-files">
                               <ul className="nav nav-tabs nav-tabs-solid nav-justified mb-0">
                                 <li className="nav-item">
                                   <a
                                     className="nav-link active"
                                     href="#all_files"
                                     data-toggle="tab"
                                   >
                                     All Files
                                   </a>
                                 </li>
                                 <li className="nav-item">
                                   <a
                                     className="nav-link"
                                     href="#my_files"
                                     data-toggle="tab"
                                   >
                                     My Files
                                   </a>
                                 </li>
                               </ul>
                               <div className="tab-content">
                                 <div
                                   className="tab-pane show active"
                                   id="all_files"
                                 >
                                   <ul className="files-list">
                                     <li>
                                       <div className="files-cont">
                                         <div className="file-type">
                                           <span className="files-icon">
                                             <i className="fa fa-file-pdf-o" />
                                           </span>
                                         </div>
                                         <div className="files-info">
                                           <span className="file-name text-ellipsis">
                                             AHA Selfcare Mobile Application
                                             Test-Cases.xls
                                           </span>
                                           <span className="file-author">
                                             <a href="#">Loren Gatlin</a>
                                           </span>{" "}
                                           <span className="file-date">
                                             May 31st at 6:53 PM
                                           </span>
                                         </div>
                                         <ul className="files-action">
                                           <li className="dropdown dropdown-action">
                                             <a
                                               href=""
                                               className="dropdown-toggle"
                                               data-toggle="dropdown"
                                               aria-expanded="false"
                                             >
                                               <i className="material-icons">
                                                 more_horiz
                                               </i>
                                             </a>
                                             <div className="dropdown-menu">
                                               <a
                                                 className="dropdown-item"
                                                 href="javascript:void(0)"
                                               >
                                                 Download
                                               </a>
                                               <a
                                                 className="dropdown-item"
                                                 href="#"
                                                 data-toggle="modal"
                                                 data-target="#share_files"
                                               >
                                                 Share
                                               </a>
                                             </div>
                                           </li>
                                         </ul>
                                       </div>
                                     </li>
                                   </ul>
                                 </div>
                                 <div className="tab-pane" id="my_files">
                                   <ul className="files-list">
                                     <li>
                                       <div className="files-cont">
                                         <div className="file-type">
                                           <span className="files-icon">
                                             <i className="fa fa-file-pdf-o" />
                                           </span>
                                         </div>
                                         <div className="files-info">
                                           <span className="file-name text-ellipsis">
                                             AHA Selfcare Mobile Application
                                             Test-Cases.xls
                                           </span>
                                           <span className="file-author">
                                             <a href="#">John Doe</a>
                                           </span>{" "}
                                           <span className="file-date">
                                             May 31st at 6:53 PM
                                           </span>
                                         </div>
                                         <ul className="files-action">
                                           <li className="dropdown dropdown-action">
                                             <a
                                               href=""
                                               className="dropdown-toggle"
                                               data-toggle="dropdown"
                                               aria-expanded="false"
                                             >
                                               <i className="material-icons">
                                                 more_horiz
                                               </i>
                                             </a>
                                             <div className="dropdown-menu">
                                               <a
                                                 className="dropdown-item"
                                                 href="javascript:void(0)"
                                               >
                                                 Download
                                               </a>
                                               <a
                                                 className="dropdown-item"
                                                 href="#"
                                                 data-toggle="modal"
                                                 data-target="#share_files"
                                               >
                                                 Share
                                               </a>
                                             </div>
                                           </li>
                                         </ul>
                                       </div>
                                     </li>
                                   </ul>
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
             {/* /Chat Right Sidebar */}
           </div>
           {/* /Chat Main Wrapper */}
         </div>
         {/* /Chat Main Row */}
         {/* Drogfiles Modal */}
         <div id="drag_files" className="modal custom-modal fade" role="dialog">
           <div
             className="modal-dialog modal-dialog-centered modal-md"
             role="document"
           >
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Drag and drop files upload</h5>
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
                 <form id="js-upload-form">
                   <div className="upload-drop-zone" id="drop-zone">
                     <i className="fa fa-cloud-upload fa-2x" />{" "}
                     <span className="upload-text">
                       Just drag and drop files here
                     </span>
                   </div>
                   <h4>Uploading</h4>
                   <ul className="upload-list">
                     <li className="file-list">
                       <div className="upload-wrap">
                         <div className="file-name">
                           <i className="fa fa-photo" />
                           photo.png
                         </div>
                         <div className="file-size">1.07 gb</div>
                         <button type="button" className="file-close">
                           <i className="fa fa-close" />
                         </button>
                       </div>
                       <div className="progress progress-xs progress-striped">
                         <div
                           className="progress-bar bg-success"
                           role="progressbar"
                           style={{ width: "65%" }}
                         />
                       </div>
                       <div className="upload-process">37% done</div>
                     </li>
                     <li className="file-list">
                       <div className="upload-wrap">
                         <div className="file-name">
                           <i className="fa fa-file" />
                           task.doc
                         </div>
                         <div className="file-size">5.8 kb</div>
                         <button type="button" className="file-close">
                           <i className="fa fa-close" />
                         </button>
                       </div>
                       <div className="progress progress-xs progress-striped">
                         <div
                           className="progress-bar bg-success"
                           role="progressbar"
                           style={{ width: "65%" }}
                         />
                       </div>
                       <div className="upload-process">37% done</div>
                     </li>
                     <li className="file-list">
                       <div className="upload-wrap">
                         <div className="file-name">
                           <i className="fa fa-photo" />
                           dashboard.png
                         </div>
                         <div className="file-size">2.1 mb</div>
                         <button type="button" className="file-close">
                           <i className="fa fa-close" />
                         </button>
                       </div>
                       <div className="progress progress-xs progress-striped">
                         <div
                           className="progress-bar bg-success"
                           role="progressbar"
                           style={{ width: "65%" }}
                         />
                       </div>
                       <div className="upload-process">Completed</div>
                     </li>
                   </ul>
                 </form>
                 <div className="submit-section">
                   <button className="btn btn-primary submit-btn">Submit</button>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/* /Drogfiles Modal */}
         {/* Add Group Modal */}
         <div id="add_group" className="modal custom-modal fade" role="dialog">
           <div
             className="modal-dialog modal-dialog-centered modal-md"
             role="document"
           >
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Create a group</h5>
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
                 <p>
                   Groups are where your team communicates. They’re best when
                   organized around a topic — #leads, for example.
                 </p>
                 <form>
                   <div className="form-group">
                     <label>
                       Group Name <span className="text-danger">*</span>
                     </label>
                     <input className="form-control" type="text" />
                   </div>
                   <div className="form-group">
                     <label>
                       Send invites to:{" "}
                       <span className="text-muted-light">(optional)</span>
                     </label>
                     <input className="form-control" type="text" />
                   </div>
                   <div className="submit-section">
                     <button className="btn btn-primary submit-btn">Submit</button>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
         {/* /Add Group Modal */}
         {/* Add Chat User Modal */}
         <div id="add_chat_user" className="modal custom-modal fade" role="dialog">
           <div
             className="modal-dialog modal-dialog-centered modal-md"
             role="document"
           >
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Direct Chat</h5>
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
                 <div className="input-group m-b-30">
                   <input
                     placeholder="Search to start a chat"
                     className="form-control search-input"
                     type="text"
                   />
                   <span className="input-group-append">
                     <button className="btn btn-primary">Search</button>
                   </span>
                 </div>
                 <div>
                   <h5>Recent Conversations</h5>
                   <ul className="chat-user-list">
                     <li>
                       <a href="#">
                         <div className="media">
                           <span className="avatar align-self-center">
                             <img src="assets/img/profiles/avatar-16.jpg" alt="" />
                           </span>
                           <div className="media-body align-self-center text-nowrap">
                             <div className="user-name">Jeffery Lalor</div>
                             <span className="designation">Team Leader</span>
                           </div>
                           <div className="text-nowrap align-self-center">
                             <div className="online-date">1 day ago</div>
                           </div>
                         </div>
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <div className="media ">
                           <span className="avatar align-self-center">
                             <img src="assets/img/profiles/avatar-13.jpg" alt="" />
                           </span>
                           <div className="media-body align-self-center text-nowrap">
                             <div className="user-name">Bernardo Galaviz</div>
                             <span className="designation">Web Developer</span>
                           </div>
                           <div className="align-self-center text-nowrap">
                             <div className="online-date">3 days ago</div>
                           </div>
                         </div>
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <div className="media">
                           <span className="avatar align-self-center">
                             <img src="assets/img/profiles/avatar-02.jpg" alt="" />
                           </span>
                           <div className="media-body text-nowrap align-self-center">
                             <div className="user-name">John Doe</div>
                             <span className="designation">Web Designer</span>
                           </div>
                           <div className="align-self-center text-nowrap">
                             <div className="online-date">7 months ago</div>
                           </div>
                         </div>
                       </a>
                     </li>
                   </ul>
                 </div>
                 <div className="submit-section">
                   <button className="btn btn-primary submit-btn">Submit</button>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/* /Add Chat User Modal */}
         {/* Share Files Modal */}
         <div id="share_files" className="modal custom-modal fade" role="dialog">
           <div
             className="modal-dialog modal-dialog-centered modal-md"
             role="document"
           >
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Share File</h5>
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
                 <div className="files-share-list">
                   <div className="files-cont">
                     <div className="file-type">
                       <span className="files-icon">
                         <i className="fa fa-file-pdf-o" />
                       </span>
                     </div>
                     <div className="files-info">
                       <span className="file-name text-ellipsis">
                         AHA Selfcare Mobile Application Test-Cases.xls
                       </span>
                       <span className="file-author">
                         <a href="#">Bernardo Galaviz</a>
                       </span>{" "}
                       <span className="file-date">May 31st at 6:53 PM</span>
                     </div>
                   </div>
                 </div>
                 <div className="form-group">
                   <label>Share With</label>
                   <input className="form-control" type="text" />
                 </div>
                 <div className="submit-section">
                   <button className="btn btn-primary submit-btn">Share</button>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/* /Share Files Modal */}
       </div>
       {/* /Page Wrapper */}
     </div>
     {/* /Main Wrapper */}
     {/* jQuery */}
     {/* Bootstrap Core JS */}
     {/* Slimscroll JS */}
     {/* Dropfiles JS */}
     {/* Custom JS */}
   </>
   
  
  )
}

export default ChatAdmin