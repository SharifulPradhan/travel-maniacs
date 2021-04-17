import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import { createContext, useState } from 'react';
import Book from './components/Dashboard/CustomerPanel/Book/Book';
import YourBookings from './components/Dashboard/CustomerPanel/YourBookings/YourBookings';
import GiveUsAReview from './components/Dashboard/CustomerPanel/GiveUsAReview/GiveUsAReview';
import Bookings from './components/Dashboard/AdminPanel/Bookings/Bookings';
import AddPackages from './components/Dashboard/AdminPanel/AdPackages/AddPackages';
import MakeAdmin from './components/Dashboard/AdminPanel/MakeAdmin/MakeAdmin';
import ManagePackages from './components/Dashboard/AdminPanel/ManagePackages/ManagePackages';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path='/' component={Home} />

          <Route path='/home' component={Home} />

          <Route path='/book' component={Book} />

          <Route path='/your-bookings' component={YourBookings} />

          <Route path='/review' component={GiveUsAReview} />

          <Route path='/admin/bookings' component={Bookings} />

          <Route path='/admin/add-packages' component={AddPackages} />

          <Route path='/admin/make-admin' component={MakeAdmin} />

          <Route path='/admin/manage-packages' component={ManagePackages} />

          <Route path='*' component={NotFound} />

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
