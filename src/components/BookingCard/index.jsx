import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./BookingCard.module.css";

function BookingCard(props) {
  const { id, movieId, premiere, time, price } = props.data[0];
  const { scheduleId } = props.data[1];

  let image;
  if (premiere === "cineone21") {
    image = "/assets/img/card/CineOne21.png";
  } else if (premiere === "ebv.id") {
    image = "/assets/img/card/ebv.id.png";
  } else {
    image = "/assets/img/card/hiflix.png";
  }

  return (
    // <div className="col">
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
            <div className="col">
              <button
                type="button"
                className={`${styles.card_booking} btn btn-link`}
                onClick={() =>
                  props.changeDateBooking({ scheduleId: id, timeBooking: item })
                }
              >
                {item}
              </button>
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
          <button
            href="#"
            className={`${styles.btn_} btn btn-primary`}
            onClick={() => props.handleBooking()}
            disabled={id === scheduleId ? false : true}
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
