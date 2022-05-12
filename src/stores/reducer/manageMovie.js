const initialState = {
  name: "",
  category: "",
  director: "",
  cast: "",
  releaseDate: "",
  duration: "",
  synopsis: "",
  image: null,
};

const manageMovie = (state = initialState, action) => {
  switch (action.type) {
    case "RESET": {
      console.log("RESET SUKSES");
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

export default manageMovie;
