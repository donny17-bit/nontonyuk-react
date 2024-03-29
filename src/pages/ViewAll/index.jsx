import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ViewAll.module.css";
import Header from "../../components/Header/index";
import HeaderSignedIn from "../../components/HeaderSignedIn/index";
import Footer from "../../components/Footer/index";
import DetailCard from "../../components/DetailCard/index";

//belum pakai redux
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
  const [limit, setLimit] = useState(8);
  const [dataRelease, setDataRelease] = useState([]);
  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState();
  const [sort, setSort] = useState();

  const getReleaseMovie = async () => {
    try {
      const resultMovie = await axios.get(
        `movie?page=${page}&limit=${limit}&searchRelease=${release}`
      );

      setDataRelease(resultMovie.data.data);
      setPageInfo(resultMovie.data.pagination);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleMonth = (item) => {
    setRelease(item);
  };

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  const searchHandle = async (event) => {
    try {
      if (event.key === "Enter") {
        if (sort) {
          event.preventDefault();
          const resultMovie = await axios.get(
            `movie?page=${page}&limit=${limit}&searchRelease=${release}&searchName=${event.target.value}&sort=${sort}`
          );
          setDataRelease(resultMovie.data.data);
          setPageInfo(resultMovie.data.pagination);
        } else {
          event.preventDefault();
          const resultMovie = await axios.get(
            `movie?page=${page}&limit=${limit}&searchRelease=${release}&searchName=${event.target.value}`
          );
          setDataRelease(resultMovie.data.data);
          setPageInfo(resultMovie.data.pagination);
        }
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  console.log(pageInfo);

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
        <div className="">
          <div className="row">
            <div className="col-6 ">
              <h2 className={styles.upcoming__movies_title}>List Movies</h2>
            </div>
            <div className="col text-end">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {sort ? sort.toUpperCase() : "Sort"}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <button
                      class="dropdown-item"
                      value="ascending"
                      name="sort"
                      onClick={(event) => handleSort(event)}
                    >
                      Ascending
                    </button>
                  </li>
                  <li>
                    <button
                      class="dropdown-item"
                      value="descending"
                      name="sort"
                      onClick={(event) => handleSort(event)}
                    >
                      Descending
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <input
                type="text"
                className="form-control"
                placeholder="search movie name..."
                onKeyPress={(event) => searchHandle(event)}
              />
            </div>
          </div>
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
        {/* <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center mt-4">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {for (let index = 0; index < pageInfo.totalPage; index++) {                 
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            }} 
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav> */}
      </section>

      <Footer />
    </>
  );
}

export default ViewAll;
