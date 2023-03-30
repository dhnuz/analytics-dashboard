const reducer = (state, action) => {
  switch (action.type) {
    case "DATA":
      const lineData = action.payload[state.selected].linedata[0];
      const orders = action.payload[state.selected].orders;

      const customerinfo = action.payload[state.selected].customerDevice;
      return {
        ...state,
        linedata: lineData,
        recentorders: orders,
        customer: customerinfo,
      };
    case "SELECTED":
      return { ...state, selected: action.payload };

    case "LOADING":
      return { ...state, loading: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    default:
      throw new Error();
  }
};

export default reducer;
