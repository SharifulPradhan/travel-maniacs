import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React from 'react';

const BookingsDetails = ({ booking, onStatusUpdate }) => {
  const { title, price } = booking.package;
  const options = [
    'Select an option','Pending', 'On Going', 'Done'
  ];
  const defaultOption = options[0];
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>${price}</td>
        <td>{booking.name}</td>
        <td>{booking.payment}</td>
        <td><Dropdown options={options} onChange={onStatusUpdate} value={defaultOption} placeholder="Select an option" /></td>
      </tr>
    </>
  );
};

export default BookingsDetails;