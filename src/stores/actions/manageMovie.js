import axios from "../../utils/axios";

export const getMovie = (page, limit) => {
  return {
    type: "GET_MOVIE",
    payload: axios.get(`movie?limit=${limit}&page=${page}&`, {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    }),
  };
};

export const postMovie = (form) => {
  return {
    type: "POST_MOVIE",
    payload: axios.post("movie", form, {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    }),
  };
};

export const updateMovie = (id, form) => {
  return {
    type: "UPDATE_MOVIE",
    payload: axios.patch(`movie/${id}`, form, {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    }),
  };
};

export const deleteMovie = (id) => {
  return {
    type: "DELETE_MOVIE",
    payload: axios.delete(`movie/${id}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    }),
  };
};
