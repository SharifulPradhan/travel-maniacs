import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import DashboardNav from '../../DashboardNav/DashboardNav';
import { useForm } from "react-hook-form";
import PaymentGateway from '../PaymentGateway/PaymentGateway';
import { UserContext } from '../../../../App';


const Book = () => {
  const { id } = useParams('');


  const { register} = useForm();
  const [loggedInUser] = React.useContext(UserContext);
  const [packageData, setPackageData] = React.useState([]);
  const { days, title, price } = packageData;

  React.useEffect(() => {
    fetch('https://travel-maniacs.herokuapp.com/package/' + id)
      .then(res => res.json())
      .then(data => setPackageData(data))
  }, [id])

  const handleBooking = (paymentId) => {
    const bookingDetails = {
      package: packageData,
      name: loggedInUser.name,
      email: loggedInUser.email,
      paymentId,
      payment: 'Confirmed',
      orderTime: new Date()
    }

    fetch('https://travel-maniacs.herokuapp.com/addBooking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookingDetails)
    })
      .then(res => console.log('server side response', res))
    alert("Your Bookings Successfully Completed")
  }

  return (
    <div className='row' style={{ height: "100vh" }}>
      <div className="col-md-2">
        <DashboardNav></DashboardNav>
      </div>
      <div className="col-md-10">
        <div className="dashboard-header text-white">
          <div className="d-flex justify-content-between align-items-center h-100">
            <h1 className="ml-5">Book</h1>
            <button as={Link} to="/user-details" className="button-coral mr-5" style={{ fontSize: '12px' }}>{loggedInUser.name}</button>
          </div>
        </div>
        <div className="h-100">
          <div className="dashboard-bg">
            <h1>Your Booking Details</h1>
            <form>
              <div className="row">
                <div className="col">
                  <label>Your Name</label>
                  <input name="name" defaultValue={loggedInUser.name} {...register("name")} className="form-control" />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <label>Email</label>
                  <input name="email" defaultValue={loggedInUser.email} type="email" {...register("email")} className="form-control" />
                </div>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col">
                  <label>Your Package Name</label>
                  <input name="package" defaultValue={title} type="text" {...register("package")} className="form-control" />
                </div>
                <div className="col">
                  <label>Total Days</label>
                  <input name="days" defaultValue={days} type="text" {...register("days")} className="form-control" />
                </div>
              </div>
            </form>
            <PaymentGateway handleBooking={handleBooking}></PaymentGateway>
            <label>Your Service Charge Will Be <b className="text-coral">${price}</b></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;