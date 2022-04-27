import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "../../components/Header/index";
import HeaderSignedIn from "../../components/HeaderSignedIn/index";
import Footer from "../../components/Footer/index";
import Cards from "../../components/Cards/index";
import DetailCard from "../../components/DetailCard/index";

function Home() {
  document.title = "Tickitz | Home";

  const month = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ];

  const limit = 4;
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});

  const getDataMovie = async () => {
    try {
      // console.log("get data movie");

      const resultMovie = await axios.get(`movie?page=${page}&limit=${limit}`);
      // console.log(resultMovie);

      setData(resultMovie.data.data);
      setPageInfo(resultMovie.data.pagination);
    } catch (error) {
      console.log(error.response);
    }
  };

  console.log(data);
  // data.map((item) => {
  //   console.log("hello");
  // });
  // console.log(pageInfo);

  useEffect(() => {
    getDataMovie();
  }, []);

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
            {data.map((item) => (
              <div
                className={`${styles.now__showing_card_col} col`}
                key={item.id}
              >
                <Cards data={item} />
              </div>
            ))}
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
            {month.map((item) => (
              <div className={styles.upcoming__movies_button_col}>
                <button className={`${styles.btn_} btn btn-outline-primary`}>
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.upcoming__movies_card_container} mt-5`}>
          <div className={`${styles.upcoming__movies_card_row}`}>
            {}
            <div className={`${styles.upcoming__movies_card_col}`}>
              {<DetailCard />}
            </div>
            <div className={`${styles.upcoming__movies_card_col}`}>
              {<DetailCard />}
            </div>
            <div className={`${styles.upcoming__movies_card_col}`}>
              {<DetailCard />}
            </div>
            <div className={`${styles.upcoming__movies_card_col}`}>
              {<DetailCard />}
            </div>
            <div className={`${styles.upcoming__movies_card_col}`}>
              {<DetailCard />}
            </div>

            <div className={`${styles.upcoming__movies_card_col}`}>
              {<DetailCard />}
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
