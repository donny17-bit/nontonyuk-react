import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "../../components/Header/index";
import HeaderSignedIn from "../../components/HeaderSignedIn/index";
import Footer from "../../components/Footer/index";

function Home() {
  document.title = "Tickitz | Home";

  // console.log(login);

  return (
    <>
      {localStorage.getItem("token") ? <HeaderSignedIn /> : <Header />}
      <div className="container">
        <section className="banner ms-5 me-5 d-flex justify-content-between">
          <div className={`${styles.banner__text} ms-3`}>
            <h4>Nearest Cinema, Newest Movie,</h4>
            <h1>Find out now!</h1>
          </div>
          <div className={styles.banner__image}>
            <img
              src="assets/img/home/Rectangle 33-2.png"
              alt="comic__image"
              className={`${styles.image__2} me-3`}
            />
            <img
              src="assets/img/home/Rectangle 33-1.png"
              alt="comic__image"
              className={`${styles.image__1} me-3`}
            />
            <img
              src="assets/img/home/Rectangle 33.png"
              alt="comic__image"
              className={styles.image}
            />
          </div>
        </section>
      </div>
      <section className={styles.now__showing}>
        <div
          className={`${styles.now__showing_header} d-flex justify-content-between`}
        >
          <h2 className={styles.now__showing_title}>Now Showing</h2>
          <a href="#" className={styles.now__showing_link}>
            view all
          </a>
        </div>
        <div className={`${styles.now__showing_accessories} ms-4 mt-1`}></div>
        <div className={`${styles.now__showing_card_container} mt-5`}>
          <div className="row overflow-auto row-cols-1 row-cols-md-2 g-4">
            <div className={`${styles.now__showing_card_col} col`}>
              <div className={`${styles.now__showing_card} card`}>
                <img
                  src="assets/img/home/Rectangle 119-2.png"
                  className="card-img-top"
                  alt="card-img"
                />
              </div>
            </div>
            <div className={`${styles.now__showing_card_col} col`}>
              <div className={`${styles.now__showing_card} card`}>
                <img
                  src="assets/img/home/Rectangle 119-1.png"
                  className="card-img-top"
                  alt="card-img"
                />
              </div>
            </div>
            <div className={`${styles.now__showing_card_col} col`}>
              <div className={`${styles.now__showing_card} card`}>
                <img
                  src="assets/img/home/Rectangle 119-2.png"
                  className="card-img-top"
                  alt="card-img"
                />
              </div>
            </div>
            <div className={`${styles.now__showing_card_col} col`}>
              <div className={`${styles.now__showing_card} card`}>
                <img
                  src="assets/img/home/Rectangle 119.png"
                  className="card-img-top"
                  alt="card-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.upcoming__movies}>
        <div className="d-flex justify-content-between">
          <h2 className={styles.upcoming__movies_title}>Upcoming Movies</h2>
          <a href="#" className={styles.upcoming__movies_link}>
            view all
          </a>
        </div>
        <div className={`${styles.upcoming__movies_button} mt-4`}>
          <div className={styles.upcoming__movies_button_row}>
            <div className={styles.upcoming__movies_button_col}>
              <button className={`${styles.btn_} btn btn-outline-primary`}>
                September
              </button>
            </div>
            <div className={styles.upcoming__movies_button_col}>
              <button className={`${styles.btn_} btn btn-outline-primary`}>
                October
              </button>
            </div>
            <div className={styles.upcoming__movies_button_col}>
              <button className={`${styles.btn_} btn btn-outline-primary`}>
                November
              </button>
            </div>
            <div className={styles.upcoming__movies_button_col}>
              <button className={`${styles.btn_} btn btn-outline-primary`}>
                December
              </button>
            </div>
            <div className={styles.upcoming__movies_button_col}>
              <button className={`${styles.btn_} btn btn-outline-primary`}>
                January
              </button>
            </div>
            <div className={styles.upcoming__movies_button_col}>
              <button className={`${styles.btn_} btn btn-outline-primary`}>
                February
              </button>
            </div>
            <div className={styles.upcoming__movies_button_col}>
              <button className={`${styles.btn_} btn btn-outline-primary`}>
                March
              </button>
            </div>
            <div className={styles.upcoming__movies_button_col}>
              <button className={`${styles.btn_} btn btn-outline-primary`}>
                April
              </button>
            </div>
            <div className={styles.upcoming__movies_button_col}>
              <button className={`${styles.btn_} btn btn-outline-primary`}>
                May
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${styles.upcoming__movies_card_container} card-group mt-5`}
        >
          <div className="row overflow-auto row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className={`card h-100 ${styles.upcoming__movies_card}`}>
                <img
                  src="assets/img/home/Rectangle 139-2.png"
                  className={`${styles.card_img_top} card-img-top`}
                  alt="card-img"
                />
                <div className="card-body">
                  <h5 className={`${styles.card_title} card-title`}>
                    The Witches
                  </h5>
                  <p className={`${styles.card_text} card-text`}>
                    Adventure, Comedy, Family
                  </p>
                </div>
                <div className={`${styles.card_footer} card-footer`}>
                  <a
                    href="#"
                    className={`${styles.btn_} btn btn-outline-primary`}
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`card h-100 ${styles.upcoming__movies_card}`}>
                <img
                  src="assets/img/home/Rectangle 139-1.png"
                  className={`${styles.card_img_top} card-img-top`}
                  alt="card-img"
                />
                <div className="card-body">
                  <h5 className={`${styles.card_title} card-title`}>
                    Black Widow
                  </h5>
                  <p className={`${styles.card_text} card-text`}>
                    Action, Adventure, Sci-fi
                  </p>
                </div>
                <div className={`${styles.card_footer} card-footer`}>
                  <a
                    href="#"
                    className={`${styles.btn_} btn btn-outline-primary`}
                  >
                    {" "}
                    Details{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`card h-100 ${styles.upcoming__movies_card}`}>
                <img
                  src="assets/img/home/Rectangle 139-3.png"
                  className={`${styles.card_img_top} card-img-top`}
                  alt="card-img"
                />
                <div className="card-body">
                  <h5 className={`${styles.card_title} card-title`}>Tenet</h5>
                  <p className={`${styles.card_text} card-text`}>
                    Action, Sci-fi
                  </p>
                </div>
                <div className={`${styles.card_footer} card-footer`}>
                  <a
                    href="#"
                    className={`${styles.btn_} btn btn-outline-primary`}
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`card h-100 ${styles.upcoming__movies_card}`}>
                <img
                  src="assets/img/home/Rectangle 139-1.png"
                  className={`${styles.card_img_top} card-img-top`}
                  alt="card-img"
                />
                <div className="card-body">
                  <h5 className={`${styles.card_title} card-title`}>
                    Black Widow
                  </h5>
                  <p className={`${styles.card_text} card-text`}>
                    Action, Adventure, Sci-fi
                  </p>
                </div>
                <div className={`${styles.card_footer} card-footer`}>
                  <a
                    href="#"
                    className={`${styles.btn_} btn btn-outline-primary`}
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className={`${styles.card__join} card border-light shadow p-3 mb-5 bg-body`}
        >
          <div className="card-body">
            <h5 className={styles.card_title1}>Be the vanguard of the</h5>
            <h1 className={styles.card_title2}>Moviegoers</h1>
            <div className={`${styles.card__join_form} pt-5`}>
              <form className="d-flex">
                <input
                  className={`${styles.form_control} form-control me-2`}
                  type="email"
                  placeholder="Type your email"
                  aria-label="email"
                />
                <button
                  className={`${styles.btn_} btn btn-primary`}
                  type="submit"
                >
                  Join now
                </button>
              </form>
            </div>
          </div>
          <div className={`${styles.card_footer} card-footer mt-3`}>
            <p>By joining you as a Tickitz member,</p>
            <p>we will always send you the latest updates via email.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
