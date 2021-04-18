import React from 'react';
import { Link } from 'react-router-dom';
import DashboardNav from '../../DashboardNav/DashboardNav';
import { UserContext } from '../../../../App';
import { Spinner } from 'react-bootstrap';
import BookingsCard from '../../BookingsCard/BookingsCard';

const YourBookings = () => {
  const [loggedInUser] = React.useContext(UserContext);
  const [bookings, setBookings] = React.useState([]);
  const [loading, setLoading] = React.useState(true)


  React.useEffect(() => {
    fetch('http://localhost:4200/bookingsOfCustomer?email=' + loggedInUser.email)
      .then(res => res.json())
      .then(data => {
        setBookings(data)
        setLoading(false)
      })
  }, [loggedInUser.email])
  return (
    <div className='row' style={{ height: "100vh" }}>
      <div className="col-md-2">
        <DashboardNav></DashboardNav>
      </div>
      <div className="col-md-10">
        <div className="dashboard-header text-white">
          <div className="d-flex justify-content-between align-items-center h-100">
            <h1 className="ml-5">Your Bookings</h1>
            <button as={Link} to="/user-details" className="button-coral mr-5" style={{ fontSize: '12px' }}>{loggedInUser.name}</button>
          </div>
        </div>
        <div className="h-100">
          {loading 
            ? <div className="text-center d-flex align-items-center justify-content-center h-50"><Spinner animation="grow" variant="danger" /></div>
            : <div className="d-flex flex-wrap">
              {
                bookings.map(booking => <BookingsCard booking={booking} key={booking._id}></BookingsCard>)
              }
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default YourBookings;