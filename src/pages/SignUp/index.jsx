import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
import Banner from "../../components/BannerLogin";

function SignUp() {
  document.title = "Tickitz | Sign Up";

  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    noTelp: "",
    email: "",
    password: "",
  });

  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  console.log(form);

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      await axios.post("auth/register", form);

      // //   output = keadaan user diinfokan kalau sudah login
      alert("Success sign up, please activate your account via email");
      navigate("/login");
    } catch (error) {
      alert(error.response.data.msg);
      setMessage(error.response.data.msg);
      setIsError(true);
    }
  };

  return (
    <>
      <div class="d-flex justify-content-between">
        <Banner />
        <form class={`${styles.form}`} onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <p class={`${styles.form__caption} mt-3 `}>
            Fill your additional details
          </p>

          <div class="me-5">
            <label
              for="inputFirstName"
              class={`${styles.form_label} form-label mt-4`}
            >
              First Name
            </label>
            <input
              name="firstName"
              type="text"
              placeholder="Write your first name"
              class={`${styles.form_control} form-control `}
              onChange={handleChangeForm}
            />
            <label
              for="inputLastName"
              class={`${styles.form_label} form-label mt-4`}
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Write your last name"
              class={`${styles.form_control} form-control `}
              onChange={handleChangeForm}
            />
            <label
              for="inputPhone"
              class={`${styles.form_label} form-label mt-4`}
            >
              Phone Number
            </label>
            <input
              type="text"
              name="noTelp"
              placeholder="Write your phone number"
              class={`${styles.form_control} form-control `}
              onChange={handleChangeForm}
            />
            <label
              for="inputEmail"
              class={`${styles.form_label} form-label mt-4`}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Write your email"
              class={`${styles.form_control} form-control `}
              onChange={handleChangeForm}
            />
            <label
              for="inputPassword"
              class={`${styles.form_label} form-label mt-4`}
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Write your password"
              class={`${styles.form_control} form-control `}
              onChange={handleChangeForm}
            />
            <div class={`${styles.d_grid} d-grid gap-2 mt-5`}>
              <button class={`${styles.btn} btn`} type="submit">
                Sign Up
              </button>
            </div>

            <p class={`${styles.form__additional} mt-4`}>
              Already have an account?
              <a href="login">Login now</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
