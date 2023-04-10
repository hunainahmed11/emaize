import React from 'react'
import '../../../../../../src/assets/payroll/css/Emaize.style.min.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

function Chat() {

  
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
    <div className="main">
      {/* Body: Body */}
      <div className="body d-flex">
        <div className="container-xxl p-0">
          <div className="row g-0">
            <div className="col-12 d-flex">
              {/* Card: */}
              <div className="card card-chat border-right border-top-0 border-bottom-0  w380">
                <div className="px-4 py-3 py-md-4">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="Search..."
                    />
                  </div>
                  <div
                    className="nav nav-pills justify-content-between text-center"
                    role="tablist"
                  >
                    <a
                      className="flex-fill rounded border-0 nav-link active"
                      data-bs-toggle="tab"
                      href="#chat-recent"
                      role="tab"
                      aria-selected="true"
                    >
                      Chat
                    </a>
                    <a
                      className="flex-fill rounded border-0 nav-link"
                      data-bs-toggle="tab"
                      href="#chat-groups"
                      role="tab"
                      aria-selected="false"
                    >
                      Members Groups
                    </a>
                    <a
                      className="flex-fill rounded border-0 nav-link"
                      data-bs-toggle="tab"
                      href="#chat-contact"
                      role="tab"
                      aria-selected="false"
                    >
                      Contact
                    </a>
                  </div>
                </div>
                <div className="tab-content border-top">
                  <div
                    className="tab-pane fade show active"
                    id="chat-recent"
                    role="tabpanel"
                  >
                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar6.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Vanessa Knox</span>{" "}
                              <small className="msg-time">10:45 AM</small>
                            </h6>
                            <span className="text-muted">
                              There are many variations of passages
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar1.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Abigail Bell</span>{" "}
                              <small className="msg-time">11:45 AM</small>
                            </h6>
                            <span className="text-muted">
                              changed an issue from "In Progress" to
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <div className="avatar rounded-circle no-thumbnail">
                            RH
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Diane Blake</span>{" "}
                              <small className="msg-time">12:45 AM</small>
                            </h6>
                            <span className="text-muted">
                              It is a long established fact that a reader will
                              be distracted
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar4.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Megan Dyer</span>{" "}
                              <small className="msg-time">12:46 AM</small>
                            </h6>
                            <span className="text-muted">
                              Contrary to popular belief
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar1.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Abigail Bell</span>{" "}
                              <small className="msg-time">12:47 PM</small>
                            </h6>
                            <span className="text-muted">
                              changed an issue from "In Progress" to
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar5.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Diane Blake</span>{" "}
                              <small className="msg-time">12:48 PM</small>
                            </h6>
                            <span className="text-muted">
                              making it over 2000 years old
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4 open">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar3.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Vanessa Knox</span>{" "}
                              <small className="msg-time">12:49 PM</small>
                            </h6>
                            <span className="text-muted">
                              There are many variations of passages
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar7.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Donna Grant</span>{" "}
                              <small className="msg-time">Thu</small>
                            </h6>
                            <span className="text-muted">
                              Add Calander Event
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <div className="avatar rounded-circle no-thumbnail">
                            RH
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Diane Blake</span>{" "}
                              <small className="msg-time">Wed</small>
                            </h6>
                            <span className="text-muted">
                              It is a long established fact that a reader will
                              be distracted
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar3.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Vanessa Knox</span>{" "}
                              <small className="msg-time">13/10/2020</small>
                            </h6>
                            <span className="text-muted">
                              There are many variations of passages
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar4.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Megan Dyer</span>{" "}
                              <small className="msg-time">13/10/2020</small>
                            </h6>
                            <span className="text-muted">
                              Contrary to popular belief
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar5.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Diane Blake</span>{" "}
                              <small className="msg-time">22/10/2020</small>
                            </h6>
                            <span className="text-muted">
                              making it over 2000 years old
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="chat-groups"
                    role="tabpanel"
                  >
                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <div className="avatar rounded-circle no-thumbnail">
                            WD
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Website Design</span>{" "}
                              <small className="msg-time">15/04/2021</small>
                            </h6>
                            <span className="text-muted">
                              The point of using Lorem Ipsum
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <div className="avatar rounded-circle no-thumbnail">
                            AD
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>App Development</span>{" "}
                              <small className="msg-time">13/04/2021</small>
                            </h6>
                            <span className="text-muted">
                              If you are going to use a passage
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <div className="avatar rounded-circle no-thumbnail">
                            QC
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="d-flex justify-content-between mb-0">
                              <span>Quality Assurance</span>{" "}
                              <small className="msg-time">12/04/2021</small>
                            </h6>
                            <span className="text-muted">
                              The point of using Lorem Ipsum
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="chat-contact"
                    role="tabpanel"
                  >
                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar10.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="d-flex justify-content-between mb-0">
                              <h6 className="mb-0">Hannah Gill</h6>
                              <div className="text-muted">
                                <i className="fa fa-heart-o pl-2 text-danger" />
                                <i className="fa fa-trash pl-2 text-danger" />
                              </div>
                            </div>
                            <span className="text-muted">
                              hannahgill@Emaize.com
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar2.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="d-flex justify-content-between mb-0">
                              <h6 className="mb-0">Abigail Bell</h6>
                              <div className="text-muted">
                                <i className="fa fa-heart pl-2 text-danger" />
                                <i className="fa fa-trash pl-2 text-danger" />
                              </div>
                            </div>
                            <span className="text-muted">
                              abigailbell@Emaize.com
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar1.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="d-flex justify-content-between mb-0">
                              <h6 className="mb-0">Megan Dyer</h6>
                              <div className="text-muted">
                                <i className="fa fa-heart-o pl-2 text-danger" />
                                <i className="fa fa-trash pl-2 text-danger" />
                              </div>
                            </div>
                            <span className="text-muted">
                              barbara.kelly@Emaize.com
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar7.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="d-flex justify-content-between mb-0">
                              <h6 className="mb-0">Ruth Cornish</h6>
                              <div className="text-muted">
                                <i className="fa fa-heart pl-2 text-danger" />
                                <i className="fa fa-trash pl-2 text-danger" />
                              </div>
                            </div>
                            <span className="text-muted">
                              ruthcornish@Emaize.com
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar4.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="d-flex justify-content-between mb-0">
                              <h6 className="mb-0">Yvonne Duncan</h6>
                              <div className="text-muted">
                                <i className="fa fa-heart-o pl-2 text-danger" />
                                <i className="fa fa-trash pl-2 text-danger" />
                              </div>
                            </div>
                            <span className="text-muted">
                              yvonneduncan@Emaize.com
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                          <img
                            className="avatar rounded-circle"
                            src="assets/images/xs/avatar6.jpg"
                            alt=""
                          />
                          <div className="flex-fill ms-3 text-truncate">
                            <div className="d-flex justify-content-between mb-0">
                              <h6 className="mb-0">Nicola Carl</h6>
                              <div className="text-muted">
                                <i className="fa fa-heart-o pl-2 text-danger" />
                                <i className="fa fa-trash pl-2 text-danger" />
                              </div>
                            </div>
                            <span className="text-muted">
                              nicolacarl@Emaize.com
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Card: */}
              <div className="card card-chat-body border-0  w-100 px-4 px-md-5 py-3 py-md-4">
                {/* Chat: Header */}
                <div className="chat-header d-flex justify-content-between align-items-center border-bottom pb-3">
                  <div className="d-flex align-items-center">
                    <Link to="/Indx2" title="Home">
                      <i className="icofont-arrow-left fs-4" />
                    </Link>
                    <a href="javascript:void(0);" title="">
                      <img
                        className="avatar rounded"
                        src="assets/images/xs/avatar2.jpg"
                        alt="avatar"
                      />
                    </a>
                    <div className="ms-3">
                      <h6 className="mb-0">Grace Smith</h6>
                      <small className="text-muted">
                        Last seen: 3 hours ago
                      </small>
                    </div>
                  </div>
                  <div className="d-flex">
                    <a
                      className="nav-link py-2 px-3 text-muted d-none d-lg-block"
                      href="javascript:void(0);"
                    >
                      <i className="fa fa-camera" />
                    </a>
                    <a
                      className="nav-link py-2 px-3 text-muted d-none d-lg-block"
                      href="javascript:void(0);"
                    >
                      <i className="fa fa-video-camera" />
                    </a>
                    <a
                      className="nav-link py-2 px-3 text-muted d-none d-lg-block"
                      href="javascript:void(0);"
                    >
                      <i className="fa fa-gear" />
                    </a>
                    <a
                      className="nav-link py-2 px-3 text-muted d-none d-lg-block"
                      href="javascript:void(0);"
                    >
                      <i className="fa fa-info-circle" />
                    </a>
                    <a
                      className="nav-link py-2 px-3 d-block d-lg-none chatlist-toggle"
                      href="#"
                    >
                      <i className="fa fa-bars" />
                    </a>
                    {/* Mobile menu */}
                    <div className="nav-item list-inline-item d-block d-xl-none">
                      <div className="dropdown">
                        <a
                          className="nav-link text-muted px-0"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v" />
                        </a>
                        <ul className="dropdown-menu shadow border-0">
                          <li>
                            <Link className="dropdown-item" to="Indx2">
                              <i className="fa fa-camera" /> Share Images
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="Indx2">
                              <i className="fa fa-video-camera" /> Video Call
                            </Link>
                          </li>
                          <li>
                          <Link className="dropdown-item" to="Indx2">
                              <i className="fa fa-gear" /> Settings
                            </Link>
                          </li>
                          <li>
                          <Link className="dropdown-item" to="Indx2">
                              <i className="fa fa-info-circle" /> Info
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Chat: body */}
                <ul className="chat-history list-unstyled mb-0 py-lg-5 py-md-4 py-3 flex-grow-1">
                  {/* Chat: left */}
                  <li className="mb-3 d-flex flex-row align-items-end">
                    <div className="max-width-70">
                      <div className="user-info mb-1">
                        <img
                          className="avatar sm rounded-circle me-1"
                          src="assets/images/xs/avatar2.jpg"
                          alt="avatar"
                        />
                        <span className="text-muted small">
                          10:10 AM, Today
                        </span>
                      </div>
                      <div className="card border-0 p-3">
                        <div className="message"> Hi Aiden, how are you?</div>
                      </div>
                    </div>
                    {/* More option */}
                    <div className="btn-group">
                      <a
                        href="#"
                        className="nav-link py-2 px-3 text-muted"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </a>
                      <ul className="dropdown-menu border-0 shadow">
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Chat: right */}
                  <li className="mb-3 d-flex flex-row-reverse align-items-end">
                    <div className="max-width-70 text-right">
                      <div className="user-info mb-1">
                        <span className="text-muted small">
                          10:12 AM, Today
                        </span>
                      </div>
                      <div className="card border-0 p-3 bg-primary text-light">
                        <div className="message">
                          How many task are working?
                        </div>
                      </div>
                    </div>
                    {/* More option */}
                    <div className="btn-group">
                      <a
                        href="#"
                        className="nav-link py-2 px-3 text-muted"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </a>
                      <ul className="dropdown-menu border-0 shadow">
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Chat: left */}
                  <li className="mb-3 d-flex flex-row align-items-end">
                    <div className="max-width-70">
                      <div className="user-info mb-1">
                        <img
                          className="avatar sm rounded-circle me-1"
                          src="assets/images/xs/avatar2.jpg"
                          alt="avatar"
                        />
                        <span className="text-muted small">
                          10:10 AM, Today
                        </span>
                      </div>
                      <div className="card border-0 p-3">
                        <div className="message">
                          {" "}
                          I am working on 10 tasks.5 tasks Completed and 5
                          inprogress
                        </div>
                      </div>
                    </div>
                    {/* More option */}
                    <div className="btn-group">
                      <a
                        href="#"
                        className="nav-link py-2 px-3 text-muted"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </a>
                      <ul className="dropdown-menu border-0 shadow">
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Chat: left */}
                  <li className="mb-3 d-flex flex-row align-items-end">
                    <div className="max-width-70">
                      <div className="user-info mb-1">
                        <img
                          className="avatar sm rounded-circle me-1"
                          src="assets/images/xs/avatar2.jpg"
                          alt="avatar"
                        />
                        <span className="text-muted small">
                          10:10 AM, Today
                        </span>
                      </div>
                      <div className="card border-0 p-3">
                        <div className="message">
                          {" "}
                          Why Map job is launched when I run SELECT * FROM
                          tablename;
                        </div>
                      </div>
                    </div>
                    {/* More option */}
                    <div className="btn-group">
                      <a
                        href="#"
                        className="nav-link py-2 px-3 text-muted"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </a>
                      <ul className="dropdown-menu border-0 shadow">
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Chat: right */}
                  <li className="mb-3 d-flex flex-row-reverse align-items-end">
                    <div className="max-width-70 text-right">
                      <div className="user-info mb-1">
                        <span className="text-muted small">
                          10:12 AM, Today
                        </span>
                      </div>
                      <div className="card border-0 p-3 bg-primary text-light">
                        <div className="message">
                          This behaviour is directed by <br /> some of the hive
                          performance tuning settings of the hive.fetch.*
                          family.
                          <br />
                          They decide on whether a shortcut to just go at the
                          (table)file in HDFS without any MR/Tez is wanted
                          and/or feasible.
                        </div>
                      </div>
                    </div>
                    {/* More option */}
                    <div className="btn-group">
                      <a
                        href="#"
                        className="nav-link py-2 px-3 text-muted"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </a>
                      <ul className="dropdown-menu border-0 shadow">
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Chat: left */}
                  <li className="mb-3 d-flex flex-row align-items-end">
                    <div className="max-width-70">
                      <div className="user-info mb-1">
                        <img
                          className="avatar sm rounded-circle me-1"
                          src="assets/images/xs/avatar2.jpg"
                          alt="avatar"
                        />
                        <span className="text-muted small">
                          10:10 AM, Today
                        </span>
                      </div>
                      <div className="card border-0 p-3">
                        <div className="message">
                          <p>Please find attached images</p>
                          <img
                            className="w120 img-thumbnail"
                            src="assets/images/gallery/1.jpg"
                            alt=""
                          />
                          <img
                            className="w120 img-thumbnail"
                            src="assets/images/gallery/2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* More option */}
                    <div className="btn-group">
                      <a
                        href="#"
                        className="nav-link py-2 px-3 text-muted"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </a>
                      <ul className="dropdown-menu border-0 shadow">
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* Chat: right */}
                  <li className="mb-3 d-flex flex-row-reverse align-items-end">
                    <div className="max-width-70 text-right">
                      <div className="user-info mb-1">
                        <span className="text-muted small">
                          10:12 AM, Today
                        </span>
                      </div>
                      <div className="card border-0 p-3 bg-primary text-light">
                        <div className="message">
                          Okay, will check and let you know.
                        </div>
                      </div>
                    </div>
                    {/* More option */}
                    <div className="btn-group">
                      <a
                        href="#"
                        className="nav-link py-2 px-3 text-muted"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </a>
                      <ul className="dropdown-menu border-0 shadow">
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Share
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                {/* Chat: Footer */}
                <div className="chat-message">
                  <textarea
                    className="form-control"
                    placeholder="Enter text here..."
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          {/* row end */}
        </div>
      </div>
    </div>
  </div>
  {/* Jquery Core Js */}
  {/* Jquery Page Js */}
</>

  )
}

export default Chat