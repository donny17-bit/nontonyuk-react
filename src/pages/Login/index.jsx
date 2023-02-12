import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import Banner from "../../components/BannerLogin";

function Login() {
  document.title = "Tickitz | Login";

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const [isLoading, setIsLoading] = useState(false);

  // const [message, setMessage] = useState("");
  // const [isError, setIsError] = useState(false);

  const loading = (
    <>
      <span className="spinner-grow spinner-grow-sm" role="status"></span>
      Loading...
    </>
  );

  const disableBtn = () => {
    setIsLoading(true);
    const button = document.getElementById("button-submit");
    button.disabled = true;
  };

  const failNotif = (notif) => {
    const text = document.getElementById("notif");
    text.textContent = notif;
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      disableBtn();
      const resultLogin = await axios.post("auth/login", form);
      //   proses get data user by id

      localStorage.setItem("token", resultLogin.data.data.token);
      localStorage.setItem("refreshToken", resultLogin.data.data.refreshToken);

      const resultUser = await axios.get(`user/${resultLogin.data.data.id}`, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      //   output = keadaan user diinfokan kalau sudah login
      // alert("Success Login");
      // setIsError(false);
      // setMessage(resultLogin.data.msg);

      localStorage.setItem("dataUser", JSON.stringify(resultUser.data.data[0]));

      //   UNTUK GET DATA USER
      //   const dataUser = JSON.parse(localStorage.getItem(dataUser));

      navigate("/home");
    } catch (error) {
      failNotif(error.response.data.msg);
      // setMessage(error.response.data[0].msg);
      // setIsError(true);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <Banner />
        <form className={`${styles.form}`} onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <p className={`${styles.form__caption} mt-3 pe-5`}>
            Sign in with your data that you entered during your registration
          </p>

          <div className="me-5">
            <label
              for="inputEmail"
              className={`${styles.form_label} form-label mt-4`}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Write your email"
              className={`${styles.form_control} form-control `}
              onChange={handleChangeForm}
              required
            />
            <label
              for="inputPassword"
              className={`${styles.form_label} form-label mt-4`}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Write your password"
              className={`${styles.form_control} form-control `}
              onChange={handleChangeForm}
              required
            />
            <br />
            <p className={`${styles.notif__login} text-center`} id="notif"></p>
            <div className={`${styles.d_grid} d-grid gap-2 mt-5`}>
              <button
                className={`${styles.btn_} btn`}
                type="submit"
                id="button-submit"
              >
                {isLoading ? loading : "Sign In"}
              </button>
            </div>
            <p className={`${styles.form__additional} mt-4`}>
              Forgot your password?
              <a href="#">Reset now</a>
            </p>

            <p className={styles.form__additional}>
              Don't have an account?
              <a href="sign-up">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
