import React from 'react';
import travelers from '../../../images/travelers.jpg'

const HeaderMain = () => {
  return (
    <main className="container">
      <div style={{ height: '800px' }} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1 mt-5 text-white" style={{ textAlign: 'left', fontWeight: "700" }}>
          <h1 style={{ fontSize: '60px' }}>Explore <br /> Your Travel</h1>
          <p>Discover your next great adventure, become an explorer to get started!</p>
          <a href="#packages"><button className="button-coral">Explore Our Packages</button></a>
        </div>
        <div className="col-md-6">
          <img src={travelers} alt="" className="img-fluid" style={{ width: '400px', borderRadius: '10px' }} />
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;