import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Details.module.css";
import Header from "../../components/Header/index";
import HeaderSignedIn from "../../components/HeaderSignedIn/index";
import Footer from "../../components/Footer/index";
import Cards from "../../components/Cards/index";

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
          <div className="row border"></div>
          <div className={`${styles.synopsis} row mt-3`}>
            <h3>Synopsis</h3>
            <p>{dataDetail.synopsis}</p>
          </div>
        </div>
      </div>
      <div class={`${styles.canvas} text-center pb-5`}>
        <h4 className="pt-5 pb-3">Showtimes and Ticket</h4>

        <div className="row mt-4">
          <div className="col">
            <div className={`card border ${styles.booking_card}`}>
              <div className="row ms-1 me-1 align-middle border">
                <img
                  src="assets/img/card/CineOne21.png"
                  className={`${styles.card_img_top} img-fluid`}
                  alt="card-img"
                />
                <div className="col">
                  <h3 className={`${styles.card_title} text-start mt-4`}>
                    CineOne21
                  </h3>
                  <p className={`${styles.card_address} text-start`}>
                    Whatever street No.12, South Purwokerto
                  </p>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col border">
                    <Link to="" className={`${styles.card_booking}`}>
                      8:30am
                    </Link>
                  </div>
                  <div className="col border">
                    <Link to="" className={`${styles.card_booking}`}>
                      8:30am
                    </Link>
                  </div>
                  <div className="col border">
                    <Link to="" className={`${styles.card_booking}`}>
                      8:30am
                    </Link>
                  </div>
                  {/* <div className="col border">
                    <a href="">8:30am</a>
                  </div> */}
                </div>
                <div className="row">
                  <div className="col border">
                    <a href="">8:30am</a>
                  </div>
                  <div className="col border">
                    <a href="">8:30am</a>
                  </div>
                  <div className="col border">
                    <a href="">8:30am</a>
                  </div>
                </div>
                <div className="border d-flex justify-content-between">
                  <p>Price</p>
                  <p>$30.00/seat</p>
                </div>
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
