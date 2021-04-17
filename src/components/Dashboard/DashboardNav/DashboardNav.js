import './DashboardNav.css'
import React from 'react';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DashboardNav = () => {
  return (
    <div className="dashboard-nav d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="text-white">
            <img src={logo} alt=""/>
          </Link>
        </li>
        <li>
          <Link to="/book" className="text-white">
            <FontAwesomeIcon /> <span>Book</span>
          </Link>
        </li>
        <li>
          <Link to="/your-bookings" className="text-white">
            <FontAwesomeIcon /> <span>Your Bookings</span>
          </Link>
        </li>
        <li>
          <Link to="/review" className="text-white">
            <FontAwesomeIcon /> <span>Give us a Review</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/bookings" className="text-white" >
            <FontAwesomeIcon /> <span>Bookings</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/add-packages" className="text-white" >
            <FontAwesomeIcon /> <span>Add Packages</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/make-admin" className="text-white" >
            <FontAwesomeIcon /> <span>Make Admin</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/manage-packages" className="text-white" >
            <FontAwesomeIcon /> <span>Manage Packages</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-white"><FontAwesomeIcon /> <span>Logout</span></Link>
      </div>
    </div>
  );
};

export default DashboardNav;