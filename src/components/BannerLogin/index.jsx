import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./BannerLogin.module.css";

function BannerLogin() {
  return (
    <>
      <div className={`${styles.banner}`}>
        <div className={`${styles.banner__overlay}`}>
          <span className={`${styles.banner__overlay_title}`}>
            <img src="/assets/img/login/tickitz 1.png" alt="banner__title" />
            <h1>wait, watch, wow!</h1>
          </span>
        </div>
        <img
          src="/assets/img/login/image 1.png"
          alt="banner__marvel"
          className={styles.banner__img}
        />
      </div>
    </>
  );
}

export default BannerLogin;
