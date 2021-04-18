import React from 'react';
import { Spinner } from 'react-bootstrap';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
  const [reviews, setReviews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(()=> {
    fetch('http://localhost:4200/reviews')
    .then(res => res.json())
    .then(data => {
      setReviews(data)
      setLoading(false)
    })
  }, [])
  return (
    <section style={{height:'700px'}}>
      <div className="pt-5">
      <h6 className="text-secondary">REVIEW & TESTIMONIALS</h6>
      <h1>Top Reviews for Travel Maniacs</h1>
      </div>
      {
        loading
        ? <div className="text-center d-flex align-items-center justify-content-center h-50"><Spinner animation="grow" variant="danger" /></div>
        : <div className="row align-items-center justify-content-center">
        {
          reviews.map(review => <ReviewCard reviewData={review} key={review._id}></ReviewCard>)
        }
      </div>
      }
    </section>
  );
};

export default Reviews;