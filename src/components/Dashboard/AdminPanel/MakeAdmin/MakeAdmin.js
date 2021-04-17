import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DashboardNav from '../../DashboardNav/DashboardNav';



const MakeAdmin = () => {
  return (
    <div className='row' style={{ height: "100vh" }}>
      <div className="col-md-2">
        <DashboardNav></DashboardNav>
      </div>
      <div className="col-md-10">
        <div className="dashboard-header text-white">
          <div className="d-flex justify-content-between align-items-center h-100">
            <h1 className="ml-5">Make Admin</h1>
            <button as={Link} to="/user-details" className="button-coral mr-5">Shariful Pradhan Hridoy</button>
          </div>
        </div>
        <div className="h-100">
          <div className="dashboard-bg">
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <input variant="success" as="input" type="submit" value='Make Admin' className="row mt-3 mx-auto button-coral" />
            </Form.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;