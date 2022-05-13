import React, { useState } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/index";
import HeaderSignedIn from "../../components/HeaderSignedIn/index";
import Footer from "../../components/Footer/index";
import styles from "./ManageSchedule.module.css";
import Cards from "../../components/Cards/index";
import DetailCardAdmin from "../../components/DetailCardAdmin/index";
import BookingCardAdmin from "../../components/BookingCardAdmin/index";

import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../stores/actions/manageMovie.js";

function ManageSchedule() {
  //without redux
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

  // With redux
  const manageMovie = useSelector((state) => state.manageMovie);
  const dispatch = useDispatch();

  return (
    <>
      {/* harus sudah sign in dlu headernya */}
      {localStorage.getItem("token") ? <HeaderSignedIn /> : <Header />}
      <section className={`${styles.upcoming__movies}`}>
        <div className="d-flex justify-content-between">
          <label className={styles.upcoming__movies_title}>Form Schedule</label>
        </div>

        <form className={`${styles.upcoming__movies_card_container} pb-5 mt-3`}>
          <div className="row">
            <div className="col-3">
              <Cards data={dataDetail} />
            </div>
            <div className="col">
              <div className="row">
                <div className="col mb-3">
                  <label className="form-label">Movie</label>
                  <div class="dropdown d-grid">
                    <button
                      class="btn btn-outline-secondary dropdown-toggle text-start"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Choose movie
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here bkasjdahsdhashdbjaskdjab
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col mb-3 ">
                  <label for="exampleInputEmail1" class="form-label">
                    Location
                  </label>
                  <div class="dropdown d-grid">
                    <button
                      class="btn btn-outline-secondary dropdown-toggle text-start"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Choose location
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here bkasjdahsdhashdbjaskdjab
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 mb-3 ">
                  <label for="exampleInputEmail1" class="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Directed by.."
                  />
                </div>
                <div className="col mb-3 ">
                  <label for="exampleInputEmail1" class="form-label">
                    Date start
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="col mb-3 ">
                  <label for="exampleInputEmail1" class="form-label">
                    Date end
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Premiere
                  </label>
                  <br />
                  <button className="btn btn-outline-primary ">
                    premiere logo
                  </button>
                  <button className="btn btn-outline-primary ">
                    premiere logo
                  </button>
                  <button className="btn btn-outline-primary ">
                    premiere logo
                  </button>
                </div>
                <div className="col mb-3 ">
                  <label for="exampleInputEmail1" class="form-label">
                    Time
                  </label>
                  <br />
                  <button className="btn btn-outline-primary ">
                    plus logo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-end mt-2">
            <div className="d-grid col-2">
              <button
                className="btn btn-outline-primary"
                onClick={() => dispatch(reset())}
              >
                Reset
              </button>
            </div>
            <div className="d-grid col-2">
              <button className="btn btn-outline-primary">Submit</button>
            </div>
          </div>

          {/* <div className={`${styles.upcoming__movies_card_row} row-cols-4`}>
            {dataRelease.map((item) => (
              <div
                className={`${styles.upcoming__movies_card_col}`}
                key={item.id}
              >
                {<DetailCard data={item} />}
              </div>
            ))}
          </div> */}
        </form>

        <div className="d-flex justify-content-between mt-5">
          <label className={styles.upcoming__movies_title}>Data Schedule</label>
        </div>
        <div className={`${styles.upcoming__movies_card_container} pb-5 mt-3`}>
          <div className="row mt-4 row-cols-3 g-4">
            <div className="col">
              <BookingCardAdmin />
            </div>
            <div className="col">
              <BookingCardAdmin />
            </div>
            <div className="col">
              <BookingCardAdmin />
            </div>
            <div className="col">
              <BookingCardAdmin />
            </div>
            <div className="col">
              <BookingCardAdmin />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ManageSchedule;
