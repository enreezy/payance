import {
  Action,
  ADD_MEMBERS,
  FIND_MEMBER,
  GET_MEMBERS,
} from "../actions/types";

const initialState = {
  members: [],
  loading: false,
};

export default function (state: any = initialState, action: Action) {
  switch (action.type) {
    case GET_MEMBERS:
      return {
        ...state,
        members: action.payload,
        loading: false,
      };
    case ADD_MEMBERS:
      return {
        ...state,
        members: action.payload,
        loading: false,
      };
    case FIND_MEMBER:
      return {
        ...state,
        members: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
