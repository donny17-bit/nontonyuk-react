import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./BookingCardAdmin.module.css";

function BookingCardAdmin() {
  return (
    // <div className="col">
    <div className={`card ${styles.booking_card}`}>
      <div className="row ms-1 me-1 ">
        <img
          src="assets/img/card/CineOne21.png"
          className={`${styles.card_img_top} img-fluid`}
          alt="card-img"
        />
        <div className="col">
          <h3 className={`${styles.card_title} text-start mt-4`}>CineOne21</h3>
          <p className={`${styles.card_address} text-start`}>
            Whatever street No.12, South Purwokerto
          </p>
        </div>
      </div>
      <div className="card-body">
        <div className="row row-cols-4">
          <div className="col">
            <Link to="" className={`${styles.card_booking}`}>
              8:30am
            </Link>
          </div>
          <div className="col">
            <Link to="" className={`${styles.card_booking}`}>
              8:30am
            </Link>
          </div>
          <div className="col">
            <Link to="" className={`${styles.card_booking}`}>
              8:30am
            </Link>
          </div>
          <div className="col">
            <Link to="" className={`${styles.card_booking}`}>
              8:30am
            </Link>
          </div>
          <div className="col">
            <Link to="" className={`${styles.card_booking}`}>
              8:30am
            </Link>
          </div>
          <div className="col">
            <Link to="" className={`${styles.card_booking}`}>
              8:30am
            </Link>
          </div>
          <div className="col">
            <Link to="" className={`${styles.card_booking}`}>
              8:30am
            </Link>
          </div>
        </div>
        <div
          className={`${styles.card_footer} d-flex justify-content-between row`}
        >
          <div className="col text-start align-items-start">
            <p className={styles.card_price}>Price</p>
          </div>
          <div className="col text-end">
            <p className={styles.card_seat}>$30.00/seat</p>
          </div>
        </div>
        <div className={`${styles.card_btn} row`}>
          <div className="d-grid col">
            <button
              href="#"
              className={`${styles.btn_} btn btn-outline-primary`}
            >
              Delete
            </button>
          </div>
          <div className="d-grid col">
            <button
              href="#"
              className={`${styles.btn_} btn btn-outline-danger`}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCardAdmin;
