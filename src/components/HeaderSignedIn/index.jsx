import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./HeaderSignedIn.module.css";

function HeaderSignedIn() {
  const [form, setForm] = useState({
    refreshToken: "",
  });

  const handleLogout = async (event) => {
    try {
      setForm({ ...form, refreshToken: localStorage.getItem("refreshToken") });

      //  msh bug blm bisa logout
      console.log(form);
      event.preventDefault();
      await axios.post("auth/logout", form);

      localStorage.clear();

      alert("Successfully logged out");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <header className="container-fluid ps-5 pe-5">
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
              <div className="dropdown dropstart">
                <button
                  className={`btn btn-outline-secondary  ${styles.signup__btn}`}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/1144/premium/1144760.png?token=exp=1651001096~hmac=5caa57ed0a81fc3aa77801c0d5901cd1"
                    alt="img_logo"
                  />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Setting
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className={styles.logout}>
                    <a
                      className={`dropdown-item`}
                      href="/"
                      onClick={handleLogout}
                      // style="background-color: red"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderSignedIn;
