const counterReducers = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (state === 10) {
        return (state = 0);
      } else {
        return state + 1;
      }
    case "DECREMENT":
      if (state === 0) {
        return (state = 10);
      } else {
        return state - 1;
      }
    case "multi":
      if (state === 4294967296) {
        return (state = 2);
      } else {
        return state * state;
      }
    case "reset":
      return (state = 0);
      case "PLASE":
        return state+10
    default:
      return state;
  }
};
export default counterReducers;
