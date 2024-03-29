import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Payment.module.css";
import Header from "../../components/Header/index";
import HeaderSignedIn from "../../components/HeaderSignedIn/index";
import Footer from "../../components/Footer/index";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../stores/actions/user.js";

function Payment() {
  document.title = "Tickitz | Payment";

  const navigate = useNavigate();
  const { state } = useLocation();

  let dataUser = localStorage.getItem("dataUser");
  dataUser = JSON.parse(dataUser);

  // console.log(dataUser.id);
  // const booking = useSelector((state) => state.booking);
  // const dispatch = useDispatch();

  console.log(state);

  const handleButton = () => {
    navigate("/order", { state });
  };

  return (
    <>
      {localStorage.getItem("token") ? <HeaderSignedIn /> : <Header />}
      <div class={`${styles.canvas} pb-5 d-flex`}>
        <div class={`${styles.canvas__1} mt-5`}>
          <section class={styles.payment__info}>
            <h1 class={styles.payment__info_title}>Payment Info</h1>
            <div class={`${styles.payment__info_form} mt-3`}>
              <div
                class={`${styles.payment__info_data} mt-5 border-bottom d-flex justify-content-between`}
              >
                <p class={styles.data1}>Date & time</p>
                <p class={styles.data2}>
                  {state.dateBooking} at {state.timeBooking}
                </p>
              </div>
              <div
                class={`${styles.payment__info_data} border-bottom d-flex justify-content-between`}
              >
                <p class={styles.data1}>Movie title</p>
                <p class={styles.data2}>{state.name}</p>
              </div>
              <div
                class={`${styles.payment__info_data} border-bottom d-flex justify-content-between`}
              >
                <p class={styles.data1}>Cinema name</p>
                <p class={styles.data2}>{state.premiere} Cinema</p>
              </div>
              <div
                class={`${styles.payment__info_data} border-bottom d-flex justify-content-between`}
              >
                <p class={styles.data1}>Number of tickets</p>
                <p class={styles.data2}>{state.seat.length} pieces</p>
              </div>
              <div
                class={`${styles.payment__info_data} mb-5 d-flex justify-content-between`}
              >
                <p class={styles.data1}>Total payment</p>
                <p class={styles.total}>Rp {state.price * state.seat.length}</p>
              </div>
            </div>
          </section>
          <div
            className={`${styles.payment__method_btn} d-flex justify-content-between mt-5`}
          >
            <button
              className={`btn btn-outline-primary`}
              onClick={() => handleButton()}
            >
              Previous step
            </button>
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
                  type="text"
                  class={`${styles.form_control} form-control`}
                  value={`${dataUser.firstName}  ${dataUser.lastName}`}
                />
                <label class={`${styles.form_label} form-label mt-4`}>
                  Email
                </label>
                <input
                  type="email"
                  value={dataUser.email}
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
                    value={dataUser.noTelp}
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
