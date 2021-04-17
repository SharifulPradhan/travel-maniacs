import React from 'react';
import { Card } from 'react-bootstrap';

const BookingsCard = ({bookings}) => {
  const {img, title, price, days, description, status} = bookings;
  return (
    <Card style={{ width: '22rem', borderRadius: '10px' }} className="ml-2 mt-2 shadow card-animation">
      <Card.Img variant="top" src={img} style={{ borderRadius: '10px 10px 0px 0px' }} className="card-image-animation" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title><span className="text-coral">{price}</span> <small>/ Per person</small></Card.Title>
        <Card.Title><span className="text-coral">{days}</span> <small>London</small></Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <button className="button-coral">{status}</button>
      </Card.Body>
      
    </Card>
  );
};

export default BookingsCard;