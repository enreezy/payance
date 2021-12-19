import { combineReducers } from "redux";
import memberReducer from "./memberReducer";

const allReducers = combineReducers({
  member: memberReducer,
});

export default allReducers;

export type RootState = ReturnType<typeof allReducers>;
