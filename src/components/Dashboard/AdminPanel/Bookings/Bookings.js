import React from 'react';
import { Link } from 'react-router-dom';
import DashboardNav from '../../DashboardNav/DashboardNav';
import { UserContext } from '../../../../App';
import { Spinner, Table } from 'react-bootstrap';
import BookingsDetails from './BookingsDetails';

const Bookings = () => {
  const [loggedInUser] = React.useContext(UserContext);
  const [bookings, setBookings] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const onStatusUpdate = (data) => {
    console.log('You Clicked Me:', data.value);
  }

  React.useEffect(() => {
    fetch('https://travel-maniacs.herokuapp.com/bookings')
      .then(res => res.json())
      .then(data => {
        setBookings(data)
        setLoading(false)
      })
  }, [])


  return (
    <div className='row' style={{ height: "100vh" }}>
      <div className="col-md-2">
        <DashboardNav></DashboardNav>
      </div>
      <div className="col-md-10">
        <div className="dashboard-header text-white">
          <div className="d-flex justify-content-between align-items-center h-100">
            <h1 className="ml-5">Bookings</h1>
            <button as={Link} to="/user-details" className="button-coral mr-5" style={{ fontSize: '12px' }}>{loggedInUser.name}</button>
          </div>
        </div>
        <div className="h-100 p-5">
        {
              loading
              ? <div className="text-center d-flex align-items-center justify-content-center h-50"><Spinner animation="grow" variant="danger" /></div>
              : <Table striped bordered hover>
                  <thead>
                    <tr className="text-muted">
                      <th>Package Name</th>
                      <th>Price</th>
                      <th>Customer Name</th>
                      <th>Payment</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      bookings.map(booking => <BookingsDetails booking={booking} key={booking._id} onStatusUpdate={onStatusUpdate}></BookingsDetails>)
                    }
                  </tbody>
                </Table>
            }
        </div>
      </div>
    </div>
  );
};

export default Bookings;