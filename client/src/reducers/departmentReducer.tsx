import { Action, GET_DEPARTMENT } from "../actions/types";

const initialState = {
  departments: [],
  loading: false,
};

export default function (state: any = initialState, action: Action) {
  switch (action.type) {
    case GET_DEPARTMENT:
      return {
        ...state,
        departments: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
