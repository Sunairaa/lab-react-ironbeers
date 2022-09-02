import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand text-light">
                <i className="bi bi-house-door d-inline-block mx-2"></i>
                IronBeers   
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Header