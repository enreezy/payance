export const GET_MEMBERS = "GET_MEMBERS";

export interface Action {
  type: String;
  payload: Array<string | number | object> | String | Number;
}
