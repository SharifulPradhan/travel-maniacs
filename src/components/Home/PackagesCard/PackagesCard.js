import React from 'react';
import { Card } from 'react-bootstrap';
import './PackagesCard.css'

const PackagesCard = () => {
  return (
    <Card style={{ width: '22rem', borderRadius: '10px' }} className="ml-2 mt-2 shadow card-animation">
      <Card.Img variant="top" src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/tour-1.jpg" style={{ borderRadius: '10px 10px 0px 0px' }} className="card-image-animation" />
      <Card.Body>
        <Card.Title>City Tour</Card.Title>
        <Card.Title><span className="text-coral">$160</span> <small>/ Per person</small></Card.Title>
        <Card.Title><span className="text-coral">5 Days</span> <small>London</small></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <button className="button-coral shadow">Book Now</button>
      </Card.Body>
    </Card>
  );
};

export default PackagesCard;