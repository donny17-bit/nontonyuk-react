import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer class={styles.footer}>
      <div class="d-flex justify-content-between">
        <div class={`${styles.footer__logo} mb-5`}>
          <img src="assets/img/footer/Vector.png" alt="footer-img" />
          <p class="pt-4">Stop waiting in line. Buy tickets</p>
          <p>conveniently, watch movies quietly.</p>
        </div>
        <div class={styles.footer__explore}>
          <p class={`${styles.footer__title} mb-4`}>Explore</p>
          <a class="mb-3" href="#">
            Home
          </a>
          <a href="#">List Movie</a>
        </div>
        <div>
          <p class={`${styles.footer__title} mb-4`}>Our Sponsor</p>
          <img
            class={`${styles.footer__sponsor_img1} mb-4`}
            src="assets/img/footer/Vector-3.png"
            alt="footer-img"
          />
          <img
            class={`${styles.footer__sponsor_img2} mb-4`}
            src="assets/img/footer/Vector-2.png"
            alt="footer-img"
          />
          <img
            class={styles.footer__sponsor_img3}
            src="assets/img/footer/Vector-1.png"
            alt="footer-img"
          />
        </div>
        <div>
          <p class="footer__title mb-4">Follow Us</p>
          <div class={styles.footer__follow_media}>
            <img
              class={styles.footer__follow_img}
              src="assets/img/footer/facebook-outline.png"
              alt="footer-img"
            />
            <p class="mt-3 ms-3">Tickitz Cinema id</p>
          </div>
          <div class={styles.footer__follow_media}>
            <img
              class={styles.footer__follow_img}
              src="assets/img/footer/instagram.png"
              alt="footer-img"
            />
            <p class="mt-3 ms-3">tickitz.id</p>
          </div>
          <div class={styles.footer__follow_media}>
            <img
              class={styles.footer__follow_img}
              src="assets/img/footer/twitter-outline.png"
              alt="footer-img"
            />
            <p class="mt-3 ms-3">tickitz.id</p>
          </div>
          <div class={styles.footer__follow_media}>
            <img
              class={styles.footer__follow_img}
              src="assets/img/footer/youtube.png"
              alt="footer-img"
            />
            <p class="mt-3 ms-3">Tickitz Cinema id</p>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <p class={styles.footer__text}>© 2020 Tickitz. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
