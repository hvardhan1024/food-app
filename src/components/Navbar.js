import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">FoodApp</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav">
      </div>

      <ul class="navbar-nav">
        <li class="nav-item">
        <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
