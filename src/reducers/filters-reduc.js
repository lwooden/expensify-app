import moment from "moment";

// Filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"), // set display expenses within the current month by default
  endDate: moment().endOf("month")
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SET_BY_START":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_BY_END":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

export default filtersReducer;
