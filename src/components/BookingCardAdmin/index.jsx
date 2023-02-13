import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./BookingCardAdmin.module.css";

function BookingCardAdmin(props) {
  // console.log(props.data);

  const { premiere, time, price } = props.data;
  let image;
  if (premiere === "cineone21") {
    image = "/assets/img/card/CineOne21.png";
  } else if (premiere === "ebv.id") {
    image = "/assets/img/card/ebv.id.png";
  } else {
    image = "/assets/img/card/hiflix.png";
  }

  return (
    <div className={`card ${styles.booking_card}`}>
      <div className="row ms-1 me-1 ">
        <img
          src={image}
          className={`${styles.card_img_top} img-fluid`}
          alt="card-img"
        />
        <div className="col">
          <h3 className={`${styles.card_title} text-start mt-4`}>{premiere}</h3>
          <p className={`${styles.card_address} text-start`}>
            Whatever street No.12, South Purwokerto
          </p>
        </div>
      </div>
      <div className="card-body">
        <div className="row row-cols-4">
          {time.split(",").map((item) => (
            <div className="col" key={`${Math.random()}`}>
              <Link to="" className={`${styles.card_booking}`}>
                {item}
              </Link>
            </div>
          ))}
        </div>
        <div
          className={`${styles.card_footer} d-flex justify-content-between row`}
        >
          <div className="col text-start align-items-start">
            <p className={styles.card_price}>Price</p>
          </div>
          <div className="col text-end">
            <p className={styles.card_seat}>{`${price}/seat`}</p>
          </div>
        </div>
        <div className={`${styles.card_btn} row`}>
          <div className="d-grid col">
            <button
              className={`${styles.btn_} btn btn-outline-primary`}
              onClick={() => props.setUpdate(props.data)}
            >
              Update
            </button>
          </div>
          <div className="d-grid col">
            <button
              href="#"
              className={`${styles.btn_} btn btn-outline-danger`}
              onClick={() => props.setDelete(props.data)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCardAdmin;
