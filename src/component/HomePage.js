import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeNavBar from "./HomeNavBar";
import bg from "../images/signup-bg.jpg";
class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="App">
        <HomeNavBar />
        <h5>
          <em>CUSTOMER SERVICE CENTER </em>
        </h5>
        <div class="row">
          <div class="col-sm-4">
            <div class="card-body text-center">
              <h5>Admin Login</h5>
              <Link to="/admin">
                <button className="btn btn-success">Login</button>
              </Link>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card-body text-center">
              <h5>Operator Login</h5>
              <Link to="/oplogin">
                <button className="btn btn-success">Login</button>
              </Link>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card-body text-center">
              <h5 class="card-title">Customer Login</h5>
              <Link to="/customer">
                <button className="btn btn-success">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
