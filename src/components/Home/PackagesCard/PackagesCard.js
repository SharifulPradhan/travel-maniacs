import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './PackagesCard.css'

const PackagesCard = ({pkg}) => {
  const {_id ,imageURL, title, price, days, description} = pkg;

  const history = useHistory();

  const handleBookNow = id => {
    const url = `book/${id}`
    history.push(url);
  }

  return (
    <Card style={{ width: '22rem', borderRadius: '10px' }} className="ml-2 mt-2 shadow card-animation">
      <Card.Img variant="top" src={imageURL} style={{ borderRadius: '10px 10px 0px 0px' }} className="card-image-animation" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title><span className="text-coral">${price}</span> <small>/ Per person</small></Card.Title>
        <Card.Title><span className="text-coral">{days} Days</span> <small>package</small></Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <button className="button-coral shadow" onClick={() => handleBookNow(_id)}>Book Now</button>
      </Card.Body>
    </Card>
  );
};

export default PackagesCard;