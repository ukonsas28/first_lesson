import { IMainPage } from "./types";
import { MainPageActionType } from "./actions";

const initialState: IMainPage = {
  data: [],
};

const mainPageReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case MainPageActionType.getPostData:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default mainPageReducer;
