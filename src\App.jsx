import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';
import Register from './routes/Register';
import Trips from './routes/Trips';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/trips" component={Trips} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;