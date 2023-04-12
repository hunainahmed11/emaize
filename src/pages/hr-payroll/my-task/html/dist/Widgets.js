import React from 'react'
import '../../../../../../src/assets/payroll/css/Emaize.style.min.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

function Widgets() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [isCollap, setIsCollap] = useState(true);
  

  const handleToggl = () => {
    setIsCollap(!isCollap);
  };

  const [isColla, setIsColla] = useState(true);
  

  const handleTogg = () => {
    setIsColla(!isColla);
  };

  const [isColl, setIsColl] = useState(true);
  

  const handleTo = () => {
    setIsColl(!isColl);
  };


  const [isCol, setIsCol] = useState(true);
  

  const handleT = () => {
    setIsCol(!isCol);
  };

  const [isCo, setIsCo] = useState(true);
  

  const handle = () => {
    setIsCo(!isCo);
  };

  const [isCollapsePayroll, setIsCollapsePayroll] = useState(true);
  

  const handlePayroll = () => {
    setIsCollapsePayroll(!isCollapsePayroll);
  };


  const [isCollapseTasks, setIsCollapseTasks] = useState(true);
  

  const handleTasks = () => {
    setIsCollapseTasks(!isCollapseTasks);
  };

  return (
<>
  <div id="mytask-layout" className="theme-indigo">
    {/* sidebar */}
    <div className="sidebar px-4 py-4 py-md-5 me-0">
    <div className="d-flex flex-column h-100">
      {/* <a href="index-2.html" className="mb-0 brand-icon"> */}
        <Link to="/Indx2" className="mb-0 brand-icon">

        <span className="logo-icon">
          <img
            src="favicon.png"
            alt=""
            style={{ width: "100%", margin: "0 auto", objectFit: "cover" }}
            />
        </span>
        <span className="logo-text">Emaize</span>
            </Link>
      {/* </a> */}
      {/* Menu: main ul */}
      <ul className="menu-list flex-grow-1 mt-3">

    
    
     

    <li className={isCollap ? "collapsed" : ""}>
      <a
        className="m-link"
        data-bs-toggle="collapse"
        data-bs-target="#project-Components"
        href="#"
        onClick={handleToggl}
      >
        <i className="icofont-home fs-5" />
        <span>Dashboard</span>{" "}
        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
      </a>
      {/* Menu: Sub menu ul */}
      <ul className={`sub-menu ${isCollap ? "collapse" : "show"}`} id="project-Components">
        <li>
          <NavLink to="/Indx2" className="ms-link" activeClassName="active">
            <span>Hr Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Project_Dashboard" className="ms-link" activeClassName="active">
            <span>Project Dashboard</span>
          </NavLink>
        </li>
      
      </ul>
    </li>
    <li className={isCollapsed ? "collapsed" : ""}>
      <a
        className="m-link"
        data-bs-toggle="collapse"
        data-bs-target="#project-Components"
        href="#"
        onClick={handleToggle}
      >
        <i className="icofont-briefcase" />
        <span>Projects</span>{" "}
        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
      </a>
      {/* Menu: Sub menu ul */}
      <ul className={`sub-menu ${isCollapsed ? "collapse" : "show"}`} id="project-Components">
        <li>
          <NavLink to="/Projects" className="ms-link" activeClassName="active">
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Task" className="ms-link" activeClassName="active">
            <span>Tasks</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/TimeSheet" className="ms-link" activeClassName="active">
            <span>Timesheet</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Team_Leader" className="ms-link" activeClassName="active">
            <span>Leaders</span>
          </NavLink>
        </li>
      </ul>
    </li>
       
        <li className={isColla ? "collapsed" : ""}>
      <a
        className="m-link"
        data-bs-toggle="collapse"
        data-bs-target="#project-Components"
        href="#"
        onClick={handleTogg}
      >
        <i className="icofont-ticket" />
        <span>Tickets</span>{" "}
        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
      </a>
      {/* Menu: Sub menu ul */}
      <ul className={`sub-menu ${isColla ? "collapse" : "show"}`} id="project-Components">
        <li>
          <NavLink to="/Tickets" className="ms-link" activeClassName="active">
            <span>Tickets View</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Ticket_Detail" className="ms-link" activeClassName="active">
            <span>Task Detail</span>
          </NavLink>
        </li>
      
      </ul>
    </li>

       <li className={isColl ? "collapsed" : ""}>
      <a
        className="m-link"
        data-bs-toggle="collapse"
        data-bs-target="#project-Components"
        href="#"
        onClick={handleTo}
      >
        <i className="icofont-user-male" />
        <span>Our clients</span>{" "}
        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
      </a>
      {/* Menu: Sub menu ul */}
      <ul className={`sub-menu ${isColl ? "collapse" : "show"}`} id="project-Components">
        <li>
          <NavLink to="/OurClients" className="ms-link" activeClassName="active">
            <span>Clients</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Profile" className="ms-link" activeClassName="active">
            <span>ClientProfile</span>
          </NavLink>
        </li>
      
      </ul>
    </li>

      

        <li className={isCol ? "collapsed" : ""}>
      <a
        className="m-link"
        data-bs-toggle="collapse"
        data-bs-target="#project-Components"
        href="#"
        onClick={handleT}
      >
        <i className="icofont-users-alt-5" />
        <span>Employees</span>{" "}
        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
      </a>
      {/* Menu: Sub menu ul */}
      <ul className={`sub-menu ${isCol ? "collapse" : "show"}`} id="project-Components">
        <li>
          <NavLink to="/Attendance_Employees" className="ms-link" activeClassName="active">
            <span>Attendance Employees</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Attendance" className="ms-link" activeClassName="active">
            <span>Attendance</span>
          </NavLink>
        </li>
        <li>
              <NavLink className="ms-link" to="Leave_Request"  activeClassName="active">
                {" "}
                <span>Leave Request</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="ms-link" to="Department"  activeClassName="active">
                {" "}
                <span>Department</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="ms-link" to="Loan">
                {" "}
                <span>Loan</span>
              </NavLink>
            </li>
      
      </ul>
    </li>

     

        <li className={isCo ? "collapsed" : ""}>
      <a
        className="m-link"
        data-bs-toggle="collapse"
        data-bs-target="#project-Components"
        href="#"
        onClick={handle}
      >
        <i className="icofont-ui-calculator" />
        <span>Accounts</span>{" "}
        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
      </a>
      {/* Menu: Sub menu ul */}
      <ul className={`sub-menu ${isCo ? "collapse" : "show"}`} id="project-Components">
      <li>
              {/* <a className="ms-link" href="invoices.html"> */}
              <NavLink to="/Invoices" className="ms-link"  activeClassName="active">
                <span>Invoices</span>{" "}
                </NavLink>
              {/* </a> */}
            </li>
            <li>
              {/* <a className="ms-link" href="payments.html"> */}
              <NavLink to="/Payments" className="ms-link"  activeClassName="active">
                <span>Payments</span>{" "}
                </NavLink>
              {/* </a> */}
            </li>
            <li>
              {/* <a className="ms-link" href="expenses.html"> */}
              <NavLink to="/Expenses" className="ms-link"  activeClassName="active">
                <span>Expenses</span>{" "}
              </NavLink>
            </li>
            <li>
              {/* <a className="ms-link" href="create-invoice.html"> */}
              <NavLink to="/Create_Invoice" className="ms-link" activeClassName="active">
                <span>Create Invoice</span>{" "}
              </NavLink>
            </li>
            <li>
              <NavLink className="ms-link" to="Loan"  activeClassName="active">
                {" "}
                <span>Loan</span>
              </NavLink>
            </li>
      
      </ul>
    </li>

       

        <li className={isCollapsePayroll ? "collapsed" : ""}>
      <a
        className="m-link"
        data-bs-toggle="collapse"
        data-bs-target="#project-Components"
        href="#"
        onClick={handlePayroll}
      >
        <i className="icofont-users-alt-5" />
        <span>Payroll</span>{" "}
        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
      </a>
      {/* Menu: Sub menu ul */}
      <ul className={`sub-menu ${isCollapsePayroll ? "collapse" : "show"}`} id="project-Components">
      <li>
              {/* <a className="ms-link" href="invoices.html"> */}
              <NavLink to="/SalarySlip" className="ms-link"  activeClassName="active">
                <span>Employee Salary</span>{" "}
                </NavLink>
              {/* </a> */}
            </li>
           
      
      </ul>
    </li>

      

        <li className={isCollapseTasks ? "collapsed" : ""}>
      <a
        className="m-link"
        data-bs-toggle="collapse"
        data-bs-target="#project-Components"
        href="#"
        onClick={handleTasks}
      >
        <i className="icofont-contrast" />
        <span>Tasks</span>{" "}
        <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
      </a>
      {/* Menu: Sub menu ul */}
      <ul className={`sub-menu ${isCollapseTasks ? "collapse" : "show"}`} id="project-Components">
      <li>
              {/* <a className="ms-link" href="invoices.html"> */}
              <NavLink to="/Calender" className="ms-link"  activeClassName="active">
                <span>Calendar</span>{" "}
                </NavLink>
              {/* </a> */}
            </li>
           
      
      </ul>
    </li>

        {/* <li class="collapsed">
                  <a class="m-link" data-bs-toggle="collapse" data-bs-target="#extra-Components" href="#">
                      <i class="icofont-code-alt"></i> <span>Other Pages</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a> */}
        {/* Menu: Sub menu ul */}
        {/* <ul class="sub-menu collapse" id="extra-Components">
                      <li><a class="ms-link" href="charts.html"> <span>Apex Charts</span></a></li>
                      <li><a class="ms-link" href="forms.html"><span>Forms Example</span></a></li>
                      <li><a class="ms-link" href="table.html"> <span>Table Example</span></a></li>
                      <li><a class="ms-link" href="icon.html"><span>Reviews Page</span></a></li>
                      <li><a class="ms-link" href="icon.html"><span></span>Icons</span></a></li>
                  </ul>
              </li> */}
        {/* <li><a class="m-link" href="ui-elements/ui-alerts.html"><i class="icofont-paint"></i> <span>UI Components</span></a></li> */}
      </ul>
      {/* Theme: Switch Theme */}
      <ul className="list-unstyled mb-0">
        <li className="d-flex align-items-center justify-content-center">
          <div className="form-check form-switch theme-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="theme-switch"
            />
            <label className="form-check-label" htmlFor="theme-switch">
              Enable Dark Mode!
            </label>
          </div>
        </li>
        {/* <li class="d-flex align-items-center justify-content-center">
              <div class="form-check form-switch theme-rtl">
                  <input class="form-check-input" type="checkbox" id="theme-rtl">
                  <label class="form-check-label" for="theme-rtl">Enable RTL Mode!</label>
              </div>
          </li> */}
      </ul>
      {/* Menu: menu collepce btn */}
      <button
        type="button"
        className="btn btn-link sidebar-mini-btn text-light"
      >
        <span className="ms-2">
          <i className="icofont-bubble-right" />
        </span>
      </button>
    </div>
  </div>
    {/* main body area */}
    <div className="main px-lg-4 px-md-4">
      {/* Body: Header */}
      <div className="header">
      <nav className="navbar py-4">
        <div className="container-xxl">
          {/* header rightbar icon */}
          <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
            <div className="d-flex">
              <Link
                className="nav-link text-primary collapsed"
                to="/Help"                
                title="Get Help"
              >
                <i className="icofont-info-square fs-5" />
              </Link>
              <div className="avatar-list avatar-list-stacked px-3">
                <img
                  className="avatar rounded-circle"
                  src="assets/images/xs/avatar2.jpg"
                  alt=""
                />
                <img
                  className="avatar rounded-circle"
                  src="assets/images/xs/avatar1.jpg"
                  alt=""
                />
                <img
                  className="avatar rounded-circle"
                  src="assets/images/xs/avatar3.jpg"
                  alt=""
                />
                <img
                  className="avatar rounded-circle"
                  src="assets/images/xs/avatar4.jpg"
                  alt=""
                />
                <img
                  className="avatar rounded-circle"
                  src="assets/images/xs/avatar7.jpg"
                  alt=""
                />
                <img
                  className="avatar rounded-circle"
                  src="assets/images/xs/avatar8.jpg"
                  alt=""
                />
                <span
                  className="avatar rounded-circle text-center pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#addUser"
                >
                  <i className="icofont-ui-add" />
                </span>
              </div>
            </div>
            <div className="dropdown notifications zindex-popover">
              <a
                className="nav-link dropdown-toggle pulse"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className="icofont-alarm fs-5" />
                <span className="pulse-ring" />
              </a>
              <div
                id="NotificationsDiv"
                className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-sm-end p-0 m-0"
              >
                <div className="card border-0 w380">
                  <div className="card-header border-0 p-3">
                    <h5 className="mb-0 font-weight-light d-flex justify-content-between">
                      <span>Notifications</span>
                      <span className="badge text-white">11</span>
                    </h5>
                  </div>
                  <div className="tab-content card-body">
                    <div className="tab-pane fade show active">
                      <ul className="list-unstyled list mb-0">
                        <li className="py-2 mb-1 border-bottom">
                          <a href="javascript:void(0);" className="d-flex">
                            <img
                              className="avatar rounded-circle"
                              src="assets/images/xs/avatar1.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Dylan Hunter
                                </span>{" "}
                                <small>2MIN</small>
                              </p>
                              <span className="">
                                Added 2021-02-19 Emaize ui/ux Design{" "}
                                <span className="badge bg-success">Review</span>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="py-2 mb-1 border-bottom">
                          <a href="javascript:void(0);" className="d-flex">
                            <div className="avatar rounded-circle no-thumbnail">
                              DF
                            </div>
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Diane Fisher
                                </span>{" "}
                                <small>13MIN</small>
                              </p>
                              <span className="">
                                Task added Get Started with Fast Cad project
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="py-2 mb-1 border-bottom">
                          <a href="javascript:void(0);" className="d-flex">
                            <img
                              className="avatar rounded-circle"
                              src="assets/images/xs/avatar3.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Andrea Gill
                                </span>{" "}
                                <small>1HR</small>
                              </p>
                              <span className="">
                                Quality Assurance Task Completed
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="py-2 mb-1 border-bottom">
                          <a href="javascript:void(0);" className="d-flex">
                            <img
                              className="avatar rounded-circle"
                              src="assets/images/xs/avatar5.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Diane Fisher
                                </span>{" "}
                                <small>13MIN</small>
                              </p>
                              <span className="">
                                Add New Project for App Developemnt
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="py-2 mb-1 border-bottom">
                          <a href="javascript:void(0);" className="d-flex">
                            <img
                              className="avatar rounded-circle"
                              src="assets/images/xs/avatar6.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Andrea Gill
                                </span>{" "}
                                <small>1HR</small>
                              </p>
                              <span className="">
                                Add Timesheet For Rhinestone project
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="py-2">
                          <a href="javascript:void(0);" className="d-flex">
                            <img
                              className="avatar rounded-circle"
                              src="assets/images/xs/avatar7.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Zoe Wright
                                </span>{" "}
                                <small className="">1DAY</small>
                              </p>
                              <span className="">Add Calander Event</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a className="card-footer text-center border-top-0" href="#">
                    {" "}
                    View all notifications
                  </a>
                </div>
              </div>
            </div>
            <div className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover">
              <div className="u-info me-2">
                <p className="mb-0 text-end line-height-sm ">
                  <span className="font-weight-bold">Dylan Hunter</span>
                </p>
                <small>Admin Profile</small>
              </div>
              <a
                className="nav-link dropdown-toggle pulse p-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
              >
                <img
                  className="avatar lg rounded-circle img-thumbnail"
                  src="assets/images/profile_av.png"
                  alt="profile"
                />
              </a>
              <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                <div className="card border-0 w280">
                  <div className="card-body pb-0">
                    <div className="d-flex py-1">
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/profile_av.png"
                        alt="profile"
                      />
                      <div className="flex-fill ms-3">
                        <p className="mb-0">
                          <span className="font-weight-bold">Dylan Hunter</span>
                        </p>
                        <small className="">Dylan.hunter@gmail.com</small>
                      </div>
                    </div>
                    <div>
                      <hr className="dropdown-divider border-dark" />
                    </div>
                  </div>
                  <div className="list-group m-2 ">
                    <Link
                      to="/Task"
                      className="list-group-item list-group-item-action border-0 "
                    >
                      <i className="icofont-tasks fs-5 me-3" />
                      My Task
                    </Link>
                    <Link
                      to="/Members"
                      className="list-group-item list-group-item-action border-0 "
                    >
                      <i className="icofont-ui-user-group fs-6 me-3" />
                      members
                    </Link>
                    <a
                      href="ui-elements/auth-signin.html"
                      className="list-group-item list-group-item-action border-0 "
                    >
                      <i className="icofont-logout fs-6 me-3" />
                      Signout
                    </a>
                    <div>
                      <hr className="dropdown-divider border-dark" />
                    </div>
                    <a
                      href="ui-elements/auth-signup.html"
                      className="list-group-item list-group-item-action border-0 "
                    >
                      <i className="icofont-contact-add fs-5 me-3" />
                      Add personal account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* menu toggler */}
          <button
            className="navbar-toggler p-0 border-0 menu-toggle order-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainHeader"
          >
            <span className="fa fa-bars" />
          </button>
          {/* main menu Search*/}
          <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
            <div className="input-group flex-nowrap input-group-lg">
              <button
                type="button"
                className="input-group-text"
                id="addon-wrapping"
              >
                <i className="fa fa-search" />
              </button>
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="search"
                aria-describedby="addon-wrapping"
              />
              <button
                type="button"
                className="input-group-text add-member-top"
                id="addon-wrappingone"
                data-bs-toggle="modal"
                data-bs-target="#addUser"
              >
                <i className="fa fa-plus" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
      {/* Body: Body */}
      <div className="body d-flex py-3">
        <div className="container-xxl">
          <div className="row g-3 mb-3 mt-3">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mt-5">
                    <div className="lesson_name">
                      <div className="project-block light-info-bg">
                        <i className="icofont-paint" />
                      </div>
                      <span className="small text-muted project_name fw-bold">
                        {" "}
                        Social Geek Made{" "}
                      </span>
                      <h6 className="mb-0 fw-bold  fs-6  mb-2">UI/UX Design</h6>
                    </div>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#editproject"
                      >
                        <i className="icofont-edit text-success" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteproject"
                      >
                        <i className="icofont-ui-delete text-danger" />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="avatar-list avatar-list-stacked pt-2">
                      <img
                        className="avatar rounded-circle sm"
                        src="assets/images/xs/avatar2.jpg"
                        alt=""
                      />
                      <img
                        className="avatar rounded-circle sm"
                        src="assets/images/xs/avatar1.jpg"
                        alt=""
                      />
                      <img
                        className="avatar rounded-circle sm"
                        src="assets/images/xs/avatar3.jpg"
                        alt=""
                      />
                      <img
                        className="avatar rounded-circle sm"
                        src="assets/images/xs/avatar4.jpg"
                        alt=""
                      />
                      <img
                        className="avatar rounded-circle sm"
                        src="assets/images/xs/avatar8.jpg"
                        alt=""
                      />
                      <span
                        className="avatar rounded-circle text-center pointer sm"
                        data-bs-toggle="modal"
                        data-bs-target="#addUser"
                      >
                        <i className="icofont-ui-add" />
                      </span>
                    </div>
                  </div>
                  <div className="row g-2 pt-4">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="icofont-paper-clip" />
                        <span className="ms-2">5 Attach</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="icofont-sand-clock" />
                        <span className="ms-2">4 Month</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="icofont-group-students " />
                        <span className="ms-2">5 Members</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="icofont-ui-text-chat" />
                        <span className="ms-2">10</span>
                      </div>
                    </div>
                  </div>
                  <div className="dividers-block" />
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h4 className="small fw-bold mb-0">Progress</h4>
                    <span className="small light-danger-bg  p-1 rounded">
                      <i className="icofont-ui-clock" /> 35 Days Left
                    </span>
                  </div>
                  <div className="progress" style={{ height: 8 }}>
                    <div
                      className="progress-bar bg-secondary"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-secondary ms-1"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-secondary ms-1"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow={10}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <div className="card teacher-card">
                <div className="card-body  d-flex">
                  <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                    <img
                      src="assets/images/lg/avatar3.jpg"
                      alt=""
                      className="avatar xl rounded-circle img-thumbnail shadow-sm"
                    />
                    <div className="about-info d-flex align-items-center mt-1 justify-content-center flex-column">
                      <h6 className="mb-0 fw-bold d-block fs-6 mt-2">CEO</h6>
                      <div
                        className="btn-group mt-2"
                        role="group"
                        aria-label="Basic outlined example"
                      >
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#editproject"
                        >
                          <i className="icofont-edit text-success" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteproject"
                        >
                          <i className="icofont-ui-delete text-danger" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
                    <h6 className="mb-0 mt-2  fw-bold d-block fs-6">
                      AgilSoft Tech
                    </h6>
                    <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                      Ryan Ogden
                    </span>
                    <div className="video-setting-icon mt-3 pt-3 border-top">
                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices.Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices.Vestibulum ante ipsum primis in
                        faucibus orci luctus et ultrices.Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices.faucibus orci
                        luctus et ultrices.Vestibulum ante ipsum primis in
                        faucibus orci luctus et ultrices.Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultricesfaucibus orci
                        luctus et ultrices.Vestibulum ante ipsum primis in
                        faucibus orci luctus et ultrices.Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices
                      </p>
                    </div>
                    <div className="d-flex flex-wrap align-items-center ct-btn-set">
                      <Link
                        to="/Chat"
                        className="btn btn-dark btn-sm mt-1 me-1"
                      >
                        <i className="icofont-ui-text-chat me-2 fs-6" />
                        Chat
                      </Link>
                      <Link
                        to="/Profile"
                        className="btn btn-dark btn-sm mt-1"
                      >
                        <i className="icofont-invisible me-2 fs-6" />
                        Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row End */}
          <div className="row g-3 mb-3 row-deck">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                  <h6 className="mb-0 fw-bold ">Employees Availability</h6>
                </div>
                <div className="card-body">
                  <div className="row g-4 row-deck">
                    <div className="col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body ">
                          <i className="icofont-checked fs-3" />
                          <h6 className="mt-3 mb-0 fw-bold small-14">
                            Attendance
                          </h6>
                          <span className="text-muted">400</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body ">
                          <i className="icofont-stopwatch fs-3" />
                          <h6 className="mt-3 mb-0 fw-bold small-14">
                            Late Coming
                          </h6>
                          <span className="text-muted">17</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body ">
                          <i className="icofont-ban fs-3" />
                          <h6 className="mt-3 mb-0 fw-bold small-14">Absent</h6>
                          <span className="text-muted">06</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body ">
                          <i className="icofont-beach-bed fs-3" />
                          <h6 className="mt-3 mb-0 fw-bold small-14">
                            Leave Apply
                          </h6>
                          <span className="text-muted">14</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                  <h6 className="mb-0 fw-bold ">Upcomming Interviews</h6>
                </div>
                <div className="card-body">
                  <div className="flex-grow-1">
                    <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                      <div className="d-flex align-items-center flex-fill">
                        <img
                          className="avatar lg rounded-circle img-thumbnail"
                          src="assets/images/lg/avatar2.jpg"
                          alt="profile"
                        />
                        <div className="d-flex flex-column ps-3">
                          <h6 className="fw-bold mb-0 small-14">
                            Natalie Gibson
                          </h6>
                          <span className="text-muted">Ui/UX Designer</span>
                        </div>
                      </div>
                      <div className="time-block text-truncate">
                        <i className="icofont-clock-time" /> 1.30 - 1:30
                      </div>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                      <div className="d-flex align-items-center flex-fill">
                        <img
                          className="avatar lg rounded-circle img-thumbnail"
                          src="assets/images/lg/avatar9.jpg"
                          alt="profile"
                        />
                        <div className="d-flex flex-column ps-3">
                          <h6 className="fw-bold mb-0 small-14">
                            Peter Piperg
                          </h6>
                          <span className="text-muted">Web Design</span>
                        </div>
                      </div>
                      <div className="time-block text-truncate">
                        <i className="icofont-clock-time" /> 9.00 - 1:30
                      </div>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                      <div className="d-flex align-items-center flex-fill">
                        <img
                          className="avatar lg rounded-circle img-thumbnail"
                          src="assets/images/lg/avatar12.jpg"
                          alt="profile"
                        />
                        <div className="d-flex flex-column ps-3">
                          <h6 className="fw-bold mb-0 small-14">
                            Robert Young
                          </h6>
                          <span className="text-muted">PHP Developer</span>
                        </div>
                      </div>
                      <div className="time-block text-truncate">
                        <i className="icofont-clock-time" /> 1.30 - 2:30
                      </div>
                    </div>
                    <div className="py-2 d-flex align-items-center flex-wrap">
                      <div className="d-flex align-items-center flex-fill">
                        <img
                          className="avatar lg rounded-circle img-thumbnail"
                          src="assets/images/lg/avatar8.jpg"
                          alt="profile"
                        />
                        <div className="d-flex flex-column ps-3">
                          <h6 className="fw-bold mb-0 small-14">
                            Victoria Vbell
                          </h6>
                          <span className="text-muted">IOS Developer</span>
                        </div>
                      </div>
                      <div className="time-block text-truncate">
                        <i className="icofont-clock-time" /> 2.00 - 3:30
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h6 className="fw-bold mb-3 text-danger">
                    Bug Image Atteched
                  </h6>
                  <div className="flex-grow-1">
                    <div className="py-2 d-flex align-items-center border-bottom">
                      <div className="d-flex ms-3 align-items-center flex-fill">
                        <span className="avatar lg light-danger-bg rounded-circle text-center d-flex align-items-center justify-content-center">
                          <i className="icofont-bug fs-5" />
                        </span>
                        <div className="d-flex flex-column ps-3">
                          <h6 className="fw-bold mb-0 small-14">Image3.jpg</h6>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn light-danger-bg text-end"
                      >
                        Download
                      </button>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom">
                      <div className="d-flex ms-3 align-items-center flex-fill">
                        <span className="avatar lg light-danger-bg rounded-circle text-center d-flex align-items-center justify-content-center">
                          <i className="icofont-bug fs-5" />
                        </span>
                        <div className="d-flex flex-column ps-3">
                          <h6 className="fw-bold mb-0 small-14">Image4.jpg</h6>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn light-danger-bg text-end"
                      >
                        Download
                      </button>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom">
                      <div className="d-flex ms-3 align-items-center flex-fill">
                        <span className="avatar lg light-danger-bg rounded-circle text-center d-flex align-items-center justify-content-center">
                          <i className="icofont-bug fs-5" />
                        </span>
                        <div className="d-flex flex-column ps-3">
                          <h6 className="fw-bold mb-0 small-14">Image6.jpg</h6>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn light-danger-bg text-end"
                      >
                        Download
                      </button>
                    </div>
                    <div className="py-2 d-flex align-items-center">
                      <div className="d-flex ms-3 align-items-center flex-fill">
                        <span className="avatar lg light-danger-bg rounded-circle text-center d-flex align-items-center justify-content-center">
                          <i className="icofont-bug fs-5" />
                        </span>
                        <div className="d-flex flex-column ps-3">
                          <h6 className="fw-bold mb-0 small-14">Image1.jpg</h6>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn light-danger-bg text-end"
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row End */}
          <div className="row g-3 mb-3">
            <div className="col-md-12">
              <div className="card light-danger-bg">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                  <h6 className="mb-0 fw-bold ">Top Perfrormers</h6>
                </div>
                <div className="card-body">
                  <div className="row g-3 align-items-center">
                    <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-2">
                      <p>
                        You have 140{" "}
                        <span className="fw-bold">influencers </span> in your
                        company.
                      </p>
                      <div className="d-flex  justify-content-between text-center">
                        <div className="">
                          <h3 className="fw-bold">350</h3>
                          <span className="small">New Task</span>
                        </div>
                        <div className="">
                          <h3 className="fw-bold">130</h3>
                          <span className="small">Task Completed</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-10">
                      <div className="row g-3 row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-6 row-deck top-perfomer">
                        <div className="col">
                          <div className="card shadow">
                            <div className="card-body text-center d-flex flex-column justify-content-center">
                              <img
                                className="avatar lg rounded-circle img-thumbnail mx-auto"
                                src="assets/images/lg/avatar2.jpg"
                                alt="profile"
                              />
                              <h6 className="fw-bold my-2 small-14">
                                Luke Short
                              </h6>
                              <span className="text-muted mb-2">@Short</span>
                              <h4 className="fw-bold text-primary fs-3">80%</h4>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card shadow">
                            <div className="card-body text-center d-flex flex-column justify-content-center">
                              <img
                                className="avatar lg rounded-circle img-thumbnail mx-auto"
                                src="assets/images/lg/avatar5.jpg"
                                alt="profile"
                              />
                              <h6 className="fw-bold my-2 small-14">
                                John Hard
                              </h6>
                              <span className="text-muted mb-2">@rdacre</span>
                              <h4 className="fw-bold text-primary fs-3">70%</h4>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card shadow">
                            <div className="card-body text-center d-flex flex-column justify-content-center">
                              <img
                                className="avatar lg rounded-circle img-thumbnail mx-auto"
                                src="assets/images/lg/avatar8.jpg"
                                alt="profile"
                              />
                              <h6 className="fw-bold my-2 small-14">
                                Paul Rees
                              </h6>
                              <span className="text-muted mb-2">@Rees</span>
                              <h4 className="fw-bold text-primary fs-3">77%</h4>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card shadow">
                            <div className="card-body text-center d-flex flex-column justify-content-center">
                              <img
                                className="avatar lg rounded-circle img-thumbnail mx-auto"
                                src="assets/images/lg/avatar9.jpg"
                                alt="profile"
                              />
                              <h6 className="fw-bold my-2 small-14">
                                Rachel Parr
                              </h6>
                              <span className="text-muted mb-2">@Parr</span>
                              <h4 className="fw-bold text-primary fs-3">85%</h4>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card shadow">
                            <div className="card-body text-center d-flex flex-column justify-content-center">
                              <img
                                className="avatar lg rounded-circle img-thumbnail mx-auto"
                                src="assets/images/lg/avatar12.jpg"
                                alt="profile"
                              />
                              <h6 className="fw-bold my-2 small-14">
                                Eric Reid
                              </h6>
                              <span className="text-muted mb-2">@Eric</span>
                              <h4 className="fw-bold text-primary fs-3">95%</h4>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card shadow">
                            <div className="card-body text-center d-flex flex-column justify-content-center">
                              <img
                                className="avatar lg rounded-circle img-thumbnail mx-auto"
                                src="assets/images/lg/avatar3.jpg"
                                alt="profile"
                              />
                              <h6 className="fw-bold my-2 small-14">
                                Jan Ince
                              </h6>
                              <span className="text-muted mb-2">@Ince</span>
                              <h4 className="fw-bold text-primary fs-3">97%</h4>
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
          {/* Row End */}
          <div className="row g-3 mb-3">
            <div className="col-md-4">
              <div className="card ">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="avatar lg  rounded-1 no-thumbnail bg-lightyellow color-defult">
                      <i className="icofont-optic fs-4" />
                    </div>
                    <div className="flex-fill ms-4 text-truncate">
                      <div className="text-truncate">Status</div>
                      <span className="badge bg-warning">In Progress</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="avatar lg  rounded-1 no-thumbnail bg-lightblue color-defult">
                      <i className="icofont-user fs-4" />
                    </div>
                    <div className="flex-fill ms-4 text-truncate">
                      <div className="text-truncate">Created Name</div>
                      <span className="fw-bold">Sally Graham</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="avatar lg  rounded-1 no-thumbnail bg-lightgreen color-defult">
                      <i className="icofont-price fs-4" />
                    </div>
                    <div className="flex-fill ms-4 text-truncate">
                      <div className="text-truncate">Priority</div>
                      <span className="badge bg-danger">High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row End */}
          <div className="row g-3 mb-3 row-deck">
            <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card ">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="avatar lg  rounded-1 no-thumbnail bg-lightyellow color-defult">
                      <i className="bi bi-journal-check fs-4" />
                    </div>
                    <div className="flex-fill ms-4">
                      <div className="">Total Task</div>
                      <h5 className="mb-0 ">122</h5>
                    </div>
                    <Link
                      to="/Task"
                      title="view-members"
                      className="btn btn-link text-decoration-none  rounded-1"
                    >
                      <i className="icofont-hand-drawn-right fs-2 " />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card ">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="avatar lg  rounded-1 no-thumbnail bg-lightblue color-defult">
                      <i className="bi bi-list-check fs-4" />
                    </div>
                    <div className="flex-fill ms-4">
                      <div className="">Completed Task</div>
                      <h5 className="mb-0 ">376</h5>
                    </div>
                    <Link
                      to="/Task"
                      title="space-used"
                      className="btn btn-link text-decoration-none  rounded-1"
                    >
                      <i className="icofont-hand-drawn-right fs-2 " />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card ">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="avatar lg  rounded-1 no-thumbnail bg-lightgreen color-defult">
                      <i className="bi bi-clipboard-data fs-4" />
                    </div>
                    <div className="flex-fill ms-4">
                      <div className="">Progress Task</div>
                      <h5 className="mb-0 ">74</h5>
                    </div>
                    <Link
                      to="/Task"
                      title="renewal-date"
                      className="btn btn-link text-decoration-none  rounded-1"
                    >
                      <i className="icofont-hand-drawn-right fs-2 " />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row End */}
          <div className="row g-3 mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 row-cols-xxl-4">
            <div className="col">
              <div className="card bg-primary">
                <div className="card-body text-white d-flex align-items-center">
                  <i className="icofont-data fs-3" />
                  <div className="d-flex flex-column ms-3">
                    <h6 className="mb-0">Total Projects</h6>
                    <span className="text-white">550</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-primary">
                <div className="card-body text-white d-flex align-items-center">
                  <i className="icofont-chart-flow fs-3" />
                  <div className="d-flex flex-column ms-3">
                    <h6 className="mb-0">Coming Projects</h6>
                    <span className="text-white">210</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-primary">
                <div className="card-body text-white d-flex align-items-center">
                  <i className="icofont-chart-flow-2 fs-3" />
                  <div className="d-flex flex-column ms-3">
                    <h6 className="mb-0">Progress Projects</h6>
                    <span className="text-white">8456 Files</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-primary">
                <div className="card-body text-white d-flex align-items-center">
                  <i className="icofont-tasks fs-3" />
                  <div className="d-flex flex-column ms-3">
                    <h6 className="mb-0">Finished Projects</h6>
                    <span className="text-white">88 Files</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row End */}
          <div className="row g-3 mb-3 row-deck">
            <div className="col-md-12 col-lg-8 col-xl-7 col-xxl-7">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-5 col-lg-6 order-md-2 ">
                      <div className="text-center p-4">
                        <img
                          src="assets/images/task-view.svg"
                          alt="..."
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 order-md-1 px-4">
                      <h3 className="fw-bold ">Dylan Hunter</h3>
                      <p className="line-height-custom">
                        Welcome back Dylan Hunter.Integer molestie, arcu non
                        porta sollicitudin, arcu felis aliquam urna, placerat
                        maximus lorem urna commodo sem. Pellentesque venenatis
                        leo quam, sed mattis sapien lobortis ut.placerat maximus
                        lorem urna commodo sem
                      </p>
                      <a
                        className="btn bg-secondary text-light btn-lg lift"
                        href="http://pixelwibes.com/"
                        target="_blank"
                      >
                        Free Inquire
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 col-xl-5 col-xxl-5">
              <div className="alert alert-primary p-3 mb-0 w-100">
                <h6 className="fw-bold mb-1">Create Project Credentials</h6>
                <p className="small mb-4">
                  Create a Project credentials now and never miss
                </p>
                <div className="my-3 ">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Username"
                  />
                </div>
                <div className="my-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="my-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                  />
                </div>
                <button className="btn btn-primary mt-2">
                  Create Credentials
                </button>
              </div>
            </div>
          </div>
          {/* Row End */}
        </div>
      </div>
      {/* Modal Members*/}
      <div
        className="modal fade"
        id="addUser"
        tabIndex={-1}
        aria-labelledby="addUserLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="addUserLabel">
                Employee Invitation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="inviteby_email">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    id="exampleInputEmail1"
                    aria-describedby="exampleInputEmail1"
                  />
                  <button
                    className="btn btn-dark"
                    type="button"
                    id="button-addon2"
                  >
                    Sent
                  </button>
                </div>
              </div>
              <div className="members_list">
                <h6 className="fw-bold ">Employee </h6>
                <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                  <li className="list-group-item py-3 text-center text-md-start">
                    <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                      <div className="no-thumbnail mb-2 mb-md-0">
                        <img
                          className="avatar lg rounded-circle"
                          src="assets/images/xs/avatar2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-fill ms-3 text-truncate">
                        <h6 className="mb-0  fw-bold">Rachel Carr(you)</h6>
                        <span className="text-muted">
                          rachel.carr@gmail.com
                        </span>
                      </div>
                      <div className="members-action">
                        <span className="members-role ">Admin</span>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn bg-transparent dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="icofont-ui-settings  fs-6" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="icofont-ui-password fs-6 me-2" />
                                ResetPassword
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="icofont-chart-line fs-6 me-2" />
                                ActivityReport
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item py-3 text-center text-md-start">
                    <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                      <div className="no-thumbnail mb-2 mb-md-0">
                        <img
                          className="avatar lg rounded-circle"
                          src="assets/images/xs/avatar3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-fill ms-3 text-truncate">
                        <h6 className="mb-0  fw-bold">
                          Lucas Baker
                          <a href="#" className="link-secondary ms-2">
                            (Resend invitation)
                          </a>
                        </h6>
                        <span className="text-muted">
                          lucas.baker@gmail.com
                        </span>
                      </div>
                      <div className="members-action">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn bg-transparent dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Members
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="icofont-check-circled" />
                                <span>All operations permission</span>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="fs-6 p-2 me-1" />
                                <span>Only Invite &amp; manage team</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn bg-transparent dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="icofont-ui-settings  fs-6" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="icofont-delete-alt fs-6 me-2" />
                                Delete Member
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item py-3 text-center text-md-start">
                    <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                      <div className="no-thumbnail mb-2 mb-md-0">
                        <img
                          className="avatar lg rounded-circle"
                          src="assets/images/xs/avatar8.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-fill ms-3 text-truncate">
                        <h6 className="mb-0  fw-bold">Una Coleman</h6>
                        <span className="text-muted">
                          una.coleman@gmail.com
                        </span>
                      </div>
                      <div className="members-action">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn bg-transparent dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Members
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="icofont-check-circled" />
                                <span>All operations permission</span>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="fs-6 p-2 me-1" />
                                <span>Only Invite &amp; manage team</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-group">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn bg-transparent dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="icofont-ui-settings  fs-6" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="icofont-ui-password fs-6 me-2" />
                                  ResetPassword
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="icofont-chart-line fs-6 me-2" />
                                  ActivityReport
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="icofont-delete-alt fs-6 me-2" />
                                  Suspend member
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="icofont-not-allowed fs-6 me-2" />
                                  Delete Member
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
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
  {/* Jquery Core Js */}
  {/* Jquery Page Js */}
</>

  )
}

export default Widgets