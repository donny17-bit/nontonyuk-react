import React, { useState } from "react";
import axios from "../../../utils/axios";
import { useNavigate } from "react-router-dom";

// frontend
// 1.slicing
// 2.pembuatan fungsi
// 3.integrasi
// 3.a input
// 3.b process
// 3.c output

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeForm = (event) => {
    // console.log("User sedang mengetik");
    // console.log(event.target.name);
    // console.log(event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const resultLogin = await axios.post("auth/login", form);
      //   proses get data user by id
      //   const resultUser = await axios.get(`user/${resultLogin.data.data.id}`);
      const resultUser = [
        {
          id: 1,
          name: "Bagus",
        },
      ];

      //   output = keadaan user diinfokan kalau sudah login
      setIsError(false);
      setMessage(resultLogin.data.msg);

      localStorage.setItem("token", resultLogin.data.data.token);
      localStorage.setItem("refreshToken", resultLogin.data.data.refreshToken);
      localStorage.setItem("dataUser", JSON.stringify(resultUser));

      //   UNTUK GET DATA USER
      //   const dataUser = JSON.parse(localStorage.getItem(dataUser));

      navigate("/basic/home");
      //   console.log(resultLogin);
    } catch (error) {
      console.log(error.response.data.msg);
      setMessage(error.response.data.msg);
      setIsError(true);
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    console.log("Reset Form");
  };

  return (
    <div className="text-center container">
      <h1>Login Page</h1>
      {/* {isError && (
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      )} */}
      {!message ? null : isError ? (
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      ) : (
        <div className="alert alert-primary" role="alert">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type="email"
          placeholder="Input email"
          name="email"
          onChange={handleChangeForm}
        />
        <br />
        <input
          type="password"
          placeholder="Input Password"
          name="password"
          onChange={handleChangeForm}
        />
        <br />
        <button className="btn btn-outline-primary" type="reset">
          Reset
        </button>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
