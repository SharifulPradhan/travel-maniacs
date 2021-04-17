import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const ReviewCard = () => {
  return (
    <Card style={{ width: '17rem', borderRadius:'10px'}} className="ml-2 mt-2 shadow">
      <Card.Body>
        <FontAwesomeIcon icon={faStar} className="text-coral"/>
        <FontAwesomeIcon icon={faStar} className="text-coral"/>
        <FontAwesomeIcon icon={faStar} className="text-coral"/>
        <FontAwesomeIcon icon={faStar} className="text-coral"/>
        <FontAwesomeIcon icon={faStarHalf} className="text-coral"/>
      <Card.Text className="mt-3">Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor jimaun areman tareman</Card.Text>
        <Card.Title>Amy Johnson</Card.Title>
        <h6 className="text-secondary">CEO, 1MinuteSchools</h6>
        <img src="https://smartdemowp.com/travio/wp-content/uploads/2021/02/testimonial-2.png" alt=""/>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;