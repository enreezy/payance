import axios from "axios";
import { Dispatch } from "redux";
import { Action, GET_MEMBERS } from "./types";

export const getMembers = () => (dispatch: Dispatch<Action>) => {
  axios.get(`${process.env.SERVER_API}/admin/v1/members`).then((res) =>
    dispatch({
      type: GET_MEMBERS,
      payload: res.data,
    })
  );
};
