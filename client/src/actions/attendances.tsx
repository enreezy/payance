import axios from "axios";
import { Dispatch } from "redux";
import { Action, GET_ATTENDANCES } from "./types";

export const getAttendances = () => (dispatch: Dispatch<Action>) => {
  axios.get(`${process.env.SERVER_API}/admin/v1/attendances`).then((res) =>
    dispatch({
      type: GET_ATTENDANCES,
      payload: res.data,
    })
  );
};
