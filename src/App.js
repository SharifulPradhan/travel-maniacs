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
import MakeAdmin from './components/Dashboard/AdminPanel/MakeAdmin/MakeAdmin';
import ManagePackages from './components/Dashboard/AdminPanel/ManagePackages/ManagePackages';
import AddPackage from './components/Dashboard/AdminPanel/AdPackage/AddPackage';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Packages from './components/Home/Packages/Packages';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path='/' component={Home} />

          <Route exact path='/packages' component={Packages} />

          <Route path='/home' component={Home} />

          <Route path='/login'>
            <Login />
          </Route>

          <PrivateRoute path='/book/:id'>
            <Book />
          </PrivateRoute>

          <PrivateRoute path='/your-bookings'>
            <YourBookings />
          </PrivateRoute>

          <PrivateRoute path='/review'>
            <GiveUsAReview />
          </PrivateRoute>

          <PrivateRoute path='/admin/bookings'>
            <Bookings />
          </PrivateRoute>

          <PrivateRoute path='/admin/add-package'>
            <AddPackage />
          </PrivateRoute>

          <PrivateRoute path='/admin/make-admin'>
            <MakeAdmin />
          </PrivateRoute>

          <PrivateRoute path='/admin/manage-packages'>
            <ManagePackages />
          </PrivateRoute>

          <Route path='*' component={NotFound} />

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
