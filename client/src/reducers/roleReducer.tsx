import { Action, GET_ROLE } from "../actions/types";

const initialState = {
  roles: [],
  loading: false,
};

export default function (state: any = initialState, action: Action) {
  switch (action.type) {
    case GET_ROLE:
      return {
        ...state,
        roles: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
