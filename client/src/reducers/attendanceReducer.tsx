import { Action, GET_ATTENDANCES } from "../actions/types";

const initialState = {
  attendances: [],
  loading: false,
};

export default function (state: any = initialState, action: Action) {
  switch (action.type) {
    case GET_ATTENDANCES:
      return {
        ...state,
        attendances: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
