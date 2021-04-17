import React from 'react';
import PackagesCard from '../PackagesCard/PackagesCard';
import './Packages.css'

const Packages = () => {
  return (
    <section id="packages" className="packages-container">
      <div>
        <h6 className="text-secondary">MODERN & BEAUITFUL</h6>
        <h1>Our Most Popular Packages</h1>
      </div>
      <div className="row align-items-center justify-content-center">
        <PackagesCard></PackagesCard>
        <PackagesCard></PackagesCard>
        <PackagesCard></PackagesCard>
      </div>
    </section>
  );
};

export default Packages;