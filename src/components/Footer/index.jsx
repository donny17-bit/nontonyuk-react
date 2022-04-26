import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="d-flex justify-content-between">
        <div className={`${styles.footer__logo} mb-5`}>
          <img src="assets/img/footer/Vector.png" alt="footer-img" />
          <p className="pt-4">Stop waiting in line. Buy tickets</p>
          <p>conveniently, watch movies quietly.</p>
        </div>
        <div className={styles.footer__explore}>
          <p className={`${styles.footer__title} mb-4`}>Explore</p>
          <a className="mb-3" href="#">
            Home
          </a>
          <a href="#">List Movie</a>
        </div>
        <div>
          <p className={`${styles.footer__title} mb-4`}>Our Sponsor</p>
          <img
            className={`${styles.footer__sponsor_img1} mb-4`}
            src="assets/img/footer/Vector-3.png"
            alt="footer-img"
          />
          <img
            className={`${styles.footer__sponsor_img2} mb-4`}
            src="assets/img/footer/Vector-2.png"
            alt="footer-img"
          />
          <img
            className={styles.footer__sponsor_img3}
            src="assets/img/footer/Vector-1.png"
            alt="footer-img"
          />
        </div>
        <div>
          <p className="footer__title mb-4">Follow Us</p>
          <div className={styles.footer__follow_media}>
            <img
              className={styles.footer__follow_img}
              src="assets/img/footer/facebook-outline.png"
              alt="footer-img"
            />
            <p className="mt-3 ms-3">Tickitz Cinema id</p>
          </div>
          <div className={styles.footer__follow_media}>
            <img
              className={styles.footer__follow_img}
              src="assets/img/footer/instagram.png"
              alt="footer-img"
            />
            <p className="mt-3 ms-3">tickitz.id</p>
          </div>
          <div className={styles.footer__follow_media}>
            <img
              className={styles.footer__follow_img}
              src="assets/img/footer/twitter-outline.png"
              alt="footer-img"
            />
            <p className="mt-3 ms-3">tickitz.id</p>
          </div>
          <div className={styles.footer__follow_media}>
            <img
              className={styles.footer__follow_img}
              src="assets/img/footer/youtube.png"
              alt="footer-img"
            />
            <p className="mt-3 ms-3">Tickitz Cinema id</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className={styles.footer__text}>
          © 2020 Tickitz. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
