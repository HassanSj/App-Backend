import { ActionTypes } from "../Constants/ActionTypes";

export const fetchnames = (data) => {
  return {
    type: ActionTypes.SET_NAME,
    payload: data,
  };
};

export const changenames = (data) => {
  return {
    type: ActionTypes.SET_FATHER_NAME,
    payload: data,
  };
};
