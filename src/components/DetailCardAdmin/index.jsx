import React from "react";
import styles from "./DetailCardAdmin.module.css";
import { useNavigate } from "react-router-dom";

// card for image in detail page
function DetailCardAdmin(props) {
  const { id, name, image, category } = props.data;

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
              onClick={() => props.setUpdate(props.data)}
              className={`${styles.btn1_} btn btn-outline-primary`}
            >
              Update
            </button>
          </div>
          <div className="col">
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className={`${styles.btn2_} btn btn-outline-danger`}
            >
              Delete
            </button>
            {/* <!-- Modal --> */}
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Are you sure want to delete this movie?
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    By deleting this movie you agree with the further risk
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      // onClick={() => props.handleDelete(id)}
                      onClick={() => props.setDelete(id)}
                    >
                      Yes, I know
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Link to=""></Link> */}
    </div>
  );
}

export default DetailCardAdmin;
