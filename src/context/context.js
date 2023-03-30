import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer/reducer";
const AppContext = React.createContext();

const initialState = {
  selected: 0,
  linedata: [],
  recentorders: [],
  customer: [],
  income: "1255",
  loading: true,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: "LOADING", payload: true });
    const res = await axios.get(`http://localhost:3001/ordrioDashAPi`);

    if (res.data) {
      dispatch({ type: "DATA", payload: res.data });
      dispatch({ type: "LOADING", payload: false });
    } else {
      dispatch({ type: "ERROR", payload: true });
    }
  };

  useEffect(() => {
    fetchData();
  }, [state.selected]);

  const handleSelected = (index) => {
    dispatch({ type: "SELECTED", payload: index });
  };

  return (
    <AppContext.Provider value={{ ...state, handleSelected }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalData = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
