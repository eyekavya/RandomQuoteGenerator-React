import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Quotable
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/happiness">
                Happiness
              </Link>
              <Link className="nav-link" to="/hope">
                Hope
              </Link>
              <Link className="nav-link" to="/funny">
                Funny
              </Link>
              <Link className="nav-link" to="/courage">
                Courage
              </Link>
              <Link className="nav-link" to="/humor">
                Humor
              </Link>
              <Link className="nav-link" to="/life">
                Life
              </Link>
              <Link className="nav-link" to="/health">
                Health
              </Link>
              <Link className="nav-link" to="/morning">
                Morning
              </Link>
              <Link className="nav-link" to="/inspirational">
                Inspirational
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
