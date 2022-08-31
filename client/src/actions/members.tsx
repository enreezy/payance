import axios from "axios";
import { Dispatch } from "redux";
import { Action, GET_MEMBERS, ADD_MEMBERS, FIND_MEMBER } from "./types";

export const getMembers = () => (dispatch: Dispatch<Action>) => {
  axios.get(`${process.env.SERVER_API}/admin/v1/members`).then((res) =>
    dispatch({
      type: GET_MEMBERS,
      payload: res.data,
    })
  );
};

export const addMember = (data: any) => (dispatch: Dispatch<Action>) => {
  axios.post(`${process.env.SERVER_API}/admin/v1/members`, data).then((res) =>
    dispatch({
      type: ADD_MEMBERS,
      payload: res.data,
    })
  );
};

export const getMemberById = (id: any) => (dispatch: Dispatch<Action>) => {
  axios.get(`${process.env.SERVER_API}/admin/v1/members/${id}`).then((res) =>
    dispatch({
      type: FIND_MEMBER,
      payload: res.data,
    })
  );
};
