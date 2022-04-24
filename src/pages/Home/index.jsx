import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

function Home() {
  console.log(Header);
  return (
    <>
      <Header />

      <Footer />
    </>
  );
}

export default Home;
