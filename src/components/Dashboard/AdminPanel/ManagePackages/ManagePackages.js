import React from 'react';
import { Link } from 'react-router-dom';
import DashboardNav from '../../DashboardNav/DashboardNav';
import { Spinner, Table } from 'react-bootstrap';
import ManagePackagesDetails from './ManagePackagesDetails';



const ManagePackages = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://happy-mart-database.herokuapp.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      });
  }, [])

  return (
    <div className='row' style={{ height: "100vh" }}>
      <div className="col-md-2">
        <DashboardNav></DashboardNav>
      </div>
      <div className="col-md-10">
        <div className="dashboard-header text-white">
          <div className="d-flex justify-content-between align-items-center h-100">
            <h1 className="ml-5">Manage Packages</h1> {loading && <Spinner animation="border" variant="primary" />}
            <button as={Link} to="/user-details" className="button-coral mr-5">Shariful Pradhan Hridoy</button>
          </div>
        </div>
        <div className="h-100">
          <div className="h-100 p-5">
            <Table striped bordered hover>
              <thead>
                <tr className="text-muted">
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              {
                !loading &&
                <tbody>
                  {
                    products.map(product => <ManagePackagesDetails product={product} key={product._id} />)
                  }
                </tbody>
              }
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePackages;