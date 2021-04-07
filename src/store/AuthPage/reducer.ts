import { IAuthState } from "./types";
import { ActionType } from "./actions";

const initialState: IAuthState = {
  login: "",
};

const authReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case ActionType.userLogin:
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
