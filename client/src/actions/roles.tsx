import axios from "axios";
import { Dispatch } from "redux";
import { Action, GET_ROLE } from "./types";

export const getRoles = () => (dispatch: Dispatch<Action>) => {
  axios.get(`${process.env.SERVER_API}/admin/v1/roles`).then((res) =>
    dispatch({
      type: GET_ROLE,
      payload: res.data,
    })
  );
};
