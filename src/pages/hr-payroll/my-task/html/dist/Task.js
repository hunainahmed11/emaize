import React from 'react'
import '../../../../../../src/assets/payroll/css/Emaize.style.min.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

function Task() {

  
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
        <div className="body d-flex py-lg-3 py-md-2">
          <div className="container-xxl">
            <div className="row align-items-center">
              <div className="border-0 mb-4">
                <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                  <h3 className="fw-bold mb-0">Task Management</h3>
                  <div className="col-auto d-flex w-sm-100">
                    <button
                      type="button"
                      className="btn btn-dark btn-set-task w-sm-100"
                      data-bs-toggle="modal"
                      data-bs-target="#createtask"
                    >
                      <i className="icofont-plus-circle me-2 fs-6" />
                      Create Task
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Row end  */}
            <div className="row clearfix  g-3">
              <div className="col-lg-12 col-md-12 flex-column">
                <div className="row g-3 row-deck">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <div className="card">
                      <div className="card-header py-3">
                        <h6 className="mb-0 fw-bold ">Task Progress</h6>
                      </div>
                      <div className="card-body mem-list">
                        <div className="progress-count mb-4">
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="mb-0 fw-bold d-flex align-items-center">
                              UI/UX Design
                            </h6>
                            <span className="small text-muted">02/07</span>
                          </div>
                          <div className="progress" style={{ height: 10 }}>
                            <div
                              className="progress-bar light-info-bg"
                              role="progressbar"
                              style={{ width: "92%" }}
                              aria-valuenow={92}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="progress-count mb-4">
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="mb-0 fw-bold d-flex align-items-center">
                              Website Design
                            </h6>
                            <span className="small text-muted">01/03</span>
                          </div>
                          <div className="progress" style={{ height: 10 }}>
                            <div
                              className="progress-bar bg-lightgreen"
                              role="progressbar"
                              style={{ width: "60%" }}
                              aria-valuenow={60}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="progress-count mb-4">
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="mb-0 fw-bold d-flex align-items-center">
                              Quality Assurance
                            </h6>
                            <span className="small text-muted">02/07</span>
                          </div>
                          <div className="progress" style={{ height: 10 }}>
                            <div
                              className="progress-bar light-success-bg"
                              role="progressbar"
                              style={{ width: "40%" }}
                              aria-valuenow={40}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="progress-count mb-3">
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="mb-0 fw-bold d-flex align-items-center">
                              Development
                            </h6>
                            <span className="small text-muted">01/05</span>
                          </div>
                          <div className="progress" style={{ height: 10 }}>
                            <div
                              className="progress-bar light-orange-bg"
                              role="progressbar"
                              style={{ width: "40%" }}
                              aria-valuenow={40}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="progress-count mb-4">
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="mb-0 fw-bold d-flex align-items-center">
                              Testing
                            </h6>
                            <span className="small text-muted">01/08</span>
                          </div>
                          <div className="progress" style={{ height: 10 }}>
                            <div
                              className="progress-bar bg-lightyellow"
                              role="progressbar"
                              style={{ width: "30%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <div className="card">
                      <div className="card-header py-3">
                        <h6 className="mb-0 fw-bold ">Recent Activity</h6>
                      </div>
                      <div className="card-body mem-list">
                        <div className="timeline-item ti-danger border-bottom ms-2">
                          <div className="d-flex">
                            <span className="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">
                              RH
                            </span>
                            <div className="flex-fill ms-3">
                              <div className="mb-1">
                                <strong>Rechard Add New Task</strong>
                              </div>
                              <span className="d-flex text-muted">20Min ago</span>
                            </div>
                          </div>
                        </div>{" "}
                        {/* timeline item end  */}
                        <div className="timeline-item ti-info border-bottom ms-2">
                          <div className="d-flex">
                            <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-careys-pink">
                              SP
                            </span>
                            <div className="flex-fill ms-3">
                              <div className="mb-1">
                                <strong>Shipa Review Completed</strong>
                              </div>
                              <span className="d-flex text-muted">40Min ago</span>
                            </div>
                          </div>
                        </div>{" "}
                        {/* timeline item end  */}
                        <div className="timeline-item ti-info border-bottom ms-2">
                          <div className="d-flex">
                            <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-careys-pink">
                              MR
                            </span>
                            <div className="flex-fill ms-3">
                              <div className="mb-1">
                                <strong>Mora Task To Completed</strong>
                              </div>
                              <span className="d-flex text-muted">1Hr ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="timeline-item ti-success  ms-2">
                          <div className="d-flex">
                            <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-lavender-purple">
                              FL
                            </span>
                            <div className="flex-fill ms-3">
                              <div className="mb-1">
                                <strong>Fila Add New Task</strong>
                              </div>
                              <span className="d-flex text-muted">1Day ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* .card: My Timeline */}
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                    <div className="card">
                      <div className="card-header py-3">
                        <h6 className="mb-0 fw-bold ">Allocated Task Members</h6>
                      </div>
                      <div className="card-body">
                        <div className="flex-grow-1 mem-list">
                          <div className="py-2 d-flex align-items-center border-bottom">
                            <div className="d-flex ms-2 align-items-center flex-fill">
                              <img
                                src="assets/images/xs/avatar6.jpg"
                                className="avatar lg rounded-circle img-thumbnail"
                                alt="avatar"
                              />
                              <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Lucinda Massey</h6>
                                <span className="small text-muted">
                                  Ui/UX Designer
                                </span>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn light-danger-bg text-end"
                              data-bs-toggle="modal"
                              data-bs-target="#dremovetask"
                            >
                              Remove
                            </button>
                          </div>
                          <div className="py-2 d-flex align-items-center border-bottom">
                            <div className="d-flex ms-2 align-items-center flex-fill">
                              <img
                                src="assets/images/xs/avatar4.jpg"
                                className="avatar lg rounded-circle img-thumbnail"
                                alt="avatar"
                              />
                              <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Ryan Nolan</h6>
                                <span className="small text-muted">
                                  Website Designer
                                </span>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn light-danger-bg text-end"
                              data-bs-toggle="modal"
                              data-bs-target="#dremovetask"
                            >
                              Remove
                            </button>
                          </div>
                          <div className="py-2 d-flex align-items-center border-bottom">
                            <div className="d-flex ms-2 align-items-center flex-fill">
                              <img
                                src="assets/images/xs/avatar9.jpg"
                                className="avatar lg rounded-circle img-thumbnail"
                                alt="avatar"
                              />
                              <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Oliver Black</h6>
                                <span className="small text-muted">
                                  App Developer
                                </span>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn light-danger-bg text-end"
                              data-bs-toggle="modal"
                              data-bs-target="#dremovetask"
                            >
                              Remove
                            </button>
                          </div>
                          <div className="py-2 d-flex align-items-center border-bottom">
                            <div className="d-flex ms-2 align-items-center flex-fill">
                              <img
                                src="assets/images/xs/avatar10.jpg"
                                className="avatar lg rounded-circle img-thumbnail"
                                alt="avatar"
                              />
                              <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Adam Walker</h6>
                                <span className="small text-muted">
                                  Quality Checker
                                </span>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn light-danger-bg text-end"
                            >
                              Remove
                            </button>
                          </div>
                          <div className="py-2 d-flex align-items-center border-bottom">
                            <div className="d-flex ms-2 align-items-center flex-fill">
                              <img
                                src="assets/images/xs/avatar4.jpg"
                                className="avatar lg rounded-circle img-thumbnail"
                                alt="avatar"
                              />
                              <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Brian Skinner</h6>
                                <span className="small text-muted">
                                  Quality Checker
                                </span>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn light-danger-bg text-end"
                              data-bs-toggle="modal"
                              data-bs-target="#dremovetask"
                            >
                              Remove
                            </button>
                          </div>
                          <div className="py-2 d-flex align-items-center border-bottom">
                            <div className="d-flex ms-2 align-items-center flex-fill">
                              <img
                                src="assets/images/xs/avatar11.jpg"
                                className="avatar lg rounded-circle img-thumbnail"
                                alt="avatar"
                              />
                              <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Dan Short</h6>
                                <span className="small text-muted">
                                  App Developer
                                </span>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn light-danger-bg text-end"
                              data-bs-toggle="modal"
                              data-bs-target="#dremovetask"
                            >
                              Remove
                            </button>
                          </div>
                          <div className="py-2 d-flex align-items-center border-bottom">
                            <div className="d-flex ms-2 align-items-center flex-fill">
                              <img
                                src="assets/images/xs/avatar3.jpg"
                                className="avatar lg rounded-circle img-thumbnail"
                                alt="avatar"
                              />
                              <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Jack Glover</h6>
                                <span className="small text-muted">
                                  Ui/UX Designer
                                </span>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn light-danger-bg text-end"
                              data-bs-toggle="modal"
                              data-bs-target="#dremovetask"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* .card: My Timeline */}
                  </div>
                </div>
                <div className="row taskboard g-3 py-xxl-4">
                  {/* <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
                            <h6 class="fw-bold py-3 mb-0">Task Ready</h6>
                            <div class="planned_task">
                                <div class="dd" data-plugin="nestable">
                                    <ol class="dd-list">
                                        <li class="dd-item" data-id="1">
                                            <div class="dd-handle">
                                                <div class="task-info d-flex align-items-center justify-content-between">
                                                    <h6 class="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">UI/UX Design</h6>
                                                    <div class="task-priority d-flex flex-column align-items-center justify-content-center">
                                                        <div class="avatar-list avatar-list-stacked m-0">
                                                            <img class="avatar rounded-circle small-avt" src="assets/images/xs/avatar2.jpg" alt="">
                                                            <img class="avatar rounded-circle small-avt" src="assets/images/xs/avatar1.jpg" alt="">
                                                        </div>
                                                        <span class="badge bg-warning text-end mt-2">MEDIUM</span>
                                                    </div>
                                                </div>
                                                <p class="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                                                    nec scelerisque massa.</p>
                                                <div class="tikit-info row g-3 align-items-center">
                                                    <div class="col-sm">
                                                        <ul class="d-flex list-unstyled align-items-center flex-wrap">
                                                            <li class="me-2">
                                                                <div class="d-flex align-items-center">
                                                                    <i class="icofont-flag"></i>
                                                                    <span class="ms-1">25 Nov</span>
                                                                </div>
                                                            </li>
                                                            <li class="me-2">
                                                                <div class="d-flex align-items-center">
                                                                    
                                                                        <i class="icofont-ui-text-chat"></i>
                                                                        <span class="ms-1">4</span>
                                                                    
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="d-flex align-items-center">
                                                                    <i class="icofont-paper-clip"></i>
                                                                    <span class="ms-1">5</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm text-end">
                                                        <div class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> Social Geek Made </div>
                                                    </div>
                                                </div>
                                            </div>
    
                                        </li>
                                        <li class="dd-item" data-id="2">
                                            <div class="dd-handle">
                                                <div class="task-info d-flex align-items-center justify-content-between">
                                                    <h6 class="bg-lightgreen py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">Website Design
                                                    </h6>
                                                    <div class="task-priority d-flex flex-column align-items-center justify-content-center">
                                                        <div class="avatar-list avatar-list-stacked m-0">
                                                            <img class="avatar rounded-circle small-avt" src="assets/images/xs/avatar7.jpg" alt="">
                                                        </div>
                                                        <span class="badge bg-success text-end mt-2">LOW</span>
                                                    </div>
                                                </div>
                                                <p class="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                                                    nec scelerisque massa.</p>
                                                <div class="tikit-info row g-3 align-items-center">
                                                    <div class="col-sm">
                                                        <ul class="d-flex list-unstyled align-items-center flex-wrap">
                                                            <li class="me-2">
                                                                <div class="d-flex align-items-center">
                                                                    <i class="icofont-flag"></i>
                                                                    <span class="ms-1">12 Feb</span>
                                                                </div>
                                                            </li>
                                                            <li class="me-2">
                                                                <div class="d-flex align-items-center">
                                                                    
                                                                        <i class="icofont-ui-text-chat"></i>
                                                                        <span class="ms-1">3</span>
                                                                    
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="d-flex align-items-center">
                                                                    <i class="icofont-paper-clip"></i>
                                                                    <span class="ms-1">4</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm text-end">
                                                        
                                                        <div class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> Practice to Perfect </div>
                                                    </div>
                                                </div>
                                            </div>
    
                                        </li>
                                        <li class="dd-item" data-id="3">
                                            <div class="dd-handle">
                                                <div class="task-info d-flex align-items-center justify-content-between">
                                                    <h6 class="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">Quality Assurance
                                                    </h6>
                                                    <div class="task-priority d-flex flex-column align-items-center justify-content-center">
                                                        <div class="avatar-list avatar-list-stacked m-0">
                                                            <img class="avatar rounded-circle small-avt" src="assets/images/xs/avatar2.jpg" alt="">
                                                            <img class="avatar rounded-circle small-avt" src="assets/images/xs/avatar1.jpg" alt="">
                                                        </div>
                                                        <span class="badge bg-warning text-end mt-2">MEDIUM</span>
                                                    </div>
                                                </div>
                                                <p class="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                                                    nec scelerisque massa.</p>
                                                <div class="tikit-info row g-3 align-items-center">
                                                    <div class="col-sm">
                                                        <ul class="d-flex list-unstyled align-items-center flex-wrap">
                                                            <li class="me-2">
                                                                <div class="d-flex align-items-center">
                                                                    <i class="icofont-flag"></i>
                                                                    <span class="ms-1">17 Mar</span>
                                                                </div>
                                                            </li>
                                                            <li class="me-2">
                                                                <div class="d-flex align-items-center">
                                                                    
                                                                        <i class="icofont-ui-text-chat"></i>
                                                                        <span class="ms-1">15</span>
                                                                    
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="d-flex align-items-center">
                                                                    <i class="icofont-paper-clip"></i>
                                                                    <span class="ms-1">1</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm text-end">
                                                        
                                                        <div class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> Box of Crayons </div>
                                                    </div>
                                                </div>
                                            </div>
    
                                        </li>
                                        <li class="dd-item" data-id="4">
                                            <div class="dd-handle">
                                                <div class="task-info d-flex align-items-center justify-content-between">
                                                    <h6 class="light-orange-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">Development
                                                    </h6>
                                                    <div class="task-priority d-flex flex-column align-items-center justify-content-center">
                                                        <div class="avatar-list avatar-list-stacked m-0">
                                                            <img class="avatar rounded-circle small-avt" src="assets/images/xs/avatar6.jpg" alt="">
                                                            <img class="avatar rounded-circle small-avt" src="assets/images/xs/avatar5.jpg" alt="">
                                                        </div>
                                                        <span class="badge bg-warning text-end mt-2">MEDIUM</span>
                                                    </div>
                                                </div>
                                                <p class="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                                                    nec scelerisque massa.</p>
                                                <div class="tikit-info row g-3 align-items-center">
                                                    <div class="col-sm">
                                                        <ul class="d-flex list-unstyled align-items-center flex-wrap">
                                                            <li class="me-2">
                                                                <div class="d-flex align-items-center">
                                                                    <i class="icofont-flag"></i>
                                                                    <span class="ms-1">28 Nov</span>
                                                                </div>
                                                            </li>
                                                            <li class="me-2">
                                                                <div class="d-flex align-items-center">
                                                                    
                                                                        <i class="icofont-ui-text-chat"></i>
                                                                        <span class="ms-1">45</span>
                                                                    
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="d-flex align-items-center">
                                                                    <i class="icofont-paper-clip"></i>
                                                                    <span class="ms-1">1</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm text-end">
                                                        
                                                        <div class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> Gob Geeklords </div>
                                                    </div>
                                                </div>
                                            </div>
    
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div> */}
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
                    <h6 className="fw-bold py-3 mb-0">In Progress</h6>
                    <div className="progress_task">
                      <div className="dd" data-plugin="nestable">
                        <ol className="dd-list">
                          <li className="dd-item" data-id={1}>
                            <div className="dd-handle">
                              <div className="task-info d-flex align-items-center justify-content-between">
                                <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                                  Quality Assurance
                                </h6>
                                <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                  <div className="avatar-list avatar-list-stacked m-0">
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar2.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar1.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <span className="badge bg-warning text-end mt-2">
                                    MEDIUM
                                  </span>
                                </div>
                              </div>
                              <p className="py-2 mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. In id nec scelerisque massa.
                              </p>
                              <div className="tikit-info row g-3 align-items-center">
                                <div className="col-sm">
                                  <ul className="d-flex list-unstyled align-items-center flex-wrap">
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-flag" />
                                        <span className="ms-1">28 Mar</span>
                                      </div>
                                    </li>
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-ui-text-chat" />
                                        <span className="ms-1">5</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-paper-clip" />
                                        <span className="ms-1">5</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm text-end">
                                  <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                                    {" "}
                                    Box of Crayons{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dd-item" data-id={2}>
                            <div className="dd-handle">
                              <div className="task-info d-flex align-items-center justify-content-between">
                                <h6 className="bg-lightgreen py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                                  Website Design
                                </h6>
                                <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                  <div className="avatar-list avatar-list-stacked m-0">
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar8.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <span className="badge bg-success text-end mt-2">
                                    LOW
                                  </span>
                                </div>
                              </div>
                              <p className="py-2 mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. In id nec scelerisque massa.
                              </p>
                              <div className="tikit-info row g-3 align-items-center">
                                <div className="col-sm">
                                  <ul className="d-flex list-unstyled align-items-center flex-wrap">
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-flag" />
                                        <span className="ms-1">12 Feb</span>
                                      </div>
                                    </li>
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-ui-text-chat" />
                                        <span className="ms-1">3</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-paper-clip" />
                                        <span className="ms-1">4</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm text-end">
                                  <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                                    {" "}
                                    Practice to Perfect{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dd-item" data-id={3}>
                            <div className="dd-handle">
                              <div className="task-info d-flex align-items-center justify-content-between">
                                <h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                                  UI/UX Design
                                </h6>
                                <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                  <div className="avatar-list avatar-list-stacked m-0">
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar3.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar1.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <span className="badge bg-warning text-end mt-2">
                                    MEDIUM
                                  </span>
                                </div>
                              </div>
                              <p className="py-2 mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. In id nec scelerisque massa.
                              </p>
                              <div className="tikit-info row g-3 align-items-center">
                                <div className="col-sm">
                                  <ul className="d-flex list-unstyled align-items-center flex-wrap">
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-flag" />
                                        <span className="ms-1">03 Apr</span>
                                      </div>
                                    </li>
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-ui-text-chat" />
                                        <span className="ms-1">7</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-paper-clip" />
                                        <span className="ms-1">2</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm text-end">
                                  <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                                    {" "}
                                    Social Geek Made{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dd-item" data-id={4}>
                            <div className="dd-handle">
                              <div className="task-info d-flex align-items-center justify-content-between">
                                <h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                                  UI/UX Design
                                </h6>
                                <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                  <div className="avatar-list avatar-list-stacked m-0">
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar5.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar1.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <span className="badge bg-warning text-end mt-2">
                                    MEDIUM
                                  </span>
                                </div>
                              </div>
                              <p className="py-2 mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. In id nec scelerisque massa.
                              </p>
                              <div className="tikit-info row g-3 align-items-center">
                                <div className="col-sm">
                                  <ul className="d-flex list-unstyled align-items-center flex-wrap">
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-flag" />
                                        <span className="ms-1">25 Nov</span>
                                      </div>
                                    </li>
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-ui-text-chat" />
                                        <span className="ms-1">4</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-paper-clip" />
                                        <span className="ms-1">5</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm text-end">
                                  <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                                    {" "}
                                    Social Geek Made{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dd-item" data-id={5}>
                            <div className="dd-handle">
                              <div className="task-info d-flex align-items-center justify-content-between">
                                <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                                  Quality Assurance
                                </h6>
                                <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                  <div className="avatar-list avatar-list-stacked m-0">
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar4.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <span className="badge bg-danger text-end mt-2">
                                    High
                                  </span>
                                </div>
                              </div>
                              <p className="py-2 mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. In id nec scelerisque massa.
                              </p>
                              <div className="tikit-info row g-3 align-items-center">
                                <div className="col-sm">
                                  <ul className="d-flex list-unstyled align-items-center flex-wrap">
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-flag" />
                                        <span className="ms-1">27 Mar</span>
                                      </div>
                                    </li>
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-ui-text-chat" />
                                        <span className="ms-1">8</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-paper-clip" />
                                        <span className="ms-1">6</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm text-end">
                                  <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                                    {" "}
                                    Box of Crayons{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-0 mt-sm-0 mt-0">
                    <h6 className="fw-bold py-3 mb-0">Needs Review</h6>
                    <div className="review_task">
                      <div className="dd" data-plugin="nestable">
                        <ol className="dd-list">
                          <li className="dd-item" data-id={1}>
                            <div className="dd-handle">
                              <div className="task-info d-flex align-items-center justify-content-between">
                                <h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                                  UI/UX Design
                                </h6>
                                <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                  <div className="avatar-list avatar-list-stacked m-0">
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar3.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar1.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <span className="badge bg-warning text-end mt-2">
                                    MEDIUM
                                  </span>
                                </div>
                              </div>
                              <p className="py-2 mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. In id nec scelerisque massa.
                              </p>
                              <div className="tikit-info row g-3 align-items-center">
                                <div className="col-sm">
                                  <ul className="d-flex list-unstyled align-items-center flex-wrap">
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-flag" />
                                        <span className="ms-1">03 Apr</span>
                                      </div>
                                    </li>
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-ui-text-chat" />
                                        <span className="ms-1">7</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-paper-clip" />
                                        <span className="ms-1">2</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm text-end">
                                  <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                                    {" "}
                                    Social Geek Made{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dd-item" data-id={2}>
                            <div className="dd-handle">
                              <div className="task-info d-flex align-items-center justify-content-between">
                                <h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                                  UI/UX Design
                                </h6>
                                <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                  <div className="avatar-list avatar-list-stacked m-0">
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar5.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar1.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <span className="badge bg-warning text-end mt-2">
                                    MEDIUM
                                  </span>
                                </div>
                              </div>
                              <p className="py-2 mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. In id nec scelerisque massa.
                              </p>
                              <div className="tikit-info row g-3 align-items-center">
                                <div className="col-sm">
                                  <ul className="d-flex list-unstyled align-items-center flex-wrap">
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-flag" />
                                        <span className="ms-1">25 Nov</span>
                                      </div>
                                    </li>
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-ui-text-chat" />
                                        <span className="ms-1">4</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-paper-clip" />
                                        <span className="ms-1">5</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm text-end">
                                  <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                                    {" "}
                                    Social Geek Made{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dd-item" data-id={3}>
                            <div className="dd-handle">
                              <div className="task-info d-flex align-items-center justify-content-between">
                                <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                                  Quality Assurance
                                </h6>
                                <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                  <div className="avatar-list avatar-list-stacked m-0">
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar6.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <span className="badge bg-danger text-end mt-2">
                                    High
                                  </span>
                                </div>
                              </div>
                              <p className="py-2 mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. In id nec scelerisque massa.
                              </p>
                              <div className="tikit-info row g-3 align-items-center">
                                <div className="col-sm">
                                  <ul className="d-flex list-unstyled align-items-center flex-wrap">
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-flag" />
                                        <span className="ms-1">27 Mar</span>
                                      </div>
                                    </li>
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-ui-text-chat" />
                                        <span className="ms-1">8</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-paper-clip" />
                                        <span className="ms-1">6</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm text-end">
                                  <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                                    {" "}
                                    Box of Crayons{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dd-item" data-id={4}>
                            <div className="dd-handle">
                              <div className="task-info d-flex align-items-center justify-content-between">
                                <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                                  Quality Assurance
                                </h6>
                                <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                  <div className="avatar-list avatar-list-stacked m-0">
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar7.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar8.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <span className="badge bg-warning text-end mt-2">
                                    MEDIUM
                                  </span>
                                </div>
                              </div>
                              <p className="py-2 mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. In id nec scelerisque massa.
                              </p>
                              <div className="tikit-info row g-3 align-items-center">
                                <div className="col-sm">
                                  <ul className="d-flex list-unstyled align-items-center flex-wrap">
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-flag" />
                                        <span className="ms-1">28 Mar</span>
                                      </div>
                                    </li>
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-ui-text-chat" />
                                        <span className="ms-1">5</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-paper-clip" />
                                        <span className="ms-1">5</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm text-end">
                                  <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                                    {" "}
                                    Box of Crayons{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-0 mt-sm-0 mt-0">
                    <h6 className="fw-bold py-3 mb-0">Completed</h6>
                    <div className="completed_task">
                      <div className="dd" data-plugin="nestable">
                        <ol className="dd-list">
                          <li className="dd-item" data-id={1}>
                            <div className="dd-handle">
                              <div className="task-info d-flex align-items-center justify-content-between">
                                <h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                                  UI/UX Design
                                </h6>
                                <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                  <div className="avatar-list avatar-list-stacked m-0">
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar6.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar7.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <span className="badge bg-warning text-end mt-2">
                                    MEDIUM
                                  </span>
                                </div>
                              </div>
                              <p className="py-2 mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. In id nec scelerisque massa.
                              </p>
                              <div className="tikit-info row g-3 align-items-center">
                                <div className="col-sm">
                                  <ul className="d-flex list-unstyled align-items-center flex-wrap">
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-flag" />
                                        <span className="ms-1">13 Jan</span>
                                      </div>
                                    </li>
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-ui-text-chat" />
                                        <span className="ms-1">4</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-paper-clip" />
                                        <span className="ms-1">1</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm text-end">
                                  <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                                    {" "}
                                    Social Geek Made{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dd-item" data-id={2}>
                            <div className="dd-handle">
                              <div className="task-info d-flex align-items-center justify-content-between">
                                <h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                                  UI/UX Design
                                </h6>
                                <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                  <div className="avatar-list avatar-list-stacked m-0">
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar2.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar8.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <span className="badge bg-warning text-end mt-2">
                                    MEDIUM
                                  </span>
                                </div>
                              </div>
                              <p className="py-2 mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. In id nec scelerisque massa.
                              </p>
                              <div className="tikit-info row g-3 align-items-center">
                                <div className="col-sm">
                                  <ul className="d-flex list-unstyled align-items-center flex-wrap">
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-flag" />
                                        <span className="ms-1">02 Feb</span>
                                      </div>
                                    </li>
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-ui-text-chat" />
                                        <span className="ms-1">1</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-paper-clip" />
                                        <span className="ms-1">5</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm text-end">
                                  <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                                    {" "}
                                    Social Geek Made{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dd-item" data-id={3}>
                            <div className="dd-handle">
                              <div className="task-info d-flex align-items-center justify-content-between">
                                <h6 className="bg-lightgreen py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                                  Website Design
                                </h6>
                                <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                  <div className="avatar-list avatar-list-stacked m-0">
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar7.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <span className="badge bg-success text-end mt-2">
                                    LOW
                                  </span>
                                </div>
                              </div>
                              <p className="py-2 mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. In id nec scelerisque massa.
                              </p>
                              <div className="tikit-info row g-3 align-items-center">
                                <div className="col-sm">
                                  <ul className="d-flex list-unstyled align-items-center flex-wrap">
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-flag" />
                                        <span className="ms-1">12 Feb</span>
                                      </div>
                                    </li>
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-ui-text-chat" />
                                        <span className="ms-1">3</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-paper-clip" />
                                        <span className="ms-1">4</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm text-end">
                                  <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                                    {" "}
                                    Practice to Perfect{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dd-item" data-id={4}>
                            <div className="dd-handle">
                              <div className="task-info d-flex align-items-center justify-content-between">
                                <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                                  Quality Assurance
                                </h6>
                                <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                  <div className="avatar-list avatar-list-stacked m-0">
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar11.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <span className="badge bg-danger text-end mt-2">
                                    High
                                  </span>
                                </div>
                              </div>
                              <p className="py-2 mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. In id nec scelerisque massa.
                              </p>
                              <div className="tikit-info row g-3 align-items-center">
                                <div className="col-sm">
                                  <ul className="d-flex list-unstyled align-items-center flex-wrap">
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-flag" />
                                        <span className="ms-1">01 Jan</span>
                                      </div>
                                    </li>
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-ui-text-chat" />
                                        <span className="ms-1">2</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-paper-clip" />
                                        <span className="ms-1">4</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm text-end">
                                  <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                                    {" "}
                                    Box of Crayons{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dd-item" data-id={5}>
                            <div className="dd-handle">
                              <div className="task-info d-flex align-items-center justify-content-between">
                                <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                                  Quality Assurance
                                </h6>
                                <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                  <div className="avatar-list avatar-list-stacked m-0">
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar2.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="avatar rounded-circle small-avt"
                                      src="assets/images/xs/avatar1.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <span className="badge bg-warning text-end mt-2">
                                    MEDIUM
                                  </span>
                                </div>
                              </div>
                              <p className="py-2 mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. In id nec scelerisque massa.
                              </p>
                              <div className="tikit-info row g-3 align-items-center">
                                <div className="col-sm">
                                  <ul className="d-flex list-unstyled align-items-center flex-wrap">
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-flag" />
                                        <span className="ms-1">17 Jan</span>
                                      </div>
                                    </li>
                                    <li className="me-2">
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-ui-text-chat" />
                                        <span className="ms-1">6</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center">
                                        <i className="icofont-paper-clip" />
                                        <span className="ms-1">6</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm text-end">
                                  <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                                    {" "}
                                    Box of Crayons{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        {/* Create task*/}
        <div
          className="modal fade"
          id="createtask"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title  fw-bold" id="createprojectlLabel">
                  {" "}
                  Create Task
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Project Name</label>
                  <select
                    className="form-select"
                    aria-label="Default select Project Category"
                  >
                    <option selected="">Project Name Select</option>
                    <option value={1}>Fast Cad</option>
                    <option value={2}>Box of Crayons</option>
                    <option value={3}>Gob Geeklords</option>
                    <option value={4}>Java Dalia</option>
                    <option value={5}>Practice to Perfect</option>
                    <option value={6}>Rhinestone</option>
                    <option value={7}>Social Geek Made</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Task Category</label>
                  <select
                    className="form-select"
                    aria-label="Default select Project Category"
                  >
                    <option selected="">UI/UX Design</option>
                    <option value={1}>Website Design</option>
                    <option value={2}>App Development</option>
                    <option value={3}>Quality Assurance</option>
                    <option value={4}>Development</option>
                    <option value={5}>Backend Development</option>
                    <option value={6}>Software Testing</option>
                    <option value={7}>Website Design</option>
                    <option value={8}>Marketing</option>
                    <option value={9}>SEO</option>
                    <option value={10}>Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="formFileMultipleone" className="form-label">
                    Task Images &amp; Document
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFileMultipleone"
                    multiple=""
                  />
                </div>
                <div className="deadline-form mb-3">
                  <form>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="datepickerded" className="form-label">
                          Task Start Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="datepickerded"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="datepickerdedone" className="form-label">
                          Task End Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="datepickerdedone"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-sm">
                    <label className="form-label">Task Assign Person</label>
                    <select
                      className="form-select"
                      multiple=""
                      aria-label="Default select Priority"
                    >
                      <option selected="">Lucinda Massey</option>
                      <option value={1}>Ryan Nolan</option>
                      <option value={2}>Oliver Black</option>
                      <option value={3}>Adam Walker</option>
                      <option value={4}>Brian Skinner</option>
                      <option value={5}>Dan Short</option>
                      <option value={5}>Jack Glover</option>
                    </select>
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-sm">
                    <label className="form-label">Task Priority</label>
                    <select
                      className="form-select"
                      aria-label="Default select Priority"
                    >
                      <option selected="">Highest</option>
                      <option value={1}>Medium</option>
                      <option value={2}>Low</option>
                      <option value={3}>Lowest</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea786"
                    className="form-label"
                  >
                    Description (optional)
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea786"
                    rows={3}
                    placeholder="Add any extra details about the request"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Done
                </button>
                <button type="button" className="btn btn-primary">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal  Remove Task*/}
        <div
          className="modal fade"
          id="dremovetask"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title  fw-bold" id="dremovetaskLabel">
                  {" "}
                  Remove From Task?
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body justify-content-center flex-column d-flex">
                <i className="icofont-ui-rate-remove text-danger display-2 text-center mt-2" />
                <p className="mt-4 fs-5 text-center">
                  You can Remove only From Task
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-danger color-fff">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Jquery Core Js */}
    {/* Plugin Js*/}
    {/* Jquery Page Js */}
  </>
  
  )
}

export default Task