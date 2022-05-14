const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  pageInfo: {},
  msg: "",
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

    case "POST_MOVIE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case "POST_MOVIE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }

    case "POST_MOVIE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };
    }

    case "UPDATE_MOVIE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case "UPDATE_MOVIE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        // msg: action.payload.data.msg,
      };
    }

    case "UPDATE_MOVIE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        // msg: action.payload.response.data.msg,
      };
    }

    default: {
      return state;
    }
  }
};

export default manageMovie;
