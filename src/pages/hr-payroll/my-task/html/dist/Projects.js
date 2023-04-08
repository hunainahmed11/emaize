import React from 'react'
import '../../../../../../src/assets/payroll/css/Emaize.style.min.scss';
import { Link } from 'react-router-dom';

function Projects() {
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
        <li className="collapsed">
          <a
            className="m-link active"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-Components"
            href='#'
          >
            <i className="icofont-home fs-5" /> <span>Dashboard</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse show" id="dashboard-Components">
            <li>
              {/* <a className="ms-link active" href="index-2.html"> */}
                {" "}
                <Link to="/Indx2" className="ms-link active"> 
                <span>Hr Dashboard</span>.
                </Link>
              {/* </a> */}
            </li>
            <li>
              {/* <a className="ms-link" href="project-dashboard.html"> */}
                {" "}
                <Link to="/project_Dashboard" className="ms-link">
                <span>Project Dashboard</span>
                </Link>
              {/* </a> */}
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#project-Components"
            href="#"
          >
            <i className="icofont-briefcase" />
            <span>Projects</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="project-Components">
            <li>
              {/* <a className="ms-link" href="projects.html"> */}
                <Link to="/Projects" className='ms-link'>
                <span>Projects</span>
                </Link>
              {/* </a> */}
            </li>
            <li>
              {/* <a className="ms-link" href="task.html"> */}
              <Link to="/Task" className='ms-link'>
                <span>Tasks</span>
              </Link>
            </li>
            <li>
              {/* <a className="ms-link" href="timesheet.html"> */}
              <Link to="/TimeSheet" className='ms-link'>
                <span>Timesheet</span>
              </Link>
            </li>
            <li>
              {/* <a className="ms-link" href="team-leader.html"> */}
            <Link to="/Team_Leader" className='ms-link'>

                <span>Leaders</span>
            </Link>
              {/* </a> */}
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#tikit-Components"
            href="#"
          >
            <i className="icofont-ticket" /> <span>Tickets</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="tikit-Components">
            <li>
              {/* <a className="ms-link" href="tickets.html"> */}
                {" "}
                <Link to="/Ticket" className="ms-link">
                <span>Tickets View</span>
                </Link>
            </li>
            <li>
              {/* <a className="ms-link" href="ticket-detail.html"> */}

                {" "}
                <Link to="/Ticket_Detail" className="ms-link">
                <span>Ticket Detail</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#client-Components"
            href="#"
          >
            <i className="icofont-user-male" /> <span>Our Clients</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="client-Components">
            <li>
              {/* <a className="ms-link" href="ourclients.html"> */}
              <Link to="/OurClients" className="ms-link" >
                {" "}
                <span>Clients</span>
                </Link>
              {/* </a> */}
            </li>
            <li>
              <Link className="ms-link" to="/Profile">
                {" "}
                <span>Client Profile</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#emp-Components"
            href="#"
          >
            <i className="icofont-users-alt-5" /> <span>Employees</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="emp-Components">
            <li>
              {/* <a className="ms-link" href="members.html"> */}
              <Link to="/Members" className="ms-link">
                {" "}
                <span>Members</span>
              </Link>
              {/* </a> */}

            </li>
            <li>
              {/* <a className="ms-link" href="employee-profile.html"> */}
                {" "}
                <Link to="/Employee_Profile" className="ms-link">
                <span>Members Profile</span>
              </Link>
              {/* </a> */}

            </li>
            <li>
              {/* <a className="ms-link" href="holidays.html"> */}
                {" "}
                <Link to="/Holidays" className="ms-link">
                
                <span>Holidays</span>
              </Link>
            </li>
            <li>
              {/* <a className="ms-link" href="attendance-employees.html"> */}
                {" "}
                <Link to="/Attendance_Employees" className="ms-link">
                <span>Attendance Employees</span>
              </Link>
            </li>
            <li>
              <Link className="ms-link" to="Attendance">
                {" "}
                <span>Attendance</span>
              </Link>
            </li>
            <li>
              <Link className="ms-link" to="Leave_Request">
                {" "}
                <span>Leave Request</span>
              </Link>
            </li>
            <li>
              <Link className="ms-link" to="Department">
                {" "}
                <span>Department</span>
              </Link>
            </li>
            <li>
              <Link className="ms-link" to="Loan">
                {" "}
                <span>Loan</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#menu-Componentsone"
            href="#"
          >
            <i className="icofont-ui-calculator" /> <span>Accounts</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="menu-Componentsone">
            <li>
              {/* <a className="ms-link" href="invoices.html"> */}
              <Link to="/Invoices" className="ms-link">
                <span>Invoices</span>{" "}
                </Link>
              {/* </a> */}
            </li>
            <li>
              {/* <a className="ms-link" href="payments.html"> */}
              <Link to="/Payments" className="ms-link">
                <span>Payments</span>{" "}
                </Link>
              {/* </a> */}
            </li>
            <li>
              {/* <a className="ms-link" href="expenses.html"> */}
              <Link to="/Expenses" className="ms-link">
                <span>Expenses</span>{" "}
              </Link>
            </li>
            <li>
              {/* <a className="ms-link" href="create-invoice.html"> */}
              <Link to="/Create_Invoice" className="ms-link">
                <span>Create Invoice</span>{" "}
              </Link>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#payroll-Components"
            href="#"
          >
            <i className="icofont-users-alt-5" /> <span>Payroll</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="payroll-Components">
            <li>
              {/* <a className="ms-link" href="salaryslip.html"> */}
              <Link to="/SalarySlip" className="ms-link">
                <span>Employee Salary</span>{" "}
              </Link>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#app-Components"
            href="#"
          >
            <i className="icofont-contrast" /> <span>Tasks</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="app-Components">
            <li>
              {/* <a className="ms-link" href="calendar.html"> */}
              <Link className="ms-link" to="/Calender">
                {" "}
                <span>Calander</span>
              </Link>
            </li>
            {/* <li><a class="ms-link" href="chat.html"><span>Chat App</span></a></li> */}
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
              <div className="card-header p-0 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold py-3 mb-0">Projects</h3>
                <div className="d-flex py-2 project-tab flex-wrap w-sm-100">
                  <button
                    type="button"
                    className="btn btn-dark w-sm-100"
                    data-bs-toggle="modal"
                    data-bs-target="#createproject"
                  >
                    <i className="icofont-plus-circle me-2 fs-6" />
                    Create Project
                  </button>
                  <ul
                    className="nav nav-tabs tab-body-header rounded ms-3 prtab-set w-sm-100"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#All-list"
                        role="tab"
                      >
                        All
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#Started-list"
                        role="tab"
                      >
                        Started
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#Approval-list"
                        role="tab"
                      >
                        Approval
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#Completed-list"
                        role="tab"
                      >
                        Completed
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Row end  */}
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 flex-column">
              <div className="tab-content mt-4">
                <div className="tab-pane fade show active" id="All-list">
                  <div className="row g-3 gy-5 py-3 row-deck">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                UI/UX Design
                              </h6>
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
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightgreen">
                                <i className="icofont-vector-path" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Practice to Perfect{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Website Design
                              </h6>
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
                                <span className="ms-2">4 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">1 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">4 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">3</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-danger-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> 15 Days Left
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
                              style={{ width: "39%" }}
                              aria-valuenow={39}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightyellow">
                                <i className="icofont-ui-touch-phone" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Rhinestone{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                App Development
                              </h6>
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
                                src="assets/images/xs/avatar7.jpg"
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
                                <span className="ms-2">7 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">2 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">6 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">5</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-danger-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> 25 Days Left
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
                              style={{ width: "28%" }}
                              aria-valuenow={20}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-success-bg">
                                <i className="icofont-tick-boxed" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Box of Crayons{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Quality Assurance
                              </h6>
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
                                <span className="ms-2">1 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">1 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">2 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">15</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-danger-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> 2 Days Left
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
                              style={{ width: "40%" }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-orange-bg">
                                <i className="icofont-dashboard-web" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Gob Geeklords{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Development
                              </h6>
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
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar10.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar11.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar6.jpg"
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
                                <span className="ms-2">10 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">10 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">8 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">45</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-danger-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> 20 Days Left
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
                              style={{ width: "20%" }}
                              aria-valuenow={20}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-careys-pink">
                                <i className="icofont-site-map" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Java Dalia{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Backend Development
                              </h6>
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
                                src="assets/images/xs/avatar7.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar10.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar11.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar6.jpg"
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
                                <span className="ms-2">8 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">8Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">8 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">7</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-danger-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> 10 Days Left
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
                              style={{ width: "23%" }}
                              aria-valuenow={23}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightblue">
                                <i className="icofont-tasks" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Fast Cad
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Software Testing
                              </h6>
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
                                src="assets/images/xs/avatar7.jpg"
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
                                <span className="ms-2">7 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">2 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">6 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">5</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-danger-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> 25 Days Left
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
                              style={{ width: "28%" }}
                              aria-valuenow={20}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightgreen">
                                <i className="icofont-vector-path" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Hex Clan{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Website Design
                              </h6>
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
                            </div>
                          </div>
                          <div className="row g-2 pt-4">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-2">4 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2 text-success">
                                  Completed
                                </span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">4 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">3</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-success-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Completed
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
                              style={{ width: "50%" }}
                              aria-valuenow={39}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-success-bg">
                                <i className="icofont-tick-boxed" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Switch and Swift{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Quality Assurance
                              </h6>
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
                                <span className="ms-2">1 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">1 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">2 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">0</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-warning-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Approval
                            </span>
                          </div>
                          <div className="progress" style={{ height: 8 }}>
                            <div
                              className="progress-bar bg-secondary"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={15}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightyellow">
                                <i className="icofont-ui-touch-phone" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Rhinestone{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                App Development
                              </h6>
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
                                src="assets/images/xs/avatar7.jpg"
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
                                <span className="ms-2">7 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">2 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">6 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">5</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-danger-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> 25 Days Left
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
                              style={{ width: "28%" }}
                              aria-valuenow={20}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-success-bg">
                                <i className="icofont-tick-boxed" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Box of Crayons{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Quality Assurance
                              </h6>
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
                                <span className="ms-2">1 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">1 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">2 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">15</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-danger-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> 2 Days Left
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
                              style={{ width: "40%" }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-orange-bg">
                                <i className="icofont-dashboard-web" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Gob Geeklords{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Development
                              </h6>
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
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar10.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar11.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar6.jpg"
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
                                <span className="ms-2">10 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">10 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">8 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">45</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-danger-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> 20 Days Left
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
                              style={{ width: "20%" }}
                              aria-valuenow={20}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="Started-list">
                  <div className="row g-3 gy-5 py-3 row-deck">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                UI/UX Design
                              </h6>
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
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightgreen">
                                <i className="icofont-vector-path" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Practice to Perfect{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Website Design
                              </h6>
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
                                <span className="ms-2">4 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">1 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">4 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">3</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-danger-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> 15 Days Left
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
                              style={{ width: "39%" }}
                              aria-valuenow={39}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightyellow">
                                <i className="icofont-ui-touch-phone" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Rhinestone{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                App Development
                              </h6>
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
                                src="assets/images/xs/avatar7.jpg"
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
                                <span className="ms-2">7 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">2 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">6 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">5</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-danger-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> 25 Days Left
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
                              style={{ width: "28%" }}
                              aria-valuenow={20}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-success-bg">
                                <i className="icofont-tick-boxed" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Box of Crayons{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Quality Assurance
                              </h6>
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
                                <span className="ms-2">1 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">1 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">2 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">15</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-danger-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> 2 Days Left
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
                              style={{ width: "40%" }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-orange-bg">
                                <i className="icofont-dashboard-web" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Gob Geeklords{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Development
                              </h6>
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
                                src="assets/images/xs/avatar9.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar7.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar10.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar11.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar6.jpg"
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
                                <span className="ms-2">10 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">10 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">8 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">45</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-danger-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> 20 Days Left
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
                              style={{ width: "20%" }}
                              aria-valuenow={20}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-careys-pink">
                                <i className="icofont-site-map" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Java Dalia{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Backend Development
                              </h6>
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
                                src="assets/images/xs/avatar7.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar10.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar11.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar6.jpg"
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
                                <span className="ms-2">8 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">8Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">8 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">7</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-danger-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> 10 Days Left
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
                              style={{ width: "23%" }}
                              aria-valuenow={23}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightblue">
                                <i className="icofont-tasks" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Fast Cad
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Software Testing
                              </h6>
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
                                src="assets/images/xs/avatar7.jpg"
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
                                <span className="ms-2">7 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">2 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">6 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">5</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-danger-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> 25 Days Left
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
                              style={{ width: "28%" }}
                              aria-valuenow={20}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightgreen">
                                <i className="icofont-vector-path" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Practice to Perfect{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Website Design
                              </h6>
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
                                <span className="ms-2">4 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">1 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">4 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">3</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-danger-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> 15 Days Left
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
                              style={{ width: "39%" }}
                              aria-valuenow={39}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="Approval-list">
                  <div className="row g-3 gy-5 py-3 row-deck">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-info-bg">
                                <i className="icofont-paint" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Software Chasers{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                UI/UX Design
                              </h6>
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
                            <span className="small light-warning-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Approval
                            </span>
                          </div>
                          <div className="progress" style={{ height: 8 }}>
                            <div
                              className="progress-bar bg-secondary"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={15}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightgreen">
                                <i className="icofont-vector-path" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Navy Hurdle{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Website Design
                              </h6>
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
                                <span className="ms-2">4 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">1 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">4 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">3</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-warning-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Approval
                            </span>
                          </div>
                          <div className="progress" style={{ height: 8 }}>
                            <div
                              className="progress-bar bg-secondary"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={15}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-orange-bg">
                                <i className="icofont-dashboard-web" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Barcelona{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Development
                              </h6>
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
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar9.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar7.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar10.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar11.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar6.jpg"
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
                                <span className="ms-2">10 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">10 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">10 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">45</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-warning-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Approval
                            </span>
                          </div>
                          <div className="progress" style={{ height: 8 }}>
                            <div
                              className="progress-bar bg-secondary"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={15}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-careys-pink">
                                <i className="icofont-site-map" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                phoenix{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Backend Development
                              </h6>
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
                                src="assets/images/xs/avatar7.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar10.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar11.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar6.jpg"
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
                                <span className="ms-2">8 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">8Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">8 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">7</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-warning-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Approval
                            </span>
                          </div>
                          <div className="progress" style={{ height: 8 }}>
                            <div
                              className="progress-bar bg-secondary"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={15}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightblue">
                                <i className="icofont-tasks" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Roadrunner
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Software Testing
                              </h6>
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
                                src="assets/images/xs/avatar7.jpg"
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
                                <span className="ms-2">7 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">2 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">6 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">5</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-warning-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Approval
                            </span>
                          </div>
                          <div className="progress" style={{ height: 8 }}>
                            <div
                              className="progress-bar bg-secondary"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={15}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-success-bg">
                                <i className="icofont-tick-boxed" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Bladerunner
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Quality Assurance
                              </h6>
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
                                <span className="ms-2">1 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">1 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">2 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">0</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-warning-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Approval
                            </span>
                          </div>
                          <div className="progress" style={{ height: 8 }}>
                            <div
                              className="progress-bar bg-secondary"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={15}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightgreen">
                                <i className="icofont-vector-path" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Navy Hurdle{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Website Design
                              </h6>
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
                                <span className="ms-2">4 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">1 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">4 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">3</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-warning-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Approval
                            </span>
                          </div>
                          <div className="progress" style={{ height: 8 }}>
                            <div
                              className="progress-bar bg-secondary"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={15}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-orange-bg">
                                <i className="icofont-dashboard-web" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Barcelona{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Development
                              </h6>
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
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar9.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar7.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar10.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar11.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar6.jpg"
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
                                <span className="ms-2">10 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2">10 Month</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">10 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">45</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-warning-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Approval
                            </span>
                          </div>
                          <div className="progress" style={{ height: 8 }}>
                            <div
                              className="progress-bar bg-secondary"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={15}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary ms-1"
                              role="progressbar"
                              style={{ width: "0%" }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="Completed-list">
                  <div className="row g-3 gy-5 py-3 row-deck">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-info-bg">
                                <i className="icofont-paint" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Sunburst{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                UI/UX Design
                              </h6>
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
                                <span className="ms-2 text-success">
                                  Completed
                                </span>
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
                            <span className="small light-success-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Completed
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
                              style={{ width: "50%" }}
                              aria-valuenow={39}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightgreen">
                                <i className="icofont-vector-path" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                X mind{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Website Design
                              </h6>
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
                            </div>
                          </div>
                          <div className="row g-2 pt-4">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-2">4 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2 text-success">
                                  Completed
                                </span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">4 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">3</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-success-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Completed
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
                              style={{ width: "50%" }}
                              aria-valuenow={39}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightyellow">
                                <i className="icofont-ui-touch-phone" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Edison{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                App Development
                              </h6>
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
                                src="assets/images/xs/avatar7.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar8.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="row g-2 pt-4">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-2">7 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2 text-success">
                                  Completed
                                </span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">6 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">5</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-success-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Completed
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
                              style={{ width: "50%" }}
                              aria-valuenow={39}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-success-bg">
                                <i className="icofont-tick-boxed" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Fireball{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Quality Assurance
                              </h6>
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
                            </div>
                          </div>
                          <div className="row g-2 pt-4">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-2">1 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2 text-success">
                                  Completed
                                </span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">2 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">15</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-success-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Completed
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
                              style={{ width: "50%" }}
                              aria-valuenow={39}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-orange-bg">
                                <i className="icofont-dashboard-web" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Firestorm{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Development
                              </h6>
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
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar9.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar11.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar6.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="row g-2 pt-4">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-2">10 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2 text-success">
                                  Completed
                                </span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">8 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">45</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-success-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Completed
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
                              style={{ width: "50%" }}
                              aria-valuenow={39}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-careys-pink">
                                <i className="icofont-site-map" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Irongate{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Backend Development
                              </h6>
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
                                src="assets/images/xs/avatar7.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar10.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar11.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar6.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="row g-2 pt-4">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-2">8 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2 text-success">
                                  Completed
                                </span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">8 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">7</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-success-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Completed
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
                              style={{ width: "50%" }}
                              aria-valuenow={39}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightblue">
                                <i className="icofont-tasks" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Kryptonite
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Software Testing
                              </h6>
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
                                src="assets/images/xs/avatar7.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar8.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="row g-2 pt-4">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-2">7 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2 text-success">
                                  Completed
                                </span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">6 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">5</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-success-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Completed
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
                              style={{ width: "50%" }}
                              aria-valuenow={39}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightgreen">
                                <i className="icofont-vector-path" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Moonshine{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Website Design
                              </h6>
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
                            </div>
                          </div>
                          <div className="row g-2 pt-4">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-2">4 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2 text-success">
                                  Completed
                                </span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">4 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">3</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-success-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Completed
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
                              style={{ width: "50%" }}
                              aria-valuenow={39}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-success-bg">
                                <i className="icofont-tick-boxed" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Oyster{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Quality Assurance
                              </h6>
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
                            </div>
                          </div>
                          <div className="row g-2 pt-4">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-2">1 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2 text-success">
                                  Completed
                                </span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">2 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">0</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-success-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Completed
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
                              style={{ width: "50%" }}
                              aria-valuenow={39}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block bg-lightgreen">
                                <i className="icofont-vector-path" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                X mind{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Website Design
                              </h6>
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
                            </div>
                          </div>
                          <div className="row g-2 pt-4">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-2">4 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2 text-success">
                                  Completed
                                </span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">4 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">3</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-success-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Completed
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
                              style={{ width: "50%" }}
                              aria-valuenow={39}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-orange-bg">
                                <i className="icofont-dashboard-web" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Firestorm{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                Development
                              </h6>
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
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar9.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar11.jpg"
                                alt=""
                              />
                              <img
                                className="avatar rounded-circle sm"
                                src="assets/images/xs/avatar6.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="row g-2 pt-4">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip" />
                                <span className="ms-2">10 Attach</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock" />
                                <span className="ms-2 text-success">
                                  Completed
                                </span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-group-students " />
                                <span className="ms-2">8 Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat" />
                                <span className="ms-2">45</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block" />
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progress</h4>
                            <span className="small light-success-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Completed
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
                              style={{ width: "50%" }}
                              aria-valuenow={39}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mt-5">
                            <div className="lesson_name">
                              <div className="project-block light-info-bg">
                                <i className="icofont-paint" />
                              </div>
                              <span className="small text-muted project_name fw-bold">
                                {" "}
                                Sunburst{" "}
                              </span>
                              <h6 className="mb-0 fw-bold  fs-6  mb-2">
                                UI/UX Design
                              </h6>
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
                                <span className="ms-2 text-success">
                                  Completed
                                </span>
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
                            <span className="small light-success-bg  p-1 rounded">
                              <i className="icofont-ui-clock" /> Completed
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
                              style={{ width: "50%" }}
                              aria-valuenow={39}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
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
      {/* Create Project*/}
      <div
        className="modal fade"
        id="createproject"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="createprojectlLabel">
                {" "}
                Create Project
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
                  htmlFor="exampleFormControlInput77"
                  className="form-label"
                >
                  Project Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput77"
                  placeholder="Explain what the Project Name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Project Category</label>
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
                  Project Images &amp; Document
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFileMultipleone"
                  multiple=""
                />
              </div>
              <div className="deadline-form">
                <form>
                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label htmlFor="datepickerded" className="form-label">
                        Project Start Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="datepickerded"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="datepickerdedone" className="form-label">
                        Project End Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="datepickerdedone"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-sm-12">
                      <label className="form-label">Notifation Sent</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected="">All</option>
                        <option value={1}>Team Leader Only</option>
                        <option value={2}>Team Member Only</option>
                      </select>
                    </div>
                    <div className="col-sm-12">
                      <label
                        htmlFor="formFileMultipleone"
                        className="form-label"
                      >
                        Task Assign Person
                      </label>
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
                </form>
              </div>
              <div className="row g-3 mb-3">
                <div className="col-sm">
                  <label htmlFor="formFileMultipleone" className="form-label">
                    Budget
                  </label>
                  <input type="number" className="form-control" />
                </div>
                <div className="col-sm">
                  <label htmlFor="formFileMultipleone" className="form-label">
                    Priority
                  </label>
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
      {/* Edit Project*/}
      <div
        className="modal fade"
        id="editproject"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="editprojectLabel">
                {" "}
                Edit Project
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
                  htmlFor="exampleFormControlInput78"
                  className="form-label"
                >
                  Project Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput78"
                  defaultValue="Social Geek Made"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Project Category</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
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
                <label htmlFor="formFileMultiple456" className="form-label">
                  Project Images &amp; Document
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFileMultiple456"
                />
              </div>
              <div className="deadline-form">
                <form>
                  <div className="row g-3 mb-3">
                    <div className="col">
                      <label htmlFor="datepickerded123" className="form-label">
                        Project Start Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="datepickerded123"
                        defaultValue="2021-01-10"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="datepickerded456" className="form-label">
                        Project End Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="datepickerded456"
                        defaultValue="2021-04-10"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-sm-12">
                      <label className="form-label">Notifation Sent</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected="">All</option>
                        <option value={1}>Team Leader Only</option>
                        <option value={2}>Team Member Only</option>
                      </select>
                    </div>
                    <div className="col-sm-12">
                      <label
                        htmlFor="formFileMultipleone"
                        className="form-label"
                      >
                        Task Assign Person
                      </label>
                      <select
                        className="form-select"
                        multiple=""
                        aria-label="Default select Priority"
                      >
                        <option selected="">Lucinda Massey</option>
                        <option selected="" value={1}>
                          Ryan Nolan
                        </option>
                        <option selected="" value={2}>
                          Oliver Black
                        </option>
                        <option selected="" value={3}>
                          Adam Walker
                        </option>
                        <option selected="" value={4}>
                          Brian Skinner
                        </option>
                        <option value={5}>Dan Short</option>
                        <option value={5}>Jack Glover</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="row g-3 mb-3">
                <div className="col-sm">
                  <label htmlFor="formFileMultipleone" className="form-label">
                    Priority
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select Priority"
                  >
                    <option selected="">Medium</option>
                    <option value={1}>Highest</option>
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
                  defaultValue={
                    "Social Geek Made,lorem urna commodo sem. Pellentesque venenatis leo quam, sed mattis sapien lobortis ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere\n                        "
                  }
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

export default Projects