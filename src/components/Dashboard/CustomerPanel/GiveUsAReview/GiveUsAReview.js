import React from 'react';
import { Link } from 'react-router-dom';
import DashboardNav from '../../DashboardNav/DashboardNav';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';

const GiveUsAReview = () => {
  const [loggedInUser] = React.useContext(UserContext);
  const { register, handleSubmit } = useForm();


  const onSubmit = data => {
    const reviewData = {
      name: loggedInUser.name,
      jobTitle: data.jobTitle,
      review: data.review,
      photo: loggedInUser.photo
    };
    console.log(reviewData);
    fetch('https://travel-maniacs.herokuapp.com/addReview', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    })
      .then(res => console.log('server side response', res))
    alert("Review Added to Directory Successfully")
  }
  return (
    <div className='row' style={{ height: "100vh" }}>
      <div className="col-md-2">
        <DashboardNav></DashboardNav>
      </div>
      <div className="col-md-10">
        <div className="dashboard-header text-white">
          <div className="d-flex justify-content-between align-items-center h-100">
            <h1 className="ml-5">Give Us A Review</h1>
            <button as={Link} to="/user-details" className="button-coral mr-5" style={{fontSize:'12px'}}>{loggedInUser.name}</button>
          </div>
        </div>
        <div className="h-100">
          <div className="dashboard-bg">
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col">
                  <label>Your Name</label>
                  <input name="name" defaultValue={loggedInUser.name} {...register("name")} className="form-control" />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col">
                  <label>Company’s name, Designation</label>
                  <input name="jobTitle" placeholder="Company’s name, Designation" type="text" {...register("jobTitle")} className="form-control" />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col">
                  <label>Add Review</label>
                  <textarea  name="review" className="form-control" placeholder="Write a review about the package" id="exampleFormControlTextarea1" {...register("review")} rows="3"></textarea>
                </div>
              </div>
              <input as="input" type="submit" value='Submit Review' className="row mt-5 mx-auto button-coral" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveUsAReview;