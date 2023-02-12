import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/index";
import HeaderSignedIn from "../../components/HeaderSignedIn/index";
import HeaderAdmin from "../../components/HeaderAdmin/index";
import Footer from "../../components/Footer/index";
import styles from "./ManageSchedule.module.css";
import Cards from "../../components/Cards/index";
import DetailCardAdmin from "../../components/DetailCardAdmin/index";
import BookingCardAdmin from "../../components/BookingCardAdmin/index";
import Cards2 from "../../components/Cards2/index";

import { useSelector, useDispatch } from "react-redux";
import {
  getSchedule,
  postSchedule,
  updateSchedule,
  deleteSchedule,
} from "../../stores/actions/schedule.js";

import { getMovie } from "../../stores/actions/manageMovie.js";

function ManageSchedule() {
  document.title = "Tickitz | Manage Schedule";

  let dataUser = localStorage.getItem("dataUser");
  dataUser = JSON.parse(dataUser);

  // With redux
  const schedule = useSelector((state) => state.schedule);
  const movie = useSelector((state) => state.manageMovie);
  const dispatch = useDispatch();

  console.log(schedule);
  // buat sementara mash static
  const location = [
    "Jakarta",
    "Surabaya",
    "Yogyakarta",
    "Solo",
    "Medan",
    "Balikpapan",
    "Semarang",
    "Bandung",
    "Denpasar",
  ];

  const [image, setImage] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  const [form, setForm] = useState({
    movieId: "",
    premiere: "",
    price: "",
    dateStart: "",
    dateEnd: "",
    time: "",
    location: "",
  });

  const page = 1;
  const limit = 20; // nnti dibuat all data(banyaknya data)
  const [movieSchedule, setMovieSchedule] = useState({});

  const getdataMovie = async () => {
    // PANGGIL ACTION
    await dispatch(getMovie(page, limit));
  };

  const getDataSchedule = async () => {
    // ga mau update kalau blm ganti limit?
    await dispatch(getSchedule(page == 1 ? "" : page, 12));
  };

  // console.log(getdataMovie(1, 20));

  const [movieId, setmovieId] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [tempTime, setTempTime] = useState([]);
  const [id, setId] = useState();

  const handleChangeForm = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handlePremiere = (event, value) => {
    console.log(event.target);
    console.log(value);

    setForm({
      ...form,
      [event.target.name]: value,
    });
  };

  const handleButton = (event) => {
    const { name, value } = event.target;
    let value1 = [];

    if (name == "movieId") {
      value1 = value.split(",");

      // console.log(value);

      setForm({
        ...form,
        [name]: value1[0],
        name: value1[1],
      });
      setImage(value1[2]);
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handlePlus = () => {
    setInputTime(
      <input type="text" name="time" onKeyPress={(event) => handleKey(event)} />
    );
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      setTempTime([...tempTime, event.target.value]);
      setInputTime("");
      setForm({
        ...form,
        time: tempTime.toString(),
      });
      // msh telat 1 inputan (-)
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    delete form.name;
    // delete form.image;

    // await setForm({
    //   ...form,
    //   time: tempTime.toString(),
    // });

    console.log(form);

    await dispatch(postSchedule(form));

    resetForm();
    alert("Success post schedule");
    getDataSchedule();
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    delete form.name;
    // delete form.image;

    // await setForm({
    //   ...form,
    //   time: tempTime.toString(),
    // });

    console.log(form);
    console.log(id);
    await dispatch(updateSchedule(id, form));

    resetForm();
    setIsUpdate(false);
    alert("Success update schedule");
    getDataSchedule();
  };

  const resetForm = () => {
    setForm({
      movieId: "",
      premiere: "",
      price: "",
      dateStart: "",
      dateEnd: "",
      time: "",
      location: "",
    });

    setImage();
    setTempTime([]);
  };

  const setUpdate = (data) => {
    console.log(data);
    const {
      id,
      movieId,
      premiere,
      price,
      dateStart,
      dateEnd,
      time,
      location,
      name,
    } = data;
    // const image1 = image.split("/");

    setForm({
      ...form,
      movieId,
      premiere,
      price,
      dateStart: dateStart.substring(0, 10),
      dateEnd: dateEnd.substring(0, 10),
      time,
      location,
      name,
    });

    setId(id);
    setImage(data.image);
    const tempTime = time.split(",");
    setTempTime(tempTime);
    setIsUpdate(true);
  };

  const setDelete = async (data) => {
    const { id } = data;

    await dispatch(deleteSchedule(id));
    getDataSchedule();
    alert("Success delete schedule");
  };

  useEffect(() => {
    getdataMovie();
  }, []);

  useEffect(() => {
    getDataSchedule();
  }, []);

  return (
    <>
      {dataUser.role == "admin" ? <HeaderAdmin /> : <Header />}
      <section className={`${styles.upcoming__movies}`}>
        <div className="d-flex justify-content-between">
          <label className={styles.upcoming__movies_title}>Form Schedule</label>
        </div>

        <form
          className={`${styles.upcoming__movies_card_container} pb-5 mt-3`}
          onSubmit={isUpdate ? handleUpdate : handleSubmit}
        >
          <div className="row">
            <div className="col-3">
              {/* {image ? <Cards2 data={{ image }} /> : <Cards data={form} />} */}
              <Cards data={{ image }} />
            </div>
            <div className="col">
              <div className="row">
                <div className="col mb-3">
                  <label className="form-label">Movie</label>
                  <div class={`dropdown d-grid`}>
                    <button
                      class="btn btn-outline-secondary dropdown-toggle text-start"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {form.movieId ? form.name : "Choose movie"}
                    </button>

                    <div
                      class={`${styles.dropdown_} dropdown-menu`}
                      aria-labelledby="dropdownMenuButton1"
                      role="menu"
                    >
                      {movie.data.map((item) => (
                        <li key={item.id}>
                          <button
                            name="movieId"
                            class="dropdown-item"
                            type="button"
                            value={[item.id, item.name, item.image]}
                            onClick={(event) => handleButton(event)}
                          >
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </div>
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
                      {form.location ? form.location : "Choose location"}
                    </button>
                    <ul
                      class={`${styles.dropdown_} dropdown-menu`}
                      aria-labelledby="dropdownMenuButton1"
                    >
                      {location.map((item) => (
                        <li>
                          <button
                            type="button"
                            class="dropdown-item"
                            name="location"
                            value={item}
                            onClick={(event) => handleButton(event)}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
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
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={(event) => handleChangeForm(event)}
                  />
                </div>
                <div className="col mb-3 ">
                  <label for="exampleInputEmail1" class="form-label">
                    Date start
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    name="dateStart"
                    value={form.dateStart}
                    onChange={(event) => handleChangeForm(event)}
                  />
                </div>
                <div className="col mb-3 ">
                  <label for="exampleInputEmail1" class="form-label">
                    Date end
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    name="dateEnd"
                    value={form.dateEnd}
                    onChange={(event) => handleChangeForm(event)}
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Premiere
                  </label>
                  <br />
                  <input
                    className={`${
                      styles.btn_premiere1
                    } btn btn-outline-primary ${
                      form.premiere == "cineone21" ? `active` : ``
                    }`}
                    type="button"
                    name="premiere"
                    onClick={(event) => handlePremiere(event, "cineone21")}
                  />

                  <input
                    className={`${
                      styles.btn_premiere2
                    } btn btn-outline-primary ${
                      form.premiere == "ebv.id" ? `active` : ``
                    }`}
                    type="button"
                    name="premiere"
                    onClick={(event) => handlePremiere(event, "ebv.id")}
                  />

                  <input
                    className={`${
                      styles.btn_premiere3
                    } btn btn-outline-primary ${
                      form.premiere == "hiflix" ? `active` : ``
                    }`}
                    type="button"
                    name="premiere"
                    onClick={(event) => handlePremiere(event, "hiflix")}
                  />
                </div>
                <div className="col mb-3 ">
                  <div className="row-3">
                    <div className="col ">
                      <label for="exampleInputEmail1" class="form-label">
                        Time
                      </label>
                      <br />

                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={(event) => handlePlus(event)}
                        data-bs-target="#input"
                      >
                        <img src="/assets/img/card/add.png" alt="" />
                      </button>
                      <div className="col">{inputTime}</div>
                    </div>
                    <div className="col text-bottom ">
                      <div className="row row-cols-4 mt-3">
                        {tempTime.map((item) => (
                          <div className="col align-text-bottom ">{item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row border"></div> */}
            </div>
          </div>
          <div className="row justify-content-end mt-2">
            <div className="d-grid col-2">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => resetForm()}
              >
                Reset
              </button>
            </div>
            <div className="d-grid col-2">
              <button className="btn btn-outline-primary" type="submit">
                {isUpdate ? "Update" : "Submit"}
              </button>
            </div>
          </div>
        </form>

        <div className="d-flex justify-content-between mt-5">
          <label className={styles.upcoming__movies_title}>Data Schedule</label>
        </div>
        <div className={`${styles.upcoming__movies_card_container} pb-5 mt-3`}>
          <div className="row mt-4 row-cols-3 g-4">
            {schedule.data.map((item) => (
              <div
                className="col"
                // key={item.id}
              >
                <BookingCardAdmin
                  data={item}
                  setUpdate={setUpdate}
                  setDelete={setDelete}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ManageSchedule;
