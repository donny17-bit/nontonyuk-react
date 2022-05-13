import React from "react";
import styles from "./Cards2.module.css";

// card for manage movie page, image from local storage
function CardAdmin(props) {
  const { image } = props.data;

  return (
    <div className={`${styles.card_} card`}>
      <img
        src={
          image
            ? image
            : `https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg`
        }
        className="card-img-top"
        alt="card-img"
      />
    </div>
  );
}

export default CardAdmin;
