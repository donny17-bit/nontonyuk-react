import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <div class="">
      <header class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand me-5" href="#">
              <img src="/assets/img/header/Vector.png" alt="tiket app" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class={`${styles.nav_item} nav-item`}>
                  <a
                    class={`${styles.nav_link} nav-link`}
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class={`${styles.nav_item} nav-item`}>
                  <a class={`${styles.nav_link} nav-link`} href="#">
                    List Movie
                  </a>
                </li>
              </ul>
            </div>
            <form class={`${styles.d_flex} d-flex`}>
              <button
                class={`btn btn-primary ${styles.signup__btn}`}
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
