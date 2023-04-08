function Compose() {
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
                      <a href="inbox.html">
                        <i className="la la-home" /> <span>Back to Inbox</span>
                      </a>
                    </li>
                    <li>
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
                      <a href="#">
                        Draft <span className="mail-count">(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Trash</a>
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
                  <div className="row">
                    <div className="col-sm-12">
                      <h3 className="page-title">Compose</h3>
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="index.html">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Compose</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Page Header */}
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <form>
                          <div className="form-group">
                            <input
                              type="email"
                              placeholder="To"
                              className="form-control"
                            />
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="email"
                                  placeholder="Cc"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="email"
                                  placeholder="Bcc"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Subject"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              rows={4}
                              className="form-control summernote"
                              placeholder="Enter your message here"
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-group mb-0">
                            <div className="text-center">
                              <button className="btn btn-primary">
                                <span>Send</span> <i className="fa fa-send m-l-5" />
                              </button>
                              <button className="btn btn-success m-l-5" type="button">
                                <span>Draft</span>{" "}
                                <i className="fa fa-floppy-o m-l-5" />
                              </button>
                              <button className="btn btn-success m-l-5" type="button">
                                <span>Delete</span>{" "}
                                <i className="fa fa-trash-o m-l-5" />
                              </button>
                            </div>
                          </div>
                        </form>
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
          {/* Summernote JS */}
          {/* Select2 JS */}
          {/* Custom JS */}
        </>
        
     
     )
   }
   
   export default Compose