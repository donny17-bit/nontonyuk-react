import styles from "./OrderCard.module.css";

export default function OrderCard(props) {
  const { name, timeBooking, premiere, price, dateBooking } = props.data[0];
  const [...selectedSeat] = props.data[1];

  let image;
  if (premiere === "cineone21") {
    image = "/assets/img/card/CineOne21.png";
  } else if (premiere === "ebv.id") {
    image = "/assets/img/card/ebv.id.png";
  } else {
    image = "/assets/img/card/hiflix.png";
  }

  return (
    <div class={`${styles.order__info_form} text-center form border mt-3`}>
      <img
        src={image}
        alt="logo_cinema"
        className={`${styles.order__info_logo}`}
      />
      <h3 className={`${styles.order__info_form_title} mt-3 mb-5`}>
        {`${premiere} Cinema`}
      </h3>
      <div class={` d-flex justify-content-between`}>
        <p class={styles.order__info_data1}>Movie selected</p>
        <p class={styles.order__info_data2}>{name}</p>
      </div>
      <div class={` d-flex justify-content-between`}>
        <p class={styles.order__info_data1}>{`${dateBooking}`}</p>
        <p class={styles.order__info_data2}>{timeBooking}</p>
      </div>
      <div class={` d-flex justify-content-between`}>
        <p class={styles.order__info_data1}>One ticket price</p>
        <p class={styles.order__info_data2}>{`Rp ${price}`}</p>
      </div>
      <div class={` d-flex justify-content-between`}>
        <p class={styles.order__info_data1}>Seat choosed</p>
        <p class={styles.order__info_data2}>{selectedSeat.toString()}</p>
      </div>
      <div class={` mt-3 pt-4 d-flex border-top justify-content-between`}>
        <p class={styles.order__info_total1}>Total Payment</p>
        <p class={styles.order__info_total2}>
          Rp {selectedSeat.length * price}
        </p>
      </div>
    </div>
  );
}
