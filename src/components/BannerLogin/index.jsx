import React, { useState } from "react";
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
          src="https://res.cloudinary.com/dusoicuhh/image/upload/v1651050983/nontonYuk/public/image_1_t0cznp.png"
          alt="banner__marvel"
          className={styles.banner__img}
        />
      </div>
    </>
  );
}

export default BannerLogin;
