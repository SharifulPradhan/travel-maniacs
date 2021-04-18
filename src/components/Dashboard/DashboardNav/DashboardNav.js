import './DashboardNav.css'
import React from 'react';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faShoppingBag, faShoppingCart, faSignOutAlt, faStar, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/app';
import { UserContext } from '../../../App';


const DashboardNav = () => {
  const [loggedInUser, setLoggedInUser] = React.useContext(UserContext);
  const [isAdmin, setIsAdmin] = React.useState(true);
  console.log(loggedInUser);

  React.useEffect(() => {
    fetch('http://localhost:4200/isAdmin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(res => res.json())
      .then(data => setIsAdmin(data));
  }, [loggedInUser.email])

  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(res => {
        const signedOutUser = {
          isSignIn: false,
          name: '',
          email: '',
          photo: ''
        }
        setLoggedInUser(signedOutUser);
      })
      .catch(err => {
        console.log(err.message);
        console.log(err.code);
      })
  }
  return (
    <div className="dashboard-nav d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh", textAlign: "left" }}>
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="text-white">
            <img src={logo} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/your-bookings" className="text-white">
            <FontAwesomeIcon icon={faShoppingCart} /> <span>Your Bookings</span>
          </Link>
        </li>
        <li>
          <Link to="/review" className="text-white">
            <FontAwesomeIcon icon={faStar} /> <span>Give us a Review</span>
          </Link>
        </li>
        {isAdmin &&
          <div style={{textAlign: "left"}}>
            <li>
              <Link to="/admin/bookings" className="text-white" >
                <FontAwesomeIcon icon={faShoppingBag} /> <span>Bookings</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/add-package" className="text-white" >
                <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Package</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/make-admin" className="text-white" >
                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/manage-packages" className="text-white" >
                <FontAwesomeIcon icon={faTasks} /> <span>Manage Packages</span>
              </Link>
            </li>
          </div>
        }
      </ul>
      <div>
        <Link to="/" className="text-white" onClick={handleSignOut}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
      </div>
    </div>
  );
};

export default DashboardNav;