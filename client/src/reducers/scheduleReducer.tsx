import { Action, GET_SCHEDULE } from "../actions/types";

const initialState = {
  schedules: [],
  loading: false,
};

export default function (state: any = initialState, action: Action) {
  switch (action.type) {
    case GET_SCHEDULE:
      return {
        ...state,
        schedules: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
