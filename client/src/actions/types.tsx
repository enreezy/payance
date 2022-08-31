export const GET_MEMBERS = "GET_MEMBERS";
export const ADD_MEMBERS = "ADD_MEMBERS";
export const FIND_MEMBER = "FIND_MEMBER";
export const GET_ATTENDANCES = "GET_ATTENDANCES";
export const GET_SCHEDULE = "GET_SCHEDULE";
export const GET_DEPARTMENT = "GET_DEPARTMENT";
export const GET_ROLE = "GET_ROLE";

export interface Action {
  type: String;
  payload: Array<string | number | object> | String | Number;
}
