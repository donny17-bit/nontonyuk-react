import React from "react";
import styles from "./DetailCard.module.css";

function DetailCard(props) {
  //   const { image } = props.data;

  return (
    <div className={`card h-100 ${styles.upcoming__movies_card}`}>
      <img
        src="assets/img/home/Rectangle 139-2.png"
        className={`${styles.card_img_top} card-img-top`}
        alt="card-img"
      />
      <div className="card-body">
        <h5 className={`${styles.card_title} card-title`}>The Witches</h5>
        <p className={`${styles.card_text} card-text`}>
          Adventure, Comedy, Family
        </p>
      </div>
      <div className={`${styles.card_footer} card-footer`}>
        <a href="#" className={`${styles.btn_} btn btn-outline-primary`}>
          Details
        </a>
      </div>
    </div>
  );
}

export default DetailCard;
