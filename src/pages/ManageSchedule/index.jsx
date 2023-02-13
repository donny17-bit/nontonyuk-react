import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import Header from "../../components/Header/index";
import HeaderSignedIn from "../../components/HeaderSignedIn/index";
import HeaderAdmin from "../../components/HeaderAdmin/index";
import Footer from "../../components/Footer/index";
import styles from "./ManageSchedule.module.css";
import Cards from "../../components/Cards/index";
import DetailCardAdmin from "../../components/DetailCardAdmin/index";
import BookingCardAdmin from "../../components/BookingCardAdmin/index";
import Cards2 from "../../components/Cards2/index";
import {
  Link,
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";

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

  // for searcing
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  let dataUser = localStorage.getItem("dataUser");
  dataUser = JSON.parse(dataUser);

  // With redux
  const schedule = useSelector((state) => state.schedule);
  const movie = useSelector((state) => state.manageMovie);
  const dispatch = useDispatch();

  const [page, setPage] = useState(params.page ? params.page : "1");
  const [isUpdated, setIsUpdated] = useState(
    params.isUpdate ? params.isUpdate : "false"
  );

  // const [selectLocation, setSelectLocation] = useState({
  //   value: "Choose location"
  // })
  const [selectLocation, setSelectLocation] = useState();
  const [selectMovie, setSelectMovie] = useState();

  // console.log(schedule);
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

  const limit = 20; // nnti dibuat all data(banyaknya data)
  const [movieSchedule, setMovieSchedule] = useState({});

  const getdataMovie = async () => {
    // PANGGIL ACTION
    await dispatch(getMovie(page, limit, "false"));
  };

  const getDataSchedule = async () => {
    // ga mau update kalau blm ganti limit?
    await dispatch(getSchedule(page, 12, isUpdated));
  };

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

  const handleChangeMovie = (event) => {
    let value = event.target.value;
    value = value.split(",");
    setSelectMovie(value[0]);

    setForm({
      ...form,
      movieId: value[0],
    });
    setImage(value[2]);
  };

  const handleChangeLocation = (event) => {
    setSelectLocation(event.target.value);
    let value = event.target.value;

    setForm({
      ...form,
      location: value,
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

  console.log(form);

  const handlePlus = () => {
    setInputTime(
      <input
        type="text"
        name="time"
        onKeyPress={(event) => handleKey(event)}
        required
      />
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

    console.log(form);
    // delete form.name;
    // delete form.image;

    await setForm({
      ...form,
      time: tempTime.toString(),
    });

    const setData = {
      ...form,
      time: tempTime.toString(),
    };

    console.log(setData);

    // await dispatch(postSchedule(form));

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
    setSelectLocation();
    setSelectMovie();
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
    getDataSchedule();
  }, []);

  // useEffect(() => {
  //   getDataSchedule();
  // }, []);

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
                  <select
                    id="selectMovie"
                    className={`form-select d-grid`}
                    onChange={(event) => handleChangeMovie(event)}
                    name="movieId"
                    value={selectMovie ? selectMovie : ""}
                    required
                  >
                    <option selected disabled value="">
                      Choose movie..
                    </option>
                    {movie.data.map((item) => (
                      <option
                        key={item.id}
                        value={[item.id, item.name, item.image]}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col mb-3 ">
                  <label className="form-label">Location</label>
                  <select
                    className={`form-select d-grid`}
                    id="selectLocation"
                    name="location"
                    onChange={(event) => handleChangeLocation(event)}
                    value={selectLocation ? selectLocation : ""}
                    required
                  >
                    <option selected disabled value="">
                      Choose city
                    </option>
                    {location.map((item) => (
                      <option value={item} key={Math.random()}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-6 mb-3 ">
                  <label for="exampleInputEmail1" class="form-label">
                    Price
                  </label>
                  <input
                    required
                    type="number"
                    className="form-control"
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={(event) => handleChangeForm(event)}
                  />
                </div>
                <div className="col mb-3 ">
                  <label for="exampleInputEmail1" className="form-label">
                    Date start
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="dateStart"
                    value={form.dateStart}
                    onChange={(event) => handleChangeForm(event)}
                    required
                  />
                </div>
                <div className="col mb-3 ">
                  <label for="exampleInputEmail1" className="form-label">
                    Date end
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="dateEnd"
                    value={form.dateEnd}
                    onChange={(event) => handleChangeForm(event)}
                    required
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col mb-3">
                  <label for="exampleInputEmail1" className="form-label">
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
                      <label for="exampleInputEmail1" className="form-label">
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
                          <div
                            className="col align-text-bottom "
                            key={Math.random()}
                          >
                            {item}
                          </div>
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
              <div className="col" key={item.id}>
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
