import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ClientsList() {
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
                 <h3 className="page-title">Clients</h3>
                 <ul className="breadcrumb">
                   <li className="breadcrumb-item">
                     <Link to="/Indexx">Dashboard</Link>
                   </li>
                   <li className="breadcrumb-item active">Clients</li>
                 </ul>
               </div>
               <div className="col-auto float-right ml-auto">
                 <a
                   href="#"
                   className="btn add-btn"
                   data-toggle="modal"
                   data-target="#add_client"
                 >
                   <i className="fa fa-plus" /> Add Client
                 </a>
                 <div className="view-icons">
                   <Link to="/Clientsz" className="grid-view btn btn-link">
                     <i className="fa fa-th" />
                   </Link>
                   <Link to="/ClientsList"
                     className="list-view btn btn-link active"
                   >
                     <i className="fa fa-bars" />
                   </Link>
                 </div>
               </div>
             </div>
           </div>
           {/* /Page Header */}
           {/* Search Filter */}
           <div className="row filter-row">
             <div className="col-sm-6 col-md-3">
               <div className="form-group form-focus">
                 <input type="text" className="form-control floating" />
                 <label className="focus-label">Client ID</label>
               </div>
             </div>
             <div className="col-sm-6 col-md-3">
               <div className="form-group form-focus">
                 <input type="text" className="form-control floating" />
                 <label className="focus-label">Client Name</label>
               </div>
             </div>
             <div className="col-sm-6 col-md-3">
               <div className="form-group form-focus select-focus">
                 <select className="select floating">
                   <option>Select Company</option>
                   <option>Global Technologies</option>
                   <option>Delta Infotech</option>
                 </select>
                 <label className="focus-label">Company</label>
               </div>
             </div>
             <div className="col-sm-6 col-md-3">
               <a href="#" className="btn btn-success btn-block">
                 {" "}
                 Search{" "}
               </a>
             </div>
           </div>
           {/* Search Filter */}
           <div className="row">
             <div className="col-md-12">
               <div className="table-responsive">
                 <table className="table table-striped custom-table datatable">
                   <thead>
                     <tr>
                       <th>Name</th>
                       <th>Client ID</th>
                       <th>Contact Person</th>
                       <th>Email</th>
                       <th>Mobile</th>
                       <th>Status</th>
                       <th className="text-right">Action</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <Link to="/ClientProfile" className="avatar">
                             <img src="assets/img/profiles/avatar-19.jpg" alt="" />
                           </Link>
                           <Link to="/ClientProfile">Global Technologies</Link>
                         </h2>
                       </td>
                       <td>CLT-0001</td>
                       <td>Barry Cuda</td>
                       <td>barrycuda@example.com</td>
                       <td>9876543210</td>
                       <td>
                         <div className="dropdown action-label">
                           <a
                             href="#"
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-success" />{" "}
                             Active{" "}
                           </a>
                           <div className="dropdown-menu">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Active
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Inactive
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
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <Link to="/ClientProfile" className="avatar">
                             <img src="assets/img/profiles/avatar-29.jpg" alt="" />
                           </Link>
                           <Link to="/ClientProfile">Delta Infotech</Link>
                         </h2>
                       </td>
                       <td>CLT-0002</td>
                       <td>Tressa Wexler</td>
                       <td>tressawexler@example.com</td>
                       <td>9876543210</td>
                       <td>
                         <div className="dropdown action-label">
                           <a
                             href="#"
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-danger" />{" "}
                             Inactive{" "}
                           </a>
                           <div className="dropdown-menu">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Active
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Inactive
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
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <Link to="/ClientProfile" className="avatar">
                             <img alt="" src="assets/img/profiles/avatar-07.jpg" />
                           </Link>
                           <Link to="/ClientProfile">Cream Inc</Link>
                         </h2>
                       </td>
                       <td>CLT-0003</td>
                       <td>Ruby Bartlett</td>
                       <td>rubybartlett@example.com</td>
                       <td>9876543210</td>
                       <td>
                         <div className="dropdown action-label">
                           <a
                             href="#"
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-success" />{" "}
                             Active{" "}
                           </a>
                           <div className="dropdown-menu">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Active
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Inactive
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
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <Link to="/ClientProfile" className="avatar">
                             <img alt="" src="assets/img/profiles/avatar-06.jpg" />
                           </Link>
                           <Link to="/ClientProfile">Wellware Company</Link>
                         </h2>
                       </td>
                       <td>CLT-0004</td>
                       <td>Misty Tison</td>
                       <td>mistytison@example.com</td>
                       <td>9876543210</td>
                       <td>
                         <div className="dropdown action-label">
                           <a
                             href="#"
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-success" />{" "}
                             Active{" "}
                           </a>
                           <div className="dropdown-menu">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Active
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Inactive
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
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <Link to="/ClientProfile" className="avatar">
                             <img src="assets/img/profiles/avatar-14.jpg" alt="" />
                           </Link>
                           <Link to="/ClientProfile">Mustang Technologies</Link>
                         </h2>
                       </td>
                       <td>CLT-0005</td>
                       <td>Daniel Deacon</td>
                       <td>danieldeacon@example.com</td>
                       <td>9876543210</td>
                       <td>
                         <div className="dropdown action-label">
                           <a
                             href="#"
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-success" />{" "}
                             Active{" "}
                           </a>
                           <div className="dropdown-menu">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Active
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Inactive
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
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <Link to="/ClientProfile" className="avatar">
                             <img src="assets/img/profiles/avatar-18.jpg" alt="" />
                           </Link>
                           <Link to="/ClientProfile">
                             International Software Inc
                           </Link>
                         </h2>
                       </td>
                       <td>CLT-0006</td>
                       <td>Walter Weaver</td>
                       <td>walterweaver@example.com</td>
                       <td>9876543210</td>
                       <td>
                         <div className="dropdown action-label">
                           <a
                             href="#"
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-success" />{" "}
                             Active{" "}
                           </a>
                           <div className="dropdown-menu">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Active
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Inactive
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
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <Link to="/ClientProfile" className="avatar">
                             <img src="assets/img/profiles/avatar-28.jpg" alt="" />
                           </Link>
                           <Link to="/ClientProfile">Mercury Software Inc</Link>
                         </h2>
                       </td>
                       <td>CLT-0007</td>
                       <td>Amanda Warren</td>
                       <td>amandawarren@example.com</td>
                       <td>9876543210</td>
                       <td>
                         <div className="dropdown action-label">
                           <a
                             href="#"
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-success" />{" "}
                             Active{" "}
                           </a>
                           <div className="dropdown-menu">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Active
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Inactive
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
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <Link to="/ClientProfile" className="avatar">
                             <img src="assets/img/profiles/avatar-22.jpg" alt="" />
                           </Link>
                           <Link to="/ClientProfile">Carlson Tech</Link>
                         </h2>
                       </td>
                       <td>CLT-0008</td>
                       <td>Betty Carlson</td>
                       <td>bettycarlson@example.com</td>
                       <td>9876543210</td>
                       <td>
                         <div className="dropdown action-label">
                           <a
                             href="#"
                             className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                             data-toggle="dropdown"
                             aria-expanded="false"
                           >
                             <i className="fa fa-dot-circle-o text-danger" />{" "}
                             Inactive{" "}
                           </a>
                           <div className="dropdown-menu">
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-success" />{" "}
                               Active
                             </a>
                             <a className="dropdown-item" href="#">
                               <i className="fa fa-dot-circle-o text-danger" />{" "}
                               Inactive
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
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
             </div>
           </div>
         </div>
         {/* /Page Content */}
         {/* Add Client Modal */}
         <div id="add_client" className="modal custom-modal fade" role="dialog">
           <div
             className="modal-dialog modal-dialog-centered modal-lg"
             role="document"
           >
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Add Client</h5>
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
                         <label className="col-form-label">
                           First Name <span className="text-danger">*</span>
                         </label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Last Name</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">
                           Username <span className="text-danger">*</span>
                         </label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">
                           Email <span className="text-danger">*</span>
                         </label>
                         <input className="form-control floating" type="email" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Password</label>
                         <input className="form-control" type="password" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Confirm Password</label>
                         <input className="form-control" type="password" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">
                           Client ID <span className="text-danger">*</span>
                         </label>
                         <input className="form-control floating" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Phone </label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Company Name</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                   </div>
                   <div className="table-responsive m-t-15">
                     <table className="table table-striped custom-table">
                       <thead>
                         <tr>
                           <th>Module Permission</th>
                           <th className="text-center">Read</th>
                           <th className="text-center">Write</th>
                           <th className="text-center">Create</th>
                           <th className="text-center">Delete</th>
                           <th className="text-center">Import</th>
                           <th className="text-center">Export</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <td>Projects</td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Tasks</td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Chat</td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Estimates</td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Invoices</td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Timing Sheets</td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                   <div className="submit-section">
                     <button className="btn btn-primary submit-btn">Submit</button>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
         {/* /Add Client Modal */}
         {/* Edit Client Modal */}
         <div id="edit_client" className="modal custom-modal fade" role="dialog">
           <div
             className="modal-dialog modal-dialog-centered modal-lg"
             role="document"
           >
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Edit Client</h5>
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
                         <label className="col-form-label">
                           First Name <span className="text-danger">*</span>
                         </label>
                         <input
                           className="form-control"
                           defaultValue="Barry"
                           type="text"
                         />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Last Name</label>
                         <input
                           className="form-control"
                           defaultValue="Cuda"
                           type="text"
                         />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">
                           Username <span className="text-danger">*</span>
                         </label>
                         <input
                           className="form-control"
                           defaultValue="barrycuda"
                           type="text"
                         />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">
                           Email <span className="text-danger">*</span>
                         </label>
                         <input
                           className="form-control floating"
                           defaultValue="barrycuda@example.com"
                           type="email"
                         />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Password</label>
                         <input
                           className="form-control"
                           defaultValue="barrycuda"
                           type="password"
                         />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Confirm Password</label>
                         <input
                           className="form-control"
                           defaultValue="barrycuda"
                           type="password"
                         />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">
                           Client ID <span className="text-danger">*</span>
                         </label>
                         <input
                           className="form-control floating"
                           defaultValue="CLT-0001"
                           type="text"
                         />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Phone </label>
                         <input
                           className="form-control"
                           defaultValue={9876543210}
                           type="text"
                         />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Company Name</label>
                         <input
                           className="form-control"
                           type="text"
                           defaultValue="Global Technologies"
                         />
                       </div>
                     </div>
                   </div>
                   <div className="table-responsive m-t-15">
                     <table className="table table-striped custom-table">
                       <thead>
                         <tr>
                           <th>Module Permission</th>
                           <th className="text-center">Read</th>
                           <th className="text-center">Write</th>
                           <th className="text-center">Create</th>
                           <th className="text-center">Delete</th>
                           <th className="text-center">Import</th>
                           <th className="text-center">Export</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <td>Projects</td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Tasks</td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Chat</td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Estimates</td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Invoices</td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Timing Sheets</td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked="" type="checkbox" />
                           </td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                   <div className="submit-section">
                     <button className="btn btn-primary submit-btn">Save</button>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
         {/* /Edit Client Modal */}
         {/* Delete Client Modal */}
         <div className="modal custom-modal fade" id="delete_client" role="dialog">
           <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
               <div className="modal-body">
                 <div className="form-header">
                   <h3>Delete Client</h3>
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
         {/* /Delete Client Modal */}
       </div>
       {/* /Page Wrapper */}
     </div>
     {/* /Main Wrapper */}
     {/* jQuery */}
     {/* Bootstrap Core JS */}
     {/* Slimscroll JS */}
     {/* Datatable JS */}
     {/* Select2 JS */}
     {/* Custom JS */}
   </>
   
  )
}

export default ClientsList