import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

function Home() {
  console.log(Header);
  return (
    <>
      <Header />
      <div class="container">
        <section class="banner ms-5 me-5 d-flex justify-content-between">
          <div class={`${styles.banner__text} ms-3`}>
            <h4>Nearest Cinema, Newest Movie,</h4>
            <h1>Find out now!</h1>
          </div>
          <div class={styles.banner__image}>
            <img
              src="assets/img/home/Rectangle 33-2.png"
              alt="comic__image"
              class={`${styles.image__2} me-3`}
            />
            <img
              src="assets/img/home/Rectangle 33-1.png"
              alt="comic__image"
              class={`${styles.image__1} me-3`}
            />
            <img
              src="assets/img/home/Rectangle 33.png"
              alt="comic__image"
              class={styles.image}
            />
          </div>
        </section>
      </div>
      <section class={styles.now__showing}>
        <div
          class={`${styles.now__showing_header} d-flex justify-content-between`}
        >
          <h2 class={styles.now__showing_title}>Now Showing</h2>
          <a href="#" class={styles.now__showing_link}>
            view all
          </a>
        </div>
        <div class={`${styles.now__showing_accessories} ms-4 mt-1`}></div>
        <div class={`${styles.now__showing_card_container} mt-5`}>
          <div class="row overflow-auto row-cols-1 row-cols-md-2 g-4">
            <div class={`${styles.now__showing_card_col} col`}>
              <div class={`${styles.now__showing_card} card`}>
                <img
                  src="assets/img/home/Rectangle 119-2.png"
                  class="card-img-top"
                  alt="card-img"
                />
              </div>
            </div>
            <div class={`${styles.now__showing_card_col} col`}>
              <div class={`${styles.now__showing_card} card`}>
                <img
                  src="assets/img/home/Rectangle 119-1.png"
                  class="card-img-top"
                  alt="card-img"
                />
              </div>
            </div>
            <div class={`${styles.now__showing_card_col} col`}>
              <div class={`${styles.now__showing_card} card`}>
                <img
                  src="assets/img/home/Rectangle 119-2.png"
                  class="card-img-top"
                  alt="card-img"
                />
              </div>
            </div>
            <div class={`${styles.now__showing_card_col} col`}>
              <div class={`${styles.now__showing_card} card`}>
                <img
                  src="assets/img/home/Rectangle 119.png"
                  class="card-img-top"
                  alt="card-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class={styles.upcoming__movies}>
        <div class="d-flex justify-content-between">
          <h2 class={styles.upcoming__movies_title}>Upcoming Movies</h2>
          <a href="#" class={styles.upcoming__movies_link}>
            view all
          </a>
        </div>
        <div class={`${styles.upcoming__movies_button} mt-4`}>
          <div class={styles.upcoming__movies_button_row}>
            <div class={styles.upcoming__movies_button_col}>
              <button class={`${styles.btn_} btn btn-outline-primary`}>
                September
              </button>
            </div>
            <div class={styles.upcoming__movies_button_col}>
              <button class={`${styles.btn_} btn btn-outline-primary`}>
                October
              </button>
            </div>
            <div class={styles.upcoming__movies_button_col}>
              <button class={`${styles.btn_} btn btn-outline-primary`}>
                November
              </button>
            </div>
            <div class={styles.upcoming__movies_button_col}>
              <button class={`${styles.btn_} btn btn-outline-primary`}>
                December
              </button>
            </div>
            <div class={styles.upcoming__movies_button_col}>
              <button class={`${styles.btn_} btn btn-outline-primary`}>
                January
              </button>
            </div>
            <div class={styles.upcoming__movies_button_col}>
              <button class={`${styles.btn_} btn btn-outline-primary`}>
                February
              </button>
            </div>
            <div class={styles.upcoming__movies_button_col}>
              <button class={`${styles.btn_} btn btn-outline-primary`}>
                March
              </button>
            </div>
            <div class={styles.upcoming__movies_button_col}>
              <button class={`${styles.btn_} btn btn-outline-primary`}>
                April
              </button>
            </div>
            <div class={styles.upcoming__movies_button_col}>
              <button class={`${styles.btn_} btn btn-outline-primary`}>
                May
              </button>
            </div>
          </div>
        </div>
        <div
          class={`${styles.upcoming__movies_card_container} card-group mt-5`}
        >
          <div class="row overflow-auto row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <div class={`card h-100 ${styles.upcoming__movies_card}`}>
                <img
                  src="assets/img/home/Rectangle 139-2.png"
                  class={`${styles.card_img_top} card-img-top`}
                  alt="card-img"
                />
                <div class="card-body">
                  <h5 class={`${styles.card_title} card-title`}>The Witches</h5>
                  <p class={`${styles.card_text} card-text`}>
                    Adventure, Comedy, Family
                  </p>
                </div>
                <div class={`${styles.card_footer} card-footer`}>
                  <a href="#" class={`${styles.btn_} btn btn-outline-primary`}>
                    Details
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class={`card h-100 ${styles.upcoming__movies_card}`}>
                <img
                  src="assets/img/home/Rectangle 139-1.png"
                  class={`${styles.card_img_top} card-img-top`}
                  alt="card-img"
                />
                <div class="card-body">
                  <h5 class={`${styles.card_title} card-title`}>Black Widow</h5>
                  <p class={`${styles.card_text} card-text`}>
                    Action, Adventure, Sci-fi
                  </p>
                </div>
                <div class={`${styles.card_footer} card-footer`}>
                  <a href="#" class={`${styles.btn_} btn btn-outline-primary`}>
                    {" "}
                    Details{" "}
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class={`card h-100 ${styles.upcoming__movies_card}`}>
                <img
                  src="assets/img/home/Rectangle 139-3.png"
                  class={`${styles.card_img_top} card-img-top`}
                  alt="card-img"
                />
                <div class="card-body">
                  <h5 class={`${styles.card_title} card-title`}>Tenet</h5>
                  <p class={`${styles.card_text} card-text`}>Action, Sci-fi</p>
                </div>
                <div class={`${styles.card_footer} card-footer`}>
                  <a href="#" class={`${styles.btn_} btn btn-outline-primary`}>
                    Details
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class={`card h-100 ${styles.upcoming__movies_card}`}>
                <img
                  src="assets/img/home/Rectangle 139-1.png"
                  class={`${styles.card_img_top} card-img-top`}
                  alt="card-img"
                />
                <div class="card-body">
                  <h5 class={`${styles.card_title} card-title`}>Black Widow</h5>
                  <p class={`${styles.card_text} card-text`}>
                    Action, Adventure, Sci-fi
                  </p>
                </div>
                <div class={`${styles.card_footer} card-footer`}>
                  <a href="#" class={`${styles.btn_} btn btn-outline-primary`}>
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
          class={`${styles.card__join} card border-light shadow p-3 mb-5 bg-body`}
        >
          <div class="card-body">
            <h5 class={styles.card_title1}>Be the vanguard of the</h5>
            <h1 class={styles.card_title2}>Moviegoers</h1>
            <div class={`${styles.card__join_form} pt-5`}>
              <form class="d-flex">
                <input
                  class={`${styles.form_control} form-control me-2`}
                  type="email"
                  placeholder="Type your email"
                  aria-label="email"
                />
                <button class={`${styles.btn_} btn btn-primary`} type="submit">
                  Join now
                </button>
              </form>
            </div>
          </div>
          <div class={`${styles.card_footer} card-footer mt-3`}>
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
