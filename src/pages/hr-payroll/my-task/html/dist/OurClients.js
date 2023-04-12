import React from 'react'
import '../../../../../../src/assets/payroll/css/Emaize.style.min.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

function OurClients() {

  
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
                                  <span className="badge bg-success">
                                    Review
                                  </span>
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
                    <a
                      className="card-footer text-center border-top-0"
                      href="#"
                    >
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
                            <span className="font-weight-bold">
                              Dylan Hunter
                            </span>
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
          <div className="row clearfix">
            <div className="col-md-12">
              <div className="card border-0 mb-4 no-bg">
                <div className="card-header py-3 px-0 d-flex align-items-center  justify-content-between border-bottom">
                  <h3 className=" fw-bold flex-fill mb-0">Clients</h3>
                  <div className="col-auto d-flex">
                    <div className="dropdown ">
                      <button
                        className="btn btn-primary dropdown-toggle  "
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Status
                      </button>
                      <ul
                        className="dropdown-menu  dropdown-menu-end"
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Company
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            AgilSoft Tech
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Macrosoft
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Google
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Pixelwibes
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Deltasoft Tech
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Design Tech
                          </a>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="btn btn-dark ms-1 "
                      data-bs-toggle="modal"
                      data-bs-target="#createproject"
                    >
                      <i className="icofont-plus-circle me-2 fs-6" />
                      Add Client
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row End */}
          <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-deck py-1 pb-4">
            <div className="col">
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
                        luctus et ultrices
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
            <div className="col">
              <div className="card teacher-card">
                <div className="card-body  d-flex">
                  <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                    <img
                      src="assets/images/lg/avatar2.jpg"
                      alt=""
                      className="avatar xl rounded-circle img-thumbnail shadow-sm"
                    />
                    <div className="about-info d-flex align-items-center mt-1 justify-content-center flex-column">
                      <h6 className="mb-0 fw-bold d-block fs-6 mt-2">
                        Manager
                      </h6>
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
                      Macrosoft
                    </h6>
                    <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                      Matt Gibson
                    </span>
                    <div className="video-setting-icon mt-3 pt-3 border-top">
                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices.Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices
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
            <div className="col">
              <div className="card teacher-card">
                <div className="card-body  d-flex">
                  <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                    <img
                      src="assets/images/lg/avatar8.jpg"
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
                    <h6 className="mb-0 mt-2  fw-bold d-block fs-6">Google</h6>
                    <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                      Lauren Reid
                    </span>
                    <div className="video-setting-icon mt-3 pt-3 border-top">
                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices.Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices
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
                        className="btn btn-dark btn-sm mt-2"
                      >
                        <i className="icofont-invisible me-2 fs-6" />
                        Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card teacher-card">
                <div className="card-body  d-flex">
                  <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                    <img
                      src="assets/images/lg/avatar10.jpg"
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
                      Pixelwibes
                    </h6>
                    <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                      Peter Vance
                    </span>
                    <div className="video-setting-icon mt-3 pt-3 border-top">
                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices.Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices
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
            <div className="col">
              <div className="card teacher-card">
                <div className="card-body  d-flex">
                  <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                    <img
                      src="assets/images/lg/avatar11.jpg"
                      alt=""
                      className="avatar xl rounded-circle img-thumbnail shadow-sm"
                    />
                    <div className="about-info d-flex align-items-center mt-1 justify-content-center flex-column">
                      <h6 className="mb-0 fw-bold d-block fs-6 mt-2">
                        Manager
                      </h6>
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
                      Deltasoft Tech
                    </h6>
                    <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                      Una Murray
                    </span>
                    <div className="video-setting-icon mt-3 pt-3 border-top">
                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices.Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices
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
            <div className="col">
              <div className="card teacher-card">
                <div className="card-body  d-flex">
                  <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                    <img
                      src="assets/images/lg/avatar12.jpg"
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
                      Design Tech
                    </h6>
                    <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                      Paul Grant
                    </span>
                    <div className="video-setting-icon mt-3 pt-3 border-top">
                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices,Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices
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
            <div className="col">
              <div className="card teacher-card">
                <div className="card-body  d-flex">
                  <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                    <img
                      src="assets/images/lg/avatar5.jpg"
                      alt=""
                      className="avatar xl rounded-circle img-thumbnail shadow-sm"
                    />
                    <div className="about-info d-flex align-items-center mt-1 justify-content-center flex-column">
                      <h6 className="mb-0 fw-bold d-block fs-6 mt-2">
                        Manager
                      </h6>
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
                      VerinSoft
                    </h6>
                    <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                      Amanda Russell
                    </span>
                    <div className="video-setting-icon mt-3 pt-3 border-top">
                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices
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
            <div className="col">
              <div className="card teacher-card">
                <div className="card-body  d-flex">
                  <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                    <img
                      src="assets/images/lg/avatar6.jpg"
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
                      Crestcoder
                    </h6>
                    <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                      Diane Vaughan
                    </span>
                    <div className="video-setting-icon mt-3 pt-3 border-top">
                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices
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
            <div className="col">
              <div className="card teacher-card">
                <div className="card-body  d-flex">
                  <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                    <img
                      src="assets/images/lg/avatar7.jpg"
                      alt=""
                      className="avatar xl rounded-circle img-thumbnail shadow-sm"
                    />
                    <div className="about-info d-flex align-items-center mt-1 justify-content-center flex-column">
                      <h6 className="mb-0 fw-bold d-block fs-6 mt-2">
                        Manager
                      </h6>
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
                      Rocobend
                    </h6>
                    <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                      Piers Churchill
                    </span>
                    <div className="video-setting-icon mt-3 pt-3 border-top">
                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices
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
            <div className="col">
              <div className="card teacher-card">
                <div className="card-body  d-flex">
                  <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                    <img
                      src="assets/images/lg/avatar1.jpg"
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
                    <h6 className="mb-0 mt-2  fw-bold d-block fs-6">Google</h6>
                    <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                      Lauren Reid
                    </span>
                    <div className="video-setting-icon mt-3 pt-3 border-top">
                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices.Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices
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
                    <div className="d-flex align-items-center flex-column flex-sm-column flex-md-row">
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
                    <div className="d-flex align-items-center flex-column flex-sm-column flex-md-row">
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
                                Member
                                <span>
                                  Can view, edit, delete, comment on and save
                                  files
                                </span>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="fs-6 p-2 me-1" />
                                Admin
                                <span>
                                  Member, but can invite and manage team members
                                </span>
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
                    <div className="d-flex align-items-center flex-column flex-sm-column flex-md-row">
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
                                Member
                                <span>
                                  Can view, edit, delete, comment on and save
                                  files
                                </span>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="fs-6 p-2 me-1" />
                                Admin
                                <span>
                                  Member, but can invite and manage team members
                                </span>
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
      {/* Create Client*/}
      <div
        className="modal fade"
        id="createproject"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="createprojectlLabel">
                {" "}
                Add Client
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
                <label
                  htmlFor="exampleFormControlInput877"
                  className="form-label"
                >
                  Client Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput877"
                  placeholder="Explain what the Project Name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput977"
                  className="form-label"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput977"
                  placeholder="Explain what the Project Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formFileMultipleoneone" className="form-label">
                  Profile Image
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFileMultipleoneone"
                />
              </div>
              <div className="deadline-form">
                <form>
                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput177"
                        className="form-label"
                      >
                        User Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput177"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput277"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="Password"
                        className="form-control"
                        id="exampleFormControlInput277"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput477"
                        className="form-label"
                      >
                        Email ID
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput477"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput777"
                        className="form-label"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput777"
                        placeholder="User Name"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea78"
                  className="form-label"
                >
                  Description (optional)
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea78"
                  rows={3}
                  placeholder="Add any extra details about the request"
                  defaultValue={""}
                />
              </div>
              <div className="table-responsive">
                <table className="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Project Permission</th>
                      <th className="text-center">Read</th>
                      <th className="text-center">Write</th>
                      <th className="text-center">Create</th>
                      <th className="text-center">Delete</th>
                      <th className="text-center">Import</th>
                      <th className="text-center">Export</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold">Projects</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault1"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault2"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault3"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault4"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault5"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault6"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Tasks</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault7"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault8"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault9"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault10"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault11"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault12"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Chat</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault13"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault14"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault15"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault16"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault17"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault18"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Estimates</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault19"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault20"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault21"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault22"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault23"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault24"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Invoices</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault25"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault26"
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault27"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault28"
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault29"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault30"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Timing Sheets</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault31"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault32"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault33"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault34"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault35"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault36"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
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
      {/* Edit Client*/}
      <div
        className="modal fade"
        id="editproject"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="createprojectlLabelone">
                {" "}
                Edit Client
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
                <label
                  htmlFor="exampleFormControlInput8777"
                  className="form-label"
                >
                  Client Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput8777"
                  defaultValue="Ryan Ogden"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput9777"
                  className="form-label"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput9777"
                  defaultValue="AgilSoft Tech"
                />
              </div>
              <div className="deadline-form">
                <form>
                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput1777"
                        className="form-label"
                      >
                        User Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1777"
                        defaultValue="User123"
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput2777"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="Password"
                        className="form-control"
                        id="exampleFormControlInput2777"
                        defaultValue="********"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput4777"
                        className="form-label"
                      >
                        Email ID
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput4777"
                        placeholder="ryanogden@gmail.com"
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput7777"
                        className="form-label"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput7777"
                        defaultValue="202-555-0174"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea787"
                  className="form-label"
                >
                  Description (optional)
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea787"
                  rows={3}
                  defaultValue={
                    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices"
                  }
                />
              </div>
              <div className="table-responsive">
                <table className="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Project Permission</th>
                      <th className="text-center">Read</th>
                      <th className="text-center">Write</th>
                      <th className="text-center">Create</th>
                      <th className="text-center">Delete</th>
                      <th className="text-center">Import</th>
                      <th className="text-center">Export</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold">Projects</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault117"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault127"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault37"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault47"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault57"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault67"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Tasks</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault77"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault87"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault97"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault107"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault1179"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault1279"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Chat</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault137"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault147"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault157"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault167"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault177"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault187"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Estimates</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault197"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault207"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault217"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault227"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault237"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault247"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Invoices</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault257"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault267"
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault277"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault287"
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault297"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault307"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Timing Sheets</td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault317"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault327"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault337"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault347"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault357"
                          defaultChecked=""
                        />
                      </td>
                      <td className="text-center">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault367"
                          defaultChecked=""
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
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
      {/* Modal  Delete Folder/ File*/}
      <div
        className="modal fade"
        id="deleteproject"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="deleteprojectLabel">
                {" "}
                Delete item Permanently?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body justify-content-center flex-column d-flex">
              <i className="icofont-ui-delete text-danger display-2 text-center mt-2" />
              <p className="mt-4 fs-5 text-center">
                You can only delete this item Permanently
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
                Delete
              </button>
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

export default OurClients