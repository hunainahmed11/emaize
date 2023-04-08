import React from 'react'

function Taskz() {
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
            <li className="menu-title">
              Projects{" "}
              <a href="#" data-toggle="modal" data-target="#create_project">
                <i className="fa fa-plus" />
              </a>
            </li>
            <li>
              <a href="tasks.html">Project Management</a>
            </li>
            <li className="active">
              <a href="tasks.html">Hospital Administration</a>
            </li>
            <li>
              <a href="tasks.html">Video Calling App</a>
            </li>
            <li>
              <a href="tasks.html">Office Management</a>
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
          <div className="col-lg-7 message-view task-view task-left-sidebar">
            <div className="chat-window">
              <div className="fixed-header">
                <div className="navbar">
                  <div className="float-left mr-auto">
                    <div className="add-task-btn-wrapper">
                      <span className="add-task-btn btn btn-white btn-sm">
                        Add Task
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
                  <ul className="nav float-right custom-menu">
                    <li className="nav-item dropdown dropdown-action">
                      <a
                        href=""
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-cog" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="javascript:void(0)">
                          Pending Tasks
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Completed Tasks
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          All Tasks
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
                      <div className="task-wrapper">
                        <div className="task-list-container">
                          <div className="task-list-body">
                            <ul id="task-list">
                              <li className="task">
                                <div className="task-container">
                                  <span className="task-action-btn task-check">
                                    <span
                                      className="action-circle large complete-btn"
                                      title="Mark Complete"
                                    >
                                      <i className="material-icons">check</i>
                                    </span>
                                  </span>
                                  <span
                                    className="task-label"
                                    contentEditable="true"
                                  >
                                    Patient appointment booking
                                  </span>
                                  <span className="task-action-btn task-btn-right">
                                    <span
                                      className="action-circle large"
                                      title="Assign"
                                    >
                                      <i className="material-icons">
                                        person_add
                                      </i>
                                    </span>
                                    <span
                                      className="action-circle large delete-btn"
                                      title="Delete Task"
                                    >
                                      <i className="material-icons">delete</i>
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="task">
                                <div className="task-container">
                                  <span className="task-action-btn task-check">
                                    <span
                                      className="action-circle large complete-btn"
                                      title="Mark Complete"
                                    >
                                      <i className="material-icons">check</i>
                                    </span>
                                  </span>
                                  <span
                                    className="task-label"
                                    contentEditable="true"
                                  >
                                    Appointment booking with payment gateway
                                  </span>
                                  <span className="task-action-btn task-btn-right">
                                    <span
                                      className="action-circle large"
                                      title="Assign"
                                    >
                                      <i className="material-icons">
                                        person_add
                                      </i>
                                    </span>
                                    <span
                                      className="action-circle large delete-btn"
                                      title="Delete Task"
                                    >
                                      <i className="material-icons">delete</i>
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="completed task">
                                <div className="task-container">
                                  <span className="task-action-btn task-check">
                                    <span
                                      className="action-circle large complete-btn"
                                      title="Mark Complete"
                                    >
                                      <i className="material-icons">check</i>
                                    </span>
                                  </span>
                                  <span className="task-label">
                                    Doctor available module
                                  </span>
                                  <span className="task-action-btn task-btn-right">
                                    <span
                                      className="action-circle large"
                                      title="Assign"
                                    >
                                      <i className="material-icons">
                                        person_add
                                      </i>
                                    </span>
                                    <span
                                      className="action-circle large delete-btn"
                                      title="Delete Task"
                                    >
                                      <i className="material-icons">delete</i>
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="task">
                                <div className="task-container">
                                  <span className="task-action-btn task-check">
                                    <span
                                      className="action-circle large complete-btn"
                                      title="Mark Complete"
                                    >
                                      <i className="material-icons">check</i>
                                    </span>
                                  </span>
                                  <span
                                    className="task-label"
                                    contentEditable="true"
                                  >
                                    Patient and Doctor video conferencing
                                  </span>
                                  <span className="task-action-btn task-btn-right">
                                    <span
                                      className="action-circle large"
                                      title="Assign"
                                    >
                                      <i className="material-icons">
                                        person_add
                                      </i>
                                    </span>
                                    <span
                                      className="action-circle large delete-btn"
                                      title="Delete Task"
                                    >
                                      <i className="material-icons">delete</i>
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="task">
                                <div className="task-container">
                                  <span className="task-action-btn task-check">
                                    <span
                                      className="action-circle large complete-btn"
                                      title="Mark Complete"
                                    >
                                      <i className="material-icons">check</i>
                                    </span>
                                  </span>
                                  <span
                                    className="task-label"
                                    contentEditable="true"
                                  >
                                    Private chat module
                                  </span>
                                  <span className="task-action-btn task-btn-right">
                                    <span
                                      className="action-circle large"
                                      title="Assign"
                                    >
                                      <i className="material-icons">
                                        person_add
                                      </i>
                                    </span>
                                    <span
                                      className="action-circle large delete-btn"
                                      title="Delete Task"
                                    >
                                      <i className="material-icons">delete</i>
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="task">
                                <div className="task-container">
                                  <span className="task-action-btn task-check">
                                    <span
                                      className="action-circle large complete-btn"
                                      title="Mark Complete"
                                    >
                                      <i className="material-icons">check</i>
                                    </span>
                                  </span>
                                  <span
                                    className="task-label"
                                    contentEditable="true"
                                  >
                                    Patient Profile add
                                  </span>
                                  <span className="task-action-btn task-btn-right">
                                    <span
                                      className="action-circle large"
                                      title="Assign"
                                    >
                                      <i className="material-icons">
                                        person_add
                                      </i>
                                    </span>
                                    <span
                                      className="action-circle large delete-btn"
                                      title="Delete Task"
                                    >
                                      <i className="material-icons">delete</i>
                                    </span>
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="task-list-footer">
                            <div className="new-task-wrapper">
                              <textarea
                                id="new-task"
                                placeholder="Enter new task here. . ."
                                defaultValue={""}
                              />
                              <span className="error-message hidden">
                                You need to enter a task first
                              </span>
                              <span
                                className="add-new-task-btn btn"
                                id="add-task"
                              >
                                Add Task
                              </span>
                              <span className="btn" id="close-task-panel">
                                Close
                              </span>
                            </div>
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
            className="col-lg-5 message-view task-chat-view task-right-sidebar"
            id="task_window"
          >
            <div className="chat-window">
              <div className="fixed-header">
                <div className="navbar">
                  <div className="task-assign">
                    <a
                      className="task-complete-btn"
                      id="task_complete"
                      href="javascript:void(0);"
                    >
                      <i className="material-icons">check</i> Mark Complete
                    </a>
                  </div>
                  <ul className="nav float-right custom-menu">
                    <li className="dropdown dropdown-action">
                      <a
                        href=""
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="material-icons">more_vert</i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="javascript:void(0)">
                          Delete Task
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Settings
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
                        <h4>Hospital Administration Phase 1</h4>
                        <div className="task-header">
                          <div className="assignee-info">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#assignee"
                            >
                              <div className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-02.jpg"
                                />
                              </div>
                              <div className="assigned-info">
                                <div className="task-head-title">
                                  Assigned To
                                </div>
                                <div className="task-assignee">John Doe</div>
                              </div>
                            </a>
                            <span className="remove-icon">
                              <i className="fa fa-close" />
                            </span>
                          </div>
                          <div className="task-due-date">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#assignee"
                            >
                              <div className="due-icon">
                                <span>
                                  <i className="material-icons">date_range</i>
                                </span>
                              </div>
                              <div className="due-info">
                                <div className="task-head-title">Due Date</div>
                                <div className="due-date">Mar 26, 2019</div>
                              </div>
                            </a>
                            <span className="remove-icon">
                              <i className="fa fa-close" />
                            </span>
                          </div>
                        </div>
                        <hr className="task-line" />
                        <div className="task-desc">
                          <div className="task-desc-icon">
                            <i className="material-icons">subject</i>
                          </div>
                          <div className="task-textarea">
                            <textarea
                              className="form-control"
                              placeholder="Description"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <hr className="task-line" />
                        <div className="task-information">
                          <span className="task-info-line">
                            <a className="task-user" href="#">
                              Lesley Grauer
                            </a>{" "}
                            <span className="task-info-subject">
                              created task
                            </span>
                          </span>
                          <div className="task-time">Jan 20, 2019</div>
                        </div>
                        <div className="task-information">
                          <span className="task-info-line">
                            <a className="task-user" href="#">
                              Lesley Grauer
                            </a>{" "}
                            <span className="task-info-subject">
                              added to Hospital Administration
                            </span>
                          </span>
                          <div className="task-time">Jan 20, 2019</div>
                        </div>
                        <div className="task-information">
                          <span className="task-info-line">
                            <a className="task-user" href="#">
                              Lesley Grauer
                            </a>{" "}
                            <span className="task-info-subject">
                              assigned to John Doe
                            </span>
                          </span>
                          <div className="task-time">Jan 20, 2019</div>
                        </div>
                        <hr className="task-line" />
                        <div className="task-information">
                          <span className="task-info-line">
                            <a className="task-user" href="#">
                              John Doe
                            </a>{" "}
                            <span className="task-info-subject">
                              changed the due date to Sep 28
                            </span>{" "}
                          </span>
                          <div className="task-time">9:09pm</div>
                        </div>
                        <div className="task-information">
                          <span className="task-info-line">
                            <a className="task-user" href="#">
                              John Doe
                            </a>{" "}
                            <span className="task-info-subject">
                              assigned to you
                            </span>
                          </span>
                          <div className="task-time">9:10pm</div>
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
                            <a href="#">John Doe</a> completed this task.
                          </span>{" "}
                          <span className="task-time">Today at 9:27am</span>
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
                              marked task as incomplete
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
                    className="avatar"
                    href="#"
                    data-toggle="tooltip"
                    title="Jeffery Lalor"
                  >
                    <img alt="" src="assets/img/profiles/avatar-16.jpg" />
                  </a>
                  <a
                    className="avatar"
                    href="#"
                    data-toggle="tooltip"
                    title="Richard Miles"
                  >
                    <img alt="" src="assets/img/profiles/avatar-09.jpg" />
                  </a>
                  <a
                    className="avatar"
                    href="#"
                    data-toggle="tooltip"
                    title="John Smith"
                  >
                    <img alt="" src="assets/img/profiles/avatar-10.jpg" />
                  </a>
                  <a
                    className="avatar"
                    href="#"
                    data-toggle="tooltip"
                    title="Mike Litorus"
                  >
                    <img alt="" src="assets/img/profiles/avatar-05.jpg" />
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
      {/* Create Project Modal */}
      <div
        id="create_project"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Project</h5>
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
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Project Name</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Client</label>
                      <select className="select">
                        <option>Global Technologies</option>
                        <option>Delta Infotech</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Start Date</label>
                      <div className="cal-icon">
                        <input
                          className="form-control datetimepicker"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>End Date</label>
                      <div className="cal-icon">
                        <input
                          className="form-control datetimepicker"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Rate</label>
                      <input
                        placeholder="$50"
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>&nbsp;</label>
                      <select className="select">
                        <option>Hourly</option>
                        <option>Fixed</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Priority</label>
                      <select className="select">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Add Project Leader</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Team Leader</label>
                      <div className="project-members">
                        <a
                          className="avatar"
                          href="#"
                          data-toggle="tooltip"
                          title="Jeffery Lalor"
                        >
                          <img alt="" src="assets/img/profiles/avatar-16.jpg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Add Team</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Team Members</label>
                      <div className="project-members">
                        <a
                          className="avatar"
                          href="#"
                          data-toggle="tooltip"
                          title="John Doe"
                        >
                          <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                        </a>
                        <a
                          className="avatar"
                          href="#"
                          data-toggle="tooltip"
                          title="Richard Miles"
                        >
                          <img alt="" src="assets/img/profiles/avatar-09.jpg" />
                        </a>
                        <a
                          className="avatar"
                          href="#"
                          data-toggle="tooltip"
                          title="John Smith"
                        >
                          <img alt="" src="assets/img/profiles/avatar-10.jpg" />
                        </a>
                        <a
                          className="avatar"
                          href="#"
                          data-toggle="tooltip"
                          title="Mike Litorus"
                        >
                          <img alt="" src="assets/img/profiles/avatar-05.jpg" />
                        </a>
                        <span className="all-team">+2</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    rows={4}
                    className="form-control summernote"
                    placeholder="Enter your message here"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <label>Upload Files</label>
                  <input className="form-control" type="file" />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Create Project Modal */}
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
                          <img alt="" src="assets/img/profiles/avatar-09.jpg" />
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
                          <img alt="" src="assets/img/profiles/avatar-10.jpg" />
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
                          <img alt="" src="assets/img/profiles/avatar-16.jpg" />
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
                          <img alt="" src="assets/img/profiles/avatar-16.jpg" />
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
                          <img alt="" src="assets/img/profiles/avatar-08.jpg" />
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
                          <img alt="" src="assets/img/profiles/avatar-26.jpg" />
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
  {/* Datetimepicker JS */}
  {/* Summernote JS */}
  {/* Task JS */}
  {/* Custom JS */}
</>
  )
}

export default Taskz