import React from "react";
import styles from "./Cards.module.css";

function Cards(props) {
  const { image } = props.data;

  return (
    <div className={`${styles.card_} card`}>
      <img
        src={`https://res.cloudinary.com/dusoicuhh/image/upload/v1651051633/${image}`}
        className="card-img-top"
        alt="card-img"
      />
    </div>
  );
}

export default Cards;
