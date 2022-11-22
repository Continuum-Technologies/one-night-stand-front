import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md  pb-2 fixed-top bg-white">
      <div className="container">
        <a className="navbar-brand brand" href="/">
          one night stand
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                learn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                safety
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                download
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
