import React from 'react'

function SalarySettings() {
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
        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="home.html">
                <i className="la la-home" /> <span>Back to Home</span>
              </a>
            </li>
            <li className="menu-title">Settings</li>
            <li>
              <a href="settings.html">
                <i className="la la-building" /> <span>Company Settings</span>
              </a>
            </li>
            <li>
              <a href="localization.html">
                <i className="la la-clock-o" /> <span>Localization</span>
              </a>
            </li>
            <li>
              <a href="theme-settings.html">
                <i className="la la-photo" /> <span>Theme Settings</span>
              </a>
            </li>
            <li>
              <a href="roles-permissions.html">
                <i className="la la-key" /> <span>Roles &amp; Permissions</span>
              </a>
            </li>
            <li>
              <a href="email-settings.html">
                <i className="la la-at" /> <span>Email Settings</span>
              </a>
            </li>
            <li>
              <a href="invoice-settings.html">
                <i className="la la-pencil-square" />{" "}
                <span>Invoice Settings</span>
              </a>
            </li>
            <li className="active">
              <a href="salary-settings.html">
                <i className="la la-money" /> <span>Salary Settings</span>
              </a>
            </li>
            <li>
              <a href="notifications-settings.html">
                <i className="la la-globe" /> <span>Notifications</span>
              </a>
            </li>
            <li>
              <a href="change-password.html">
                <i className="la la-lock" /> <span>Change Password</span>
              </a>
            </li>
            <li>
              <a href="leave-type.html">
                <i className="la la-cogs" /> <span>Leave Type</span>
              </a>
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
          <div className="col-md-8 offset-md-2">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Salary Settings</h3>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <form>
              {/* DA and HRA Settings */}
              <div className="settings-widget">
                <div className="h3 card-title with-switch">
                  DA and HRA
                  <div className="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox"
                      id="switch_hra"
                      defaultChecked=""
                    />
                    <label className="onoffswitch-label" htmlFor="switch_hra">
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>DA (%)</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>HRA (%)</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              {/* /DA and HRA Settings */}
              {/* Provident Fund Settings */}
              <div className="settings-widget">
                <div className="h3 card-title with-switch">
                  Provident Fund Settings
                  <div className="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox"
                      id="switch_pf"
                      defaultChecked=""
                    />
                    <label className="onoffswitch-label" htmlFor="switch_pf">
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Employee Share (%)</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Organization Share (%)</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Provident Fund Settings */}
              {/* ESI Settings */}
              <div className="settings-widget">
                <div className="h3 card-title with-switch">
                  ESI Settings
                  <div className="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox"
                      id="switch_esi"
                    />
                    <label className="onoffswitch-label" htmlFor="switch_esi">
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Employee Share (%)</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Organization Share (%)</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              {/* /ESI Settings */}
              {/* TDS Settings */}
              <div className="settings-widget">
                <div className="h3 card-title with-switch">
                  TDS&nbsp;{" "}
                  <small className="form-text text-muted">Annual Salary</small>
                  <div className="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox"
                      id="switch_tds"
                    />
                    <label className="onoffswitch-label" htmlFor="switch_tds">
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="row row-sm">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Salary From</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Salary To</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="form-group">
                      <label>%</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="form-group">
                      <label className="d-none d-sm-block">&nbsp;</label>
                      <button
                        className="btn btn-danger btn-block set-btn"
                        type="button"
                      >
                        <i className="fa fa-trash-o" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row row-sm">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Salary From</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Salary To</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="form-group">
                      <label>%</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="form-group">
                      <label className="d-none d-sm-block">&nbsp;</label>
                      <button
                        className="btn btn-danger btn-block set-btn"
                        type="button"
                      >
                        <i className="fa fa-trash-o" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row row-sm">
                  <div className="col-sm-2 ml-auto">
                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-block"
                        type="button"
                      >
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /TDS Settings */}
              {/* Submit Button */}
              <div className="submit-section">
                <button className="btn btn-primary submit-btn" type="submit">
                  Save
                </button>
              </div>
              {/* /Submit Button */}
            </form>
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

export default SalarySettings