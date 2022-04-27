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
      <div className={`${styles.details} container border mt-5 pb-5 d-flex`}>
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
              <h4>Directed by</h4>
              <p>Jon Watss</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>Duration</h4>
              <p>2 hours 13 minutes</p>
            </div>
            <div className="col">
              <h4>Cast</h4>
              <p>Tom Holland, Michael Keaton, Robert Downey, ...</p>
            </div>
          </div>
          <div className="row border"></div>
          <div className={`${styles.synopsis} row mt-3`}>
            <h3>Synopsis</h3>
            <p className="border">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus, ad minus natus, vel dolores nobis ducimus quam
              neque qui sequi corporis repudiandae, nesciunt unde quis odit? Non
              quasi laudantium libero?
            </p>
          </div>
        </div>
      </div>
      <div class={`${styles.canvas} text-center pb-5`}>
        <h4 className="pt-5 pb-3">Showtimes and Ticket</h4>
        <div className="row">
          <div className="col">
            <div class="dropdown">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div class="dropdown">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row border mt-4">
          <div className="col">
            <div className={`card ${styles.upcoming__movies_card}`}>
              <img
                src="assets/img/footer/Vector-1.png"
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
          <div className="col">
            <div className={`card ${styles.upcoming__movies_card}`}>
              <img
                src="assets/img/footer/Vector-1.png"
                className={`${styles.card_img_top} card-img-top ps-3`}
                alt="card-img"
              />
              <h3>ebv.id</h3>
              <p>Whatever street No.12, South Purwokerto</p>

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
          <div className="col">
            <div className={`card ${styles.upcoming__movies_card}`}>
              <img
                src="assets/img/footer/Vector-1.png"
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
          <div className="col">
            <div className={`card ${styles.upcoming__movies_card}`}>
              <img
                src="assets/img/footer/Vector-1.png"
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
      <Footer />
    </>
  );
}

export default Details;
