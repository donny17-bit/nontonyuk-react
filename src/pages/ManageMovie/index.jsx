import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../components/Header/index";
import HeaderSignedIn from "../../components/HeaderSignedIn/index";
import Footer from "../../components/Footer/index";
import styles from "./ManageMovie.module.css";
import Cards from "../../components/Cards/index";
import Cards2 from "../../components/Cards2/index";
import DetailCardAdmin from "../../components/DetailCardAdmin/index";

import { useSelector, useDispatch } from "react-redux";
import { getMovie, postMovie } from "../../stores/actions/manageMovie.js";

function ManageMovie() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    director: "",
    cast: "",
    releaseDate: "",
    duration: "",
    synopsis: "",
    image: null,
  });

  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  const limit = 6;
  const [page, setPage] = useState(params.page ? params.page : "1");
  const [image, setImage] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  const [pageInfo, setPageInfo] = useState({});
  const [data, setData] = useState([]);

  const [duration1, setDuration1] = useState({
    durationHour: "",
    durationMinute: "",
  });

  const manageMovie = useSelector((state) => state.manageMovie);
  const dispatch = useDispatch();

  const getdataMovie = async () => {
    try {
      // PANGGIL ACTION
      const resultMovie = await dispatch(getMovie(page, limit));

      setData(resultMovie.value.data.data);
      setPageInfo(resultMovie.value.data.pagination);
      console.log(resultMovie);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleChangeDuration = (event) => {
    // msh bug kelebihan 1 angka
    const { name, value } = event.target;
    setDuration1({ ...duration1, [name]: value });

    // handleChangeForm(event);
    // setForm({
    //   ...form,
    //   duration: `${duration1.durationHour}H ${duration1.durationMinute}`,
    // });
  };

  const handleChangeForm = (event) => {
    const { name, value, files } = event.target;
    if (name == "image") {
      setForm({ ...form, [name]: files[0] });
      setImage(URL.createObjectURL(files[0]));
    } else {
      setForm({
        ...form,
        duration: `${duration1.durationHour}Hour(s) ${duration1.durationMinute}Minute(s)`,
        [name]: value,
      });
    }
  };
  console.log(form);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // console.log(form);
      const formData = new FormData();
      for (const data in form) {
        formData.append(data, form[data]);
      }

      // untuk mengecek data di formData
      for (const data of formData.entries()) {
        console.log(data[0] + ", " + data[1]);
        // name, "Bagus"
      }
      dispatch(postMovie(formData));
      getdataMovie();
      // setImage(null);
      resetForm();
      setImage(null);

      // const resultMovie = await dispatch(postMovie(form));

      // await axios.post("auth/register", form);
      // console.log(form);
      // console.log(resultMovie);
      // //   output = keadaan user diinfokan kalau sudah login
      alert("Success post movie");
      // navigate("/login");
    } catch (error) {
      alert(error.response.data.msg);
      // setMessage(error.response.data.msg);
      // setIsError(true);
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      category: "",
      director: "",
      cast: "",
      releaseDate: "",
      duration: "",
      synopsis: "",
      image: null,
    });
  };

  //without redux
  const dataDetail = {
    image: "nontonYuk/movies/z4c88xkk5jnjajwgrlxb.png",
    category: "family, gore",
    name: "LUCA",
    releaseDate: "20-11-2022",
    director: "graham bell",
    duration: "2h 30m",
    cast: "graham bell, lucas graham",
    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor inventore fugiat sint? Recusandae vero esse architecto deserunt officia non numquam, quibusdam, quia qui ex quisquam culpa ratione eius quae dolor.",
  };

  // With redux
  // const manageMovie = useSelector((state) => state.manageMovie);
  // const dispatch = useDispatch();

  useEffect(() => {
    getdataMovie();
  }, []);

  return (
    <>
      {/* harus sudah sign in dlu headernya */}
      {localStorage.getItem("token") ? <HeaderSignedIn /> : <Header />}
      <section className={`${styles.upcoming__movies}`}>
        <div className="d-flex justify-content-between">
          <label className={styles.upcoming__movies_title}>Form Movie</label>
        </div>

        <form
          className={`${styles.upcoming__movies_card_container} pb-5 mt-3`}
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-3">
              {/* belum pakai redux */}
              {isUpdate ? <Cards data={form} /> : <Cards2 data={{ image }} />}
              {/* {isUpdate ? <Cards data={form} /> : <Cards data={image}
              } */}
              {/* {image && <img src={image} alt="Image Movie Preview" />} */}
              {/* <Cards data={form} /> */}
            </div>
            <div className="col">
              <div className="row">
                <div className="col mb-3 ">
                  <label className="form-label">Movie Name</label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    onChange={(event) => handleChangeForm(event)}
                    placeholder="Enter movie name here"
                  />
                </div>
                <div className="col mb-3 ">
                  <label for="exampleInputEmail1" class="form-label">
                    Category
                  </label>
                  <input
                    name="category"
                    type="text"
                    class="form-control"
                    onChange={(event) => handleChangeForm(event)}
                    placeholder="Movie category"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col mb-3 ">
                  <label for="exampleInputEmail1" class="form-label">
                    Director
                  </label>
                  <input
                    name="director"
                    type="text"
                    class="form-control"
                    onChange={(event) => handleChangeForm(event)}
                    placeholder="Directed by.."
                  />
                </div>
                <div className="col mb-3 ">
                  <label for="exampleInputEmail1" class="form-label">
                    Cast
                  </label>
                  <input
                    name="cast"
                    type="text"
                    class="form-control"
                    onChange={(event) => handleChangeForm(event)}
                    placeholder="Casting"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6 mb-3 ">
                  <label for="exampleInputEmail1" class="form-label">
                    Release Date
                  </label>
                  <input
                    name="releaseDate"
                    type="date"
                    class="form-control"
                    onChange={(event) => handleChangeForm(event)}
                    placeholder="Release date"
                  />
                </div>
                <div className="col mb-3 ">
                  <label for="exampleInputEmail1" class="form-label">
                    Duration Hour
                  </label>
                  <input
                    name="durationHour"
                    type="text"
                    class="form-control"
                    onChange={(event) => handleChangeDuration(event)}
                    // onChange={(event) => handleChangeForm(event)}
                    placeholder="Duration"
                  />
                </div>
                <div className="col mb-3 ">
                  <label for="exampleInputEmail1" class="form-label">
                    Duration Minute
                  </label>
                  <input
                    name="durationMinute"
                    type="text"
                    class="form-control"
                    onChange={(event) => handleChangeDuration(event)}
                    // onChange={(event) => handleChangeForm(event)}
                    placeholder="Duration"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <input
                    type="file"
                    name="image"
                    onChange={(event) => handleChangeForm(event)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col mb-3 ">
              <label className="form-label">Synopsis</label>
              <input
                name="synopsis"
                type="text"
                class="form-control"
                onChange={(event) => handleChangeForm(event)}
                placeholder="Enter movie name here"
              />
            </div>
          </div>
          <div className="row justify-content-end mt-2">
            <div className="d-grid col-2">
              <button className="btn btn-outline-primary">Reset</button>
            </div>
            <div className="d-grid col-2">
              <button className="btn btn-outline-primary" type="submit">
                Submit
              </button>
            </div>
          </div>

          {/* <div className={`${styles.upcoming__movies_card_row} row-cols-4`}>
            {dataRelease.map((item) => (
              <div
                className={`${styles.upcoming__movies_card_col}`}
                key={item.id}
              >
                {<DetailCard data={item} />}
              </div>
            ))}
          </div> */}
        </form>

        <div className="d-flex justify-content-between mt-5">
          <label className={styles.upcoming__movies_title}>Data Movie</label>
        </div>
        <div className={`${styles.upcoming__movies_card_container} pb-5 mt-3`}>
          <div className="row border mt-4 row-cols-4 g-4">
            {data.map((item) => (
              <div
                className={`${styles.now__showing_card_col} col`}
                key={item.id}
              >
                <DetailCardAdmin data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ManageMovie;
