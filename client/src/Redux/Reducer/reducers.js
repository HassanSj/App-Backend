import { combineReducers } from "redux";
import { detailreducer } from "./detailreducer";

const reducers = combineReducers({
  biodata: detailreducer, //that object can have any name no hard and fast rule
});

export default reducers;
