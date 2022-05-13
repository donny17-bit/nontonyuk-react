import React from "react";
import styles from "./DetailCardAdmin.module.css";
import { useNavigate } from "react-router-dom";

// card for image in detail page
function DetailCardAdmin(props) {
  const { id, name, image, category } = props.data;

  const navigate = useNavigate();

  const handleButton = () => {
    localStorage.setItem("IdMovie", id);
    navigate("/details");
  };

  return (
    <div className={`card h-100 ${styles.movies_card}`}>
      <img
        src={`https://res.cloudinary.com/dusoicuhh/image/upload/v1651051633/${image}`}
        className={`${styles.card_img_top} card-img-top`}
        alt="card-img"
      />
      <div className="card-body">
        <h5 className={`${styles.card_title} card-title`}>{name}</h5>
        <p className={`${styles.card_text} card-text`}>{category}</p>
      </div>
      <div className={`${styles.card_footer}`}>
        <div className="row text-center g-2">
          <div className="col">
            <button
              onClick={handleButton}
              className={`${styles.btn1_} btn btn-outline-primary`}
            >
              Update
            </button>
          </div>
          <div className="col border">
            <button
              onClick={handleButton}
              className={`${styles.btn2_} btn btn-outline-danger`}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {/* <Link to=""></Link> */}
    </div>
  );
}

export default DetailCardAdmin;
