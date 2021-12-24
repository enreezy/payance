import { combineReducers } from "redux";
import attendanceReducer from "./attendanceReducer";
import departmentReducer from "./departmentReducer";
import memberReducer from "./memberReducer";
import roleReducer from "./roleReducer";
import scheduleReducer from "./scheduleReducer";

const allReducers = combineReducers({
  member: memberReducer,
  attendance: attendanceReducer,
  schedule: scheduleReducer,
  department: departmentReducer,
  role: roleReducer,
});

export default allReducers;

export type RootState = ReturnType<typeof allReducers>;
