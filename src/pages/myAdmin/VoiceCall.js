import React from 'react'

function VoiceCall() {
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
            <li className="menu-title">
              <span>Chat Groups</span>{" "}
              <a href="#" data-toggle="modal" data-target="#add_group">
                <i className="fa fa-plus" />
              </a>
            </li>
            <li>
              <a href="chat.html">
                <span className="chat-avatar-sm user-img">
                  <img
                    className="rounded-circle"
                    alt=""
                    src="assets/img/user.jpg"
                  />
                </span>
                <span className="chat-user">#General</span>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <span className="chat-avatar-sm user-img">
                  <img
                    className="rounded-circle"
                    alt=""
                    src="assets/img/user.jpg"
                  />
                </span>
                <span className="chat-user">#Video Responsive Survey</span>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <span className="chat-avatar-sm user-img">
                  <img
                    className="rounded-circle"
                    alt=""
                    src="assets/img/user.jpg"
                  />
                </span>
                <span className="chat-user">#500rs</span>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <span className="chat-avatar-sm user-img">
                  <img
                    className="rounded-circle"
                    alt=""
                    src="assets/img/user.jpg"
                  />
                </span>
                <span className="chat-user">#warehouse</span>
              </a>
            </li>
            <li className="menu-title">
              Direct Chats{" "}
              <a href="#" data-toggle="modal" data-target="#add_chat_user">
                <i className="fa fa-plus" />
              </a>
            </li>
            <li>
              <a href="chat.html">
                <span className="chat-avatar-sm user-img">
                  <img
                    className="rounded-circle"
                    alt=""
                    src="assets/img/profiles/avatar-02.jpg"
                  />
                  <span className="status online" />
                </span>
                <span className="chat-user">John Doe</span>{" "}
                <span className="badge badge-pill bg-danger">1</span>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <span className="chat-avatar-sm user-img">
                  <img
                    className="rounded-circle"
                    alt=""
                    src="assets/img/profiles/avatar-09.jpg"
                  />
                  <span className="status offline" />
                </span>
                <span className="chat-user">Richard Miles</span>{" "}
                <span className="badge badge-pill bg-danger">7</span>
              </a>
            </li>
            <li>
              <a href="chat.html">
                <span className="chat-avatar-sm user-img">
                  <img
                    className="rounded-circle"
                    alt=""
                    src="assets/img/profiles/avatar-10.jpg"
                  />
                  <span className="status away" />
                </span>
                <span className="chat-user">John Smith</span>
              </a>
            </li>
            <li className="active">
              <a href="chat.html">
                <span className="chat-avatar-sm user-img">
                  <img
                    className="rounded-circle"
                    alt=""
                    src="assets/img/profiles/avatar-05.jpg"
                  />
                  <span className="status online" />
                </span>
                <span className="chat-user">Mike Litorus</span>{" "}
                <span className="badge badge-pill bg-danger">2</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Sidebar */}
    {/* Page Wrapper */}
    <div className="page-wrapper">
      {/* Main Row */}
      <div className="chat-main-row">
        <div className="chat-main-wrapper">
          <div className="col-lg-9 message-view task-view">
            <div className="chat-window">
              <div className="fixed-header">
                <div className="navbar">
                  <div className="user-details mr-auto">
                    <div className="float-left user-img">
                      <a
                        className="avatar"
                        href="profile.html"
                        title="Mike Litorus"
                      >
                        <img
                          src="assets/img/profiles/avatar-05.jpg"
                          alt=""
                          className="rounded-circle"
                        />
                        <span className="status online" />
                      </a>
                    </div>
                    <div className="user-info float-left">
                      <a href="profile.html">
                        <span>Mike Litorus</span>
                      </a>
                      <span className="last-seen">Online</span>
                    </div>
                  </div>
                  <ul className="nav float-right custom-menu">
                    <li className="nav-item">
                      <a
                        href="#task_window"
                        id="task_chat"
                        className="task-chat profile-rightbar float-right"
                      >
                        <i className="fa fa-comments" />
                      </a>
                    </li>
                    <li className="nav-item dropdown dropdown-action">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-cog" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
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
                  <div className="voice-call-avatar">
                    <img
                      src="assets/img/profiles/avatar-02.jpg"
                      alt=""
                      className="call-avatar"
                    />
                    <span className="username">John Doe</span>
                    <span className="call-timing-count">00:59</span>
                  </div>
                  <div className="call-users">
                    <ul>
                      <li>
                        <a href="#">
                          <img
                            src="assets/img/profiles/avatar-03.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <span className="call-mute">
                            <i className="fa fa-microphone-slash" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="assets/img/profiles/avatar-08.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <span className="call-mute">
                            <i className="fa fa-microphone-slash" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="assets/img/profiles/avatar-05.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <span className="call-mute">
                            <i className="fa fa-microphone-slash" />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chat-footer">
                <div className="call-icons">
                  <ul className="call-items">
                    <li className="call-item">
                      <a
                        href="#"
                        title="Enable Video"
                        data-placement="top"
                        data-toggle="tooltip"
                      >
                        <i className="fa fa-video-camera camera" />
                      </a>
                    </li>
                    <li className="call-item">
                      <a
                        href="#"
                        title="Mute"
                        data-placement="top"
                        data-toggle="tooltip"
                      >
                        <i className="fa fa-microphone microphone" />
                      </a>
                    </li>
                    <li className="call-item">
                      <a
                        href="#"
                        title="Add User"
                        data-placement="top"
                        data-toggle="tooltip"
                      >
                        <i className="fa fa-user-plus" />
                      </a>
                    </li>
                  </ul>
                  <div className="end-call">
                    <a href="javascript:void(0);">
                      <i className="material-icons">call_end</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 message-view chat-profile-view chat-sidebar"
            id="task_window"
          >
            <div className="chat-window video-window">
              <div className="fixed-header">
                <ul className="nav nav-tabs nav-tabs-bottom">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#calls_tab"
                      data-toggle="tab"
                    >
                      Calls
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#chats_tab" data-toggle="tab">
                      Chats
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#profile_tab"
                      data-toggle="tab"
                    >
                      Profile
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content chat-contents">
                <div
                  className="content-full tab-pane show active"
                  id="calls_tab"
                >
                  <div className="chat-wrap-inner">
                    <div className="chat-box">
                      <div className="chats">
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a href="profile.html" className="avatar">
                              <img
                                alt="John Doe"
                                src="assets/img/profiles/avatar-02.jpg"
                              />
                            </a>
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
                            <a href="profile.html" className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-02.jpg"
                              />
                            </a>
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
                            <a href="profile.html" className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-09.jpg"
                              />
                            </a>
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
                            <a href="profile.html" className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-02.jpg"
                              />
                            </a>
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
                <div className="content-full tab-pane" id="chats_tab">
                  <div className="chat-window">
                    <div className="chat-contents">
                      <div className="chat-content-wrap">
                        <div className="chat-wrap-inner">
                          <div className="chat-box">
                            <div className="chats">
                              <div className="chat chat-left">
                                <div className="chat-avatar">
                                  <a href="profile.html" className="avatar">
                                    <img
                                      alt=""
                                      src="assets/img/profiles/avatar-02.jpg"
                                    />
                                  </a>
                                </div>
                                <div className="chat-body">
                                  <div className="chat-bubble">
                                    <div className="chat-content">
                                      <span className="task-chat-user">
                                        John Doe
                                      </span>{" "}
                                      <span className="chat-time">8:35 am</span>
                                      <p>I'm just looking around.</p>
                                      <p>
                                        Will you tell me something about
                                        yourself?{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-avatar">
                                  <a href="profile.html" className="avatar">
                                    <img
                                      alt=""
                                      src="assets/img/profiles/avatar-02.jpg"
                                    />
                                  </a>
                                </div>
                                <div className="chat-body">
                                  <div className="chat-bubble">
                                    <div className="chat-content">
                                      <span className="task-chat-user">
                                        John Doe
                                      </span>{" "}
                                      <span className="file-attached">
                                        attached 3 files{" "}
                                        <i className="fa fa-paperclip" />
                                      </span>{" "}
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
                              <div className="chat-line">
                                <span className="chat-date">
                                  January 29th, 2019
                                </span>
                              </div>
                              <div className="chat chat-left">
                                <div className="chat-avatar">
                                  <a href="profile.html" className="avatar">
                                    <img
                                      alt=""
                                      src="assets/img/profiles/avatar-16.jpg"
                                    />
                                  </a>
                                </div>
                                <div className="chat-body">
                                  <div className="chat-bubble">
                                    <div className="chat-content">
                                      <span className="task-chat-user">
                                        Jeffery Lalor
                                      </span>{" "}
                                      <span className="file-attached">
                                        attached file{" "}
                                        <i className="fa fa-paperclip" />
                                      </span>{" "}
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
                                      alt=""
                                      src="assets/img/profiles/avatar-16.jpg"
                                    />
                                  </a>
                                </div>
                                <div className="chat-body">
                                  <div className="chat-bubble">
                                    <div className="chat-content">
                                      <span className="task-chat-user">
                                        Jeffery Lalor
                                      </span>{" "}
                                      <span className="file-attached">
                                        attached file{" "}
                                        <i className="fa fa-paperclip" />
                                      </span>{" "}
                                      <span className="chat-time">
                                        Today at 12:42pm
                                      </span>
                                      <ul className="attach-list">
                                        <li className="img-file">
                                          <div className="attach-img-download">
                                            <a href="#">avatar-1.jpg</a>
                                          </div>
                                          <div className="task-attach-img">
                                            <img
                                              src="assets/img/user.jpg"
                                              alt=""
                                            />
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
                                <button
                                  className="btn btn-primary"
                                  type="button"
                                >
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
                <div className="content-full tab-pane" id="profile_tab">
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
                          <div>
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
        </div>
      </div>
      {/* Main Row */}
      {/* Dragfiles Modal */}
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
      {/* /Dragfiles Modal */}
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
                          <img alt="" src="assets/img/profiles/avatar-16.jpg" />
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
                          <img alt="" src="assets/img/profiles/avatar-13.jpg" />
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
                          <img alt="" src="assets/img/profiles/avatar-02.jpg" />
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
  {/* Custom JS */}
</>

    )
}

export default VoiceCall