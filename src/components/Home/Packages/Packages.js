import React from 'react';
import { Spinner } from 'react-bootstrap';
import PackagesCard from '../PackagesCard/PackagesCard';
import './Packages.css'

const Packages = () => {
  const [packages, setPackages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://travel-maniacs.herokuapp.com/packages')
      .then(res => res.json())
      .then(data => {
        setPackages(data)
        setLoading(false)
      })
  }, [])


  return (
    <section id="packages" className="packages-container">
      <div>
        <h6 className="text-secondary">MODERN & BEAUITFUL</h6>
        <h1>Our Most Popular Packages</h1>
      </div>
        {loading
          ? <div className="text-center d-flex align-items-center justify-content-center h-50"><Spinner animation="grow" variant="danger" /></div>
          : <div className="row align-items-center justify-content-center">
            {
              packages.map(pkg => <PackagesCard pkg={pkg} key={pkg._id}></PackagesCard>)
            }
          </div>
        }
    </section>
  );
};

export default Packages;