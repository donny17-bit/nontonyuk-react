const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  pageInfo: {},
  msg: "",

  // name: "",
  // category: "",
  // director: "",
  // cast: "",
  // releaseDate: "",
  // duration: "",
  // synopsis: "",
  // image: null,
};

const manageMovie = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "GET_MOVIE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.msg,
      };
    }
    case "GET_MOVIE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data.msg,
      };
    }
    // case "RESET": {
    //   return {
    //     ...state,
    //   };
    // }

    // case "SUBMIT": {
    //   return {
    //     ...state,
    //   };
    // }

    default: {
      return state;
    }
  }
};

export default manageMovie;
