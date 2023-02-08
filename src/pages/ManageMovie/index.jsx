import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import {
  Link,
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
import Header from "../../components/Header/index";
import HeaderAdmin from "../../components/HeaderAdmin/index";
import Footer from "../../components/Footer/index";
import styles from "./ManageMovie.module.css";
import Cards from "../../components/Cards/index";
import Cards2 from "../../components/Cards2/index";
import DetailCardAdmin from "../../components/DetailCardAdmin/index";
import Pagination from "react-paginate";

// - update harus semua form di isi, kalau input gambar kosong msh error

import { useSelector, useDispatch } from "react-redux";
import {
  getMovie,
  postMovie,
  updateMovie,
  deleteMovie,
} from "../../stores/actions/manageMovie.js";

function ManageMovie() {
  document.title = "Tickitz | Manage Movie";
  let dataUser = localStorage.getItem("dataUser");
  dataUser = JSON.parse(dataUser);

  const [form, setForm] = useState({
    name: "",
    category: "",
    image: null,
    releaseDate: "",
    director: "",
    cast: "",
    duration: "",
    synopsis: "",
  });

  const navigate = useNavigate();
  // for searcing
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  let limit = 0;
  // const [page, setPage] = useState(params.page ? params.page : "1");
  const [image, setImage] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  const [idMovie, setIdMovie] = useState("");
  const [page, setPage] = useState(params.page ? params.page : "1");
  const [sort, setSort] = useState(params.sort ? params.sort : "ascending");
  const [isUpdated, setIsUpdated] = useState(
    params.isUpdate ? params.isUpdate : "false"
  );

  const [searchMovie, setSearchMovie] = useState(
    params.searchMovie ? params.searchMovie : null
  );
  const [releaseDate, setReleaseDate] = useState(
    params.releaseDate ? params.releaseDate : null
  );
  // const [pageInfo, setPageInfo] = useState({});
  // const [data, setData] = useState([]);

  const [duration1, setDuration1] = useState({
    durationHour: "",
    durationMinute: "",
  });

  const manageMovie = useSelector((state) => state.manageMovie);
  const dispatch = useDispatch();

  console.log(manageMovie.pageInfo.totalPage);

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
        duration: `${duration1.durationHour}H ${duration1.durationMinute}M`,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (const dataForm in form) {
      formData.append(dataForm, form[dataForm]);
    }

    // untuk mengecek data di formData
    // for (const data of formData.entries()) {
    //   console.log(data[0] + ", " + data[1]);
    //   // name, "Bagus"
    // }

    await dispatch(postMovie(formData));
    setIsUpdated("true");
    // getdataMovie();
    resetForm();
    setImage(null);

    // //   output = keadaan user diinfokan kalau sudah login
    alert("Success post movie");
  };

  const setUpdate = (data) => {
    const {
      id,
      name,
      category,
      image,
      releaseDate,
      director,
      cast,
      duration,
      synopsis,
    } = data;
    // const image1 = image.split("/");

    setForm({
      ...form,
      name,
      category,
      // image: image1[2],
      image,
      releaseDate: releaseDate.substring(0, 10),
      director,
      cast,
      duration,
      synopsis,
    });

    const duration2 = duration.split(" ");
    setDuration1({ durationHour: duration2[0], durationMinute: duration2[1] });
    setIsUpdate(true);
    setIdMovie(id);
  };

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    // console.log(typeof form.image == "object");
    if (typeof form.image == "object") {
      console.log(true);
      const formData = new FormData();
      for (const dataForm in form) {
        formData.append(dataForm, form[dataForm]);
      }

      await dispatch(updateMovie(idMovie, formData));
    } else {
      console.log(false);
      console.log(form);
      await dispatch(updateMovie(idMovie, form));
    }

    // await dispatch(updateMovie(idMovie, form));
    setIsUpdate(false);
    resetForm();
    setImage(null);
    getdataMovie();
    alert("Success update movie");
  };

  const setDelete = (id) => {
    console.log(id);
  };

  const handleDelete = async (data) => {
    // event.preventDefault();
    console.log(data);
    await dispatch(deleteMovie(data.id));
    getdataMovie();
    alert("Success delete movie");
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

  const handleSortMonth = (item) => {
    setReleaseDate(item.number);
  };

  const handleSearchMovie = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
      setSearchMovie(event.target.value);
      // setSort()
    }
  };

  const handlePagination = (data) => {
    setPage(data.selected + 1);
  };

  const getdataMovie = async () => {
    // PANGGIL ACTION
    limit = 12;
    await dispatch(getMovie(page, limit, isUpdated));
  };

  useEffect(() => {
    getdataMovie();
  }, []);

  useEffect(() => {
    getdataMovie();
    if (page !== "1") {
      params.page = page;
    }
    if (page === manageMovie.pageInfo.totalPage) {
      setIsUpdated("false");
      params.isUpdate = "false";
    }
    if (releaseDate) {
      params.releaseDate = releaseDate;
    }
    if (searchMovie) {
      console.log(searchMovie);
      params.searchName = searchMovie;
    }
    if (sort) {
      params.sort = sort;
    }
    if (isUpdated === "true") {
      params.isUpdate = isUpdated;
    } else {
      params.isUpdate = isUpdated;
    }
    navigate({
      pathname: "/manage-movie",
      search: `?${createSearchParams(params)}`,
    });
  }, [page, releaseDate, sort, searchMovie, isUpdated]);

  return (
    <>
      {dataUser.role == "admin" ? <HeaderAdmin /> : <Header />}
      <section className={`${styles.upcoming__movies}`}>
        <div className="d-flex justify-content-between">
          <label className={styles.upcoming__movies_title}>Form Movie</label>
        </div>

        <form
          className={`${styles.upcoming__movies_card_container} pb-5 mt-3`}
          onSubmit={isUpdate ? handleUpdate : handleSubmit}
        >
          <div className="row">
            <div className="col-3">
              {/* belum pakai redux */}
              {image ? <Cards2 data={{ image }} /> : <Cards data={form} />}
              {/* {isUpdate ? <Cards data={form} /> : <Cards2 data={{ image }} />} */}
              {/* {image && <img src={image} alt="card-img" />} */}
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
                    value={form.name}
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
                    value={form.category}
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
                    value={form.director}
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
                    value={form.cast}
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
                    value={form.releaseDate}
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
                    value={duration1.durationHour}
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
                    value={duration1.durationMinute}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label for="exampleInputEmail1" class="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    class="form-control"
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
                value={form.synopsis}
              />
            </div>
          </div>
          <div className="row justify-content-end mt-2">
            <div className="d-grid col-2">
              <button
                className="btn btn-outline-primary"
                type="reset"
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
        <div className="mt-5">
          <div className="row ">
            <div className="col-7 ">
              <label className={styles.upcoming__movies_title}>
                Data Movie
              </label>
            </div>
            <div className="col-3 text-end">
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
            <div className="col-2">
              <input
                type="text"
                className="form-control"
                placeholder="search movie name..."
                name="searchMovie"
                onKeyPress={(event) => handleSearchMovie(event)}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.upcoming__movies_card_container} pb-5 mt-3`}>
          <div className="row mt-4 row-cols-4 g-4">
            {manageMovie.data.map((item) => (
              <div className={`col`} key={item.id}>
                <DetailCardAdmin
                  data={item}
                  setUpdate={setUpdate}
                  setDelete={setDelete}
                  handleDelete={handleDelete}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={`d-flex justify-content-center`}>
          <Pagination
            className={`${styles.pagination_}`}
            pageClassName={`pt-3`}
            pageLinkClassName={`${styles.pagination__link_page} p-3`}
            activeClassName={`${styles.pagination__active} rounded`}
            activeLinkClassName={`${styles.pagination__link_active}`}
            previousClassName={`${styles.pagination__nextprev} pt-3 pb-3`}
            nextClassName={`${styles.pagination__nextprev} pt-3 pb-3`}
            previousLinkClassName={`${styles.pagination__nextprev} p-3`}
            nextLinkClassName={`${styles.pagination__nextprev} p-3`}
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"p-3"}
            pageCount={manageMovie.pageInfo.totalPage}
            onPageChange={handlePagination}
            initialPage={page - 1}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ManageMovie;
