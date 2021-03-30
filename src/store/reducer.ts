const initialState = {
  name: "Alex",
  age: "25",
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TEST":
      return {
        ...state,
        test: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
