import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./Payment.module.css";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

function Payment() {
  document.title = "Tickitz | Payment";

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
            <div class={`${styles.payment__method_container} mt-3`}>
              <div class={`${styles.payment__method_row} row mb-5`}>
                <div class={`${styles.payment__method_col} col `}>
                  <div
                    class={`${styles.payment__method_logo} btn btn-outline-secondary`}
                  >
                    <img
                      src="assets/img/payment/Bank BCA.png"
                      class={`${styles.payment__method_img1} mt-2`}
                      alt="btn-img"
                    />
                  </div>
                </div>
                <div class={`${styles.payment__method_col} col`}>
                  <div
                    class={`${styles.payment__method_logo} btn btn-outline-secondary`}
                  >
                    <img
                      src="assets/img/payment/Bank BRI.png"
                      class={`${styles.payment__method_img2}`}
                      alt="btn-img"
                    />
                  </div>
                </div>
                <div class={`${styles.payment__method_col} col`}>
                  <div
                    class={`${styles.payment__method_logo} btn btn-outline-secondary`}
                  >
                    <img
                      src="assets/img/payment/Logo DANA.png"
                      class={`${styles.payment__method_img3} mt-1`}
                      alt="btn-img"
                    />
                  </div>
                </div>
                <div class={`${styles.payment__method_col} col`}>
                  <div
                    class={`${styles.payment__method_logo} btn btn-outline-secondary`}
                  >
                    <img
                      src="assets/img/payment/Logo GoPay.png"
                      class={`${styles.payment__method_img4} mt-1`}
                      alt="btn-img"
                    />
                  </div>
                </div>
              </div>
              <div class={`${styles.payment__method_row} row `}>
                <div class={`${styles.payment__method_col} col`}>
                  <div
                    class={`${styles.payment__method_logo} btn btn-outline-secondary`}
                  >
                    <img
                      src="assets/img/payment/logos_google-pay.png"
                      class={`${styles.payment__method_img5} mt-2`}
                      alt="btn-img"
                    />
                  </div>
                </div>
                <div class={`${styles.payment__method_col} col`}>
                  <div
                    class={`${styles.payment__method_logo} btn btn-outline-secondary`}
                  >
                    <img
                      src="assets/img/payment/logos_paypal.png"
                      class={`${styles.payment__method_img6} mt-1`}
                      alt="btn-img"
                    />
                  </div>
                </div>
                <div class={`${styles.payment__method_col} col`}>
                  <div
                    class={`${styles.payment__method_logo} btn btn-outline-secondary`}
                  >
                    <img
                      src="assets/img/payment/logos_visa.png"
                      class={`${styles.payment__method_img7} mt-2`}
                      alt="btn-img"
                    />
                  </div>
                </div>
                <div class={`${styles.payment__method_col} col`}>
                  <div
                    class={`${styles.payment__method_logo} btn btn-outline-secondary`}
                  >
                    <img
                      src="assets/img/payment/ovo.png"
                      class={`${styles.payment__method_img8}`}
                      alt="btn-img"
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.payment__method_accessories} row `}>
                <div className="col border mb-3 mt-3"></div>
                <div
                  className={`${styles.payment__method_accessories_text} col-1 text-center`}
                >
                  or
                </div>
                <div className="col border mb-3 mt-3"></div>
              </div>
              <p
                className={`${styles.payment__method_optional} text-center mt-4`}
              >
                Pay via cash. <a href="">See how it work</a>
              </p>
            </div>
          </section>
          <div
            className={`${styles.payment__method_btn} d-flex justify-content-between mt-5`}
          >
            <button className={`btn btn-outline-primary`}>Previous step</button>
            <button className={`btn btn-outline-primary`}>
              Pay your order
            </button>
          </div>
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

export default Payment;
