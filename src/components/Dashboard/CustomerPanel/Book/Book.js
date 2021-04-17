import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DashboardNav from '../../DashboardNav/DashboardNav';
import PaymentGateway from '../PaymentGateway/PaymentGateway';


const Book = () => {
  return (
    <div className='row' style={{ height: "100vh" }}>
      <div className="col-md-2">
        <DashboardNav></DashboardNav>
      </div>
      <div className="col-md-10">
        <div className="dashboard-header text-white">
          <div className="d-flex justify-content-between align-items-center h-100">
            <h1 className="ml-5">Book</h1>
            <button as={Link} to="/user-details" className="button-coral mr-5">Shariful Pradhan Hridoy</button>
          </div>
        </div>
        <div className="h-100">
          <div className="dashboard-bg">
            <Form className="w-50 mx-auto mt-5">
              <Form.Group controlId="formGroupText">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formGroupText">
                <Form.Label>Your Package</Form.Label>
                <Form.Control type="text" placeholder="Your Package" />
              </Form.Group>
            </Form>
            <PaymentGateway></PaymentGateway>
            <Form.Label>Your Service Charge Will Be <b className="text-coral">$1000</b></Form.Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;