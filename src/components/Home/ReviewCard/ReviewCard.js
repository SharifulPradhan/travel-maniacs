import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const ReviewCard = ({reviewData}) => {
  const {name, jobTitle, review, photo} = reviewData;
  return (
    <Card style={{ width: '17rem', borderRadius:'10px'}} className="ml-2 mt-2 shadow">
      <Card.Body>
        <FontAwesomeIcon icon={faStar} className="text-coral"/>
        <FontAwesomeIcon icon={faStar} className="text-coral"/>
        <FontAwesomeIcon icon={faStar} className="text-coral"/>
        <FontAwesomeIcon icon={faStar} className="text-coral"/>
        <FontAwesomeIcon icon={faStarHalf} className="text-coral"/>
      <Card.Text className="mt-3">{review}</Card.Text>
        <Card.Title>{name}</Card.Title>
        <h6 className="text-secondary">{jobTitle}</h6>
        <img src={photo} alt="" style={{height:'80px', width:'80px', borderRadius:'50%'}}/>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;