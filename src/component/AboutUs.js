import React, { Component } from "react";
import { Link } from "react-router-dom";
class AboutUs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About us</h1>
        <br/>
        <p>
          Welcome to Online Customer Service Center!! 
        </p><br/>
        <Link to="/">
          <button className="btn btn-success">Go to Home</button>
        </Link>
      </div>
    );
  }
}
export default AboutUs;
