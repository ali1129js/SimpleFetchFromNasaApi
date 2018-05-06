/**
 * @Author: Ali
 * @Date:   2018-05-06T15:44:46+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-06T18:40:33+02:00
 */
import React from 'react'
const Navbar = () =>
  <nav className="navbar sticky-top navbar-dark bg-dark">
    <div className="row">
      <div className="navbar-header">
        <img className="navbar-brand" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="logo" width="50" height="50"/>
        <a className="navbar-brand" href="https://www.nasa.gov" target="_blank" rel="noopener noreferrer">Nasa Today</a>
      </div>
    </div>
  </nav>
export default Navbar
/*
<nav class="navbar navbar-default">
<div class="container-fluid">
  <div class="navbar-header">
    <a class="navbar-brand" href="#">WebSiteName</a>
  </div>
    <img              src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
      alt="logo"
      width="50" height="50"
    />
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
*/
