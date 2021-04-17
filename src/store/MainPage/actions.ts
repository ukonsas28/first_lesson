import network from "../../network";
import { IPost } from "./types";

export enum MainPageActionType {
  getSliderData = "GET_SLIDER_DATA",
  fetchPosts = "FETCH_POSTS",
}

export const getSliderDataAction = (data: any) => {
  return {
    type: MainPageActionType.getSliderData,
    payload: data,
  };
};

// export const fetchPostDataAction = (posts: IPost[]) => {
//   return {
//     type: MainPageActionType.fetchPosts,
//     payload: posts,
//   };
// };

export const fetchPostDataAction = async () => {
  const data: any = await network.getRequest("/posts");
  return {
    type: MainPageActionType.fetchPosts,
    payload: data,
  };
};
