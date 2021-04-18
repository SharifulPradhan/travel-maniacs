import React from 'react';
import { Link } from 'react-router-dom';
import DashboardNav from '../../DashboardNav/DashboardNav';
import { UserContext } from '../../../../App';
import { useForm } from 'react-hook-form';


const MakeAdmin = () => {
  const [loggedInUser] = React.useContext(UserContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    const adminData = {
      email: data.email,
    };
    console.log(adminData);
    fetch('https://travel-maniacs.herokuapp.com/addAdmin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(adminData)
    })
      .then(res => console.log('server side response', res))
      alert("Admin Added to Directory Successfully")
  }


  return (
    <div className='row' style={{ height: "100vh" }}>
      <div className="col-md-2">
        <DashboardNav></DashboardNav>
      </div>
      <div className="col-md-10">
        <div className="dashboard-header text-white">
          <div className="d-flex justify-content-between align-items-center h-100">
            <h1 className="ml-5">Make Admin</h1>
            <button as={Link} to="/user-details" className="button-coral mr-5" style={{ fontSize: '12px' }}>{loggedInUser.name}</button>
          </div>
        </div>
        <div className="h-25">
          <div className="dashboard-bg" >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mt-2">
                <div className="col">
                  <label>Email</label>
                  <input name="email" defaultValue={loggedInUser.email} type="email" {...register("email")} className="form-control" />
                </div>
              </div>
              <input variant="success" as="input" type="submit" value='Save' className="row mt-2 mx-auto button-coral" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;