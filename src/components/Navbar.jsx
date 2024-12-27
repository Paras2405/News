import React from 'react'

import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to='/Home'>My News</Link>
    <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span
    className="navbar-toggler-icon"
    style={{
      backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2730%27 height=%2730%27 viewBox=%270 0 30 30%27%3E%3Cpath stroke=%27white%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3E%3C/svg%3E')",
    }}
  ></span>
</button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to='/Home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to='/Sports'>Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to='/Entertainment'>Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to='/Education'>Education</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to='/Technology'>Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to='/Finance'>Finance</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to='/Health'>Health</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
