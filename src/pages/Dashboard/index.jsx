import React, { useState } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/index";
import HeaderSignedIn from "../../components/HeaderSignedIn/index";
import Footer from "../../components/Footer/index";
import styles from "./Dashboard.module.css";
import Cards from "../../components/Cards/index";
import DetailCardAdmin from "../../components/DetailCardAdmin/index";

function Dashboard() {
  const dataDetail = {
    image: "nontonYuk/movies/z4c88xkk5jnjajwgrlxb.png",
    category: "family, gore",
    name: "LUCA",
    releaseDate: "20-11-2022",
    director: "graham bell",
    duration: "2h 30m",
    cast: "graham bell, lucas graham",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor inventore fugiat sint? Recusandae vero esse architecto deserunt officia non numquam, quibusdam, quia qui ex quisquam culpa ratione eius quae dolor.",
  };

  return (
    <>
      {/* harus sudah sign in dlu headernya */}
      {localStorage.getItem("token") ? <HeaderSignedIn /> : <Header />}
      <div
        className={`${styles.upcoming__movies} d-flex justify-content-between`}
      >
        <section className={`${styles.canvas__1}`}>
          {/* <div className={`d-flex`}> */}
          <label className={styles.upcoming__movies_title}>Dashboard</label>
          {/* </div> */}

          <div
            className={`${styles.upcoming__movies_card_container} pb-5 mt-3`}
          ></div>
        </section>

        <aside class={`${styles.canvas__2}`}>
          {/* <div className={`d-flex`}> */}
          <label className={styles.upcoming__movies_title}>Filtered</label>
          {/* </div> */}

          <div className={`${styles.order__info} pb-5 mt-3`}>
            <h1 class={styles.order__info_title}>Order Info</h1>
            <div
              class={`${styles.order__info_form} text-center form border mt-3`}
            >
              {/* <img
                src="/assets/img/footer/Vector-1.png"
                alt="logo_cinema"
                className={`${styles.order__info_logo}`}
              /> */}
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
          </div>
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
