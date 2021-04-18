import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const BookingsCard = ({booking}) => {
  const {imageURL, title, price, days, description} = booking.package;
  return (
    <Card style={{ width: '22rem', borderRadius: '10px' }} className="ml-2 mt-2 shadow card-animation">
      <Card.Img variant="top" src={imageURL} style={{ borderRadius: '10px 10px 0px 0px' }} className="card-image-animation" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title><span className="text-coral">{price}</span> <small>/ Per person</small></Card.Title>
        <Card.Title><span className="text-coral">{days} days</span> </Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <Button variant="primary">pending</Button>
      </Card.Body>
      
    </Card>
  );
};

export default BookingsCard;