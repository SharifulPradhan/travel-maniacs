import React from 'react';
import { Card } from 'react-bootstrap';
import './ShowCase.css'


const ShowCase = () => {
  return (
    <section className="showcase-container row align-items-center justify-content-center">
      <Card style={{ width: '22rem', borderRadius: '10px' }} className="ml-2 mt-2 shadow">
        <h1>Our Special New Zealand Tour</h1>
        <Card.Body>
          <Card.Title>Short Time Offer Book Today</Card.Title>
          <Card.Title><span className="text-coral">$1000</span> <small>/ Per person</small></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
    </Card.Text>
          <button className="button-coral shadow">Book Now</button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default ShowCase;