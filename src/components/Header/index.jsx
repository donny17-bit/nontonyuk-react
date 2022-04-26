import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className="">
      <header className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand me-5" href="#">
              <img src="/assets/img/header/Vector.png" alt="tiket app" />
            </a>
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
                  <a
                    className={`${styles.nav_link} nav-link`}
                    aria-current="page"
                    href="home"
                  >
                    Home
                  </a>
                </li>
                <li className={`${styles.nav_item} nav-item`}>
                  <a className={`${styles.nav_link} nav-link`} href="#">
                    List Movie
                  </a>
                </li>
              </ul>
            </div>
            <form className={`${styles.d_flex} d-flex`}>
              <a
                className={`btn btn-primary ${styles.signup__btn}`}
                type="button"
                href="login"
              >
                Sign Up
              </a>
            </form>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
