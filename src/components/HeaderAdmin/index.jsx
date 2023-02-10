import React, { useState } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./HeaderAdmin.module.css";

function HeaderAdmin() {
  const [data, setData] = useState({
    refreshToken: "",
  });

  const navigate = useNavigate();

  const handleLogout = async (event) => {
    try {
      setData({ ...data, refreshToken: localStorage.getItem("refreshToken") });

      event.preventDefault();
      await axios.post("auth/logout", data, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      localStorage.clear();

      alert("Successfully logged out");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <header className="container-fluid ps-5 pe-5">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand me-5">
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
                <li className={`${styles.nav_item} nav-item disabled`}>
                  <Link
                    className={`${styles.nav_link} nav-link`}
                    aria-current="page"
                    to="/home"
                  >
                    Dasboard
                  </Link>
                </li>
                <li className={`${styles.nav_item} nav-item`}>
                  <Link
                    className={`${styles.nav_link} nav-link`}
                    aria-current="page"
                    to="/manage-movie"
                  >
                    Manage Movie
                  </Link>
                </li>
                <li className={`${styles.nav_item} nav-item`}>
                  <Link
                    className={`${styles.nav_link} nav-link`}
                    to="/manage-schedule"
                  >
                    Manage Schedule
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.d_flex} d-flex`}>
              <form className={`${styles.d_flex} d-flex`}>
                <div className="dropdown dropstart">
                  <button
                    className={`btn btn-outline-secondary  ${styles.signup__btn}`}
                    type="button"
                    data-bs-toggle="dropdown"
                    id="dropdownMenuButton1"
                    // aria-expanded="false"
                  >
                    <img src="/assets/img/header/user.png" alt="img_logo" />
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
                    <li className={`${styles.logout}`}>
                      <button
                        className={`dropdown-item`}
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderAdmin;
