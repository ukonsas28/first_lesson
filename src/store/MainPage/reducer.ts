import { IMainPage, IPost } from "./types";
import { MainPageActionType } from "./actions";

const initialState: IMainPage = {
  data: [],
  posts: [] as IPost[],
  characters: [],
};

const mainPageReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case MainPageActionType.getSliderData:
      return {
        ...state,
        data: action.payload,
      };
    case MainPageActionType.fetchPosts:
      return {
        ...state,
        posts: [...action.payload],
      };
    case MainPageActionType.fetchCharacters:
      return {
        ...state,
        characters: [...action.payload],
      };
    default:
      return state;
  }
};

export default mainPageReducer;
