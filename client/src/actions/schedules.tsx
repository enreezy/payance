import axios from "axios";
import { Dispatch } from "redux";
import { Action, GET_SCHEDULE } from "./types";

export const getSchedules = () => (dispatch: Dispatch<Action>) => {
  axios.get(`${process.env.SERVER_API}/admin/v1/schedules`).then((res) =>
    dispatch({
      type: GET_SCHEDULE,
      payload: res.data,
    })
  );
};
