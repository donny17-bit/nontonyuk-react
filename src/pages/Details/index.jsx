import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Details.module.css";
import Header from "../../components/Header/index";
import HeaderSignedIn from "../../components/HeaderSignedIn/index";
import Footer from "../../components/Footer/index";
import Cards from "../../components/Cards/index";
import BookingCard from "../../components/BookingCard/index";

import { useSelector, useDispatch } from "react-redux";
import { getMovie } from "../../stores/actions/manageMovie.js";
import { getSchedule } from "../../stores/actions/schedule";
import { dataTempBooking } from "../../stores/actions/booking";

function Details() {
  document.title = "Tickitz | Movie Details";

  const navigate = useNavigate();

  const limit = 12;
  const page = 1;
  const id = localStorage.getItem("IdMovie");
  const [dataDetail, setDataDetail] = useState([]);

  const [dataOrder, setDataOrder] = useState({
    // movieId: params.id,
    dateBooking: new Date().toISOString().split("T")[0],
  });

  const movie = useSelector((state) => state.manageMovie);
  const schedule = useSelector((state) => state.schedule);
  const booking = useSelector((state) => state.booking);
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");

  // buat searching data movie di schedule berdasarkan idMovie
  let scheduleMovie = [];

  schedule.data.map((item) => {
    if (item.movieId == id) {
      scheduleMovie = [...scheduleMovie, item];
    }
  });

  console.log(scheduleMovie);

  const changeDateBooking = (data) => {
    setDataOrder({ ...dataOrder, ...data });
  };

  // console.log(dataOrder);

  const handleChange = (event) => {
    // console.log(event.target.value);
    setDataOrder({ dateBooking: event.target.value });
  };

  const handleBooking = async () => {
    await dispatch(dataTempBooking(dataOrder));
    navigate("/order");
  };

  // console.log(dataOrder);

  const getdataMovie = async () => {
    await dispatch(getMovie(page, limit));
  };

  const getDataSchedule = async () => {
    // (msh bug)
    await dispatch(getSchedule(page == 1 ? "" : page, 5));
  };

  // msh blm bsa search dengn kota
  const handleLocation = (event) => {
    setLocation(event.target.value);

    scheduleMovie = [];
    schedule.data.map((item) => {
      if (item.location == event.target.value) {
        // delete scheduleMovie.item;
        console.log(false);
        console.log(scheduleMovie);
        scheduleMovie = [...scheduleMovie, item];
      }
    });
  };

  const getDetail = async () => {
    try {
      const result = await axios.get(`movie/${id}`);

      setDataDetail(result.data.data[0]);
      // setPageInfo(resultMovie.data.pagination);
    } catch (error) {
      console.log(error.response);
    }
  };

  const dateButton = () => {
    // event.preventDefault;
    <input class="" type="date" name="date" />;
  };

  // const date = dataDetail.releaseDate;
  // const date1 = date.slice(10, 2);
  // console.log(date1);

  useEffect(() => {
    getDetail();
  }, []);

  useEffect(() => {
    getDataSchedule();
  }, []);

  useEffect(() => {
    getdataMovie();
  }, []);

  return (
    <>
      {localStorage.getItem("token") ? <HeaderSignedIn /> : <Header />}
      <div className={`${styles.details} container mt-5 pb-5 d-flex`}>
        <Cards data={dataDetail} />
        <div className={`${styles.details__text} ps-5`}>
          <h1 className={styles.details__title}>{dataDetail.name}</h1>
          <p className={`${styles.details__genre} text-start`}>
            {dataDetail.category}
          </p>
          <div className="row">
            <div className="col">
              <h4>Release date</h4>
              <p>{dataDetail.releaseDate}</p>
            </div>
            <div className="col">
              <h4>Directed by</h4>
              <p>{dataDetail.director}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>Duration</h4>
              <p>{dataDetail.duration}</p>
            </div>
            <div className="col">
              <h4>Cast</h4>
              <p>{dataDetail.cast}</p>
            </div>
          </div>
          <hr />
          <div className={`${styles.synopsis} row mt-3`}>
            <h3>Synopsis</h3>
            <p>{dataDetail.synopsis}</p>
          </div>
        </div>
      </div>
      <div class={`${styles.canvas} text-center pb-5`}>
        <h4 className="pt-5 pb-3">Showtimes and Ticket</h4>
        {/* date and location belum */}
        <form className="row d-flex justify-content-center">
          <div className="col col-lg-3 d-grid gap-2">
            <input
              className="form-control"
              type="date"
              name="date"
              value={dataOrder.dateBooking}
              onChange={(event) => handleChange(event)}
            />
            ;
          </div>
          <div className="col col-3 d-grid gap-2">
            <div class={`"${styles.btn_location} dropdown d-grid"`}>
              <button
                class={`${styles.btn_location_1} btn btn-outline-secondary dropdown-toggle text-start"`}
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* msh belum */}
                {scheduleMovie.location
                  ? scheduleMovie.location
                  : "Theater location"}
              </button>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {scheduleMovie.map((item) => (
                  <li key={item.id}>
                    <button
                      name="location"
                      class="dropdown-item"
                      type="button"
                      value={item.location}
                      onClick={(event) => handleLocation(event)}
                    >
                      {item.location}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </form>
        <div className="row mt-4 row-cols-3 g-4">
          {scheduleMovie.map((item) => (
            <div className={`col`}>
              <BookingCard
                data={[item, dataOrder]}
                changeDateBooking={changeDateBooking}
                handleBooking={handleBooking}
              />
            </div>
          ))}

          {/* <div className={`${styles.BookingCard} col`}>
            <div className={styles.card_}> 
            use this if you want to change card size from this class(parent)
           
            <BookingCard />
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
