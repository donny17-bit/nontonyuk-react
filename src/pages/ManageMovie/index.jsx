import React, { useState } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/index";
import HeaderSignedIn from "../../components/HeaderSignedIn/index";
import Footer from "../../components/Footer/index";
import styles from "./ManageMovie.module.css";
import Cards from "../../components/Cards/index";
import DetailCardAdmin from "../../components/DetailCardAdmin/index";

function ManageMovie() {
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
      <section className={`${styles.upcoming__movies}`}>
        <div className="d-flex justify-content-between">
          <label className={styles.upcoming__movies_title}>Form Movie</label>
        </div>

        <div className={`${styles.upcoming__movies_card_container} pb-5 mt-3`}>
          <div className="row">
            <div className="col-3">
              <Cards data={dataDetail} />
            </div>
            <div className="col">
              <form>
                <div className="row">
                  <div className="col mb-3 ">
                    <label className="form-label">Movie Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter movie name here"
                    />
                  </div>
                  <div className="col mb-3 ">
                    <label for="exampleInputEmail1" class="form-label">
                      Category
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Movie category"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3 ">
                    <label for="exampleInputEmail1" class="form-label">
                      Director
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
                      Cast
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Casting"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 mb-3 ">
                    <label for="exampleInputEmail1" class="form-label">
                      Release Date
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Release date"
                    />
                  </div>
                  <div className="col mb-3 ">
                    <label for="exampleInputEmail1" class="form-label">
                      Duration Hour
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Duration"
                    />
                  </div>
                  <div className="col mb-3 ">
                    <label for="exampleInputEmail1" class="form-label">
                      Duration Minute
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Duration"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-3">
            <form action="">
              <div className="col mb-3 ">
                <label className="form-label">Synopsis</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter movie name here"
                />
              </div>
            </form>
          </div>
          <div className="row justify-content-end mt-2">
            <div className="d-grid col-2">
              <button className="btn btn-outline-primary">Reset</button>
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
        </div>

        <div className="d-flex justify-content-between mt-5">
          <label className={styles.upcoming__movies_title}>Data Movie</label>
        </div>
        <div className={`${styles.upcoming__movies_card_container} pb-5 mt-3`}>
          <div className="row border mt-4 row-cols-4 g-4">
            <div className="col">
              <DetailCardAdmin data={dataDetail} />
            </div>
            <div className="col">
              <DetailCardAdmin data={dataDetail} />
            </div>
            <div className="col">
              <DetailCardAdmin data={dataDetail} />
            </div>
            <div className="col">
              <DetailCardAdmin data={dataDetail} />
            </div>
            <div className="col">
              <DetailCardAdmin data={dataDetail} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ManageMovie;
