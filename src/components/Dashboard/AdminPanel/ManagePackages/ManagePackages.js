import React from 'react';
import { Link } from 'react-router-dom';
import DashboardNav from '../../DashboardNav/DashboardNav';
import { Spinner, Table } from 'react-bootstrap';
import ManagePackagesDetails from './ManagePackagesDetails';
import { UserContext } from '../../../../App';


const ManagePackages = () => {
  const [loggedInUser] = React.useContext(UserContext);
  const [packages, setPackages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('http://localhost:4200/packages')
      .then(res => res.json())
      .then(data => {
        setPackages(data)
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
            <h1 className="ml-5">Manage Packages</h1>
            <button as={Link} to="/user-details" className="button-coral mr-5" style={{ fontSize: '12px' }}>{loggedInUser.name}</button>
          </div>
        </div>
        <div className="h-100">
          <div className="h-100 p-5">
            {
              loading
              ? <div className="text-center d-flex align-items-center justify-content-center h-50"><Spinner animation="grow" variant="danger" /></div>
              : <Table striped bordered hover>
                  <thead>
                    <tr className="text-muted">
                      <th>Package Name</th>
                      <th>Days</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      packages.map(pkg => <ManagePackagesDetails package={pkg} key={pkg._id} />)
                    }
                  </tbody>
                </Table>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePackages;