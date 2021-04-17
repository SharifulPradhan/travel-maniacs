import React from 'react';
import { Card } from 'react-bootstrap';

const SpecialitiesCard = ({ speciality }) => {
  console.log({ speciality });
  return (
    <Card style={{ width: '17rem', borderRadius:'10px'}} className="ml-2 mt-2 shadow">
      <Card.Img variant="top" src={speciality.img} style={{borderRadius:'10px 10px 0px 0px'}}/>
      <Card.Body>
        <div className='card-icon'><img src={speciality.icon} alt=""/></div>
        <Card.Title>{speciality.description}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SpecialitiesCard;