import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./Order.module.css";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

function Order() {
  document.title = "Tickitz | Order";

  return (
    <>
      <Header />
      <div class={`${styles.canvas} pb-5 d-flex`}>
        <div class={`${styles.canvas__1} mt-5`}>
          <section class={styles.movie__selected}>
            <h1 class={styles.movie__selected_title}>Movie Selected</h1>
            <div class={`${styles.movie__selected_form} mt-3`}>
              <div
                class={`${styles.movie__selected_data} m-4 d-flex align-middle justify-content-between`}
              >
                <p class={`${styles.movie__selected_data1} align-middle pt-2`}>
                  Spider-Man : Homecoming
                </p>
                <button className="btn btn-outline-secondary">
                  Change Movie
                </button>
              </div>
            </div>
          </section>
          <section class={`${styles.seat} mt-5`}>
            <h1 class={styles.seat_title}>Choose Your Seat</h1>
            <div class={`${styles.seat_container} mt-3`}></div>
          </section>
          <div
            className={`${styles.seat_btn} d-flex justify-content-between mt-5`}
          >
            <button className={`btn btn-outline-primary`}>
              Change your movie
            </button>
            <button className={`btn btn-outline-primary`}>Checkout now</button>
          </div>
        </div>
        <div class={`${styles.canvas__2} mt-5 ms-4`}>
          <aside class={styles.order__info}>
            <h1 class={styles.order__info_title}>Order Info</h1>
            <div
              class={`${styles.order__info_form} text-center form border mt-3`}
            >
              <img
                src="/assets/img/footer/Vector-1.png"
                alt="logo_cinema"
                className={`${styles.order__info_logo}`}
              />
              <h3 className={`${styles.order__info_form_title} mt-3 mb-5`}>
                CineOne21 Cinema
              </h3>
              <div class={` d-flex justify-content-between`}>
                <p class={styles.order__info_data1}>Movie selected</p>
                <p class={styles.order__info_data2}>Spider-Man: Homecoming</p>
              </div>
              <div class={` d-flex justify-content-between`}>
                <p class={styles.order__info_data1}>Tuesday, 07 July 2020</p>
                <p class={styles.order__info_data2}>02:00</p>
              </div>
              <div class={` d-flex justify-content-between`}>
                <p class={styles.order__info_data1}>One ticket price</p>
                <p class={styles.order__info_data2}>$10</p>
              </div>
              <div class={` d-flex justify-content-between`}>
                <p class={styles.order__info_data1}>Seat choosed</p>
                <p class={styles.order__info_data2}>C4, C5, C6</p>
              </div>
              <div
                class={` mt-3 pt-4 d-flex border-top justify-content-between`}
              >
                <p class={styles.order__info_total1}>Total Payment</p>
                <p class={styles.order__info_total2}>$30</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Order;
