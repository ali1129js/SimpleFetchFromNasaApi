/**
 * @Author: Ali
 * @Date:   2018-05-06T15:44:46+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-06-06T14:39:17+02:00
 */
import React from 'react'
const Navbar = () =>
  <nav className="navbar sticky-top navbar-dark bg-dark">
    <div className="row">
      <div className="navbar-header">
        <a className="navbar-brand"
          href="https://www.nasa.gov"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img
          className="navbar-brand" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
          alt="logo"
          width="50"
          height="50"/>
        Nasa Today</a>
      </div>
    </div>
  </nav>
export default Navbar
