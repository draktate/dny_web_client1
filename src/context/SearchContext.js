import { createContext, useReducer } from "react";
const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
  api_redirect:"https://dlgmi4r3hb.execute-api.ap-south-1.amazonaws.com/dev/api"
};
//api_redirect:"https://dlgmi4r3hb.execute-api.ap-south-1.amazonaws.com/dev/api"

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        api_redirect:"https://dlgmi4r3hb.execute-api.ap-south-1.amazonaws.com/dev/api",
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};