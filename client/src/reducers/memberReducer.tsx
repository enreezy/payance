import { Action, GET_MEMBERS } from "../actions/types";

const initialState = {
  members: [],
  loading: false,
};

export default function (state: object = initialState, action: Action) {
  switch (action.type) {
    case GET_MEMBERS:
      return {
        ...state,
        members: action.payload,
        loading: false,
      };
      break;
    default:
      return state;
  }
}
