import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
  return (
    <section style={{height:'700px'}}>
      <div className="pt-5">
      <h6 className="text-secondary">REVIEW & TESTIMONIALS</h6>
      <h1>Top Reviews for Travel Maniacs</h1>
      </div>
      <div className="row align-items-center justify-content-center">
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
      </div>
    </section>
  );
};

export default Reviews;