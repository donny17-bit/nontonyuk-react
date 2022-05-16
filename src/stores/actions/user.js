import axios from "../../utils/axios";

export const getUser = (id) => {
  return {
    type: "GET_USER",
    payload: axios.get(`user/${id}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    }),
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
