import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./Payment.module.css";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

function Home() {
  console.log(Header);
  return (
    <>
      <Header />
      <div class={`${styles.canvas} pb-5 d-flex`}>
        <div class={`${styles.canvas__1} mt-5`}>
          <section class={styles.payment__info}>
            <h1 class={styles.payment__info_title}>Payment Info</h1>
            <div class={`${styles.payment__info_form} mt-3`}>
              <div
                class={`${styles.payment__info_data} mt-5 border-bottom d-flex justify-content-between`}
              >
                <p class={styles.data1}>Date & time</p>
                <p class={styles.data2}>Tuesday, 07 July 2020 at 02:00</p>
              </div>
              <div
                class={`${styles.payment__info_data} border-bottom d-flex justify-content-between`}
              >
                <p class={styles.data1}>Movie title</p>
                <p class={styles.data2}>Spider-Man: Homecoming</p>
              </div>
              <div
                class={`${styles.payment__info_data} border-bottom d-flex justify-content-between`}
              >
                <p class={styles.data1}>Cinema name</p>
                <p class={styles.data2}>CineOne21 Cinema</p>
              </div>
              <div
                class={`${styles.payment__info_data} border-bottom d-flex justify-content-between`}
              >
                <p class={styles.data1}>Number of tickets</p>
                <p class={styles.data2}>3 pieces</p>
              </div>
              <div
                class={`${styles.payment__info_data} mb-5 d-flex justify-content-between`}
              >
                <p class={styles.data1}>Total payment</p>
                <p class={styles.total}>$30,00</p>
              </div>
            </div>
          </section>
          <section class={`${styles.payment__method} mt-5`}>
            <h1 class={styles.payment__method_title}>
              Choose a Payment Method
            </h1>
            <div class={`${styles.payment__method_form} mt-3`}>
              <div class="payment__info--data mt-5 border-bottom d-flex justify-content-between">
                <p class="data1">Date & time</p>
                <p class="data2">Tuesday, 07 July 2020 at 02:00</p>
              </div>
              <div class="payment__info--data border-bottom d-flex justify-content-between">
                <p class="data1">Movie title</p>
                <p class="data2">Spider-Man: Homecoming</p>
              </div>
              <div class="payment__info--data border-bottom d-flex justify-content-between">
                <p class="data1">Cinema name</p>
                <p class="data2">CineOne21 Cinema</p>
              </div>
              <div class="payment__info--data border-bottom d-flex justify-content-between">
                <p class="data1">Number of tickets</p>
                <p class="data2">3 pieces</p>
              </div>
              <div class="payment__info--data mb-5 d-flex justify-content-between">
                <p class="data1">Total payment</p>
                <p class="total">$30,00</p>
              </div>
            </div>
          </section>
        </div>
        <div class={`${styles.canvas__2} mt-5 ms-4`}>
          <aside class={styles.personal__info}>
            <h1 class={styles.personal__info_title}>Personal Info</h1>
            <div class={`${styles.personal__info_form} form mt-3 pb-5`}>
              <div class={`${styles.personal__info_form_input} mt-5 me-5`}>
                <label class={`${styles.form_label} form-label`}>
                  Full Name
                </label>
                <input
                  placeholder="Write your full name"
                  class={`${styles.form_control} form-control`}
                />
                <label class={`${styles.form_label} form-label mt-4`}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Write your email"
                  class={`${styles.form_control} form-control`}
                />
                <label class={`${styles.form_label} form-label mt-4`}>
                  Phone Number
                </label>
                <div class="input-group mb-3">
                  <span class="input-group-text">+62</span>
                  <input
                    type="text"
                    class={`${styles.form_control} form-control`}
                    placeholder="Write your number"
                  />
                </div>
                {/* <div
                  class="alert alert-warning mt-4 d-flex align-items-center"
                  role="alert"
                >
                  <svg
                    class="bi flex-shrink-0 me-2"
                    width="24"
                    height="24"
                    role="img"
                    aria-label="Warning:"
                  >
                    <use xlink:href="#exclamation-triangle-fill" />
                  </svg>
                  <div class="form-alert">Fill your data correctly.</div>
                </div> */}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
