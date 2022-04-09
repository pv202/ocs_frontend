import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomerLogin from './component/CustomerLogin';
import RegisterCustomer from './component/RegisterCustomer';
import './App.css';

import CustomerHomePage from './component/CustomerHomePage';
import CustomerChangePassword from './component/CustomerChangePassword';

import HomePage from './component/HomePage';
import Navbar from './component/Navbar';
import AboutUs from './component/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          
          <Route path="/customer" exact component={CustomerLogin}></Route>
          <Route path="/addCust" exact component={RegisterCustomer}></Route>
    
     
          <Route path="/Customerhome" exact component={CustomerHomePage}></Route>
          <Route path="/custchangepassword" exact component={CustomerChangePassword}></Route>
          
          <Route path="/nav" exact component={Navbar}></Route>
          <Route path="/aboutus" exact component={AboutUs}></Route> 
          <Router></Router>
        </Switch>
      </Router>
    </div> 
  );
}

export default App;