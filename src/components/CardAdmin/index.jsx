import React from "react";
import styles from "./Cards.module.css";

// card for now showing in home page
function Cards(props) {
  const { image } = props.data;

  return (
    <div className={`${styles.card_} card`}>
      <img
        src={
          image
            ? `https://res.cloudinary.com/dusoicuhh/image/upload/v1651051633/${image}`
            : `https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg`
        }
        className="card-img-top"
        alt="card-img"
      />
    </div>
  );
}

export default Cards;
