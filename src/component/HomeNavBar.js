import React, { Component, Redirect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

export default class HomeNavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light nav_len">
        <a class="navbar-brand" href="/">
          Customer Service
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/aboutus">
                About us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
