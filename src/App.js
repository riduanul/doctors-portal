import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import MakeAppointment from './Components/MakeAppointment/MakeAppointment/MakeAppointment';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route path="/login">
          <Login  />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/appointment'>
          <MakeAppointment />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
