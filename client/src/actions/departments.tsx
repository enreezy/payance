import axios from "axios";
import { Dispatch } from "redux";
import { Action, GET_DEPARTMENT } from "./types";

export const getDepartments = () => (dispatch: Dispatch<Action>) => {
  axios.get(`${process.env.SERVER_API}/admin/v1/departments`).then((res) =>
    dispatch({
      type: GET_DEPARTMENT,
      payload: res.data,
    })
  );
};
