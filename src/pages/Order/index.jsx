import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Order.module.css";
import Header from "../../components/Header/index";
import HeaderSignedIn from "../../components/HeaderSignedIn/index";
import Footer from "../../components/Footer/index";
import Seat from "../../components/Seat/index";
import OrderCard from "../../components/OrderCard/index";

import { useSelector, useDispatch } from "react-redux";
import { booking, dataTempBooking } from "../../stores/actions/booking.js";

export default function Order() {
  document.title = "Tickitz | Order";

  const navigate = useNavigate();
  const { state } = useLocation();
  const [dataOrder, setDataOrder] = useState(state);

  // const booking = useSelector((state) => state.booking);
  // const dispatch = useDispatch();

  const listSeat = ["A", "B", "C", "D", "E", "F", "G"];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState([]);

  // const booking = useSelector((state) => state.booking);
  // const dispatch = useDispatch();

  //   PROSES GET SEAT

  const handleSelectSeat = async (seat) => {
    console.log(seat);
    if (selectedSeat.includes(seat)) {
      const deleteSeat = selectedSeat.filter((el) => {
        return el !== seat;
      });
      setSelectedSeat(deleteSeat);
      // setDataOrder({ ...dataOrder, seat: deleteSeat.toString() });
    } else {
      setSelectedSeat([...selectedSeat, seat]);
      // setDataOrder({ ...dataOrder, seat: seat.toString() });
    }
  };

  //   setDataOrder({ ...dataOrder, seat: selectedSeat.toString() });

  console.log(selectedSeat);

  const handleChangeMovie = () => {
    navigate("/details", { state: { ...dataOrder } });
  };

  const handleBooking = async () => {
    console.log(dataOrder);
    console.log(selectedSeat);

    // await dispatch(dataTempBooking({ ...dataOrder, seat: selectedSeat }));
    navigate("/payment", { state: { ...dataOrder, seat: selectedSeat } });
  };

  // useEffect()

  return (
    <>
      {localStorage.getItem("token") ? <HeaderSignedIn /> : <Header />}
      <div class={`${styles.canvas} pb-5 d-flex`}>
        <div class={`${styles.canvas__1} mt-5`}>
          <section class={styles.movie__selected}>
            <h1 class={styles.movie__selected_title}>Movie Selected</h1>
            <div class={`${styles.movie__selected_form} mt-3`}>
              <div
                class={`${styles.movie__selected_data} m-4 d-flex align-middle justify-content-between`}
              >
                <p class={`${styles.movie__selected_data1} align-middle pt-2`}>
                  {state.name}
                </p>
                <Link
                  type="button"
                  to="/view-all"
                  className={`${styles.btn_link} btn btn-outline-secondary`}
                >
                  Change Movie
                </Link>
              </div>
            </div>
          </section>
          <section class={`${styles.seat} mt-5`}>
            <h1 class={styles.seat_title}>Choose Your Seat</h1>
            <div class={`${styles.seat_container} mt-3`}>
              {listSeat.map((item) => (
                <div key={item}>
                  <Seat
                    rowSeat={item}
                    selectedSeat={handleSelectSeat}
                    reserved={reservedSeat}
                    selected={selectedSeat}
                  />
                </div>
              ))}
            </div>
          </section>
          <div
            className={`${styles.seat_btn} d-flex justify-content-between mt-5`}
          >
            <button
              className={`btn btn-outline-primary`}
              onClick={() => handleChangeMovie()}
            >
              Change your movie
            </button>
            <button
              className={`btn btn-outline-primary`}
              onClick={handleBooking}
            >
              Checkout now
            </button>
          </div>
        </div>
        <div class={`${styles.canvas__2} mt-5 ms-4`}>
          <aside class={styles.order__info}>
            <h1 class={styles.order__info_title}>Order Info</h1>
            <OrderCard data={[state, selectedSeat]} />
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}
