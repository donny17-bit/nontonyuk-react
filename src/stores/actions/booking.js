import axios from "../../utils/axios";

export const dataTempBooking = (data) => {
  return {
    type: "TEMP_BOOKING",
    payload: data,
    // limit kalau blkngnya 0 tdk terbaca, exm 10 dibaca 1 (-)
    //     payload: axios.get(`schedule?limit=${limit}&page=${page}&`, {
    //       headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    //     }),
  };
};

export const getBooking = () => {
  return {
    type: "GET_BOOKING",
    // limit kalau blkngnya 0 tdk terbaca, exm 10 dibaca 1 (-)
    //     payload: axios.get(`schedule?limit=${limit}&page=${page}&`, {
    //       headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    //     }),
  };
};

// export const postSchedule = (form) => {
//   return {
//     type: "POST_SCHEDULE",
//     payload: axios.post("schedule", form, {
//       headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
//     }),
//   };
// };

// export const updateSchedule = (id, form) => {
//   return {
//     type: "UPDATE_SCHEDULE",
//     payload: axios.patch(`schedule/${id}`, form, {
//       headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
//     }),
//   };
// };

// export const deleteSchedule = (id) => {
//   return {
//     type: "DELETE_SCHEDULE",
//     payload: axios.delete(`schedule/${id}`, {
//       headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
//     }),
//   };
// };
