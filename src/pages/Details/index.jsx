import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./Details.module.css";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

function Details() {
  document.title = "Tickitz | Movie Details";

  return (
    <>
      <Header />
      <div className={`${styles.details} container border mt-5 d-flex`}>
        <div class={`${styles.card_} card border`}>
          <img
            src="/assets/img/home/Rectangle 119.png"
            class="card-img-top"
            alt="details img"
          />
        </div>
        <div className={`${styles.details__text} ps-5`}>
          <h1 className={styles.details__title}>The Lion King</h1>
          <p className={`${styles.details__genre} text-start`}>
            Adventure, Action, Sci-Fi
          </p>
          <div className="row">
            <div className="col">
              <h4>Release date</h4>
              <p>June 28, 2017</p>
            </div>
            <div className="col">
              <h4>Release date</h4>
              <p>June 28, 2017</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>Release date</h4>
              <p>June 28, 2017</p>
            </div>
            <div className="col">
              <h4>Release date</h4>
              <p>June 28, 2017</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
