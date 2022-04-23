import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  return (
    <>
      <div class="d-flex justify-content-between">
        <div class={`${styles.banner}`}>
          <div class={`${styles.banner__overlay}`}>
            <span class={`${styles.banner__overlay_title}`}>
              <img src="/assets/img/login/tickitz 1.png" alt="banner__title" />
              <h1>wait, watch, wow!</h1>
            </span>
          </div>
          <img
            src="/assets/img/login/image 1.png"
            alt="banner__marvel"
            class={styles.banner__img}
          />
        </div>
        <div class={`${styles.form}`}>
          <h1>Sign In</h1>
          <p class={`${styles.form__caption} mt-3 pe-5`}>
            Sign in with your data that you entered during your registration
          </p>

          <div class="me-5">
            <label
              for="inputEmail"
              class={`${styles.form_label} form-label mt-4`}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Write your email"
              class={`${styles.form_control} form-control `}
            />
            <label
              for="inputPassword"
              class={`${styles.form_label} form-label mt-4`}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Write your password"
              class={`${styles.form_control} form-control `}
            />
            <div class={`${styles.d_grid} d-grid gap-2 mt-5`}>
              <button class={`${styles.btn} btn`} type="submit">
                Sign In
              </button>
            </div>

            <p class={`${styles.form__additional} mt-4`}>
              Forgot your password?
              <a href="#">Reset now</a>
            </p>

            <p class={styles.form__additional}>
              Don't have an account?
              <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
