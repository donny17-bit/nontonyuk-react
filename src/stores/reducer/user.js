const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  pageInfo: {},
  msg: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "GET_USER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.msg,
      };
    }
    case "GET_USER_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data.msg,
      };
    }

    //   case "POST_SCHEDULE_PENDING": {
    //     return {
    //       ...state,
    //       isLoading: true,
    //       isError: false,
    //     };
    //   }

    //   case "POST_SCHEDULE_FULFILLED": {
    //     return {
    //       ...state,
    //       isLoading: false,
    //       isError: false,
    //       msg: action.payload.data.msg,
    //     };
    //   }

    //   case "POST_SCHEDULE_REJECTED": {
    //     return {
    //       ...state,
    //       isLoading: false,
    //       isError: true,
    //       msg: action.payload.response.data.msg,
    //     };
    //   }

    //   case "UPDATE_SCHEDULE_PENDING": {
    //     return {
    //       ...state,
    //       isLoading: true,
    //       isError: false,
    //     };
    //   }

    //   case "UPDATE_SCHEDULE_FULFILLED": {
    //     return {
    //       ...state,
    //       isLoading: false,
    //       isError: false,
    //       msg: action.payload.data.msg,
    //     };
    //   }

    //   case "UPDATE_SCHEDULE_REJECTED": {
    //     return {
    //       ...state,
    //       isLoading: false,
    //       isError: true,
    //       msg: action.payload.response.data.msg,
    //     };
    //   }

    //   case "DELETE_SCHEDULE_PENDING": {
    //     return {
    //       ...state,
    //       isLoading: true,
    //       isError: false,
    //     };
    //   }

    //   case "DELETE_SCHEDULE_FULFILLED": {
    //     return {
    //       ...state,
    //       isLoading: false,
    //       isError: false,
    //       msg: action.payload.data.msg,
    //     };
    //   }

    //   case "DELETE_SCHEDULE_REJECTED": {
    //     return {
    //       ...state,
    //       isLoading: false,
    //       isError: true,
    //       msg: action.payload.response.data.msg,
    //     };
    //   }

    default: {
      return state;
    }
  }
};

export default user;
