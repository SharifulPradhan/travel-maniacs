import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DashboardNav from '../../DashboardNav/DashboardNav';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';



const AddPackage = () => {
  const [loggedInUser] = React.useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const [imageURL, setIMageURL] = useState(null);
  const [loading, setLoading] = useState(false)

  const onSubmit = data => {
    const packageData = {
      title: data.title,
      price: data.price,
      days: data.days,
      description: data.description,
      imageURL: imageURL
    };
    console.log(packageData);
    fetch('http://localhost:4200/addPackage', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(packageData)
    })
      .then(res => console.log('server side response', res))
      alert("Package Added to Directory Successfully")
  }

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '64b76738cc4b20654a1a7630702359ff');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className='row' style={{ height: "100vh" }}>
      <div className="col-md-2">
        <DashboardNav></DashboardNav>
      </div>
      <div className="col-md-10">
        <div className="dashboard-header text-white">
          <div className="d-flex justify-content-between align-items-center h-100">
            <h1 className="ml-5">Add Packages</h1>
            <button as={Link} to="/user-details" className="button-coral mr-5" style={{fontSize:'12px'}}>{loggedInUser.name}</button>
          </div>
        </div>
        <div className="h-100">
          <div className="dashboard-bg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col">
                  <label>Package Name</label>
                  <input name="title" placeholder="Package Name" {...register("title")} className="form-control" />
                </div>
                <div className="col">
                  <label>Add Price</label>
                  <input name="price" placeholder="Price" type="number" {...register("price")} className="form-control" />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col">
                  <label>Total Days</label>
                  <input name="days" placeholder="Total Days" type="number" {...register("days")} className="form-control" />
                </div>
                <div className="col">
                  <label>Add Image</label>
                  <input name="file" type="file" onChange={handleImageUpload} onClick={() => setLoading(true)} />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col">
                  <label>Add Description</label>
                  <textarea name="description" className="form-control" placeholder="Write a description about the package" id="exampleFormControlTextarea1" {...register("description")} rows="3"></textarea>
                </div>
              </div>
              {
                loading
                  ? <div className="text-center"><Spinner animation="border" variant="primary" /></div>
                  : <input variant="success" as="input" type="submit" value='Save' className="row mt-5 mx-auto button-coral" />
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;