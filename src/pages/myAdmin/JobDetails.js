import React from 'react'

function JobDetails() {
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
      <a id="toggle_btn" href="javascript:void(0);">
        <span className="bar-icon">
          <span />
          <span />
          <span />
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
        {/* Notifications */}
        <li className="nav-item dropdown">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <i className="fa fa-bell-o" />{" "}
            <span className="badge badge-pill">3</span>
          </a>
          <div className="dropdown-menu notifications">
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
                  <a href="activities.html">
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
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities.html">
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
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities.html">
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
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities.html">
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
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities.html">
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
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="activities.html">View all Notifications</a>
            </div>
          </div>
        </li>
        {/* /Notifications */}
        {/* Message Notifications */}
        <li className="nav-item dropdown">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <i className="fa fa-comment-o" />{" "}
            <span className="badge badge-pill">8</span>
          </a>
          <div className="dropdown-menu notifications">
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
                  <a href="chat.html">
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
                  </a>
                </li>
                <li className="notification-message">
                  <a href="chat.html">
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
                  </a>
                </li>
                <li className="notification-message">
                  <a href="chat.html">
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
                  </a>
                </li>
                <li className="notification-message">
                  <a href="chat.html">
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
                  </a>
                </li>
                <li className="notification-message">
                  <a href="chat.html">
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
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="chat.html">View all Messages</a>
            </div>
          </div>
        </li>
        {/* /Message Notifications */}
        <li className="nav-item dropdown has-arrow main-drop">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <span className="user-img">
              <img src="assets/img/profiles/avatar-21.jpg" alt="" />
              <span className="status online" />
            </span>
            <span>Admin</span>
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="profile.html">
              My Profile
            </a>
            <a className="dropdown-item" href="settings.html">
              Settings
            </a>
            <a className="dropdown-item" href="login.html">
              Logout
            </a>
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
          <a className="dropdown-item" href="profile.html">
            My Profile
          </a>
          <a className="dropdown-item" href="settings.html">
            Settings
          </a>
          <a className="dropdown-item" href="login.html">
            Logout
          </a>
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
            <li className="submenu">
              <a href="#">
                <i className="la la-dashboard" /> <span> Dashboard</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="index.html">Admin Dashboard</a>
                </li>
                <li>
                  <a href="employee-dashboard.html">Employee Dashboard</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-cube" /> <span> Apps</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="chat.html">Chat</a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <span> Calls</span> <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="voice-call.html">Voice Call</a>
                    </li>
                    <li>
                      <a href="video-call.html">Video Call</a>
                    </li>
                    <li>
                      <a href="outgoing-call.html">Outgoing Call</a>
                    </li>
                    <li>
                      <a href="incoming-call.html">Incoming Call</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="events.html">Calendar</a>
                </li>
                <li>
                  <a href="contacts.html">Contacts</a>
                </li>
                <li>
                  <a href="inbox.html">Email</a>
                </li>
                <li>
                  <a href="file-manager.html">File Manager</a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>Employees</span>
            </li>
            <li className="submenu">
              <a href="#" className="noti-dot">
                <i className="la la-user" /> <span> Employees</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="employees.html">All Employees</a>
                </li>
                <li>
                  <a href="holidays.html">Holidays</a>
                </li>
                <li>
                  <a href="leaves.html">
                    Leaves (Admin){" "}
                    <span className="badge badge-pill bg-primary float-right">
                      1
                    </span>
                  </a>
                </li>
                <li>
                  <a href="leaves-employee.html">Leaves (Employee)</a>
                </li>
                <li>
                  <a href="leave-settings.html">Leave Settings</a>
                </li>
                <li>
                  <a href="attendance.html">Attendance (Admin)</a>
                </li>
                <li>
                  <a href="attendance-employee.html">Attendance (Employee)</a>
                </li>
                <li>
                  <a href="departments.html">Departments</a>
                </li>
                <li>
                  <a href="designations.html">Designations</a>
                </li>
                <li>
                  <a href="timesheet.html">Timesheet</a>
                </li>
                <li>
                  <a href="overtime.html">Overtime</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="clients.html">
                <i className="la la-users" /> <span>Clients</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-rocket" /> <span> Projects</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="projects.html">Projects</a>
                </li>
                <li>
                  <a href="tasks.html">Tasks</a>
                </li>
                <li>
                  <a href="task-board.html">Task Board</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="leads.html">
                <i className="la la-user-secret" /> <span>Leads</span>
              </a>
            </li>
            <li>
              <a href="tickets.html">
                <i className="la la-ticket" /> <span>Tickets</span>
              </a>
            </li>
            <li className="menu-title">
              <span>HR</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-files-o" /> <span> Accounts </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="estimates.html">Estimates</a>
                </li>
                <li>
                  <a href="invoices.html">Invoices</a>
                </li>
                <li>
                  <a href="payments.html">Payments</a>
                </li>
                <li>
                  <a href="expenses.html">Expenses</a>
                </li>
                <li>
                  <a href="provident-fund.html">Provident Fund</a>
                </li>
                <li>
                  <a href="taxes.html">Taxes</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-money" /> <span> Payroll </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="salary.html"> Employee Salary </a>
                </li>
                <li>
                  <a href="salary-view.html"> Payslip </a>
                </li>
                <li>
                  <a href="payroll-items.html"> Payroll Items </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="policies.html">
                <i className="la la-file-pdf-o" /> <span>Policies</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-pie-chart" /> <span> Reports </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="expense-reports.html"> Expense Report </a>
                </li>
                <li>
                  <a href="invoice-reports.html"> Invoice Report </a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>Performance</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-graduation-cap" />{" "}
                <span> Performance </span> <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="performance-indicator.html">
                    {" "}
                    Performance Indicator{" "}
                  </a>
                </li>
                <li>
                  <a href="performance.html"> Performance Review </a>
                </li>
                <li>
                  <a href="performance-appraisal.html">
                    {" "}
                    Performance Appraisal{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-crosshairs" /> <span> Goals </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="goal-tracking.html"> Goal List </a>
                </li>
                <li>
                  <a href="goal-type.html"> Goal Type </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-edit" /> <span> Training </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="training.html"> Training List </a>
                </li>
                <li>
                  <a href="trainers.html"> Trainers</a>
                </li>
                <li>
                  <a href="training-type.html"> Training Type </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="promotion.html">
                <i className="la la-bullhorn" /> <span>Promotion</span>
              </a>
            </li>
            <li>
              <a href="resignation.html">
                <i className="la la-external-link-square" />{" "}
                <span>Resignation</span>
              </a>
            </li>
            <li>
              <a href="termination.html">
                <i className="la la-times-circle" /> <span>Termination</span>
              </a>
            </li>
            <li className="menu-title">
              <span>Administration</span>
            </li>
            <li>
              <a href="assets.html">
                <i className="la la-object-ungroup" /> <span>Assets</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-briefcase" /> <span> Jobs </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a className="active" href="jobs.html">
                    {" "}
                    Manage Jobs{" "}
                  </a>
                </li>
                <li>
                  <a href="job-applicants.html"> Applied Candidates </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="knowledgebase.html">
                <i className="la la-question" /> <span>Knowledgebase</span>
              </a>
            </li>
            <li>
              <a href="activities.html">
                <i className="la la-bell" /> <span>Activities</span>
              </a>
            </li>
            <li>
              <a href="users.html">
                <i className="la la-user-plus" /> <span>Users</span>
              </a>
            </li>
            <li>
              <a href="settings.html">
                <i className="la la-cog" /> <span>Settings</span>
              </a>
            </li>
            <li className="menu-title">
              <span>Pages</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-user" /> <span> Profile </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="profile.html"> Employee Profile </a>
                </li>
                <li>
                  <a href="client-profile.html"> Client Profile </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-key" /> <span> Authentication </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="login.html"> Login </a>
                </li>
                <li>
                  <a href="register.html"> Register </a>
                </li>
                <li>
                  <a href="forgot-password.html"> Forgot Password </a>
                </li>
                <li>
                  <a href="otp.html"> OTP </a>
                </li>
                <li>
                  <a href="lock-screen.html"> Lock Screen </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-exclamation-triangle" />{" "}
                <span> Error Pages </span> <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="error-404.html">404 Error </a>
                </li>
                <li>
                  <a href="error-500.html">500 Error </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-hand-o-up" /> <span> Subscriptions </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="subscriptions.html"> Subscriptions (Admin) </a>
                </li>
                <li>
                  <a href="subscriptions-company.html">
                    {" "}
                    Subscriptions (Company){" "}
                  </a>
                </li>
                <li>
                  <a href="subscribed-companies.html"> Subscribed Companies</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-columns" /> <span> Pages </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="search.html"> Search </a>
                </li>
                <li>
                  <a href="faq.html"> FAQ </a>
                </li>
                <li>
                  <a href="terms.html"> Terms </a>
                </li>
                <li>
                  <a href="privacy-policy.html"> Privacy Policy </a>
                </li>
                <li>
                  <a href="blank-page.html"> Blank Page </a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>UI Interface</span>
            </li>
            <li>
              <a href="components.html">
                <i className="la la-puzzle-piece" /> <span>Components</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-object-group" /> <span> Forms </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="form-basic-inputs.html">Basic Inputs </a>
                </li>
                <li>
                  <a href="form-input-groups.html">Input Groups </a>
                </li>
                <li>
                  <a href="form-horizontal.html">Horizontal Form </a>
                </li>
                <li>
                  <a href="form-vertical.html"> Vertical Form </a>
                </li>
                <li>
                  <a href="form-mask.html"> Form Mask </a>
                </li>
                <li>
                  <a href="form-validation.html"> Form Validation </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-table" /> <span> Tables </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="tables-basic.html">Basic Tables </a>
                </li>
                <li>
                  <a href="data-tables.html">Data Table </a>
                </li>
              </ul>
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
              <h3 className="page-title">Job Details</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Job Details</li>
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
                data-target="#edit_job"
              >
                Edit
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
                <p className="text-truncate">
                  {" "}
                  818-978-7102
                  <br />{" "}
                  <a
                    href="mailto:danielporter@example.com"
                    title="danielporter@example.com"
                  >
                    danielporter@example.com
                  </a>
                  <br />{" "}
                  <a
                    href="https://www.example.com"
                    target="_blank"
                    title="https://www.example.com"
                  >
                    https://www.example.com
                  </a>
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
      {/* Edit Job Modal */}
      <div id="edit_job" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Job</h5>
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
                      <label>Job Title</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Web Developer"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Department</label>
                      <select className="select">
                        <option>-</option>
                        <option selected="">Web Development</option>
                        <option>Application Development</option>
                        <option>IT Management</option>
                        <option>Accounts Management</option>
                        <option>Support Management</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Location</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="California"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>No of Vacancies</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={5}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Experience</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="2 Years"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Age</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="-"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Salary From</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="32k"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Salary To</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="38k"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Type</label>
                      <select className="select">
                        <option selected="">Full Time</option>
                        <option>Part Time</option>
                        <option>Internship</option>
                        <option>Temporary</option>
                        <option>Remote</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Status</label>
                      <select className="select">
                        <option selected="">Open</option>
                        <option>Closed</option>
                        <option>Cancelled</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Start Date</label>
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        defaultValue="3 Mar 2019"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Expired Date</label>
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        defaultValue="31 May 2019"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea className="form-control" defaultValue={""} />
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
      {/* /Edit Job Modal */}
    </div>
    {/* /Page Wrapper */}
  </div>
  {/* /Main Wrapper */}
  {/* jQuery */}
  {/* Bootstrap Core JS */}
  {/* Slimscroll JS */}
  {/* Select2 JS */}
  {/* Datatable JS */}
  {/* Datetimepicker JS */}
  {/* Custom JS */}
</>
    )
}

export default JobDetails