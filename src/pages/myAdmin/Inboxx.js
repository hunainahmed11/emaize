import React from 'react'

function Inboxx() {
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
            <li className="active">
              <a href="inbox.html">
                Inbox <span className="mail-count">(21)</span>
              </a>
            </li>
            <li>
              <a href="#">Starred</a>
            </li>
            <li>
              <a href="#">Sent Mail</a>
            </li>
            <li>
              <a href="#">Trash</a>
            </li>
            <li>
              <a href="#">
                Draft <span className="mail-count">(8)</span>
              </a>
            </li>
            <li className="menu-title">
              Label{" "}
              <a href="#">
                <i className="fa fa-plus" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-circle text-success mail-label" /> Work
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-circle text-danger mail-label" /> Office
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-circle text-warning mail-label" /> Personal
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
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Inbox</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Inbox</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a href="compose.html" className="btn add-btn">
                <i className="fa fa-plus" /> Compose
              </a>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-0">
              <div className="card-body">
                <div className="email-header">
                  <div className="row">
                    <div className="col top-action-left">
                      <div className="float-left">
                        <div className="btn-group dropdown-action">
                          <button
                            type="button"
                            className="btn btn-white dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Select <i className="fa fa-angle-down " />
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              All
                            </a>
                            <a className="dropdown-item" href="#">
                              None
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              Read
                            </a>
                            <a className="dropdown-item" href="#">
                              Unread
                            </a>
                          </div>
                        </div>
                        <div className="btn-group dropdown-action">
                          <button
                            type="button"
                            className="btn btn-white dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Actions <i className="fa fa-angle-down " />
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Reply
                            </a>
                            <a className="dropdown-item" href="#">
                              Forward
                            </a>
                            <a className="dropdown-item" href="#">
                              Archive
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              Mark As Read
                            </a>
                            <a className="dropdown-item" href="#">
                              Mark As Unread
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </div>
                        </div>
                        <div className="btn-group dropdown-action">
                          <button
                            type="button"
                            className="btn btn-white dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <i className="fa fa-folder" />{" "}
                            <i className="fa fa-angle-down" />
                          </button>
                          <div role="menu" className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Social
                            </a>
                            <a className="dropdown-item" href="#">
                              Forums
                            </a>
                            <a className="dropdown-item" href="#">
                              Updates
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              Spam
                            </a>
                            <a className="dropdown-item" href="#">
                              Trash
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              New
                            </a>
                          </div>
                        </div>
                        <div className="btn-group dropdown-action">
                          <button
                            type="button"
                            data-toggle="dropdown"
                            className="btn btn-white dropdown-toggle"
                          >
                            <i className="fa fa-tags" />{" "}
                            <i className="fa fa-angle-down" />
                          </button>
                          <div role="menu" className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Work
                            </a>
                            <a className="dropdown-item" href="#">
                              Family
                            </a>
                            <a className="dropdown-item" href="#">
                              Social
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              Primary
                            </a>
                            <a className="dropdown-item" href="#">
                              Promotions
                            </a>
                            <a className="dropdown-item" href="#">
                              Forums
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="float-left d-none d-sm-block">
                        <input
                          type="text"
                          placeholder="Search Messages"
                          className="form-control search-message"
                        />
                      </div>
                    </div>
                    <div className="col-auto top-action-right">
                      <div className="text-right">
                        <button
                          type="button"
                          title="Refresh"
                          data-toggle="tooltip"
                          className="btn btn-white d-none d-md-inline-block"
                        >
                          <i className="fa fa-refresh" />
                        </button>
                        <div className="btn-group">
                          <a className="btn btn-white">
                            <i className="fa fa-angle-left" />
                          </a>
                          <a className="btn btn-white">
                            <i className="fa fa-angle-right" />
                          </a>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-muted d-none d-md-inline-block">
                          Showing 10 of 112{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="email-content">
                  <div className="table-responsive">
                    <table className="table table-inbox table-hover">
                      <thead>
                        <tr>
                          <th colSpan={6}>
                            <input type="checkbox" className="checkbox-all" />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          className="unread clickable-row"
                          data-href="mail-view.html"
                        >
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa fa-star starred" />
                            </span>
                          </td>
                          <td className="name">John Doe</td>
                          <td className="subject">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit
                          </td>
                          <td>
                            <i className="fa fa-paperclip" />
                          </td>
                          <td className="mail-date">13:14</td>
                        </tr>
                        <tr
                          className="unread clickable-row"
                          data-href="mail-view.html"
                        >
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa fa-star-o" />
                            </span>
                          </td>
                          <td className="name">Envato Account</td>
                          <td className="subject">
                            Important account security update from Envato
                          </td>
                          <td />
                          <td className="mail-date">8:42</td>
                        </tr>
                        <tr
                          className="clickable-row"
                          data-href="mail-view.html"
                        >
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa fa-star-o" />
                            </span>
                          </td>
                          <td className="name">Twitter</td>
                          <td className="subject">
                            HRMS Bootstrap Admin Template
                          </td>
                          <td />
                          <td className="mail-date">30 Nov</td>
                        </tr>
                        <tr
                          className="unread clickable-row"
                          data-href="mail-view.html"
                        >
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa fa-star-o" />
                            </span>
                          </td>
                          <td className="name">Richard Parker</td>
                          <td className="subject">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit
                          </td>
                          <td />
                          <td className="mail-date">18 Sep</td>
                        </tr>
                        <tr
                          className="clickable-row"
                          data-href="mail-view.html"
                        >
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa fa-star-o" />
                            </span>
                          </td>
                          <td className="name">John Smith</td>
                          <td className="subject">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit
                          </td>
                          <td />
                          <td className="mail-date">21 Aug</td>
                        </tr>
                        <tr
                          className="clickable-row"
                          data-href="mail-view.html"
                        >
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa fa-star-o" />
                            </span>
                          </td>
                          <td className="name">me, Robert Smith (3)</td>
                          <td className="subject">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit
                          </td>
                          <td />
                          <td className="mail-date">1 Aug</td>
                        </tr>
                        <tr
                          className="unread clickable-row"
                          data-href="mail-view.html"
                        >
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa fa-star-o" />
                            </span>
                          </td>
                          <td className="name">Codecanyon</td>
                          <td className="subject">Welcome To Codecanyon</td>
                          <td />
                          <td className="mail-date">Jul 13</td>
                        </tr>
                        <tr
                          className="clickable-row"
                          data-href="mail-view.html"
                        >
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa fa-star-o" />
                            </span>
                          </td>
                          <td className="name">Richard Miles</td>
                          <td className="subject">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit
                          </td>
                          <td>
                            <i className="fa fa-paperclip" />
                          </td>
                          <td className="mail-date">May 14</td>
                        </tr>
                        <tr
                          className="unread clickable-row"
                          data-href="mail-view.html"
                        >
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa fa-star-o" />
                            </span>
                          </td>
                          <td className="name">John Smith</td>
                          <td className="subject">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit
                          </td>
                          <td />
                          <td className="mail-date">11/11/16</td>
                        </tr>
                        <tr
                          className="clickable-row"
                          data-href="mail-view.html"
                        >
                          <td>
                            <input type="checkbox" className="checkmail" />
                          </td>
                          <td>
                            <span className="mail-important">
                              <i className="fa fa-star starred" />
                            </span>
                          </td>
                          <td className="name">Mike Litorus</td>
                          <td className="subject">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit
                          </td>
                          <td />
                          <td className="mail-date">10/31/16</td>
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

export default Inboxx