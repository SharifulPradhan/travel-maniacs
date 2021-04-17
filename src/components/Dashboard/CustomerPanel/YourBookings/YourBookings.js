import React from 'react';
import { Link } from 'react-router-dom';
import BookingsCard from '../../AdminPanel/Bookings/BookingsCard';
import DashboardNav from '../../DashboardNav/DashboardNav';


const YourBookings = () => {
  const bookingsInformations = [
    { img:'https://smartdemowp.com/travio/wp-content/uploads/2021/02/tour-1.jpg',
      title:'City Tour',
      price: 190,
      days: "5 days",
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quos aliquid molestias ex, minus vitae! Harum, fugit hic corrupti saepe rerum natus quam cupiditate, error deleniti repellat praesentium. Facere, animi.',
      status:'pending'
  },
  { img:'https://smartdemowp.com/travio/wp-content/uploads/2021/02/tour-1.jpg',
      title:'Night Tour',
      price: 180,
      days: "1 Nights",
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quos aliquid molestias ex, minus vitae! Harum, fugit hic corrupti saepe rerum natus quam cupiditate, error deleniti repellat praesentium. Facere, animi.',
      status:'confirmed'
  },
  { img:'https://smartdemowp.com/travio/wp-content/uploads/2021/02/tour-1.jpg',
      title:'Night Tour',
      price: 180,
      days: "1 Nights",
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quos aliquid molestias ex, minus vitae! Harum, fugit hic corrupti saepe rerum natus quam cupiditate, error deleniti repellat praesentium. Facere, animi.',
      status:'confirmed'
  },
  { img:'https://smartdemowp.com/travio/wp-content/uploads/2021/02/tour-1.jpg',
      title:'Night Tour',
      price: 180,
      days: "1 Nights",
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quos aliquid molestias ex, minus vitae! Harum, fugit hic corrupti saepe rerum natus quam cupiditate, error deleniti repellat praesentium. Facere, animi.',
      status:'confirmed'
  },
  { img:'https://smartdemowp.com/travio/wp-content/uploads/2021/02/tour-1.jpg',
      title:'Night Tour',
      price: 180,
      days: "1 Nights",
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quos aliquid molestias ex, minus vitae! Harum, fugit hic corrupti saepe rerum natus quam cupiditate, error deleniti repellat praesentium. Facere, animi.',
      status:'confirmed'
  },
  { img:'https://smartdemowp.com/travio/wp-content/uploads/2021/02/tour-1.jpg',
      title:'Night Tour',
      price: 180,
      days: "1 Nights",
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quos aliquid molestias ex, minus vitae! Harum, fugit hic corrupti saepe rerum natus quam cupiditate, error deleniti repellat praesentium. Facere, animi.',
      status:'confirmed'
  },
  ];
  return (
    <div className='row' style={{ height: "100vh" }}>
      <div className="col-md-2">
        <DashboardNav></DashboardNav>
      </div>
      <div className="col-md-10">
        <div className="dashboard-header text-white">
          <div className="d-flex justify-content-between align-items-center h-100">
            <h1 className="ml-5">Your Bookings</h1>
            <button as={Link} to="/user-details" className="button-coral mr-5">Shariful Pradhan Hridoy</button>
          </div>
        </div>
        <div className="h-100">
          <div className="d-flex flex-wrap">
          <div className="d-flex flex-wrap">
            { 
              bookingsInformations.map(bookings => <BookingsCard bookings={bookings}></BookingsCard>)
            }
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourBookings;