import React from 'react'

function FileManager() {
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
                    <a className="active" href="file-manager.html">
                      File Manager
                    </a>
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
                    <a href="jobs.html"> Manage Jobs </a>
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