import { Dispatch } from "react";
import network from "../../network";

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

export const fetchPostDataAction = () => {
  return async (dispatch: Dispatch<{ type: string; payload: [] }>) => {
    const data: any = await network.getRequest("/character");
    console.log(data);
    dispatch({
      type: MainPageActionType.getSliderData,
      payload: data.results,
    });
  };
};
