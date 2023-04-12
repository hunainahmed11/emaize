import React from 'react'
import '../../../../../../src/assets/payroll/css/Emaize.style.min.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

function Invoices() {

  
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
            <div className="row align-items-center">
              <div className="border-0 mb-4">
                <div className="card-header no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                  <h3 className="fw-bold mb-0 py-3 pb-2">Invoices</h3>
                  <div className="col-auto py-2 w-sm-100">
                    <ul
                      className="nav nav-tabs tab-body-header rounded invoice-set"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#Invoice-list"
                          role="tab"
                        >
                          Invoice List
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#Invoice-Simple"
                          role="tab"
                        >
                          Simple invoice
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#Invoice-Email"
                          role="tab"
                        >
                          Email invoice
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Row end  */}
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="Invoice-list">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-12">
                        <div className="card mb-3">
                          <div className="card-body d-sm-flex justify-content-between">
                            <a href="javascript:void(0);" className="d-flex">
                              <img
                                className="avatar rounded-circle"
                                src="assets/images/xs/avatar1.jpg"
                                alt=""
                              />
                              <div className="flex-fill ms-3 text-truncate">
                                <h6 className="d-flex justify-content-between mb-0">
                                  <span>Ryan MacLeod</span>
                                </h6>
                                <span className="text-muted">Box of Crayons</span>
                              </div>
                            </a>
                            <div className="text-end d-none d-md-block">
                              <p className="mb-1">
                                <i className="icofont-location-pin ps-1" /> 2211
                                Jones Avenue,Winston Salem FL 27107
                              </p>
                              <span className="text-muted">
                                <i className="icofont-money ps-1" /> $50 per hour
                              </span>
                            </div>
                          </div>
                          <div className="card-footer justify-content-between d-flex align-items-center">
                            <div className="d-none d-md-block">
                              <strong>Applied on:</strong>
                              <span>23 Feb, 2021</span>
                            </div>
                            <div className="card-hover-show">
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Download
                              </a>
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Send
                              </a>
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card mb-3">
                          <div className="card-body d-sm-flex justify-content-between">
                            <a href="javascript:void(0);" className="d-flex">
                              <img
                                className="avatar rounded-circle"
                                src="assets/images/xs/avatar2.jpg"
                                alt=""
                              />
                              <div className="flex-fill ms-3 text-truncate">
                                <h6 className="d-flex justify-content-between mb-0">
                                  <span>Penelope Stewart</span>
                                </h6>
                                <span className="text-muted">Fast Cad</span>
                              </div>
                            </a>
                            <div className="text-end d-none d-md-block">
                              <p className="mb-1">
                                <i className="icofont-location-pin ps-1" /> 3154
                                Sampson Street,Aurora CT 80014
                              </p>
                              <span className="text-muted">
                                <i className="icofont-money ps-1" /> $43 per hour
                              </span>
                            </div>
                          </div>
                          <div className="card-footer justify-content-between d-flex align-items-center">
                            <div className="d-none d-md-block">
                              <strong>Applied on:</strong>
                              <span>14 Apr, 2021</span>
                            </div>
                            <div className="card-hover-show">
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Download
                              </a>
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Send
                              </a>
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card mb-3">
                          <div className="card-body d-sm-flex justify-content-between">
                            <a href="javascript:void(0);" className="d-flex">
                              <img
                                className="avatar rounded-circle"
                                src="assets/images/xs/avatar3.jpg"
                                alt=""
                              />
                              <div className="flex-fill ms-3 text-truncate">
                                <h6 className="d-flex justify-content-between mb-0">
                                  <span>Diane Slater</span>
                                </h6>
                                <span className="text-muted">Gob Geeklords</span>
                              </div>
                            </a>
                            <div className="text-end d-none d-md-block">
                              <p className="mb-1">
                                <i className="icofont-location-pin ps-1" /> 49
                                Stamford Road. West Chicago, IL 60185
                              </p>
                              <span className="text-muted">
                                <i className="icofont-money ps-1" /> $25 per hour
                              </span>
                            </div>
                          </div>
                          <div className="card-footer justify-content-between d-flex align-items-center">
                            <div className="d-none d-md-block">
                              <strong>Applied on:</strong>
                              <span>16 Mar, 2021</span>
                            </div>
                            <div className="card-hover-show">
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Download
                              </a>
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Send
                              </a>
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card mb-3">
                          <div className="card-body d-sm-flex justify-content-between">
                            <a href="javascript:void(0);" className="d-flex">
                              <img
                                className="avatar rounded-circle"
                                src="assets/images/xs/avatar4.jpg"
                                alt=""
                              />
                              <div className="flex-fill ms-3 text-truncate">
                                <h6 className="d-flex justify-content-between mb-0">
                                  <span>Amy Mills</span>
                                </h6>
                                <span className="text-muted">Java Dalia</span>
                              </div>
                            </a>
                            <div className="text-end d-none d-md-block">
                              <p className="mb-1">
                                <i className="icofont-location-pin ps-1" /> 2698
                                Northumberland. Melbourne, FL 32904
                              </p>
                              <span className="text-muted">
                                <i className="icofont-money ps-1" /> $55 per hour
                              </span>
                            </div>
                          </div>
                          <div className="card-footer justify-content-between d-flex align-items-center">
                            <div className="d-none d-md-block">
                              <strong>Applied on:</strong>
                              <span>17 Mar, 2021</span>
                            </div>
                            <div className="card-hover-show">
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Download
                              </a>
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Send
                              </a>
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card mb-3">
                          <div className="card-body d-sm-flex justify-content-between">
                            <a href="javascript:void(0);" className="d-flex">
                              <img
                                className="avatar rounded-circle"
                                src="assets/images/xs/avatar5.jpg"
                                alt=""
                              />
                              <div className="flex-fill ms-3 text-truncate">
                                <h6 className="d-flex justify-content-between mb-0">
                                  <span>Tim Mitchell</span>
                                </h6>
                                <span className="text-muted">
                                  Practice to Perfect
                                </span>
                              </div>
                            </a>
                            <div className="text-end d-none d-md-block">
                              <p className="mb-1">
                                <i className="icofont-location-pin ps-1" /> 35
                                Gubener Str. Emmering, FL 32904
                              </p>
                              <span className="text-muted">
                                <i className="icofont-money ps-1" /> $28 per hour
                              </span>
                            </div>
                          </div>
                          <div className="card-footer justify-content-between d-flex align-items-center">
                            <div className="d-none d-md-block">
                              <strong>Applied on:</strong>
                              <span>12 Feb, 2021</span>
                            </div>
                            <div className="card-hover-show">
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Download
                              </a>
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Send
                              </a>
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card mb-3">
                          <div className="card-body d-sm-flex justify-content-between">
                            <a href="javascript:void(0);" className="d-flex">
                              <img
                                className="avatar rounded-circle"
                                src="assets/images/xs/avatar2.jpg"
                                alt=""
                              />
                              <div className="flex-fill ms-3 text-truncate">
                                <h6 className="d-flex justify-content-between mb-0">
                                  <span>Brian Swader</span>
                                </h6>
                                <span className="text-muted">Rhinestone</span>
                              </div>
                            </a>
                            <div className="text-end d-none d-md-block">
                              <p className="mb-1">
                                <i className="icofont-location-pin ps-1" /> 70
                                Bowman St. South Windsor, CT 06074
                              </p>
                              <span className="text-muted">
                                <i className="icofont-money ps-1" /> $65 per hour
                              </span>
                            </div>
                          </div>
                          <div className="card-footer justify-content-between d-flex align-items-center">
                            <div className="d-none d-md-block">
                              <strong>Applied on:</strong>
                              <span>18 Feb, 2020</span>
                            </div>
                            <div className="card-hover-show">
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Download
                              </a>
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Send
                              </a>
                              <a
                                className="btn btn-sm btn-white border lift"
                                href="#"
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                        <nav aria-label="Page navigation">
                          <ul className="pagination mt-4">
                            <li className="page-item">
                              <a className="page-link" href="#">
                                Previous
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                Next
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>{" "}
                    {/* Row end  */}
                  </div>{" "}
                  {/* tab end  */}
                  <div className="tab-pane fade" id="Invoice-Simple">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-12">
                        <div className="card p-xl-5 p-lg-4 p-0">
                          <div className="card-body">
                            <div className="mb-3 pb-3 border-bottom">
                              Invoice
                              <strong>01/Nov/2020</strong>
                              <span className="float-end">
                                {" "}
                                <strong>Status:</strong> Pending
                              </span>
                            </div>
                            <div className="row mb-4">
                              <div className="col-sm-6">
                                <h6 className="mb-3">From:</h6>
                                <div>
                                  <strong>Deo web</strong>
                                </div>
                                <div>111 Berkeley Rd</div>
                                <div>STREET ON THE FOSSE, Poland</div>
                                <div>Email: info@emaize.com</div>
                                <div>Phone: +44 888 666 3333</div>
                              </div>
                              <div className="col-sm-6">
                                <h6 className="mb-3">To:</h6>
                                <div>
                                  <strong> Colin Web</strong>
                                </div>
                                <div>45 Larissa Court</div>
                                <div>Victoria, BIRDWOODTON</div>
                                <div>Email: ColinWeb@gmail.com</div>
                                <div>Phone: +66 243 456 789</div>
                              </div>
                            </div>{" "}
                            {/* Row end  */}
                            <div className="table-responsive-sm">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    <th className="text-center">#</th>
                                    <th>Project</th>
                                    <th>Description</th>
                                    <th className="text-end">Project Cost</th>
                                    <th className="text-center">Members</th>
                                    <th className="text-end">Total</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="text-center">1</td>
                                    <td>Box of Crayons</td>
                                    <td>Extended License</td>
                                    <td className="text-end">$1999,00</td>
                                    <td className="text-center">1</td>
                                    <td className="text-end">$1999,00</td>
                                  </tr>
                                  <tr>
                                    <td className="text-center">2</td>
                                    <td>Fast Cad</td>
                                    <td>
                                      Instalation and Customization (cost per
                                      hour)
                                    </td>
                                    <td className="text-end">$50,00</td>
                                    <td className="text-center">2</td>
                                    <td className="text-end">$100,00</td>
                                  </tr>
                                  <tr>
                                    <td className="text-center">3</td>
                                    <td>Hosting</td>
                                    <td>1 year subcription</td>
                                    <td className="text-end">$499,00</td>
                                    <td className="text-center">1</td>
                                    <td className="text-end">$499,00</td>
                                  </tr>
                                  <tr>
                                    <td className="text-center">4</td>
                                    <td>Platinum Support</td>
                                    <td>1 year subcription 24/7</td>
                                    <td className="text-end">$3.999,00</td>
                                    <td className="text-center">1</td>
                                    <td className="text-end">$3.999,00</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-sm-5"></div>
                              <div className="col-lg-4 col-sm-5 ms-auto">
                                <table className="table table-clear">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <strong>Subtotal</strong>
                                      </td>
                                      <td className="text-end">$6.597,00</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <strong>VAT (10%)</strong>
                                      </td>
                                      <td className="text-end">$659,7</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <strong>Total</strong>
                                      </td>
                                      <td className="text-end">
                                        <strong>$7.256,7</strong>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>{" "}
                            {/* Row end  */}
                            <div className="row">
                              <div className="col-lg-12">
                                <h6>Terms &amp; Condition</h6>
                                <p className="text-muted">
                                  Contrary to popular belief, Lorem Ipsum is not
                                  simply random text. It has roots in a piece of
                                  classical Latin literature from 45 BC, making it
                                  over
                                </p>
                              </div>
                              <div className="col-lg-12 text-end">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary btn-lg my-1"
                                >
                                  <i className="fa fa-print" /> Print
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-lg my-1"
                                >
                                  <i className="fa fa-paper-plane-o" /> Send
                                  Invoice
                                </button>
                              </div>
                            </div>{" "}
                            {/* Row end  */}
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* Row end  */}
                  </div>{" "}
                  {/* tab end  */}
                  <div className="tab-pane fade" id="Invoice-Email">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-12">
                        <div className="d-flex justify-content-center">
                          <table className="card p-5">
                            <tbody>
                              <tr>
                                <td />
                                <td className="text-center">
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td className="text-center">
                                          <h2>$48.98 Paid</h2>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="text-center py-2">
                                          <h4 className="mb-0">
                                            Thanks for using PXL Inc.
                                          </h4>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="pt-2 pb-4">
                                          <table>
                                            <tbody>
                                              <tr>
                                                <td>
                                                  Attn:{" "}
                                                  <strong>Ryan MacLeod</strong>{" "}
                                                  Winston Salem FL 27107
                                                  <br />
                                                  Email: RyanmacLeod@gmail.com
                                                  <br />
                                                  Phone: +88 123 456 789
                                                  <br />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="pt-2">
                                                  <table className="table table-bordered">
                                                    <tbody>
                                                      <tr>
                                                        <td className="text-start">
                                                          Extended License
                                                        </td>
                                                        <td className="text-end">
                                                          $ 20.99
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td className="text-start">
                                                          1 year subcription
                                                        </td>
                                                        <td className="text-end">
                                                          $ 19.99
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td className="text-start">
                                                          Instalation and
                                                          Customization
                                                        </td>
                                                        <td className="text-end">
                                                          $ 8.00
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td className="text-start w-80">
                                                          <strong>Total</strong>
                                                        </td>
                                                        <td className="text-end fw-bold">
                                                          $ 48.98
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="pt-2 pb-2 text-center">
                                          <a href="#">View in browser</a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="p-0 text-center">
                                          PXL Inc. 47 Aurora St. South West, CT
                                          06074
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table className="mt-3 text-center w-100">
                                    <tbody>
                                      <tr>
                                        <td className="aligncenter content-block">
                                          Questions? Email{" "}
                                          <a href="mailto:">
                                            info@pixelwibes.com
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                                <td />
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>{" "}
                    {/* Row end  */}
                  </div>{" "}
                  {/* tab end  */}
                </div>
              </div>
            </div>{" "}
            {/* Row end  */}
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

export default Invoices