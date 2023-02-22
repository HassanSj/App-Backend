//in that reducer file define the inner functionality what is the next state of application
// it is more similar to usereducer functions that are declared in Test/.js file

import { ActionTypes } from "../Constants/ActionTypes";

const firststate = {
  data: [],
};

export const detailreducer = (state = firststate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_NAME:
      return { ...state, data: payload };

    default:
      return state;
  }
};
