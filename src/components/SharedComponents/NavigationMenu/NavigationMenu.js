import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../images/logo.png";
import { UserContext } from '../../../App';
import './NavigationMenu.css'



const NavigationMenu = () => {
  const [loggedInUser] = React.useContext(UserContext);

  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="container pt-3 justify-content-center sticky">
      <Navbar.Brand as={Link} to="/home"><img src={logo} alt=""/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto nav-bg">
          <Nav.Link as={Link} to="/home" className="active mr-4" style={{color:'#ff7c5b'}}>Home</Nav.Link>
          <Nav.Link as={Link} to="/destinations" className="mr-4 text-white">Destinations</Nav.Link>
          <Nav.Link as={Link} to="/tours" className="mr-4 text-white">Tours</Nav.Link>
          <Nav.Link as={Link} to="/book" className="mr-4 text-white">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/blogs" className="mr-4 text-white">Blogs</Nav.Link>
          <Nav.Link as={Link} to="/Contacts" className="mr-4 text-white">Contacts</Nav.Link>
          {loggedInUser.isSignIn
            ? <Link to="/user-details"><button className="nav-button-style" style={{fontSize:'12px'}}>{loggedInUser.name}</button></Link>
            : <Link to="/login"><button className="nav-button-style">Login</button></Link>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationMenu;