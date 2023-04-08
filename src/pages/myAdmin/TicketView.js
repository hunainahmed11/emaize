import React from 'react'

function TicketView() {
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
            <li className="active">
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
      <div className="chat-main-row">
        <div className="chat-main-wrapper">
          <div className="col-lg-8 message-view task-view">
            <div className="chat-window">
              <div className="fixed-header">
                <div className="navbar">
                  <div className="float-left ticket-view-details">
                    <div className="ticket-header">
                      <span>Status: </span>{" "}
                      <span className="badge badge-warning">New</span>{" "}
                      <span className="m-l-15 text-muted">Client: </span>
                      <a href="#">Delta Infotech</a>
                      <span className="m-l-15 text-muted">Created: </span>
                      <span>5 Jan 2019 07:21 AM </span>
                      <span className="m-l-15 text-muted">Created by:</span>
                      <span>
                        <a href="profile.html">John Doe</a>
                      </span>
                    </div>
                  </div>
                  <a
                    className="task-chat profile-rightbar float-right"
                    id="task_chat"
                    href="#task_window"
                  >
                    <i className="fa fa fa-comment" />
                  </a>
                </div>
              </div>
              <div className="chat-contents">
                <div className="chat-content-wrap">
                  <div className="chat-wrap-inner">
                    <div className="chat-box">
                      <div className="task-wrapper">
                        <div className="card">
                          <div className="card-body">
                            <div className="project-title">
                              <div className="m-b-20">
                                <span className="h5 card-title ">
                                  Laptop Issue
                                </span>
                                <div className="float-right ticket-priority">
                                  <span>Priority:</span>
                                  <div className="btn-group">
                                    <a
                                      href="#"
                                      className="badge badge-danger dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      Highest{" "}
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a className="dropdown-item" href="#">
                                        <i className="fa fa-dot-circle-o text-danger" />{" "}
                                        Highest priority
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="fa fa-dot-circle-o text-info" />{" "}
                                        High priority
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="fa fa-dot-circle-o text-primary" />{" "}
                                        Normal priority
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="fa fa-dot-circle-o text-success" />{" "}
                                        Low priority
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec vel elit neque. Class aptent taciti
                              sociosqu ad litora torquent per conubia nostra,
                              per inceptos himenaeos. Vestibulum sollicitudin
                              libero vitae est consectetur, a molestie tortor
                              consectetur. Aenean tincidunt interdum ipsum, id
                              pellentesque diam suscipit ut. Vivamus massa mi,
                              fermentum eget neque eget, imperdiet tristique
                              lectus. Proin at purus ut sem pellentesque tempor
                              sit amet ut lectus. Sed orci augue, placerat et
                              pretium ac, hendrerit in felis. Integer
                              scelerisque libero non metus commodo, et hendrerit
                              diam aliquet. Proin tincidunt porttitor ligula, a
                              tincidunt orci pellentesque nec. Ut ultricies
                              maximus nulla id consequat. Fusce eu consequat mi,
                              eu euismod ligula. Aliquam porttitor neque id
                              massa porttitor, a pretium velit vehicula. Morbi
                              volutpat tincidunt urna, vel ullamcorper ligula
                              fermentum at.{" "}
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec vel elit neque. Class aptent taciti
                              sociosqu ad litora torquent per conubia nostra,
                              per inceptos himenaeos. Vestibulum sollicitudin
                              libero vitae est consectetur, a molestie tortor
                              consectetur. Aenean tincidunt interdum ipsum, id
                              pellentesque diam suscipit ut. Vivamus massa mi,
                              fermentum eget neque eget, imperdiet tristique
                              lectus. Proin at purus ut sem pellentesque tempor
                              sit amet ut lectus. Sed orci augue, placerat et
                              pretium ac, hendrerit in felis. Integer
                              scelerisque libero non metus commodo, et hendrerit
                              diam aliquet. Proin tincidunt porttitor ligula, a
                              tincidunt orci pellentesque nec. Ut ultricies
                              maximus nulla id consequat. Fusce eu consequat mi,
                              eu euismod ligula. Aliquam porttitor neque id
                              massa porttitor, a pretium velit vehicula. Morbi
                              volutpat tincidunt urna, vel ullamcorper ligula
                              fermentum at.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title m-b-20">
                              Uploaded image files
                            </h5>
                            <div className="row">
                              <div className="col-md-3 col-sm-6">
                                <div className="uploaded-box">
                                  <div className="uploaded-img">
                                    <img
                                      src="assets/img/placeholder.jpg"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                  <div className="uploaded-img-name">
                                    demo.png
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-sm-6">
                                <div className="uploaded-box">
                                  <div className="uploaded-img">
                                    <img
                                      src="assets/img/placeholder.jpg"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                  <div className="uploaded-img-name">
                                    demo.png
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-sm-6">
                                <div className="uploaded-box">
                                  <div className="uploaded-img">
                                    <img
                                      src="assets/img/placeholder.jpg"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                  <div className="uploaded-img-name">
                                    demo.png
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-sm-6">
                                <div className="uploaded-box">
                                  <div className="uploaded-img">
                                    <img
                                      src="assets/img/placeholder.jpg"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                  <div className="uploaded-img-name">
                                    demo.png
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card mb-0">
                          <div className="card-body">
                            <h5 className="card-title m-b-20">
                              Uploaded files
                            </h5>
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
                                      <a href="#">Ticket_document.xls</a>
                                    </span>
                                    <span className="file-author">
                                      <a href="#">John Doe</a>
                                    </span>{" "}
                                    <span className="file-date">
                                      May 5th at 8:21 PM
                                    </span>
                                    <div className="file-size">
                                      Size: 14.8Mb
                                    </div>
                                  </div>
                                  <ul className="files-action">
                                    <li className="dropdown dropdown-action">
                                      <a
                                        href=""
                                        className="dropdown-toggle btn btn-link"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="material-icons">
                                          more_horiz
                                        </i>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-right">
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
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <div className="files-cont">
                                  <div className="file-type">
                                    <span className="files-icon">
                                      <i className="fa fa-file-pdf-o" />
                                    </span>
                                  </div>
                                  <div className="files-info">
                                    <span className="file-name text-ellipsis">
                                      <a href="#">Issue_report.xls</a>
                                    </span>
                                    <span className="file-author">
                                      <a href="#">John Doe</a>
                                    </span>{" "}
                                    <span className="file-date">
                                      May 5th at 5:41 PM
                                    </span>
                                    <div className="file-size">
                                      Size: 14.8Mb
                                    </div>
                                  </div>
                                  <ul className="files-action">
                                    <li className="dropdown dropdown-action">
                                      <a
                                        href=""
                                        className="dropdown-toggle btn btn-link"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="material-icons">
                                          more_horiz
                                        </i>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-right">
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
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0)"
                                        >
                                          Delete
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
                      <div className="notification-popup hide">
                        <p>
                          <span className="task" />
                          <span className="notification-text" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 message-view task-chat-view ticket-chat-view"
            id="task_window"
          >
            <div className="chat-window">
              <div className="fixed-header">
                <div className="navbar">
                  <div className="task-assign">
                    <span className="assign-title">Assigned to </span>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="John Doe"
                      className="avatar"
                    >
                      <img src="assets/img/profiles/avatar-02.jpg" alt="" />
                    </a>
                    <a
                      href="#"
                      className="followers-add"
                      title="Add Assignee"
                      data-toggle="modal"
                      data-target="#assignee"
                    >
                      <i className="material-icons">add</i>
                    </a>
                  </div>
                  <ul className="nav float-right custom-menu">
                    <li className="nav-item dropdown dropdown-action">
                      <a
                        href=""
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <div className="dropdown-menu">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#edit_ticket"
                        >
                          Edit Ticket
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#delete_ticket"
                        >
                          Delete Ticket
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-contents task-chat-contents">
                <div className="chat-content-wrap">
                  <div className="chat-wrap-inner">
                    <div className="chat-box">
                      <div className="chats">
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a href="profile.html" className="avatar">
                              <img
                                src="assets/img/profiles/avatar-02.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <span className="task-chat-user">John Doe</span>{" "}
                                <span className="chat-time">8:35 am</span>
                                <p>I'm just looking around.</p>
                                <p>
                                  Will you tell me something about yourself?{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="completed-task-msg">
                          <span className="task-success">
                            <a href="#">John Doe</a> closed this ticket.
                          </span>
                          <span className="task-time">Today at 9:27am</span>
                        </div>
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a href="profile.html" className="avatar">
                              <img
                                src="assets/img/profiles/avatar-02.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <span className="task-chat-user">John Doe</span>
                                <span className="file-attached">
                                  attached 3 files{" "}
                                  <i className="fa fa-paperclip" />
                                </span>
                                <span className="chat-time">
                                  Feb 17, 2019 at 4:32am
                                </span>
                                <ul className="attach-list">
                                  <li>
                                    <i className="fa fa-file" />{" "}
                                    <a href="#">project_document.avi</a>
                                  </li>
                                  <li>
                                    <i className="fa fa-file" />{" "}
                                    <a href="#">video_conferencing.psd</a>
                                  </li>
                                  <li>
                                    <i className="fa fa-file" />{" "}
                                    <a href="#">landing_page.psd</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a href="profile.html" className="avatar">
                              <img
                                src="assets/img/profiles/avatar-09.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <span className="task-chat-user">
                                  Jeffery Lalor
                                </span>
                                <span className="file-attached">
                                  attached file{" "}
                                  <i className="fa fa-paperclip" />
                                </span>
                                <span className="chat-time">
                                  Yesterday at 9:16pm
                                </span>
                                <ul className="attach-list">
                                  <li className="pdf-file">
                                    <i className="fa fa-file-pdf-o" />{" "}
                                    <a href="#">Document_2016.pdf</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a href="profile.html" className="avatar">
                              <img
                                src="assets/img/profiles/avatar-09.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <span className="task-chat-user">
                                  Jeffery Lalor
                                </span>
                                <span className="file-attached">
                                  attached file{" "}
                                  <i className="fa fa-paperclip" />
                                </span>
                                <span className="chat-time">
                                  Today at 12:42pm
                                </span>
                                <ul className="attach-list">
                                  <li className="img-file">
                                    <div className="attach-img-download">
                                      <a href="#">avatar-1.jpg</a>
                                    </div>
                                    <div className="task-attach-img">
                                      <img src="assets/img/user.jpg" alt="" />
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="task-information">
                          <span className="task-info-line">
                            <a className="task-user" href="#">
                              John Doe
                            </a>
                            <span className="task-info-subject">
                              marked ticket as reopened
                            </span>
                          </span>
                          <div className="task-time">1:16pm</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-footer">
                <div className="message-bar">
                  <div className="message-inner">
                    <a className="link attach-icon" href="#">
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
                          <button className="btn btn-primary" type="button">
                            <i className="fa fa-send" />
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-members task-followers">
                  <span className="followers-title">Followers</span>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    title="Richard Miles"
                    className="avatar"
                  >
                    <img src="assets/img/profiles/avatar-09.jpg" alt="" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    title="John Smith"
                    className="avatar"
                  >
                    <img src="assets/img/profiles/avatar-10.jpg" alt="" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    title="Mike Litorus"
                    className="avatar"
                  >
                    <img src="assets/img/profiles/avatar-05.jpg" alt="" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    title="Wilmer Deluna"
                    className="avatar"
                  >
                    <img src="assets/img/profiles/avatar-11.jpg" alt="" />
                  </a>
                  <a
                    href="#"
                    className="followers-add"
                    data-toggle="modal"
                    data-target="#task_followers"
                  >
                    <i className="material-icons">add</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Ticket Modal */}
      <div id="edit_ticket" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Ticket</h5>
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
                      <label>Ticket Subject</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Laptop Issue"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Ticket Id</label>
                      <input
                        className="form-control"
                        type="text"
                        readOnly=""
                        defaultValue="TKT-0001"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Assign Staff</label>
                      <select className="select">
                        <option>-</option>
                        <option selected="">Mike Litorus</option>
                        <option>John Smith</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Client</label>
                      <select className="select">
                        <option>-</option>
                        <option>Delta Infotech</option>
                        <option selected="">International Software Inc</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Priority</label>
                      <select className="select">
                        <option>High</option>
                        <option selected="">Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>CC</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Assign</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Ticket Assignee</label>
                      <div className="project-members">
                        <a title="John Smith" data-toggle="tooltip" href="#">
                          <img src="assets/img/profiles/avatar-10.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Add Followers</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Ticket Followers</label>
                      <div className="project-members">
                        <a
                          title="Richard Miles"
                          data-toggle="tooltip"
                          href="#"
                          className="avatar"
                        >
                          <img src="assets/img/profiles/avatar-09.jpg" alt="" />
                        </a>
                        <a
                          title="John Smith"
                          data-toggle="tooltip"
                          href="#"
                          className="avatar"
                        >
                          <img src="assets/img/profiles/avatar-10.jpg" alt="" />
                        </a>
                        <a
                          title="Mike Litorus"
                          data-toggle="tooltip"
                          href="#"
                          className="avatar"
                        >
                          <img src="assets/img/profiles/avatar-05.jpg" alt="" />
                        </a>
                        <a
                          title="Wilmer Deluna"
                          data-toggle="tooltip"
                          href="#"
                          className="avatar"
                        >
                          <img src="assets/img/profiles/avatar-11.jpg" alt="" />
                        </a>
                        <span className="all-team">+2</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <label>Upload Files</label>
                      <input className="form-control" type="file" />
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
      {/* /Edit Ticket Modal */}
      {/* Delete Ticket Modal */}
      <div className="modal custom-modal fade" id="delete_ticket" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Ticket</h3>
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
      {/* /Delete Ticket Modal */}
      {/* Assignee Modal */}
      <div id="assignee" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Assign to this task</h5>
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
                  placeholder="Search to add"
                  className="form-control search-input"
                  type="text"
                />
                <span className="input-group-append">
                  <button className="btn btn-primary">Search</button>
                </span>
              </div>
              <div>
                <ul className="chat-user-list">
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img src="assets/img/profiles/avatar-09.jpg" alt="" />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Richard Miles</div>
                          <span className="designation">Web Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img src="assets/img/profiles/avatar-10.jpg" alt="" />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">John Smith</div>
                          <span className="designation">Android Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img src="assets/img/profiles/avatar-10.jpg" alt="" />
                        </span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Jeffery Lalor</div>
                          <span className="designation">Team Leader</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Assign</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Assignee Modal */}
      {/* Task Followers Modal */}
      <div
        id="task_followers"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add followers to this task</h5>
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
                  placeholder="Search to add"
                  className="form-control search-input"
                  type="text"
                />
                <span className="input-group-append">
                  <button className="btn btn-primary">Search</button>
                </span>
              </div>
              <div>
                <ul className="chat-user-list">
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img src="assets/img/profiles/avatar-10.jpg" alt="" />
                        </span>
                        <div className="media-body media-middle text-nowrap">
                          <div className="user-name">Jeffery Lalor</div>
                          <span className="designation">Team Leader</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img src="assets/img/profiles/avatar-08.jpg" alt="" />
                        </span>
                        <div className="media-body media-middle text-nowrap">
                          <div className="user-name">Catherine Manseau</div>
                          <span className="designation">Android Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar">
                          <img src="assets/img/profiles/avatar-11.jpg" alt="" />
                        </span>
                        <div className="media-body media-middle text-nowrap">
                          <div className="user-name">Wilmer Deluna</div>
                          <span className="designation">Team Leader</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">
                  Add to Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Task Followers Modal */}
    </div>
    {/* /Page Wrapper */}
  </div>
  {/* /Main Wrapper */}
  {/* jQuery */}
  {/* Bootstrap Core JS */}
  {/* Slimscroll JS */}
  {/* Select2 JS */}
  {/* Custom JS */}
</>
    )
}

export default TicketView