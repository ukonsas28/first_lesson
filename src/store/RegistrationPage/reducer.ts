import { IRegistrationState } from "./types";
import { ActionType } from "./actions";

const initialState: IRegistrationState = {
  login: "",
};

const registrationReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case ActionType.userRegistration:
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};

export default registrationReducer;
