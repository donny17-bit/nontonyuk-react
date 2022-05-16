import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className="">
      <header className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand me-5" to="/">
              <img src="/assets/img/header/Vector.png" alt="tiket app" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className={`${styles.nav_item} nav-item`}>
                  <Link
                    className={`${styles.nav_link} nav-link`}
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className={`${styles.nav_item} nav-item`}>
                  <Link
                    className={`${styles.nav_link} nav-link`}
                    to="/view-all"
                  >
                    List Movie
                  </Link>
                </li>
              </ul>
            </div>
            <form className={`${styles.d_flex} d-flex`}>
              <Link
                className={`btn btn-primary ${styles.signup__btn}`}
                type="button"
                to="/login"
              >
                Sign Up
              </Link>
            </form>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
