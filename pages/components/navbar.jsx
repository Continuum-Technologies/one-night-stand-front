import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md  pb-2 fixed-top bg-white">
      <div className="container">
        <Link href="/">
          <h1 className="navbar-brand brand">One Night Stand</h1>
        </Link>
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
              <Link href="/support">
                <p className="nav-link active">support</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/learn">
                <p className="nav-link active">learn</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/safety">
                <p className="nav-link active">safety</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/download">
                <p className="nav-link active">download</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
