import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ViewAll.module.css";
import Header from "../../components/Header/index";
import HeaderSignedIn from "../../components/HeaderSignedIn/index";
import Footer from "../../components/Footer/index";
import DetailCard from "../../components/DetailCard/index";

//belum selesai
function ViewAll() {
  document.title = "Tickitz | View All";

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

  const [release, setRelease] = useState(3);
  const limit = 4;
  const [dataRelease, setDataRelease] = useState([]);
  const [page, setPage] = useState(1);

  const getReleaseMovie = async () => {
    try {
      const resultMovie = await axios.get(
        `movie?page=${page}&limit=${limit}&searchRelease=${release}`
      );

      setDataRelease(resultMovie.data.data);
      // setPageInfo(resultMovie.data.pagination);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleMonth = (item) => {
    setRelease(item);
  };

  useEffect(() => {
    getReleaseMovie();
  }, []);

  useEffect(() => {
    getReleaseMovie();
  }, [release]);

  return (
    <>
      {localStorage.getItem("token") ? <HeaderSignedIn /> : <Header />}
      <section className={`${styles.upcoming__movies}`}>
        <div className="d-flex justify-content-between">
          <h2 className={styles.upcoming__movies_title}>List Movies</h2>
          <a href="#" className={styles.upcoming__movies_link}>
            view all
          </a>
        </div>
        <div className={`${styles.upcoming__movies_button} mt-4`}>
          <div className={styles.upcoming__movies_button_row}>
            {month.map((item) => (
              <div className={styles.upcoming__movies_button_col}>
                <button
                  className={`${styles.btn_} btn btn-outline-primary`}
                  onClick={() => handleMonth(item.id)}
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.upcoming__movies_card_container} mt-3`}>
          <div className={`${styles.upcoming__movies_card_row} row-cols-4`}>
            {dataRelease.map((item) => (
              <div
                className={`${styles.upcoming__movies_card_col}`}
                key={item.id}
              >
                {<DetailCard data={item} />}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ViewAll;
