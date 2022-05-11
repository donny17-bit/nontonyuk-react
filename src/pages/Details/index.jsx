import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Details.module.css";
import Header from "../../components/Header/index";
import HeaderSignedIn from "../../components/HeaderSignedIn/index";
import Footer from "../../components/Footer/index";
import Cards from "../../components/Cards/index";
import BookingCard from "../../components/BookingCard/index";

function Details() {
  document.title = "Tickitz | Movie Details";
  const id = localStorage.getItem("IdMovie");

  const [dataDetail, setDataDetail] = useState([]);

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
        <h4 className="pt-5 pb-3 border">Showtimes and Ticket</h4>
        {/* date and location belum */}
        <form className="row border d-flex justify-content-center">
          <div className="col col-lg-3 border d-grid gap-2">
            <input className="btn btn-secondary" type="date" name="date" />;
          </div>
          <div className="col col-lg-3 border d-grid gap-2">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Theater Location
              </button>
              <input
                type="date"
                class="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              />
              {/* <li>
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
                </li> */}
              {/* </ul> */}
            </div>
          </div>
        </form>
        <div className="row border mt-4 row-cols-3 g-4">
          <div className={`${styles.BookingCard} col`}>
            {/* <div className={styles.card_}> 
            use this if you want to change card size from this class(parent)
            */}
            <BookingCard />
            {/* </div> */}
          </div>
          <div className={`col`}>
            <BookingCard />
          </div>
          <div className={`col`}>
            <BookingCard />
          </div>
          <div className={`col`}>
            <BookingCard />
          </div>
          <div className={`col`}>
            <BookingCard />
          </div>
          <div className={`col`}>
            <BookingCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
